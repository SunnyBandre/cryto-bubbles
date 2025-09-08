import React from "react";

export default function BubbleLoader() {
  return (
    <div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#030B20] z-50">
        {/* Animated bars */}
        <div className="flex items-end gap-1 h-20">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-1 rounded bg-gradient-to-t from-green-400 via-blue-500 to-purple-500 animate-bar"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: `${1 + (i % 4) * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <div className="mt-6 text-white text-lg font-medium tracking-wide animate-pulse">
          Fetching market data…
        </div>
      </div>
    </div>
  );
}
