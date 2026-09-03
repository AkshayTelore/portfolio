"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Bot,
  X,
  Send,
  Sparkles,
  ExternalLink,
  RotateCcw,
  MessageSquare,
} from "lucide-react";
import {
  BotMessage,
  INITIAL_BOT_MESSAGE,
  answerAkshayQuestion,
} from "@/lib/chatbotKnowledge";

interface ChatBotProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function ChatBot({ isOpen, setIsOpen }: ChatBotProps) {
  const [messages, setMessages] = useState<BotMessage[]>([INITIAL_BOT_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 100);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    const userMessage: BotMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    try {
      let botResponseData;
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: query }),
        });
        if (res.ok) {
          const json = await res.json();
          botResponseData = json.data;
        }
      } catch (err) {
        // Fallback to local answering engine
      }

      if (!botResponseData) {
        botResponseData = answerAkshayQuestion(query);
      }

      setTimeout(() => {
        const botReply: BotMessage = {
          id: "bot-" + Date.now(),
          sender: "bot",
          text: botResponseData.text,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          quickPrompts: botResponseData.quickPrompts,
          actionLink: botResponseData.actionLink,
        };

        setMessages((prev) => [...prev, botReply]);
        setIsTyping(false);
      }, 400);
    } catch (error) {
      setIsTyping(false);
      const fallbackReply: BotMessage = {
        id: "bot-err-" + Date.now(),
        sender: "bot",
        text: "I encountered a minor issue. You can reach Akshay directly at teloreakshay1000@gmail.com or ask another question!",
        timestamp: "Now",
      };
      setMessages((prev) => [...prev, fallbackReply]);
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_BOT_MESSAGE]);
  };

  const renderFormattedMessage = (content: string) => {
    const lines = content.split("\n");
    return (
      <div className="space-y-1.5 text-xs sm:text-sm">
        {lines.map((line, idx) => {
          if (!line.trim()) return <div key={idx} className="h-1.5" />;

          const parts = line.split(/(\*\*.*?\*\*)/g);

          return (
            <p key={idx} className="leading-relaxed">
              {parts.map((part, pIdx) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <strong key={pIdx} className="text-white font-semibold">
                      {part.slice(2, -2)}
                    </strong>
                  );
                }
                return <span key={pIdx}>{part}</span>;
              })}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Floating Chat Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-2xl shadow-blue-600/35 hover:scale-105 transition-all duration-200"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
          </div>
          <span className="text-xs sm:text-sm tracking-tight font-medium">
            Ask Akshay AI
          </span>
          {unreadCount > 0 && (
            <span className="ml-0.5 px-1.5 py-0.5 rounded-full bg-white text-blue-700 text-[10px] font-mono font-bold">
              1
            </span>
          )}
        </button>
      )}

      {/* Expandable Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[410px] h-[580px] max-h-[85vh] rounded-3xl bg-[#090d16]/98 border border-slate-800 shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Window Header */}
          <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                  Akshay&apos;s Assistant
                  <Sparkles className="w-3 h-3 text-blue-400" />
                </h4>
                <p className="text-[10px] text-slate-400 font-mono">
                  Online • Answers 24/7
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
                title="Reset conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
                title="Minimize chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 shadow-md ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white font-medium rounded-br-sm"
                      : "bg-slate-900/95 border border-slate-800 text-slate-200 rounded-bl-sm"
                  }`}
                >
                  {renderFormattedMessage(msg.text)}

                  {/* Action Link if provided */}
                  {msg.actionLink && (
                    <div className="mt-3 pt-2.5 border-t border-slate-800">
                      <a
                        href={msg.actionLink.url}
                        target={msg.actionLink.isExternal ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 hover:text-blue-200 underline"
                      >
                        <span>{msg.actionLink.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-slate-500 mt-1 px-1 font-mono">
                  {msg.timestamp}
                </span>

                {/* Quick Prompts below bot message */}
                {msg.quickPrompts && msg.quickPrompts.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                    {msg.quickPrompts.map((prompt, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => handleSendMessage(prompt)}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-blue-300 transition-all text-left"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 p-3 max-w-[120px] rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-xs text-slate-400 font-mono">Thinking</span>
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-slate-900/90 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about DocuEsign, AppyMinds, stack..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
