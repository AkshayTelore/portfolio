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
  Code2,
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
      {/* Section Header with Simple Words */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono text-red-700 dark:text-red-400 uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50">
          About Me
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-4 mb-4">
          Building Modern Web & Mobile Apps
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          I enjoy turning ideas and designs into real, fast, and easy-to-use websites and applications that help businesses grow.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Simple Story & Background */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Engineering Background Card */}
          <ClassyCard
            delay={100}
            className="glass-panel p-6 sm:p-8 space-y-4 border border-slate-200 dark:border-slate-800 hover:border-red-500/40"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-red-600 dark:text-red-400" />
              What I Do
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              I am a <strong className="text-slate-900 dark:text-white font-semibold">Full Stack Developer</strong> living in Pune, India. I love building practical web and mobile applications using{" "}
              <span className="text-red-600 dark:text-red-400 font-semibold">Next.js, React, TypeScript, Node.js, Supabase, Flutter, and Dart</span>.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              At Dextop, I worked on the <strong className="text-slate-900 dark:text-white">www.chotubot.com</strong> website, turning Figma designs into clean and responsive web pages. I built dashboard tools for <span className="text-slate-800 dark:text-slate-200 font-medium">inventory management</span>, created an <span className="text-slate-800 dark:text-slate-200 font-medium">affiliate referral program</span>, and added <span className="text-slate-800 dark:text-slate-200 font-medium">international delivery</span> with Razorpay online payments.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              I also built the <strong className="text-slate-900 dark:text-white">Chotu ESP mobile app in Flutter and Dart</strong> to connect with smart hardware devices, created <strong className="text-slate-900 dark:text-white">DocuEsign</strong> for easy digital document signing, and developed the <strong className="text-slate-900 dark:text-white">AppyMinds</strong> blog platform. For team collaboration, I use <strong className="text-red-600 dark:text-red-400">Jira Kanban boards</strong> to organize tasks and deliver work on time.
            </p>

            {/* Key Skills Pills */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
              {[
                "Chotubot.com",
                "Figma to Code",
                "Inventory Management",
                "Affiliate Marketing",
                "Flutter & Dart",
                "Jira Kanban Boards",
                "Razorpay Payments",
                "Render Deployments",
              ].map((pill) => (
                <span
                  key={pill}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-300 font-medium"
                >
                  {pill}
                </span>
              ))}
            </div>
          </ClassyCard>

          {/* Education Card */}
          <ClassyCard
            delay={180}
            className="glass-panel p-6 sm:p-8 border border-slate-200 dark:border-slate-800 hover:border-red-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-red-600 dark:text-red-400 uppercase tracking-wider font-semibold">
                    Education
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {PORTFOLIO_DATA.education.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {PORTFOLIO_DATA.education.institution}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="inline-block px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 font-mono font-bold text-sm">
                  {PORTFOLIO_DATA.education.cgpa} CGPA
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                  {PORTFOLIO_DATA.education.period}
                </div>
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {PORTFOLIO_DATA.education.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </ClassyCard>
        </div>

        {/* Right Column: Contact Details & Direct Resume Download */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <ClassyCard
            delay={140}
            className="glass-panel p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-5"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-red-600 dark:text-red-400" />
              Quick Details
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              {/* Email with copy */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 truncate font-mono">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, "email")}
                  className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex-shrink-0 ml-2"
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
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-mono">
                    {PORTFOLIO_DATA.personal.phone}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.phone, "phone")}
                  className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
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
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <MapPin className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {PORTFOLIO_DATA.personal.location}
                </span>
              </div>

              {/* Languages */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-slate-500 dark:text-slate-400" /> Languages
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">
                  {PORTFOLIO_DATA.personal.languages.join(", ")}
                </span>
              </div>

              {/* Date of Birth & Nationality */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-500 dark:text-slate-400" /> Nationality
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">
                  {PORTFOLIO_DATA.personal.nationality}
                </span>
              </div>
            </div>

            {/* Hobbies & Personal Interests */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-2.5">
                <Heart className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" /> Interests & Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.personal.hobbies.map((hobby, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium"
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
            className="glass-panel p-6 border border-red-200 dark:border-slate-800 bg-gradient-to-br from-red-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 shadow-md space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Download My Resume</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">PDF Document • 2 Pages • Updated 2026</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Get a summary of my work experience, skills, projects (Chotubot, Chotu ESP, DocuEsign), and education in PDF format.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="/AkshayFullStackResume.pdf"
                download="AkshayFullStackResume.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs transition-all shadow-md shadow-red-600/30 hover:scale-[1.01]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
              <a
                href="/AkshayFullStackResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 transition-colors shadow-sm"
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
