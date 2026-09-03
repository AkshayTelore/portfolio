"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import profileImg from "@/assets/profile.jpg";

interface Logo3DProps {
  size?: "sm" | "md" | "lg";
  showStatus?: boolean;
}

export default function Logo3D({ size = "md", showStatus = true }: Logo3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // 3D tilt calculation
    const rotX = -(y / (rect.height / 2)) * 22;
    const rotY = (x / (rect.width / 2)) * 22;

    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${sizeClasses[size]} rounded-2xl select-none cursor-pointer`}
      style={{ perspective: "600px" }}
    >
      {/* 3D Transform Wrapper */}
      <div
        className="w-full h-full rounded-2xl transition-transform duration-200 ease-out relative group"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.08, 1.08, 1.08)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        }}
      >
        {/* Deep 3D Shadow Layer */}
        <div
          className="absolute inset-0 rounded-2xl bg-blue-600/30 blur-md transition-opacity duration-300"
          style={{
            transform: "translateZ(-14px)",
            opacity: isHovered ? 0.9 : 0.45,
          }}
        />

        {/* 3D Beveled Outer Metallic Rim */}
        <div
          className="absolute -inset-[2px] rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-sky-400 p-[2px] shadow-lg transition-all duration-300"
          style={{
            transform: "translateZ(-4px)",
          }}
        >
          <div className="w-full h-full rounded-[14px] bg-slate-950" />
        </div>

        {/* Main Avatar Surface */}
        <div
          className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-white/15 shadow-inner"
          style={{
            transform: "translateZ(10px)",
          }}
        >
          <Image
            src={profileImg}
            alt="Akshay Pandurang Telore"
            width={90}
            height={90}
            priority
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />

          {/* Dynamic 3D Holographic Glare Sheen */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-200 bg-gradient-to-tr from-transparent via-white/25 to-transparent"
            style={{
              opacity: isHovered ? 0.7 : 0.15,
              transform: `translate(${rotation.y * 1.5}%, ${rotation.x * 1.5}%)`,
            }}
          />

          {/* Inner Vignette */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/20" />
        </div>

        {/* Floating 3D Corner Pulse Status Dot */}
        {showStatus && (
          <div
            className="absolute -bottom-1 -right-1 z-20 flex h-3.5 w-3.5"
            style={{
              transform: "translateZ(20px)",
            }}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 ring-2 ring-slate-950"></span>
          </div>
        )}
      </div>
    </div>
  );
}
