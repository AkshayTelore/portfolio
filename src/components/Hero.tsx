"use client";

import React, { useEffect, useRef, useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  ArrowRight,
  Sparkles,
  Bot,
  MapPin,
  Layers,
  GraduationCap,
  Terminal,
  Download,
} from "lucide-react";
import dynamic from "next/dynamic";
import ClassyCard from "./ClassyCard";
import gsap from "gsap";

const HeroVisual3D = dynamic(() => import("./HeroVisual3D"), { ssr: false });
const TechWheelGSAP = dynamic(() => import("./TechWheelGSAP"), { ssr: false });

interface HeroProps {
  onOpenChat: () => void;
}

export default function Hero({ onOpenChat }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeVisual, setActiveVisual] = useState<"wheel" | "3d">("wheel");

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Classy Entrance Stagger
      gsap.from(".hero-fade-in", {
        opacity: 0,
        y: 32,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#08070e] dark:via-[#0c0914] dark:to-[#08070e] transition-colors duration-300"
    >
      {/* Ambient light glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-br from-red-500/5 via-rose-500/5 to-transparent dark:from-red-600/10 dark:via-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-red-600/5 dark:bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & Information */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Status Pill */}
            <div className="hero-fade-in inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900/40 text-xs font-medium mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-800 dark:text-slate-200 font-medium">{PORTFOLIO_DATA.personal.status}</span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400 font-mono">
                <MapPin className="w-3 h-3 text-red-600" /> {PORTFOLIO_DATA.personal.city}
              </span>
            </div>

            {/* Main Name & Title */}
            <h1 className="hero-fade-in text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Hi, I&apos;m{" "}
              <span className="gradient-text font-black">
                {PORTFOLIO_DATA.personal.shortName}
              </span>
            </h1>

            <p className="hero-fade-in text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-4">
              {PORTFOLIO_DATA.personal.role} & System Architect
            </p>

            <p className="hero-fade-in text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-8">
              {PORTFOLIO_DATA.personal.tagline} Hands-on production experience building{" "}
              <span className="text-red-600 dark:text-red-400 font-semibold">www.chotubot.com from scratch</span>,{" "}
              <span className="text-slate-800 dark:text-slate-200 font-semibold">DocuEsign SaaS</span>, and{" "}
              <span className="text-red-600 dark:text-red-400 font-semibold">Chotu ESP mobile app in Flutter</span>.
            </p>

            {/* Action Buttons with Red Primary Palette */}
            <div className="hero-fade-in flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 w-full">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5"
              >
                <Layers className="w-4 h-4 text-red-100" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-red-100" />
              </a>

              <button
                type="button"
                onClick={onOpenChat}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-red-400 dark:hover:border-red-500 font-medium text-sm transition-all hover:-translate-y-0.5 shadow-sm group"
              >
                <Bot className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
                <span>Chat with Akshay AI</span>
                <Sparkles className="w-3.5 h-3.5 text-red-600" />
              </button>

              <a
                href="/Akshay_Telore_Resume.pdf"
                download="Akshay_Telore_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-red-400 dark:hover:border-red-500 font-medium text-sm transition-all hover:-translate-y-0.5 shadow-sm group"
              >
                <Download className="w-4 h-4 text-red-600 group-hover:translate-y-0.5 transition-transform" />
                <span>Get Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium text-sm transition-all"
              >
                <span>Direct Contact</span>
              </a>
            </div>

            {/* Quick Metrics Classy Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              <ClassyCard
                delay={100}
                className="glass-panel p-4 text-left border-l-4 border-l-red-600 dark:bg-slate-900/90 dark:border-slate-800"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Academic</span>
                  <GraduationCap className="w-3.5 h-3.5 text-red-600" />
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white font-mono">
                  {PORTFOLIO_DATA.education.cgpa}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">MCA (Garware College)</div>
              </ClassyCard>

              <ClassyCard
                delay={160}
                className="glass-panel p-4 text-left border-l-4 border-l-rose-500 dark:bg-slate-900/90 dark:border-slate-800"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Frontend</span>
                  <Layers className="w-3.5 h-3.5 text-rose-600" />
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">Next.js</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">TypeScript & React</div>
              </ClassyCard>

              <ClassyCard
                delay={220}
                className="glass-panel p-4 text-left border-l-4 border-l-orange-500 dark:bg-slate-900/90 dark:border-slate-800"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Backend</span>
                  <Terminal className="w-3.5 h-3.5 text-orange-600" />
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">Supabase</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">PostgreSQL & Auth</div>
              </ClassyCard>

              <ClassyCard
                delay={280}
                className="glass-panel p-4 text-left border-l-4 border-l-red-500 dark:bg-slate-900/90 dark:border-slate-800"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Mobile / IoT</span>
                  <Sparkles className="w-3.5 h-3.5 text-red-600" />
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">Flutter</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Chotu ESP & Dart</div>
              </ClassyCard>
            </div>
          </div>

          {/* Right Column: Interactive Presentation (GSAP Tech Wheel by default, 3D Core toggle) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* View Switcher Tabs */}
            <div className="mb-4 inline-flex items-center p-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm z-30">
              <button
                type="button"
                onClick={() => setActiveVisual("wheel")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  activeVisual === "wheel"
                    ? "bg-red-600 text-white shadow-sm shadow-red-600/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>GSAP Tech Wheel</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveVisual("3d")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  activeVisual === "3d"
                    ? "bg-red-600 text-white shadow-sm shadow-red-600/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>3D Architecture</span>
              </button>
            </div>

            {/* Active Visual Container */}
            <div className="w-full flex items-center justify-center min-h-[420px]">
              {activeVisual === "wheel" ? (
                <TechWheelGSAP />
              ) : (
                <HeroVisual3D />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
