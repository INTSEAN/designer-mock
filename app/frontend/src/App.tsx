import { useEffect } from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import axios from "axios"
import astraLogo from "./assets/astra.png"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const API = BACKEND_URL ? `${BACKEND_URL}/api` : null

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`)
      console.log(response.data.message)
    } catch (e) {
      console.error(e, "errored out requesting / api")
    }
  }

  useEffect(() => {
    if (!API) {
      console.warn("Missing VITE_BACKEND_URL in frontend .env")
      return
    }
    helloWorldApi()
  }, [])

  return (
    <div>
      <header className="App-header">
        <a
          className="App-link"
          href="https://astra-web-builder.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={astraLogo} alt="Astra logo" />
        </a>
        <p className="mt-5">Imagine.</p>
      </header>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
