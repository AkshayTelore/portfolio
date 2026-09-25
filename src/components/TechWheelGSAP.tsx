"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  Database,
  CreditCard,
  Layers,
  Smartphone,
  Server,
  Sparkles,
  GitBranch,
  Play,
  Pause,
  RotateCw,
  RotateCcw,
  Zap,
  CheckCircle2,
} from "lucide-react";
import gsap from "gsap";

interface TechItem {
  id: string;
  name: string;
  category: string;
  level: number;
  usage: string;
  iconType: string;
}

const TECH_STACK_ITEMS: TechItem[] = [
  {
    id: "nextjs",
    name: "Next.js",
    category: "Full Stack / SSR",
    level: 95,
    usage: "Core framework for www.chotubot.com & DocuEsign",
    iconType: "code",
  },
  {
    id: "react",
    name: "React.js",
    category: "Frontend UI",
    level: 94,
    usage: "Component architecture & AppyMinds LMS platform",
    iconType: "layers",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language",
    level: 90,
    usage: "Type-safe enterprise codebases & API contracts",
    iconType: "code",
  },
  {
    id: "payu",
    name: "PayU Gateway",
    category: "Payment Engine",
    level: 88,
    usage: "Payment creation, form submission & status handling",
    iconType: "payment",
  },
  {
    id: "shiprocket",
    name: "Shiprocket",
    category: "Logistics & Shipping",
    level: 90,
    usage: "Order shipment creation, address validation & tracking",
    iconType: "check",
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "Database & Auth",
    level: 92,
    usage: "PostgreSQL, Row-Level Security & realtime events",
    iconType: "database",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend Runtime",
    level: 90,
    usage: "RESTful microservices & webhook validation",
    iconType: "server",
  },
  {
    id: "razorpay",
    name: "Razorpay",
    category: "Payment Engine",
    level: 92,
    usage: "HMAC SHA256 webhooks, auto-refunds & currency routing",
    iconType: "payment",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Relational DB",
    level: 88,
    usage: "Complex relational queries & inventory control",
    iconType: "database",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Document DB",
    level: 85,
    usage: "DocuEsign signature logs & document meta-stores",
    iconType: "database",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Design System",
    level: 96,
    usage: "Responsive glassmorphic UI & design token systems",
    iconType: "sparkles",
  },
  {
    id: "figma",
    name: "Figma to Code",
    category: "UI/UX Engineering",
    level: 92,
    usage: "Pixel-perfect implementation for www.chotubot.com",
    iconType: "sparkles",
  },
  {
    id: "jira",
    name: "Jira (Kanban)",
    category: "Agile Delivery",
    level: 90,
    usage: "Sprint planning, backlog grooming & task tracking",
    iconType: "check",
  },
  {
    id: "gitlab",
    name: "GitLab CI/CD",
    category: "DevOps & Cloud",
    level: 88,
    usage: "Automated lint, build, testing & production deployment",
    iconType: "git",
  },
];

