"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function AstraBadge() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="flex cursor-default items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-md ring-1 ring-border"
            aria-label="Built by Astra AI"
          >
            <Image
              src="/astra.png"
              alt="Astra AI"
              width={36}
              height={36}
              className="shrink-0"
            />
            <span className="font-mono text-lg font-semibold tracking-wide text-black">
              Built By Astra
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" align="end">
          To remove this deploy in Astra
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
