"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  variant?: "pill" | "icon" | "floating";
}

export default function ThemeToggle({ className = "", variant = "pill" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "dark") {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {
      // LocalStorage access fallback
    }
  }, []);

  const toggleTheme = () => {
    try {
      if (theme === "light") {
        setTheme("dark");
        document.documentElement.classList.add("dark");
        localStorage.setItem("portfolio-theme", "dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
        localStorage.setItem("portfolio-theme", "light");
      }
    } catch (e) {
      // fallback
    }
  };

  if (!mounted) {
    return null;
  }

  if (variant === "floating") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`fixed bottom-5 left-5 z-40 p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 group flex items-center gap-2 ${className}`}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-slate-700 group-hover:text-red-600 transition-colors" />
          ) : (
            <Sun className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
          )}
        </div>
        <span className="hidden sm:inline-block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 pr-1">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      </button>
    );
  }

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-red-600 transition-all hover:scale-105 active:scale-95 shadow-sm ${className}`}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
      >
        {theme === "light" ? (
          <Moon className="w-4 h-4 text-slate-700 hover:text-red-600" />
        ) : (
          <Sun className="w-4 h-4 text-amber-400 hover:text-amber-300" />
        )}
      </button>
    );
  }

  // Pill variant
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-red-400 text-xs font-mono font-medium transition-all shadow-sm ${className}`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
    >
      {theme === "light" ? (
        <>
          <Moon className="w-3.5 h-3.5 text-slate-700" />
          <span className="text-slate-700">Dark</span>
        </>
      ) : (
        <>
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-slate-200">Light</span>
        </>
      )}
    </button>
  );
}
