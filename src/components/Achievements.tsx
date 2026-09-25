"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Trophy, Award, Activity } from "lucide-react";
import ClassyCard from "./ClassyCard";

export default function Achievements() {
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case "trophy":
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case "activity":
        return <Activity className="w-5 h-5 text-red-600 dark:text-red-400" />;
      default:
        return <Award className="w-5 h-5 text-red-600 dark:text-red-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono text-red-600 dark:text-red-400 uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40">
          Achievements & Beyond
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-4 mb-3">
          Academics, Sports & Team Spirit
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Consistent dedication in academics, athletics, and collaborative team environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.achievements.map((item, idx) => (
          <ClassyCard
            key={item.id}
            delay={idx * 120}
            className="glass-panel p-6 sm:p-7 border border-slate-200 dark:border-slate-800 dark:bg-slate-900/80 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-100 dark:border-red-900/50">
                  {getAchievementIcon(item.icon)}
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                {item.title}
              </h3>

              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-3">
                {item.organization} • {item.period}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </ClassyCard>
        ))}
      </div>
    </section>
  );
}
