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
          ? "bg-white/92 dark:bg-[#08070e]/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800/90 shadow-sm py-2.5 sm:py-3"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with 3D Image Avatar */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group">
          <Logo3D size="sm" />
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 dark:text-white tracking-tight text-sm sm:text-base group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              {PORTFOLIO_DATA.personal.shortName}
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
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

        {/* Desktop Right Action Icons & CTA */}
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
            href="/AkshayFullStackResume.pdf"
            download="AkshayFullStackResume.pdf"
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

        {/* Mobile Header Action Cluster */}
        <div className="flex md:hidden items-center gap-1.5">
          <ThemeToggle variant="icon" />
          <a
            href="/AkshayFullStackResume.pdf"
            download="AkshayFullStackResume.pdf"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-2.5 py-1.5 rounded-lg shadow-sm"
            title="Download PDF Resume"
          >
            <Download className="w-3 h-3 text-red-600" />
            <span>PDF</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors touch-manipulation"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Sidebar) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-[#08070e]/98 border-b border-slate-200 dark:border-slate-800 px-5 py-5 backdrop-blur-xl animate-in slide-in-from-top duration-200 shadow-2xl max-h-[85vh] overflow-y-auto">
          {/* Profile Row */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <Logo3D size="sm" />
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-sm">
                  {PORTFOLIO_DATA.personal.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  MCA • Garware College (9.18 CGPA)
                </div>
              </div>
            </div>
            <ThemeToggle variant="pill" />
          </div>

          {/* Quick CTA Actions Row on Mobile */}
          <div className="grid grid-cols-2 gap-2.5 mb-4">
            <a
              href="/AkshayFullStackResume.pdf"
              download="AkshayFullStackResume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-semibold shadow-sm text-center"
            >
              <Download className="w-3.5 h-3.5 text-red-600" />
              <span>Resume PDF</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-md shadow-red-600/30 text-center"
            >
              <Sparkles className="w-3.5 h-3.5 text-red-100" />
              <span>Connect Now</span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1">
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
