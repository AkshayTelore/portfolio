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
import ClassyCard from "./ClassyCard";

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-red-600" />;
      case 1:
        return <Server className="w-5 h-5 text-rose-600" />;
      case 2:
        return <Database className="w-5 h-5 text-red-600" />;
      case 3:
        return <CreditCard className="w-5 h-5 text-orange-600" />;
      default:
        return <Wrench className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono text-red-700 uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 border border-red-200">
          Core Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-4">
          Skills & Technical Expertise
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          A comprehensive toolkit refined across production web applications, secure APIs, databases, mobile apps, and DevOps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.skills.categories.map((cat, idx) => (
          <ClassyCard
            key={cat.title}
            delay={idx * 110}
            className="glass-panel p-6 sm:p-7 border border-slate-200 hover:border-red-500/40 flex flex-col justify-between shadow-sm hover:shadow-xl"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-red-50 border border-red-100">
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                  <p className="text-xs text-slate-500">{cat.description}</p>
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
                            ? "text-red-700 font-semibold flex items-center gap-1.5"
                            : "text-slate-700"
                        }`}
                      >
                        {skill.name}
                        {skill.highlight && (
                          <Sparkles className="w-3 h-3 text-red-600" />
                        )}
                      </span>
                      <span className="font-mono text-slate-400 text-[11px]">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          skill.highlight
                            ? "bg-gradient-to-r from-red-600 to-rose-500"
                            : "bg-slate-400"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Verified Production</span>
              <span className="text-red-600 font-semibold">Active</span>
            </div>
          </ClassyCard>
        ))}
      </div>
    </section>
  );
}
