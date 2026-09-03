"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Briefcase,
  MapPin,
  ExternalLink,
  CheckCircle2,
  GitBranch,
} from "lucide-react";
import ClassyCard from "./ClassyCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono text-red-700 uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 border border-red-200">
          Professional Track Record
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-4">
          Work Experience & Impact
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Engineering roles building production software, payment infrastructure, mobile IoT apps, and enterprise SaaS platforms.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-12">
        {PORTFOLIO_DATA.experiences.map((exp, idx) => (
          <div key={exp.id} className="relative pl-6 md:pl-10 group">
            {/* Timeline node icon */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white border-2 border-red-600 flex items-center justify-center text-red-600 group-hover:scale-110 group-hover:bg-red-50 transition-all shadow-md shadow-red-500/20 z-20">
              <Briefcase className="w-3.5 h-3.5" />
            </div>

            {/* Date Tag on Left on larger screens */}
            <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
              <span className="text-xs font-mono text-slate-500 font-semibold block">
                {exp.period}
              </span>
              <span className="text-[11px] text-red-600 font-mono font-medium">
                {exp.badge}
              </span>
            </div>

            {/* Experience Classy Card */}
            <ClassyCard
              delay={idx * 160}
              className="glass-panel bg-white p-6 sm:p-8 border border-slate-200 hover:border-red-500/40 shadow-sm hover:shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="md:hidden text-xs font-mono text-red-600 font-semibold">
                      {exp.period} • {exp.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm text-slate-500 mt-1">
                    <span className="text-slate-900 font-semibold">{exp.company}</span>
                    {exp.website && (
                      <>
                        <span>•</span>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-red-700 inline-flex items-center gap-1 text-xs font-mono font-medium"
                        >
                          {exp.website.replace("https://", "")}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </>
                    )}
                    <span>•</span>
                    <span className="flex items-center gap-1 text-xs font-mono text-slate-500">
                      <MapPin className="w-3 h-3 text-slate-400" /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
                    <GitBranch className="w-3 h-3 text-red-600" />
                    <span>Production</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-6">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 font-medium"
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
