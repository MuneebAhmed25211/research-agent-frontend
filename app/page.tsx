"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [topic, setTopic] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!topic.trim()) return;
    router.push(`/results?topic=${encodeURIComponent(topic)}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-6">
      {/* Glow effect */}
      <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 pointer-events-none" />

      {/* Badge */}
      <div className="mb-6 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
        Powered by AI Agents
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-white text-center mb-4 tracking-tight">
        AI Research Agent
      </h1>
      <p className="text-slate-400 text-center mb-10 text-lg max-w-md">
        Enter any topic and get a fully researched, cited report in minutes.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        <div className="flex gap-3 bg-white/5 border border-white/10 rounded-2xl p-2 backdrop-blur-sm">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. Impact of AI on software jobs in 2025"
            className="flex-1 bg-transparent text-white placeholder-slate-500 px-4 py-3 text-base outline-none"
          />
          <button
            type="submit"
            disabled={!topic.trim()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200"
          >
            Research →
          </button>
        </div>
      </form>

      {/* Example topics */}
      <div className="mt-8 flex flex-wrap gap-2 justify-center">
        {[
          "Future of remote work",
          "Quantum computing in 2025",
          "Electric vehicle adoption",
        ].map((example) => (
          <button
            key={example}
            onClick={() => setTopic(example)}
            className="px-3 py-1.5 text-sm text-slate-400 border border-slate-700 rounded-full hover:border-blue-500 hover:text-blue-400 transition-colors"
          >
            {example}
          </button>
        ))}
      </div>
    </main>
  );
}