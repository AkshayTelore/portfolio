"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Code2,
  Database,
  CreditCard,
  ShoppingBag,
  GitBranch,
  Sparkles,
} from "lucide-react";
import ClassyCard from "./ClassyCard";

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case 1:
        return <Database className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case 2:
        return <CreditCard className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case 3:
        return <ShoppingBag className="w-5 h-5 text-red-600 dark:text-red-400" />;
      default:
        return <GitBranch className="w-5 h-5 text-red-600 dark:text-red-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono text-red-600 dark:text-red-400 uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40">
          Skills & Technologies
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-4 mb-3">
          Technologies I Work With Daily
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400">
          The practical frameworks, payment systems, databases, and development tools I use to build scalable e-commerce and web platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.skills.categories.map((cat, idx) => (
          <ClassyCard
            key={cat.title}
            delay={idx * 100}
            className="glass-panel p-6 sm:p-7 border border-slate-200 dark:border-slate-800 dark:bg-slate-900/80 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-100 dark:border-red-900/50 flex-shrink-0">
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cat.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{cat.description}</p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors flex items-center gap-1.5 ${
                      skill.highlight
                        ? "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-300 font-medium"
                        : "bg-slate-100 dark:bg-slate-800/80 border-slate-200/80 dark:border-slate-700/60 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {skill.highlight && <Sparkles className="w-3 h-3 text-red-600 dark:text-red-400 flex-shrink-0" />}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </ClassyCard>
        ))}
      </div>
    </section>
  );
}
