"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Code2,
  Database,
  CreditCard,
  Wrench,
  Sparkles,
  Server,
} from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Database className="w-5 h-5 text-blue-400" />;
      case 3:
        return <CreditCard className="w-5 h-5 text-emerald-400" />;
      default:
        return <Wrench className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40">
          Core Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
          Skills & Technical Expertise
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          A comprehensive toolkit refined across production web applications, secure APIs, databases, and DevOps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.skills.categories.map((cat, idx) => (
          <div
            key={cat.title}
            className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-800/90 hover:border-blue-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                  <p className="text-xs text-slate-400">{cat.description}</p>
                </div>
              </div>

              {/* Skills badges & indicators */}
              <div className="mt-5 space-y-3">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span
                        className={`font-medium ${
                          skill.highlight
                            ? "text-blue-300 font-semibold flex items-center gap-1.5"
                            : "text-slate-300"
                        }`}
                      >
                        {skill.name}
                        {skill.highlight && (
                          <Sparkles className="w-3 h-3 text-blue-400" />
                        )}
                      </span>
                      <span className="font-mono text-slate-500 text-[11px]">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/60">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          skill.highlight
                            ? "bg-gradient-to-r from-blue-600 to-indigo-500"
                            : "bg-slate-700"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Production Verified</span>
              <span className="text-blue-400">✓ Production Ready</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
