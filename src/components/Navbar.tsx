"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Github, Linkedin, Menu, X, ArrowUpRight, Sparkles, Download } from "lucide-react";
import Logo3D from "./Logo3D";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/92 dark:bg-[#08070e]/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800/90 shadow-sm py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with 3D Image Avatar */}
        <a href="#" className="flex items-center gap-3.5 group">
          <Logo3D size="md" />
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 dark:text-white tracking-tight text-base group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              {PORTFOLIO_DATA.personal.shortName}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 -ml-3"></span>
              Full Stack Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 px-3.5 py-1.5 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Icons & CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="/Akshay_Telore_Resume.pdf"
            download="Akshay_Telore_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-red-400 dark:hover:border-red-500 px-3.5 py-2 rounded-xl transition-all shadow-sm"
            title="Download PDF Resume"
          >
            <Download className="w-3.5 h-3.5 text-red-600" />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded-xl transition-all shadow-md shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-red-100" />
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-red-100" />
          </a>
          <div className="pl-1 border-l border-slate-200 dark:border-slate-800">
            <ThemeToggle variant="pill" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle variant="icon" />
          <a
            href="/Akshay_Telore_Resume.pdf"
            download="Akshay_Telore_Resume.pdf"
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-2.5 py-1.5 rounded-lg shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-red-600" />
            <span>PDF</span>
          </a>
          <a
            href="#contact"
            className="text-xs font-semibold text-white bg-red-600 px-3 py-1.5 rounded-lg shadow-sm"
          >
            Connect
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Sidebar) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-[#08070e]/98 border-b border-slate-200 dark:border-slate-800 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top duration-200 shadow-xl">
          {/* Sidebar Top Profile Header */}
          <div className="flex items-center justify-between pb-5 mb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <Logo3D size="md" />
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">
                  {PORTFOLIO_DATA.personal.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Full Stack Engineer
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle variant="pill" />
              <a
                href="/Akshay_Telore_Resume.pdf"
                download="Akshay_Telore_Resume.pdf"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 text-xs font-semibold shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 py-2.5 border-b border-slate-100 dark:border-slate-900 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
