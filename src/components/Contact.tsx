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
import ClassyCard from "./ClassyCard";

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
          particleCount: 75,
          spread: 65,
          origin: { y: 0.6 },
          colors: ["#dc2626", "#ef4444", "#f87171", "#10b981", "#1e293b"],
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
        <span className="text-xs font-mono text-red-700 uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 border border-red-200">
          Inquiries & Collaboration
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-4">
          Let&apos;s Connect & Build Together
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Whether you have an engineering opening, technical consultation, or enterprise collaboration — feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Cards & Channels */}
        <div className="lg:col-span-5 space-y-4">
          {/* Direct Email Card */}
          <ClassyCard
            delay={100}
            className="glass-panel p-6 border border-slate-200 hover:border-red-500/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/50">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Direct Email</span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="block text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, "email")}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </ClassyCard>

          {/* Direct Phone Card */}
          <ClassyCard
            delay={160}
            className="glass-panel p-6 border border-slate-200 dark:border-slate-800 hover:border-red-500/40 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/50">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Direct Phone</span>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.rawPhone}`}
                    className="block text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors font-mono"
                  >
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, "phone")}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </ClassyCard>

          {/* Location Card */}
          <ClassyCard
            delay={220}
            className="glass-panel p-6 border border-slate-200 dark:border-slate-800"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Current Base</span>
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                  {PORTFOLIO_DATA.personal.location}
                </p>
              </div>
            </div>
          </ClassyCard>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-2xl p-4 border border-slate-200 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-500 flex items-center gap-3 group transition-all"
            >
              <Github className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">GitHub</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">@AkshayTelore</span>
              </div>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-2xl p-4 border border-slate-200 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-500 flex items-center gap-3 group transition-all"
            >
              <Linkedin className="w-5 h-5 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform" />
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">LinkedIn</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">Akshay Telore</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Message Form */}
        <div className="lg:col-span-7">
          <ClassyCard
            delay={120}
            className="glass-panel p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl relative"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-600 dark:text-red-400" />
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
              Drop a note below and I will reply to your email promptly.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-red-50/70 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/60 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Transmitted Successfully!</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>! I have received your message regarding &ldquo;{formData.subject || "Inquiry"}&rdquo; and will be in touch shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="text-xs font-mono text-red-600 dark:text-red-400 hover:underline underline-offset-4 font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-red-500 focus:bg-white dark:focus:bg-slate-800 text-base sm:text-sm transition-colors shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-red-500 focus:bg-white dark:focus:bg-slate-800 text-base sm:text-sm transition-colors shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5 font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-red-500 focus:bg-white dark:focus:bg-slate-800 text-base sm:text-sm transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5 font-semibold">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Akshay, I reviewed your work on Chotubot and DocuEsign..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-red-500 focus:bg-white dark:focus:bg-slate-800 text-base sm:text-sm transition-colors resize-none shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-semibold text-sm transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 active:scale-98 touch-manipulation"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </ClassyCard>
        </div>
      </div>
    </section>
  );
}
