"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  FileSignature,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import ClassyCard from "./ClassyCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Full Stack"];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.category === activeFilter;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "chotubot-platform":
        return <ShoppingBag className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case "docuesign":
        return <FileSignature className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case "appyminds-blog":
        return <BookOpen className="w-5 h-5 text-red-600 dark:text-red-400" />;
      default:
        return <ShoppingBag className="w-5 h-5 text-red-600 dark:text-red-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-mono text-red-600 dark:text-red-400 uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40">
          Featured Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-4 mb-3">
          Projects I&apos;ve Built & Shipped
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Production e-commerce platforms, payment integrations, internal operations dashboards, and SaaS applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {filteredProjects.map((project, idx) => (
          <ClassyCard
            key={project.id}
            delay={idx * 120}
            className="glass-panel p-6 sm:p-8 border border-slate-200 dark:border-slate-800 dark:bg-slate-900/80 shadow-sm hover:shadow-lg transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Description & Highlights */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  {/* Category and Period */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.period}
                    </span>
                    {project.id === "chotubot-platform" && (
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/40 font-medium">
                        ✨ Production Storefront & Ops
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-100 dark:border-red-900/50 flex-shrink-0">
                      {getProjectIcon(project.id)}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* Subtitle & Human Description */}
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Key Highlights & Contributions:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Takeaways & Live Links */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
                {/* Metrics Summary */}
                {project.metrics && (
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 space-y-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Quick Facts
                    </span>
                    <div className="space-y-2">
                      {project.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-xs"
                        >
                          <span className="text-slate-500 dark:text-slate-400">{m.label}</span>
                          <span className="font-mono font-semibold text-slate-900 dark:text-white">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col gap-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-red-600/20 active:scale-98"
                    >
                      <span>Visit Live Application</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-medium transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ClassyCard>
        ))}
      </div>
    </section>
  );
}