export default function TechWheelGSAP() {
  const wheelRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const nodesTimelineRef = useRef<gsap.core.Timeline | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [speed, setSpeed] = useState<number>(1);
  const [activeTech, setActiveTech] = useState<TechItem | null>(null);
  const [radius, setRadius] = useState<number>(165);

  const totalItems = TECH_STACK_ITEMS.length;

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 400) {
          setRadius(118);
        } else if (window.innerWidth < 640) {
          setRadius(135);
        } else {
          setRadius(170);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTechIcon = (type: string) => {
    switch (type) {
      case "code":
        return <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 dark:text-red-400" />;
      case "layers":
        return <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 dark:text-red-400" />;
      case "mobile":
        return <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 dark:text-red-400" />;
      case "database":
        return <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 dark:text-red-400" />;
      case "server":
        return <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 dark:text-red-400" />;
      case "payment":
        return <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 dark:text-red-400" />;
      case "sparkles":
        return <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 dark:text-red-400" />;
      case "check":
        return <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 dark:text-red-400" />;
      case "git":
        return <GitBranch className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 dark:text-red-400" />;
      default:
        return <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 dark:text-red-400" />;
    }
  };

  useEffect(() => {
    if (!wheelRef.current) return;

    // Wheel rotation animation
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(wheelRef.current, {
      rotation: 360 * direction,
      duration: 32 / speed,
      ease: "none",
    });
    timelineRef.current = tl;

    // Counter-rotation for nodes so badges stay upright
    const nodeTl = gsap.timeline({ repeat: -1 });
    nodeTl.to(".tech-wheel-node", {
      rotation: -360 * direction,
      duration: 32 / speed,
      ease: "none",
    });
    nodesTimelineRef.current = nodeTl;

    return () => {
      tl.kill();
      nodeTl.kill();
    };
  }, [direction, speed]);

  const togglePlayPause = () => {
    if (!timelineRef.current || !nodesTimelineRef.current) return;
    if (isPlaying) {
      timelineRef.current.pause();
      nodesTimelineRef.current.pause();
      setIsPlaying(false);
    } else {
      timelineRef.current.play();
      nodesTimelineRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleDirection = () => {
    setDirection((prev) => (prev === 1 ? -1 : 1));
  };

  const cycleSpeed = () => {
    setSpeed((prev) => (prev === 1 ? 1.75 : prev === 1.75 ? 0.6 : 1));
  };

  const handleSelectNode = (tech: TechItem) => {
    if (activeTech?.id === tech.id) {
      setActiveTech(null);
      if (timelineRef.current && nodesTimelineRef.current && isPlaying) {
        gsap.to(timelineRef.current, { timeScale: 1, duration: 0.3 });
        gsap.to(nodesTimelineRef.current, { timeScale: 1, duration: 0.3 });
      }
    } else {
      setActiveTech(tech);
      if (timelineRef.current && nodesTimelineRef.current && isPlaying) {
        gsap.to(timelineRef.current, { timeScale: 0.12, duration: 0.3 });
        gsap.to(nodesTimelineRef.current, { timeScale: 0.12, duration: 0.3 });
      }
    }
  };

  return (
    <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[420px] md:max-w-[460px] mx-auto flex items-center justify-center select-none overflow-hidden sm:overflow-visible">
      {/* Background Decorative Orbit Rings */}
      <div className="absolute w-[250px] sm:w-[360px] h-[250px] sm:h-[360px] rounded-full border border-slate-200 dark:border-slate-800 pointer-events-none" />
      <div className="absolute w-[236px] sm:w-[344px] h-[236px] sm:h-[344px] rounded-full border border-dashed border-red-500/25 dark:border-red-500/20 pointer-events-none animate-pulse-slow" />
      <div className="absolute w-[160px] sm:w-[240px] h-[160px] sm:h-[240px] rounded-full border border-slate-200/80 dark:border-slate-800/80 pointer-events-none" />
      <div className="absolute w-[120px] sm:w-[180px] h-[120px] sm:h-[180px] rounded-full bg-gradient-to-br from-red-500/5 via-rose-500/5 to-transparent dark:from-red-600/10 dark:via-rose-600/10 pointer-events-none" />

      {/* Top HUD Status Badge */}
      <div className="absolute top-1 sm:top-2 left-1 sm:left-2 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 backdrop-blur-md text-[10px] sm:text-[11px] font-mono text-slate-700 dark:text-slate-300 shadow-sm z-30">
        <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-red-600"></span>
        </span>
        <span className="font-semibold text-slate-900 dark:text-white">GSAP Orbit</span>
        <span className="text-slate-300 dark:text-slate-700">|</span>
        <span className="text-red-600 dark:text-red-400 font-bold">{totalItems} Skills</span>
      </div>

      {/* Bottom Interactive Controls */}
      <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 flex items-center justify-between z-30 pointer-events-none">
        <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 dark:text-slate-400 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 backdrop-blur-sm shadow-sm">
          Tap skill to inspect
        </span>

        <div className="flex items-center gap-1 sm:gap-1.5 pointer-events-auto">
          {/* Direction toggle */}
          <button
            type="button"
            onClick={toggleDirection}
            className="p-1 sm:p-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors shadow-sm"
            title="Reverse direction"
            aria-label="Reverse direction"
          >
            {direction === 1 ? <RotateCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
          </button>

          {/* Speed toggle */}
          <button
            type="button"
            onClick={cycleSpeed}
            className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-[9px] sm:text-[10px] font-mono font-semibold text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors shadow-sm flex items-center gap-0.5 sm:gap-1"
            title="Change rotation speed"
            aria-label="Change rotation speed"
          >
            <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-600 dark:text-red-400" />
            <span>{speed}x</span>
          </button>

          {/* Play/Pause toggle */}
          <button
            type="button"
            onClick={togglePlayPause}
            className="p-1 sm:p-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white transition-colors shadow-sm"
            title={isPlaying ? "Pause rotation" : "Resume rotation"}
            aria-label={isPlaying ? "Pause rotation" : "Resume rotation"}
          >
            {isPlaying ? <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
          </button>
        </div>
      </div>

      {/* Central Interactive Inspection Hub */}
      <div className="absolute z-20 w-[125px] sm:w-[164px] h-[125px] sm:h-[164px] rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl flex flex-col items-center justify-center p-2 sm:p-3 text-center transition-all duration-300 pointer-events-none">
        {activeTech ? (
          <div className="animate-in fade-in zoom-in-90 duration-200 flex flex-col items-center">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400 mb-0.5 sm:mb-1 shadow-sm">
              {getTechIcon(activeTech.iconType)}
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
              {activeTech.name}
            </h4>
            <span className="text-[9px] sm:text-[10px] font-mono text-red-600 dark:text-red-400 font-semibold mt-0.5">
              {activeTech.category} • {activeTech.level}%
            </span>
            <p className="text-[8px] sm:text-[9px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5 sm:mt-1 leading-tight max-w-[105px] sm:max-w-[130px]">
              {activeTech.usage}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="relative mb-1 sm:mb-1.5">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center text-white shadow-md shadow-red-500/30">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500"></span>
              </span>
            </div>
            <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-red-600 dark:text-red-400 font-bold">
              Tech Stack
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">
              Akshay Telore
            </span>
            <span className="text-[8px] sm:text-[9px] text-slate-400 font-mono mt-0.5">
              Full Stack Core
            </span>
          </div>
        )}
      </div>

      {/* Main GSAP Rotating Wheel Container */}
      <div
        ref={wheelRef}
        className="relative w-full h-full flex items-center justify-center z-10"
        style={{ willChange: "transform" }}
      >
        {TECH_STACK_ITEMS.map((tech, index) => {
          const angle = (index / totalItems) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const isHovered = activeTech?.id === tech.id;

          return (
            <div
              key={tech.id}
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {/* Tech Node Counter-rotated so text and icon stay upright */}
              <div
                className="tech-wheel-node"
                style={{ willChange: "transform" }}
              >
                <button
                  type="button"
                  onClick={() => handleSelectNode(tech)}
                  onMouseEnter={() => handleSelectNode(tech)}
                  onMouseLeave={() => {
                    if (window.innerWidth >= 768) {
                      setActiveTech(null);
                      if (timelineRef.current && nodesTimelineRef.current && isPlaying) {
                        gsap.to(timelineRef.current, { timeScale: 1, duration: 0.3 });
                        gsap.to(nodesTimelineRef.current, { timeScale: 1, duration: 0.3 });
                      }
                    }
                  }}
                  className={`cursor-pointer px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center gap-1 sm:gap-1.5 font-semibold shadow-sm touch-manipulation ${
                    isHovered
                      ? "bg-red-600 text-white scale-110 sm:scale-125 shadow-lg shadow-red-600/40 border-red-600 z-30"
                      : "bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-red-400 hover:text-red-600 dark:hover:text-red-400"
                  }`}
                >
                  <span className={isHovered ? "text-white" : ""}>
                    {getTechIcon(tech.iconType)}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-tight whitespace-nowrap">
                    {tech.name}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
