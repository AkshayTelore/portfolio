"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // graceful fallback
      }
    }, 700);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40">
          Inquiries & Collaboration
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
          Let&apos;s Connect & Build Together
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Whether you have an engineering opening, technical consultation, or enterprise collaboration — feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Cards & Channels */}
        <div className="lg:col-span-5 space-y-4">
          {/* Direct Email Card */}
          <div className="glass-panel rounded-3xl p-6 border border-slate-800/90 hover:border-blue-500/40 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">Direct Email</span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="block text-sm sm:text-base font-semibold text-white hover:text-blue-300 transition-colors"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, "email")}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Direct Phone Card */}
          <div className="glass-panel rounded-3xl p-6 border border-slate-800/90 hover:border-blue-500/40 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">Direct Phone</span>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.rawPhone}`}
                    className="block text-sm sm:text-base font-semibold text-white hover:text-blue-300 transition-colors font-mono"
                  >
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, "phone")}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass-panel rounded-3xl p-6 border border-slate-800/90">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-slate-800/80 text-blue-400 border border-slate-700/80">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400">Current Base</span>
                <p className="text-sm sm:text-base font-semibold text-white">
                  {PORTFOLIO_DATA.personal.location}
                </p>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-2xl p-4 border border-slate-800 hover:border-slate-700 flex items-center gap-3 group transition-all"
            >
              <Github className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
              <div>
                <span className="text-xs text-slate-400 block font-mono">GitHub</span>
                <span className="text-sm font-semibold text-white">@AkshayTelore</span>
              </div>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-2xl p-4 border border-slate-800 hover:border-blue-500/40 flex items-center gap-3 group transition-all"
            >
              <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              <div>
                <span className="text-xs text-slate-400 block font-mono">LinkedIn</span>
                <span className="text-sm font-semibold text-white">Akshay Telore</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Message Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800/90 shadow-2xl relative">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Drop a note below and I will reply to your email promptly.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-blue-950/30 border border-blue-500/30 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Transmitted Successfully!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>! I have received your message regarding &ldquo;{formData.subject || "Inquiry"}&rdquo; and will be in touch shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="text-xs font-mono text-blue-400 hover:text-blue-300 underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject / Discussion Topic <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Full Stack Role / Project Architecture Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message Details <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share role specifics, project requirements, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
