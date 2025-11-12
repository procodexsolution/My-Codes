"use client";

import { useState } from "react";
import Link from "next/link";

export default function AIChatPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  // Predefined simulated AI responses
  const simulatedResponses = [
    "Hello! How can I help you today?",
    "I'm an AI assistant. Tell me more!",
    "Interesting question! Let me think...",
    "Sorry, I don't have that info yet.",
    "Sure! I can guide you through that.",
    "That sounds exciting! Let's discuss.",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    // Show user message
    setMessages((prev) => [...prev, { role: "user", content: input }]);

    const userMessage = input;
    setInput("");

    // Simulate AI reply after 0.6s
    setTimeout(() => {
      const randomReply =
        simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)];
      setMessages((prev) => [...prev, { role: "assistant", content: randomReply }]);
    }, 600);
  };

  return (
    <section className="bg-[#0b0b0b] text-white min-h-screen py-30 px-6 flex flex-col">
      {/* Back to Home */}
      <div className="w-full max-w-[1100px] mx-auto mb-6 text-left">
        <Link
          href="/"
          className="inline-flex items-center text-yellow-400 font-medium hover:text-yellow-300 transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Chat Container */}
      <div className="max-w-[1366px] mx-auto flex-2 flex flex-col border border-[#2a2a2a] rounded-2xl overflow-hidden">
        {/* Messages */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
          {messages.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              Start chatting with the AI ✨
            </p>
          ) : (
            messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg max-w-[75%] ${
                  msg.role === "user"
                    ? "ml-auto bg-yellow-400 text-black"
                    : "bg-[#1a1a1a] text-white"
                }`}
              >
                {msg.content}
              </div>
            ))
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-[#2a2a2a] bg-[#141414] flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 bg-[#0b0b0b] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400"
          />
          <button
            onClick={handleSend}
            className="bg-yellow-400 text-black font-semibold px-6 rounded-lg hover:bg-yellow-300 transition"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
