"use client";
import { useState } from "react";

export default function RegexPage() {
  const [prompt, setPrompt] = useState("");
  const [regex, setRegex] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateRegex() {
    setLoading(true);
    setRegex("");

    const res = await fetch("/api/regex", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setRegex(data.regex);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Cyberpunk background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.08),transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,136,0.05)_1px,transparent_1px),linear-gradient(rgba(0,255,136,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Cyberpunk Card */}
      <div className="relative z-10 w-full max-w-2xl p-10 bg-black/80 border border-green-500 rounded-2xl shadow-[0_0_25px_rgba(0,255,136,0.6)] backdrop-blur-md flex flex-col items-center">
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 animate-pulse drop-shadow-[0_0_12px_rgba(0,255,136,0.8)]">
          ⚡ Regex Generator ⚡
        </h1>

        {/* Input */}
        <input
          type="text"
          placeholder="> Describe your regex..."
          className="w-full p-4 rounded-lg bg-black/80 text-green-300 font-mono border border-green-500 focus:ring-2 focus:ring-pink-500 focus:outline-none shadow-[0_0_15px_rgba(0,255,136,0.6)] mb-6 placeholder-green-700"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        {/* Button */}
        <button
          className="w-full px-6 py-4 mb-6 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(0,255,136,0.9)] hover:shadow-[0_0_40px_rgba(255,0,255,0.9)]"
          onClick={generateRegex}
          disabled={loading}
        >
          {loading ? "⏳ Generating..." : "🚀 Generate Regex"}
        </button>

        {/* Regex Output */}
        {regex && (
          <div className="w-full bg-black/90 border border-green-500 p-5 rounded-lg text-green-400 font-mono shadow-[0_0_25px_rgba(0,255,136,0.8)] animate-pulse">
            {regex}
          </div>
        )}
      </div>
    </main>
  );
}
