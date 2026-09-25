"use client";

import React, { useEffect, useRef } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  ArrowRight,
  Sparkles,
  Bot,
  MapPin,
  GraduationCap,
  Code2,
  CreditCard,
} from "lucide-react";
import dynamic from "next/dynamic";
import gsap from "gsap";

const TechWheelGSAP = dynamic(() => import("./TechWheelGSAP"), { ssr: false });

interface HeroProps {
  onOpenChat: () => void;
}

export default function Hero({ onOpenChat }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-fade-in", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] pt-24 sm:pt-32 pb-16 sm:pb-24 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#08070e] dark:via-[#0c0914] dark:to-[#08070e] transition-colors duration-300 overflow-hidden"
    >
      {/* Soft ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[650px] h-[320px] bg-red-500/5 dark:bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clear, Humanized Intro */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Status Pill */}
            <div className="hero-fade-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium">{PORTFOLIO_DATA.personal.status}</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3 h-3 text-red-600 dark:text-red-400" />
                {PORTFOLIO_DATA.personal.city}
              </span>
            </div>

            {/* Greeting & Headline */}
            <h1 className="hero-fade-in text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Hi, I&apos;m{" "}
              <span className="gradient-text">
                {PORTFOLIO_DATA.personal.shortName}
              </span>
            </h1>

            <p className="hero-fade-in text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Full-Stack Developer building practical e-commerce & web platforms.
            </p>

            <p className="hero-fade-in text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              At Dextop, I worked on <span className="text-slate-900 dark:text-white font-medium">Chotubot.com</span> from Figma designs to react reusable Components and deployment—implementing responsive storefront sections, coupon systems, affiliate marketing, Razorpay & PayU payments, Shiprocket fulfillment, and inventory dashboards with Next.js, Node.js, and Supabase.
            </p>

            {/* Clear Primary Actions */}
            <div className="hero-fade-in flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-all shadow-md shadow-red-600/25 active:scale-98"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-red-400 font-medium text-sm transition-all shadow-sm active:scale-98"
              >
                <span>Get in Touch</span>
              </a>

              <button
                type="button"
                onClick={onOpenChat}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm transition-all active:scale-98"
              >
                <Bot className="w-4 h-4 text-red-600 dark:text-red-400" />
                <span>Ask AI Bot</span>
              </button>
            </div>

            {/* Quick Human Highlights */}
            <div className="hero-fade-in grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-left">
                <div className="flex items-center gap-2 text-xs font-mono text-red-600 dark:text-red-400 font-semibold mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>9.18 CGPA</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  MCA from Garware College (Distinction)
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-left">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-900 dark:text-white font-semibold mb-1">
                  <Code2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                  <span>Full Stack</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  Next.js, React, Node & Supabase
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-left">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-900 dark:text-white font-semibold mb-1">
                  <CreditCard className="w-4 h-4 text-red-600 dark:text-red-400" />
                  <span>Payments & Ops</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  Razorpay, PayU & Shiprocket
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Rolling Wheel of Technical Skills */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
            <div className="w-full flex items-center justify-center min-h-[350px] sm:min-h-[440px]">
              <TechWheelGSAP />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
