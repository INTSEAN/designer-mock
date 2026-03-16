
from fastapi import FastAPI, APIRouter, HTTPException
from contextlib import asynccontextmanager
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from supabase import create_client, Client
import uvicorn
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Supabase connection - Optional
supabase: Client | None = None
try:
    supabase_url = os.environ.get('SUPABASE_URL')
    supabase_key = os.environ.get('SUPABASE_ANON_KEY')
    if supabase_url and supabase_key:
        supabase = create_client(supabase_url, supabase_key)
        logger_temp = logging.getLogger(__name__)
        logger_temp.info("Supabase connected successfully")
    else:
        logger_temp = logging.getLogger(__name__)
        logger_temp.warning("Supabase not configured - set SUPABASE_URL and SUPABASE_ANON_KEY in .env")
except Exception as e:
    logger_temp = logging.getLogger(__name__)
    logger_temp.error(f"Failed to connect to Supabase: {e}")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    if not supabase:
        raise HTTPException(
            status_code=503,
            detail="Database not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY in .env"
        )
    status_obj = StatusCheck(client_name=input.client_name)
    try:
        response = supabase.table("status_checks").insert(status_obj.dict()).execute()
        return status_obj
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create status check: {str(e)}")

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    if not supabase:
        raise HTTPException(
            status_code=503,
            detail="Database not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY in .env"
        )
    try:
        response = supabase.table("status_checks").select("*").execute()
        return [StatusCheck(**item) for item in response.data]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch status checks: {str(e)}")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Lifespan context manager for startup/shutdown events
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("Starting up...")
    yield
    # Shutdown
    logger.info("Shutting down...")

# Create the main app with lifespan
app = FastAPI(lifespan=lifespan)

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Server configuration
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    logger.info(f"Starting server on port {port}")
    uvicorn.run(app, host="0.0.0.0", port=port)
