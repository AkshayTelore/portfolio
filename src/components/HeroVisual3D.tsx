"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RotateCw, Compass, Sparkles, Layers } from "lucide-react";

export default function HeroVisual3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotationDeg, setRotationDeg] = useState(0);
  const [isAutoOrbit, setIsAutoOrbit] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 420;
    const height = container.clientHeight || 420;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Main Group for 360 rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Outer Geodesic Icosahedron Cage - Titanium / Silver Steel
    const outerGeo = new THREE.IcosahedronGeometry(1.4, 2);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8, // refined slate titanium
      wireframe: true,
      transparent: true,
      opacity: 0.28,
      roughness: 0.2,
      metalness: 0.9,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // Inner Faceted Nucleus - Crimson Ruby
    const innerGeo = new THREE.OctahedronGeometry(0.85, 1);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0xdc2626, // crimson ruby red
      emissive: 0x7f1d1d,
      emissiveIntensity: 0.55,
      roughness: 0.18,
      metalness: 0.88,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // Concentric Orbit Rings - Ruby & Polished Steel
    const torusGeo1 = new THREE.TorusGeometry(1.15, 0.015, 16, 120);
    const torusMat1 = new THREE.MeshBasicMaterial({
      color: 0xef4444, // bright radiant ruby
      transparent: true,
      opacity: 0.75,
    });
    const torus1 = new THREE.Mesh(torusGeo1, torusMat1);
    torus1.rotation.x = Math.PI / 3;
    mainGroup.add(torus1);

    const torusGeo2 = new THREE.TorusGeometry(1.25, 0.012, 16, 120);
    const torusMat2 = new THREE.MeshBasicMaterial({
      color: 0x94a3b8, // silver steel
      transparent: true,
      opacity: 0.55,
    });
    const torus2 = new THREE.Mesh(torusGeo2, torusMat2);
    torus2.rotation.y = Math.PI / 3.5;
    mainGroup.add(torus2);

    // Orbiting Satellites (Refined Modern Palette)
    const satelliteGroup = new THREE.Group();
    mainGroup.add(satelliteGroup);

    const satelliteColors = [0xdc2626, 0xef4444, 0x10b981, 0xf97316, 0x334155];
    satelliteColors.forEach((color, i) => {
      const satGeo = new THREE.SphereGeometry(0.075, 16, 16);
      const satMat = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.7,
        roughness: 0.3,
        metalness: 0.8,
      });
      const sat = new THREE.Mesh(satGeo, satMat);
      const angle = (i / satelliteColors.length) * Math.PI * 2;
      const radius = 1.72;
      sat.position.set(
        Math.cos(angle) * radius,
        (Math.sin(angle * 2) * radius) / 3.2,
        Math.sin(angle) * radius
      );
      satelliteGroup.add(sat);
    });

    // Ambient Floating Micro-Particles
    const particleCount = 100;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 1.8 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = r * Math.cos(phi);
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.03,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0x3b82f6, 2.8, 12);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x64748b, 1.8, 10);
    fillLight.position.set(-3, -2, -2);
    scene.add(fillLight);

    // Mouse & Touch Drag Interaction State
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;
    let currentRotationY = 0;
    let currentRotationX = 0;
    const autoOrbitSpeed = 0.005;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      previousMouseX = clientX;
      previousMouseY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - previousMouseX;
      const deltaY = clientY - previousMouseY;

      targetRotationY += deltaX * 0.01;
      targetRotationX += deltaY * 0.007;

      targetRotationX = Math.max(-0.7, Math.min(0.7, targetRotationX));

      previousMouseX = clientX;
      previousMouseY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 400);
    };

    const domElement = renderer.domElement;
    domElement.style.cursor = "grab";
    domElement.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    domElement.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!isDragging && isAutoOrbit) {
        targetRotationY += autoOrbitSpeed;
      }

      // Smooth damping interpolation
      currentRotationY += (targetRotationY - currentRotationY) * 0.07;
      currentRotationX += (targetRotationX - currentRotationX) * 0.07;

      mainGroup.rotation.y = currentRotationY;
      mainGroup.rotation.x = currentRotationX;

      outerMesh.rotation.z = elapsedTime * 0.12;
      innerMesh.rotation.y = -elapsedTime * 0.28;
      torus1.rotation.z = elapsedTime * 0.2;
      torus2.rotation.z = -elapsedTime * 0.15;
      satelliteGroup.rotation.y = elapsedTime * 0.35;
      particles.rotation.y = elapsedTime * 0.04;

      const pulse = 1 + Math.sin(elapsedTime * 1.8) * 0.03;
      innerMesh.scale.set(pulse, pulse, pulse);

      const deg = Math.round(
        ((((currentRotationY % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) * 180) / Math.PI
      );
      setRotationDeg(deg);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      domElement.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      domElement.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      torusGeo1.dispose();
      torusMat1.dispose();
      torusGeo2.dispose();
      torusMat2.dispose();
    };
  }, [isAutoOrbit]);

  return (
    <div className="relative w-full aspect-square max-w-[380px] sm:max-w-[440px] mx-auto flex items-center justify-center select-none group">
      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center"
      />

      {/* Subtle Background Radial Ring */}
      <div className="absolute inset-4 rounded-full border border-red-500/15 pointer-events-none animate-pulse-slow" />
      <div className="absolute inset-10 rounded-full border border-slate-200 pointer-events-none" />

      {/* Floating 360° HUD Badge */}
      <div className="absolute top-2 left-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-slate-200 backdrop-blur-md text-[11px] font-mono text-slate-700 shadow-md">
        <Compass className={`w-3.5 h-3.5 ${isInteracting ? "text-red-600 animate-spin" : "text-red-600"}`} />
        <span>360° Architecture View</span>
        <span className="text-slate-300">|</span>
        <span className="text-slate-900 font-bold">{rotationDeg}°</span>
      </div>

      {/* Interactive Controls Overlay */}
      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
        <span className="text-[10px] font-mono text-slate-500 px-2.5 py-1 rounded-lg bg-white/95 border border-slate-200 backdrop-blur-sm shadow-sm">
          Drag to rotate
        </span>
        <button
          type="button"
          onClick={() => setIsAutoOrbit(!isAutoOrbit)}
          className="pointer-events-auto text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-red-600 flex items-center gap-1.5 transition-colors shadow-sm"
        >
          <RotateCw className={`w-3 h-3 ${isAutoOrbit ? "animate-spin text-red-600" : "text-slate-400"}`} />
          <span>{isAutoOrbit ? "Auto-Orbit" : "Paused"}</span>
        </button>
      </div>

      {/* Floating Stack Pills */}
      <div className="hidden sm:flex absolute -right-2 top-8 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-red-200 text-xs font-mono text-red-700 shadow-lg backdrop-blur-md animate-float">
        <Sparkles className="w-3.5 h-3.5 text-red-600" />
        <span>Next.js • Supabase • Flutter</span>
      </div>

      <div
        className="hidden sm:flex absolute -left-4 bottom-14 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-slate-200 text-xs font-mono text-slate-700 shadow-lg backdrop-blur-md animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <Layers className="w-3.5 h-3.5 text-red-600" />
        <span>DocuEsign • Chotubot.com</span>
      </div>
    </div>
  );
}
