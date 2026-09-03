"use client";

import React, { useEffect, useRef, useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Server,
  FileSignature,
  BookOpen,
  ShoppingBag,
  ArrowUpRight,
  Smartphone,
} from "lucide-react";
import gsap from "gsap";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".project-card-reveal", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.18,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return p.featured;
    return p.category === activeFilter;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "chotubot-platform":
        return <ShoppingBag className="w-5 h-5 text-blue-400" />;
      case "docuesign":
        return <FileSignature className="w-5 h-5 text-blue-400" />;
      case "appyminds-blog":
        return <BookOpen className="w-5 h-5 text-blue-400" />;
      case "chotu-esp-app":
        return <Smartphone className="w-5 h-5 text-indigo-400" />;
      default:
        return <ShoppingBag className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40">
          Featured Engineering
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
          Production Systems & Applications
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Enterprise platforms engineered with Next.js, Flutter, robust security protocols, cloud APIs, and deployed for scale.
        </p>
      </div>

      {/* Projects Showcase Grid */}
      <div className="space-y-12">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card-reveal glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800/90 hover:border-blue-500/40 transition-all duration-300 shadow-xl relative overflow-hidden group hover:-translate-y-1 hover:shadow-blue-500/10"
          >
            {/* Top decorative gradient glow */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details Column */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  {/* Category & Status Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-blue-300 font-medium">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.period}
                    </span>
                    {project.id === "chotubot-platform" && (
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-950/70 text-blue-300 border border-blue-800/50 flex items-center gap-1 font-semibold">
                        <Sparkles className="w-3 h-3 text-blue-400" /> Built from Scratch • Figma to Code
                      </span>
                    )}
                    {project.id === "docuesign" && (
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-950/60 text-blue-300 border border-blue-800/40 flex items-center gap-1">
                        <Server className="w-3 h-3 text-blue-400" /> Render Deployed
                      </span>
                    )}
                    {project.id === "appyminds-blog" && (
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-700 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-blue-400" /> Live CMS Feature
                      </span>
                    )}
                    {project.id === "chotu-esp-app" && (
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-950/60 text-indigo-300 border border-indigo-800/40 flex items-center gap-1 font-semibold">
                        <Smartphone className="w-3 h-3 text-indigo-400" /> Flutter & Dart Mobile App
                      </span>
                    )}
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 flex-shrink-0 group-hover:scale-105 transition-transform">
                      {getProjectIcon(project.id)}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm font-medium text-slate-300 mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Highlights list */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      Key Engineering Highlights:
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Metrics & Live Action Card */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                {/* Metrics Card */}
                {project.metrics && (
                  <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 space-y-3">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                      System Metrics
                    </span>
                    <div className="grid grid-cols-1 gap-2.5">
                      {project.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-850"
                        >
                          <span className="text-xs text-slate-400">{m.label}</span>
                          <span className="text-xs font-semibold text-blue-300 font-mono">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Live Action Buttons */}
                <div className="flex flex-col gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.01]"
                    >
                      <span>View Live Application</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-sm font-medium transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>Explore on GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                    </a>
                  )}
                </div>

                {/* Integration note banner */}
                {project.id === "chotubot-platform" && (
                  <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs text-blue-200 leading-relaxed">
                    💡 Built <strong>www.chotubot.com</strong> from scratch from Figma designs, including complete Inventory Control, Affiliate Marketing, International Delivery, and Razorpay payment webhooks.
                  </div>
                )}
                {project.id === "chotu-esp-app" && (
                  <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-200 leading-relaxed">
                    💡 Companion mobile application in <strong>Flutter & Dart</strong> for wireless ESP32/IoT device provisioning, live sensor telemetry, and hardware control.
                  </div>
                )}
                {project.id === "docuesign" && (
                  <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs text-blue-200 leading-relaxed">
                    💡 Integrated directly with <strong>AppyMinds LMS</strong> for secure, automated agreement verification upon student onboarding.
                  </div>
                )}
                {project.id === "appyminds-blog" && (
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs text-slate-300 leading-relaxed">
                    💡 Powers the published content on <strong>appyminds.com/blog</strong> with CKEditor and automated SEO metadata.
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
