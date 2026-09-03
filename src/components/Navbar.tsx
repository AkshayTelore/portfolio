"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Github, Linkedin, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import Logo3D from "./Logo3D";

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
          ? "bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/90 shadow-xl shadow-black/40 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with 3D Image Avatar */}
        <a href="#" className="flex items-center gap-3.5 group">
          <Logo3D size="md" />
          <div className="flex flex-col">
            <span className="font-semibold text-slate-100 tracking-tight text-base group-hover:text-blue-400 transition-colors">
              {PORTFOLIO_DATA.personal.shortName}
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 -ml-3"></span>
              Full Stack Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 bg-slate-900/80 border border-slate-800/90 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-slate-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Icons & CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-850 rounded-lg transition-colors border border-transparent hover:border-slate-800"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-850 rounded-lg transition-colors border border-transparent hover:border-slate-800"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl transition-all shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
            <span>Connect</span>
            <ArrowUpRight className="w-3 h-3 text-blue-200" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            className="text-xs font-semibold text-white bg-blue-600 px-3 py-1.5 rounded-lg"
          >
            Connect
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Sidebar) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080c14]/98 border-b border-slate-800 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          {/* Sidebar Top Profile Header */}
          <div className="flex items-center gap-3 pb-5 mb-3 border-b border-slate-900">
            <Logo3D size="md" />
            <div>
              <div className="font-semibold text-white text-sm">
                {PORTFOLIO_DATA.personal.name}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Full Stack Engineer
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-blue-400 py-2 border-b border-slate-900 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-white"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-blue-400"
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
