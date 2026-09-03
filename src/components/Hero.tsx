"use client";

import React, { useEffect, useRef } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Bot,
  Layers,
  GraduationCap,
  Terminal,
} from "lucide-react";
import HeroVisual3D from "./HeroVisual3D";
import gsap from "gsap";

interface HeroProps {
  onOpenChat: () => void;
}

export default function Hero({ onOpenChat }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textContentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-fade-in", {
        opacity: 0,
        y: 20,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".hero-metric-card", {
        opacity: 0,
        scale: 0.95,
        y: 18,
        duration: 0.75,
        stagger: 0.1,
        delay: 0.35,
        ease: "power2.out",
      });
    }, textContentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle ambient light glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-600/8 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Modern subtle dot matrix grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Bio */}
          <div
            ref={textContentRef}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="hero-fade-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium mb-6 shadow-md shadow-black/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-200">{PORTFOLIO_DATA.personal.status}</span>
              <span className="text-slate-700">|</span>
              <span className="flex items-center gap-1 text-slate-400 font-mono">
                <MapPin className="w-3 h-3 text-blue-400" /> {PORTFOLIO_DATA.personal.city}
              </span>
            </div>

            {/* Main Name & Title */}
            <h1 className="hero-fade-in text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
              Hi, I&apos;m{" "}
              <span className="gradient-text font-black">
                {PORTFOLIO_DATA.personal.shortName}
              </span>
            </h1>

            <p className="hero-fade-in text-xl sm:text-2xl font-semibold text-slate-200 mb-4">
              {PORTFOLIO_DATA.personal.role} & System Architect
            </p>

            <p className="hero-fade-in text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed mb-8">
              {PORTFOLIO_DATA.personal.tagline} Hands-on production experience engineering{" "}
              <span className="text-blue-400 font-semibold">DocuEsign</span> (digital signature platform),{" "}
              <span className="text-slate-200 font-semibold">AppyMinds Blog CMS</span>, and{" "}
              <span className="text-blue-400 font-semibold">multi-currency commerce dashboards</span>.
            </p>

            {/* Action Buttons */}
            <div className="hero-fade-in flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 w-full">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                <Layers className="w-4 h-4 text-blue-200" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </a>

              <button
                type="button"
                onClick={onOpenChat}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-blue-500/50 font-medium text-sm transition-all hover:-translate-y-0.5 shadow-md shadow-black/40 group"
              >
                <Bot className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Chat with Akshay AI</span>
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-850 text-slate-300 border border-slate-800 font-medium text-sm transition-all hover:text-white"
              >
                <span>Direct Contact</span>
              </a>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              <div className="hero-metric-card glass-panel rounded-2xl p-4 text-left border-l-2 border-l-blue-500">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-slate-400 font-mono">Academic</span>
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div className="text-xl font-bold text-white font-mono">
                  {PORTFOLIO_DATA.education.cgpa}
                </div>
                <div className="text-[11px] text-slate-400 truncate">MCA (Garware College)</div>
              </div>

              <div className="hero-metric-card glass-panel rounded-2xl p-4 text-left border-l-2 border-l-blue-400">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-slate-400 font-mono">Frontend</span>
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div className="text-xl font-bold text-white">Next.js</div>
                <div className="text-[11px] text-slate-400 truncate">TypeScript & React</div>
              </div>

              <div className="hero-metric-card glass-panel rounded-2xl p-4 text-left border-l-2 border-l-indigo-400">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-slate-400 font-mono">Backend</span>
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <div className="text-xl font-bold text-white">Supabase</div>
                <div className="text-[11px] text-slate-400 truncate">PostgreSQL & Mongo</div>
              </div>

              <div className="hero-metric-card glass-panel rounded-2xl p-4 text-left border-l-2 border-l-slate-400">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-slate-400 font-mono">Fintech</span>
                  <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <div className="text-xl font-bold text-white">Razorpay</div>
                <div className="text-[11px] text-slate-400 truncate">Webhooks & FX</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Immersive Presentation */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroVisual3D />
          </div>
        </div>
      </div>
    </section>
  );
}
