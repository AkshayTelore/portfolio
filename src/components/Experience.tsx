"use client";

import React, { useEffect, useRef } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Briefcase,
  MapPin,
  ExternalLink,
  CheckCircle2,
  GitBranch,
} from "lucide-react";
import gsap from "gsap";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".exp-item-card", {
        opacity: 0,
        x: -24,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40">
          Professional Track Record
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
          Work Experience & Impact
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Engineering roles building production software, payment infrastructure, and enterprise SaaS platforms.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
        {PORTFOLIO_DATA.experiences.map((exp) => (
          <div key={exp.id} className="exp-item-card relative pl-6 md:pl-10 group">
            {/* Timeline node icon */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-950 transition-all shadow-md shadow-blue-500/20">
              <Briefcase className="w-3.5 h-3.5" />
            </div>

            {/* Date Tag on Left on larger screens */}
            <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
              <span className="text-xs font-mono text-slate-400 font-semibold block">
                {exp.period}
              </span>
              <span className="text-[11px] text-blue-400 font-mono font-medium">
                {exp.badge}
              </span>
            </div>

            {/* Experience Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/90 hover:border-blue-500/40 transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="md:hidden text-xs font-mono text-blue-400 font-semibold">
                      {exp.period} • {exp.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm text-slate-400 mt-1">
                    <span className="text-slate-200 font-semibold">{exp.company}</span>
                    {exp.website && (
                      <>
                        <span>•</span>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 text-xs font-mono"
                        >
                          {exp.website.replace("https://", "")}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </>
                    )}
                    <span>•</span>
                    <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                      <MapPin className="w-3 h-3 text-slate-500" /> {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-300">
                {exp.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80">
                <span className="text-xs text-slate-500 font-mono flex items-center gap-1 mr-1">
                  <GitBranch className="w-3 h-3" /> Stack:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/60 text-slate-300 hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
