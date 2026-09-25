"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Copy,
  Check,
  Download,
  Code2,
  Sparkles,
  Trophy,
} from "lucide-react";
import ClassyCard from "./ClassyCard";

export default function About() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono text-red-600 dark:text-red-400 uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40">
          About Me
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-4 mb-3">
          Passionate about building practical products.
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400">
          A full-stack developer who enjoys turning design ideas into fast, accessible, and dependable applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Personal Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <ClassyCard
            delay={100}
            className="glass-panel p-6 sm:p-8 space-y-5 border border-slate-200 dark:border-slate-800 dark:bg-slate-900/80"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span>What I Do & How I Work</span>
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              I am a <strong className="text-slate-900 dark:text-white">Full Stack Developer</strong> based in Pune, India. I enjoy building things end-to-end—taking mockups from Figma and turning them into fast, responsive web applications with clean component architecture, reliable backend APIs, and solid payment integrations.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              At Dextop, I worked on <strong className="text-slate-900 dark:text-white">Chotubot.com</strong> from forntend in react to backend development and production deployment. I built responsive storefront sections (Hero, Buy Now, Chotu Special, Modes, Creativity, Instagram, and checkout) from Figma designs, engineered the multi-tier coupon system, implemented affiliate marketing referral tracking, integrated Razorpay (Magic Checkout) and PayU payments with server-side webhook verification, and contributed to the internal inventory and order management dashboard using Supabase and PostgreSQL.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Previously at SASH Info, I worked on <strong className="text-slate-900 dark:text-white">DocuEsign</strong>, building interactive PDF drag-and-drop signing, two-factor OTP verification, and tamper-evident audit trails. I take pride in clear communication, writing maintainable code, and collaborating via GitLab CI/CD and Jira Kanban boards.
            </p>

            {/* Core Tech Pills */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
              {[
                "Next.js & React",
                "TypeScript",
                "Node.js",
                "Supabase & PostgreSQL",
                "Razorpay & PayU",
                "Shiprocket",
                "GitLab CI/CD",
                "Figma to Code",
              ].map((pill) => (
                <span
                  key={pill}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium"
                >
                  {pill}
                </span>
              ))}
            </div>
          </ClassyCard>
        </div>

        {/* Right Column: Education & Quick Snapshot */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Education Card: Full Academic Background */}
          <ClassyCard
            delay={150}
            className="glass-panel p-6 sm:p-7 border border-slate-200 dark:border-slate-800 dark:bg-slate-900/80 space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                    Academic Qualifications
                  </h4>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Pune & Shevgaon, Maharashtra
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-300 font-bold">
                9.18 CGPA
              </span>
            </div>

            {/* List of 4 Qualifications */}
            <div className="space-y-3.5">
              {PORTFOLIO_DATA.education.qualifications.map((edu) => (
                <div
                  key={edu.id}
                  className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {edu.degree}
                    </h5>
                    <span className="text-[11px] font-mono font-bold text-red-600 dark:text-red-400 whitespace-nowrap bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                      {edu.score}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {edu.institution}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-mono">
                    <span>{edu.badge}</span>
                    {edu.period && <span>{edu.period}</span>}
                  </div>
                </div>
              ))}
            </div>
          </ClassyCard>

          {/* Quick Contact & Action Box */}
          <ClassyCard
            delay={200}
            className="glass-panel p-6 sm:p-7 border border-slate-200 dark:border-slate-800 dark:bg-slate-900/80 space-y-4"
          >
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
              Quick Details
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                <span className="text-slate-500 dark:text-slate-400">Email:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="font-mono text-slate-800 dark:text-slate-200 hover:text-red-600 transition-colors"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
                    title="Copy email"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                <span className="text-slate-500 dark:text-slate-400">Location:</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {PORTFOLIO_DATA.personal.city}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                <span className="text-slate-500 dark:text-slate-400">Languages:</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {PORTFOLIO_DATA.personal.languages.join(", ")}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/Akshay_Telore_Resume.pdf"
                download="Akshay_Telore_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-medium text-xs transition-colors shadow-sm"
              >
                <Download className="w-4 h-4 text-red-400" />
                <span>Download Official Resume (PDF)</span>
              </a>
            </div>
          </ClassyCard>
        </div>
      </div>
    </section>
  );
}
