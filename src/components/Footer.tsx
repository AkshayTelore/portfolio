"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUp,
  Server,
} from "lucide-react";
import Logo3D from "./Logo3D";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#06090f] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Logo3D size="sm" showStatus={false} />
              <span className="font-bold text-lg text-white">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Full Stack Developer specializing in Next.js, React, TypeScript, Supabase, and Razorpay. Proven experience building production-scale digital signature platforms, CMS engines, and commerce logistics.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
              <Server className="w-3.5 h-3.5 text-blue-400" />
              <span>Optimized for Render Web Service Deployment</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills & Tools
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-white transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Socials & Connect */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
              Direct Channels
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-blue-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="truncate">{PORTFOLIO_DATA.personal.email}</span>
              </a>
              <a
                href={`tel:${PORTFOLIO_DATA.personal.rawPhone}`}
                className="flex items-center gap-2 text-slate-400 hover:text-blue-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. Built with Next.js & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors font-mono"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
