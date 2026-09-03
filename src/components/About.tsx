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
} from "lucide-react";

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
        <span className="text-xs font-mono text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40">
          Executive Profile
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
          Architecting Resilient & Scalable Systems
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Bridging high-performance frontend engineering with robust distributed backends, payments, and automated cloud workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative Bio & Highlights */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-800/90">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Engineering Background
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I am a <strong className="text-white">Full Stack Developer</strong> based in Pune, India, with hands-on experience building scalable web and mobile applications using{" "}
              <span className="text-blue-400 font-semibold">Next.js, React.js, TypeScript, Node.js, Supabase, Flutter, and Dart</span>.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At Dextop, I built the entire <strong className="text-white">www.chotubot.com</strong> platform from scratch, transforming Figma UI/UX designs into production code. I architected dashboard systems for <span className="text-slate-200 font-medium">Inventory Management</span>, an <span className="text-slate-200 font-medium">Affiliate Marketing referral engine</span>, and <span className="text-slate-200 font-medium">International Delivery</span> with dynamic currency conversion and Razorpay payment webhooks.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Additionally, I developed the <strong className="text-white">Chotu ESP mobile app in Flutter & Dart</strong> for IoT hardware management, engineered <strong className="text-white">DocuEsign</strong> (digital document signing with OTP 2FA), and built the <strong className="text-white">AppyMinds Blog CMS</strong>. I actively manage agile sprints and task backlogs using <strong className="text-blue-400">Jira Kanban boards</strong>.
            </p>

            {/* Key principles pills */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
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
                  className="text-xs px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/60 text-slate-300 font-mono"
                >
                  #{pill}
                </span>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/90 hover:border-blue-500/40 transition-all">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                    Education
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    {PORTFOLIO_DATA.education.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {PORTFOLIO_DATA.education.institution}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 font-mono font-bold text-sm">
                  {PORTFOLIO_DATA.education.cgpa} CGPA
                </div>
                <div className="text-xs text-slate-500 mt-1 font-mono">
                  {PORTFOLIO_DATA.education.period}
                </div>
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-xs sm:text-sm text-slate-300">
              {PORTFOLIO_DATA.education.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Personal Details & Direct Connect */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/90 space-y-5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              Direct Information
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm">
              {/* Location */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" /> Location
                </span>
                <span className="text-slate-200 font-medium text-right">
                  Karve Nagar, Pune 411052
                </span>
              </div>

              {/* Email with copy */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" /> Email
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-slate-200 font-mono text-xs truncate max-w-[150px] sm:max-w-[180px]">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                  <button
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, "email")}
                    className="p-1 text-slate-400 hover:text-white rounded transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Phone with copy */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-indigo-400" /> Phone
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-slate-200 font-mono text-xs">
                    {PORTFOLIO_DATA.personal.phone}
                  </span>
                  <button
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.phone, "phone")}
                    className="p-1 text-slate-400 hover:text-white rounded transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Languages */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-blue-400" /> Languages
                </span>
                <span className="text-slate-200 font-medium">
                  {PORTFOLIO_DATA.personal.languages.join(", ")}
                </span>
              </div>

              {/* Date of Birth & Nationality */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400" /> Born / Nationality
                </span>
                <span className="text-slate-200 font-medium">
                  {PORTFOLIO_DATA.personal.dateOfBirth} ({PORTFOLIO_DATA.personal.nationality})
                </span>
              </div>
            </div>

            {/* Hobbies & Personal Interests */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-2.5">
                <Heart className="w-3.5 h-3.5 text-slate-400" /> Interests & Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.personal.hobbies.map((hobby, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-medium"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
