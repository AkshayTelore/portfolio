"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 relative selection:bg-teal-500/30 selection:text-teal-200">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero onOpenChat={() => setIsChatOpen(true)} />

      {/* About Section & Education */}
      <About />

      {/* Career Experience Timeline */}
      <Experience />

      {/* Featured Projects (DocuEsign, AppyMinds Blog, Dextop Commerce) */}
      <Projects />

      {/* Skills Matrix */}
      <Skills />

      {/* Achievements, Sports & Leadership */}
      <Achievements />

      {/* Contact & Connect Form */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Interactive Corner AI Chatbot */}
      <ChatBot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </main>
  );
}
