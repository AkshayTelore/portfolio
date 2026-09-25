"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import ClassyCard from "./ClassyCard";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-mono text-red-600 dark:text-red-400 uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40">
          Get in Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-4 mb-3">
          Let&apos;s Connect &amp; Build Together
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Looking for a full-stack developer who builds reliable e-commerce platforms, payment integrations, and clean web applications? Reach out directly via email, phone, or LinkedIn.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Featured Primary Card: Direct Email */}
        <ClassyCard
          delay={100}
          className="glass-panel p-6 sm:p-8 border border-red-200/80 dark:border-red-900/40 dark:bg-slate-900/90 shadow-lg relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-mono font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                <span>Direct Email Contact</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Drop an Email Directly
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg">
                The fastest way to reach me for job offers, engineering discussions, interview invitations, or project consultations.
              </p>
              <div className="pt-1">
                <span className="text-base sm:text-lg font-mono font-bold text-red-600 dark:text-red-400 select-all">
                  {PORTFOLIO_DATA.personal.email}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Job%20Opportunity%20/%20Inquiry%20for%20Akshay%20Telore`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-all shadow-md shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, "email")}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold text-sm transition-all"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </ClassyCard>

        {/* 2x2 Grid of Direct Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Phone & WhatsApp Card */}
          <ClassyCard
            delay={140}
            className="glass-panel p-5 sm:p-6 border border-slate-200 dark:border-slate-800 dark:bg-slate-900/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/50">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Phone &amp; WhatsApp
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Direct Call / Message
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                Available during standard IST business hours for calls, WhatsApp, and quick discussions.
              </p>
              <div className="text-sm font-mono font-semibold text-slate-900 dark:text-white mb-4">
                {PORTFOLIO_DATA.personal.phone}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <a
                href={`tel:${PORTFOLIO_DATA.personal.rawPhone}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-950/40 text-slate-800 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, "phone")}
                className="py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1.5"
                title="Copy Phone Number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 text-xs">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </ClassyCard>

          {/* LinkedIn Card */}
          <ClassyCard
            delay={180}
            className="glass-panel p-5 sm:p-6 border border-slate-200 dark:border-slate-800 dark:bg-slate-900/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/50">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  LinkedIn
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Professional Network
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                Connect on LinkedIn, view career milestones, and send direct InMail messages.
              </p>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                Akshay Telore
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-950/40 text-slate-800 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <span>Visit LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ClassyCard>

          {/* GitHub Card */}
          <ClassyCard
            delay={220}
            className="glass-panel p-5 sm:p-6 border border-slate-200 dark:border-slate-800 dark:bg-slate-900/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  GitHub
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Code &amp; Repositories
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                Explore full-stack source code, Next.js architecture patterns, and open-source contributions.
              </p>
              <div className="text-sm font-mono font-semibold text-slate-900 dark:text-white mb-4">
                @AkshayTelore
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <span>Explore GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ClassyCard>

          {/* Location & Availability Card */}
          <ClassyCard
            delay={260}
            className="glass-panel p-5 sm:p-6 border border-slate-200 dark:border-slate-800 dark:bg-slate-900/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available Now
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Location &amp; Work Status
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                Karve Nagar, Pune, Maharashtra 411052. Open for on-site, hybrid, and remote roles.
              </p>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                Pune, India • Immediate Joining
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <span>Relocation:</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Open across India</span>
              </div>
            </div>
          </ClassyCard>
        </div>
      </div>
    </section>
  );
}
