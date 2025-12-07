"use client";
import React, { useState, useEffect } from "react";

// 100 sample Q&A pairs — edit these to match RGG’s offerings
const QA_DATA: { q: string; a: string }[] = [
  { q: "What services does RGG provide?", a: "RGG offers AI, Web & Mobile App development services tailored to your needs." },
  { q: "How can I contact RGG?", a: "You can reach us via email or our contact form — we’ll reply ASAP." },
  { q: "Does RGG build mobile apps?", a: "Yes — Android, iOS, and cross-platform apps are in our expertise." },
  { q: "Do you handle website design?", a: "Absolutely, we create responsive and modern websites." },
  { q: "What’s the cost of a website?", a: "Cost depends on requirements — drop us a message to get a quote." },
  { q: "Can I see previous projects?", a: "Yes — check out our portfolio or request project samples." },
  { q: "Does RGG do SEO?", a: "Yes, we provide SEO and performance optimization services." },
  { q: "What’s the turnaround time?", a: "Typically 1–2 weeks for small tasks; for larger projects it depends." },
  { q: "Do you offer revisions?", a: "Yes — we allow revisions based on your chosen package." },
  { q: "Where are you based?", a: "We operate globally and work remotely with clients worldwide." },
  // Add more questions up to 100
  ...Array.from({ length: 90 }).map((_, i) => ({
    q: `Question ${i + 11}?`,
    a: `This is a generic answer for question ${i + 11}.`
  }))
];

interface Message {
  text: string;
  isUser: boolean;
}

const RGGChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingText, setTypingText] = useState("");

  const findBestAnswer = (input: string): string => {
    let bestMatch = "";
    let highestScore = 0;

    for (const item of QA_DATA) {
      let score = 0;
      const words = item.q.toLowerCase().split(" ");
      const inputWords = input.toLowerCase().split(" ");

      inputWords.forEach((word) => {
        if (words.includes(word)) score++;
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = item.a;
      }
    }

    return bestMatch || "Sorry, I don’t understand that — please rephrase or ask about our services.";
  };

  const typeReply = (text: string) => {
    setTypingText("");
    let idx = 0;
    const timer = setInterval(() => {
      setTypingText((prev) => prev + text[idx]);
      idx++;
      if (idx === text.length) {
        clearInterval(timer);
        setMessages((prev) => [...prev, { text, isUser: false }]);
        setTypingText("");
      }
    }, 30);
  };

  const handleSendMessage = (message: string) => {
    const trimmed = message.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { text: trimmed, isUser: true }]);

    const reply = findBestAnswer(trimmed);
    typeReply(reply);
  };

  return (
    <div className="p-4 border rounded-lg w-full max-w-md bg-white shadow-lg">
      <h2 className="font-bold text-xl mb-3">Chat with RGG</h2>
      <ul className="h-80 overflow-y-auto border p-3 rounded bg-gray-50 mb-3">
        {messages.map((msg, i) => (
          <li key={i} className={`mb-2 ${msg.isUser ? "text-blue-600" : "text-green-700"}`}>
            <strong>{msg.isUser ? "You: " : "RGG: "}</strong> {msg.text}
          </li>
        ))}
        {typingText && (
          <li className="text-green-700">
            <strong>RGG: </strong>{typingText}
            <span className="animate-pulse">|</span>
          </li>
        )}
      </ul>
      <input
        type="text"
        placeholder="Ask us anything..."
        className="w-full border p-2 rounded shadow-sm"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage((e.target as HTMLInputElement).value);
            (e.target as HTMLInputElement).value = "";
          }
        }}
      />
    </div>
  );
};

export default RGGChat;