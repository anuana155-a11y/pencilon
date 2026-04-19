import React from "react";

export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center rounded-full bg-black ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-1/2 h-1/2"
      >
        {/* Top block */}
        <rect x="41" y="29" width="19" height="13" fill="white" />
        {/* Left vertical block */}
        <rect x="29" y="42" width="12" height="29" fill="white" />
        {/* Right top block */}
        <rect x="60" y="42" width="11" height="15" fill="white" />
        {/* Right bottom horizontal block */}
        <rect x="51" y="57" width="20" height="14" fill="white" />
      </svg>
    </div>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo className="h-10 w-10" />
      <span className="font-display text-xl font-black tracking-tighter uppercase">Pencilon.</span>
    </div>
  );
}
