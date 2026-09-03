"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Trophy, Award, Activity, Sparkles } from "lucide-react";
import ClassyCard from "./ClassyCard";

export default function Achievements() {
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case "trophy":
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case "activity":
        return <Activity className="w-5 h-5 text-red-600" />;
      default:
        return <Award className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono text-red-700 uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 border border-red-200">
          Honors & Leadership
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-4">
          Achievements & Extracurriculars
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Demonstrated dedication on and off the terminal — team leadership, competitive cricket, and creative performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.achievements.map((item, idx) => (
          <ClassyCard
            key={item.id}
            delay={idx * 140}
            className="glass-panel p-6 sm:p-8 border border-slate-200 hover:border-red-500/40 flex flex-col justify-between shadow-sm hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-red-50 border border-red-100 group-hover:scale-105 transition-transform">
                  {getAchievementIcon(item.icon)}
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 font-medium">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-1">
                {item.title}
              </h3>

              <div className="text-xs text-slate-500 font-mono mb-3">
                {item.organization} • {item.period}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs text-red-600 font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Certified Recognition</span>
            </div>
          </ClassyCard>
        ))}
      </div>
    </section>
  );
}
