"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Trophy, Award, Activity, Sparkles } from "lucide-react";

export default function Achievements() {
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case "trophy":
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case "activity":
        return <Activity className="w-5 h-5 text-blue-400" />;
      default:
        return <Award className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40">
          Honors & Leadership
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
          Achievements & Extracurriculars
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Demonstrated dedication on and off the terminal — team leadership, competitive cricket, and creative performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.achievements.map((item) => (
          <div
            key={item.id}
            className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/90 hover:border-blue-500/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                  {getAchievementIcon(item.icon)}
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-300">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                {item.title}
              </h3>

              <div className="text-xs text-slate-400 font-mono mb-3">
                {item.organization} • {item.period}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-blue-400 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Certified Recognition</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
