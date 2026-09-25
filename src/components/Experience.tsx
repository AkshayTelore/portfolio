"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Briefcase,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import ClassyCard from "./ClassyCard";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono text-red-600 dark:text-red-400 uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40">
          Work History
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-4 mb-3">
          Experience & Impact
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Roles where I designed, built, and shipped production web applications, operations tools, and mobile software.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-36 space-y-12">
        {PORTFOLIO_DATA.experiences.map((exp, idx) => (
          <div key={exp.id} className="relative pl-6 md:pl-10 group">
            {/* Timeline node icon */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-red-600 dark:border-red-500 flex items-center justify-center text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform shadow-sm z-20">
              <Briefcase className="w-3.5 h-3.5" />
            </div>

            {/* Date Tag on Left on larger screens */}
            <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold block">
                {exp.period}
              </span>
              <span className="text-[11px] text-red-600 dark:text-red-400 font-mono">
                {exp.badge}
              </span>
            </div>

            {/* Experience Card */}
            <ClassyCard
              delay={idx * 140}
              className="glass-panel p-6 sm:p-8 border border-slate-200 dark:border-slate-800 dark:bg-slate-900/80 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <span className="md:hidden text-xs font-mono text-red-600 dark:text-red-400 font-semibold block mb-1">
                    {exp.period} • {exp.badge}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    <span className="text-slate-900 dark:text-slate-200 font-semibold">{exp.company}</span>
                    {exp.website && (
                      <>
                        <span>•</span>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 dark:text-red-400 hover:underline inline-flex items-center gap-1 font-mono"
                        >
                          <span>{exp.website.replace("https://", "")}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </>
                    )}
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-6">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ClassyCard>
          </div>
        ))}
      </div>
    </section>
  );
}
