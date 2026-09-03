"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Languages,
  Award,
  Check,
  Copy,
  Heart,
  Download,
  FileText,
  ExternalLink,
} from "lucide-react";
import ClassyCard from "./ClassyCard";

export default function About() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono text-red-700 uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 border border-red-200">
          Executive Profile
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-4">
          Architecting Resilient & Scalable Systems
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Bridging high-performance frontend engineering with robust distributed backends, payments, and automated cloud workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative Bio & Highlights */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Engineering Background Card */}
          <ClassyCard
            delay={100}
            className="glass-panel p-6 sm:p-8 space-y-4 border border-slate-200 hover:border-red-500/40"
          >
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 shadow-sm shadow-red-400" />
              Engineering Background
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              I am a <strong className="text-slate-900">Full Stack Developer</strong> based in Pune, India, with hands-on experience building scalable web and mobile applications using{" "}
              <span className="text-red-600 font-semibold">Next.js, React.js, TypeScript, Node.js, Supabase, Flutter, and Dart</span>.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Dextop, I built the entire <strong className="text-slate-900">www.chotubot.com</strong> platform from scratch, transforming Figma UI/UX designs into production code. I architected dashboard systems for <span className="text-slate-800 font-medium">Inventory Management</span>, an <span className="text-slate-800 font-medium">Affiliate Marketing referral engine</span>, and <span className="text-slate-800 font-medium">International Delivery</span> with dynamic currency conversion and Razorpay payment webhooks.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Additionally, I developed the <strong className="text-slate-900">Chotu ESP mobile app in Flutter & Dart</strong> for IoT hardware management, engineered <strong className="text-slate-900">DocuEsign</strong> (digital document signing with OTP 2FA), and built the <strong className="text-slate-900">AppyMinds Blog CMS</strong>. I actively manage agile sprints and task backlogs using <strong className="text-red-600">Jira Kanban boards</strong>.
            </p>

            {/* Key principles pills */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2">
              {[
                "Built from Scratch",
                "Figma to Code",
                "Inventory Management",
                "Affiliate Marketing",
                "Flutter & Dart",
                "Jira Kanban Boards",
                "Razorpay & Webhooks",
                "Render Deployments",
              ].map((pill) => (
                <span
                  key={pill}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 font-medium"
                >
                  {pill}
                </span>
              ))}
            </div>
          </ClassyCard>

          {/* Education Card */}
          <ClassyCard
            delay={180}
            className="glass-panel p-6 sm:p-8 border border-slate-200 hover:border-red-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-red-600 uppercase tracking-wider font-semibold">
                    Education
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">
                    {PORTFOLIO_DATA.education.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {PORTFOLIO_DATA.education.institution}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="inline-block px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 font-mono font-bold text-sm">
                  {PORTFOLIO_DATA.education.cgpa} CGPA
                </div>
                <div className="text-xs text-slate-500 mt-1 font-mono">
                  {PORTFOLIO_DATA.education.period}
                </div>
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-xs sm:text-sm text-slate-600">
              {PORTFOLIO_DATA.education.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </ClassyCard>
        </div>

        {/* Right Column: Personal Details & Direct Connect */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <ClassyCard
            delay={140}
            className="glass-panel p-6 sm:p-8 border border-slate-200 space-y-5"
          >
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-red-600" />
              Direct Information
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              {/* Email with copy */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span className="text-slate-700 truncate font-mono">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, "email")}
                  className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors flex-shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone with copy */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span className="text-slate-700 font-mono">
                    {PORTFOLIO_DATA.personal.phone}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.phone, "phone")}
                  className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors flex-shrink-0"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 leading-relaxed">
                  {PORTFOLIO_DATA.personal.location}
                </span>
              </div>

              {/* Languages */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-slate-500" /> Languages
                </span>
                <span className="text-slate-800 font-medium">
                  {PORTFOLIO_DATA.personal.languages.join(", ")}
                </span>
              </div>

              {/* Date of Birth & Nationality */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-500" /> Born / Nationality
                </span>
                <span className="text-slate-800 font-medium">
                  {PORTFOLIO_DATA.personal.dateOfBirth} ({PORTFOLIO_DATA.personal.nationality})
                </span>
              </div>
            </div>

            {/* Hobbies & Personal Interests */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 mb-2.5">
                <Heart className="w-3.5 h-3.5 text-slate-500" /> Interests & Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.personal.hobbies.map((hobby, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </ClassyCard>

          {/* Resume Download Action Card */}
          <ClassyCard
            delay={220}
            className="glass-panel p-6 border border-red-200 bg-gradient-to-br from-red-50/50 via-white to-slate-50 shadow-md space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-red-100 text-red-600 border border-red-200">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Official Curriculum Vitae</h4>
                <p className="text-xs text-slate-500">PDF Document • 2 Pages • Updated 2026</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Comprehensive resume including work at Dextop, SASH Info, Chotu ESP Flutter app, tech stack, and academic background.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="/Akshay_Telore_Resume.pdf"
                download="Akshay_Telore_Resume.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs transition-all shadow-md shadow-red-600/30 hover:scale-[1.01]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
              <a
                href="/Akshay_Telore_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-300 transition-colors shadow-sm"
                title="View Resume in Browser"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </ClassyCard>
        </div>
      </div>
    </section>
  );
}
