"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  ExternalLink,
  RotateCcw,
} from "lucide-react";
import {
  INITIAL_BOT_MESSAGE,
  answerAkshayQuestion,
  BotMessage,
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
                    <strong key={pIdx} className="text-slate-900 font-bold">
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
    <div className="fixed bottom-4 sm:bottom-5 right-3.5 sm:right-5 z-50 flex flex-col items-end">
      {/* Floating Chat Launcher Button (Red Accent) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold shadow-xl shadow-red-600/35 hover:scale-105 active:scale-95 transition-all duration-200 touch-manipulation"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="absolute -top-1 -right-1 flex h-2 sm:h-2.5 w-2 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-emerald-400"></span>
            </span>
          </div>
          <span className="text-xs sm:text-sm tracking-tight font-medium">
            Ask Akshay AI
          </span>
          {unreadCount > 0 && (
            <span className="ml-0.5 px-1.5 py-0.5 rounded-full bg-white text-red-700 text-[10px] font-mono font-bold shadow-sm">
              1
            </span>
          )}
        </button>
      )}

      {/* Expandable Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[410px] h-[540px] max-h-[82vh] rounded-2xl sm:rounded-3xl bg-white/98 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Window Header */}
          <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white shadow-md shadow-red-500/20">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  Akshay&apos;s Assistant
                  <Sparkles className="w-3 h-3 text-red-600" />
                </h4>
                <p className="text-[10px] text-slate-500 font-mono">
                  Online • Answers 24/7
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors"
                title="Reset conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors"
                title="Minimize chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 shadow-sm ${
                    msg.sender === "user"
                      ? "bg-red-600 text-white font-medium rounded-br-sm"
                      : "bg-white border border-slate-200 text-slate-800 rounded-bl-sm"
                  }`}
                >
                  {renderFormattedMessage(msg.text)}

                  {/* Action Link if provided */}
                  {msg.actionLink && (
                    <div className="mt-3 pt-2.5 border-t border-slate-200">
                      <a
                        href={msg.actionLink.url}
                        target={msg.actionLink.isExternal ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700 underline"
                      >
                        <span>{msg.actionLink.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-slate-400 mt-1 px-1 font-mono">
                  {msg.timestamp}
                </span>

                {/* Quick Prompts below bot message */}
                {msg.quickPrompts && msg.quickPrompts.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                    {msg.quickPrompts.map((prompt, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => handleSendMessage(prompt)}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white hover:bg-slate-100 border border-slate-200 hover:border-red-400 text-slate-700 hover:text-red-600 transition-all text-left shadow-sm"
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
              <div className="flex items-center gap-2 p-3 max-w-[120px] rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-xs text-slate-500 font-mono">Thinking</span>
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-2.5 sm:p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
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
                placeholder="Ask about Chotubot, DocuEsign..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-base sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white dark:focus:bg-slate-800 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2.5 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-40 text-white transition-colors shadow-sm touch-manipulation flex-shrink-0"
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
