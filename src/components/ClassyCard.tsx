"use client";

import React, { useRef, useState, useEffect, ReactNode } from "react";

interface ClassyCardProps {
  children: ReactNode;
  className?: string;
  enableTilt?: boolean;
  spotlightColor?: string;
  delay?: number;
  id?: string;
  onClick?: () => void;
}

export default function ClassyCard({
  children,
  className = "",
  enableTilt = true,
  spotlightColor = "rgba(239, 68, 68, 0.08)",
  delay = 0,
  id,
  onClick,
}: ClassyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [tilt, setTilt] = useState<{ rotX: number; rotY: number }>({ rotX: 0, rotY: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Viewport intersection observer for classy scroll-in reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Gentle, classy tilt limit (max 3.5 degrees)
      const rotX = -((y - centerY) / centerY) * 3.5;
      const rotY = ((x - centerX) / centerX) * 3.5;
      setTilt({ rotX, rotY });
    }
  };

  const handleMouseLeave = () => {
    setMousePos(null);
    setTilt({ rotX: 0, rotY: 0 });
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-3xl transition-all duration-700 ease-out ${className}`}
      style={{
        perspective: "1000px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? `translateY(0) scale(1) rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg)`
          : "translateY(28px) scale(0.985)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Top subtle metallic shimmer edge */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Dynamic Cursor Spotlight Radial Glow */}
      {mousePos && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 80%)`,
          }}
        />
      )}

      {/* Subtle Border Spotlight Reflection */}
      {mousePos && (
        <div
          className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.35), transparent 70%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}

      {/* Card Content with Z-elevation */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
