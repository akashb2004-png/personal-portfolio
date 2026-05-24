"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GithubIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const stats = [
  { value: "Dean's List", label: "AY25/26" },
  { value: "2×", label: "Dell Cloud Native Finalist" },
  { value: "6+", label: "Projects Shipped" },
  { value: "SMU", label: "Information Systems" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col pt-14"
      style={{ background: "var(--bg)", borderBottom: "var(--border)" }}
    >
      {/* Top announcement strip */}
      <div
        className="w-full px-6 py-2.5 flex items-center justify-between flex-shrink-0"
        style={{ background: "var(--accent)", borderBottom: "var(--border)" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: "var(--fg)", animation: "pulse 1.8s ease-in-out infinite" }}
          />
          <span className="text-xs font-bold tracking-widest uppercase">
            Open to Internships · Technology &amp; Financial Services
          </span>
        </div>
        <span className="text-xs font-bold tracking-widest uppercase hidden sm:block">Singapore · 2026</span>
      </div>

      {/* Main hero body */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-6 grid md:grid-cols-2 gap-8 items-center py-10 md:py-0">

        {/* LEFT: Text */}
        <div className="flex flex-col gap-7 order-2 md:order-1">

          {/* Name — each word on its own line */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-5" style={{ color: "var(--muted)" }}>
              Akash Vijay Bharadwaj
            </p>
            <h1
              className="font-bold tracking-tight leading-none"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              <div style={{ color: "var(--fg)", whiteSpace: "nowrap" }}>AKASH</div>
              <div
                style={{
                  color: "var(--fg)",
                  background: "var(--accent)",
                  display: "inline-block",
                  paddingRight: "8px",
                  whiteSpace: "nowrap",
                  marginTop: "2px",
                }}
              >
                VIJAY
              </div>
              <div style={{ color: "var(--fg)", whiteSpace: "nowrap", marginTop: "2px" }}>
                BHARADWAJ
              </div>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base font-medium leading-relaxed max-w-md"
            style={{ color: "var(--muted)" }}
          >
            Information Systems @ SMU · Business Analytics &amp; FinTech.
            Translating complex problems into structured solutions across data,
            systems, and stakeholders.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="neo-btn" style={{ background: "var(--fg)", color: "var(--bg)" }}>
              View Projects →
            </a>
            <a href="mailto:bharadwajakash65@gmail.com" className="neo-btn" style={{ background: "var(--accent)", color: "var(--fg)" }}>
              Email Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="flex items-center gap-3"
          >
            {[
              { icon: <GithubIcon />, label: "GitHub", href: "https://github.com/akashb2004-png" },
              { icon: <LinkedinIcon />, label: "LinkedIn", href: "https://www.linkedin.com/in/akash-bharadwaj-70a4b5214/" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-3 py-2 transition-all duration-100"
                style={{ border: "var(--border-thin)", color: "var(--fg)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                  (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                {s.icon} {s.label}
              </a>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-0"
            style={{ border: "var(--border)" }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="px-3 py-3 flex flex-col gap-0.5"
                style={{ borderRight: i < stats.length - 1 ? "var(--border-thin)" : "none" }}
              >
                <span className="text-base font-bold leading-none" style={{ color: "var(--fg)" }}>
                  {s.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Photo */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center md:justify-end order-1 md:order-2"
        >
          <div
            className="relative flex-shrink-0"
            style={{ width: "min(320px, 78vw)", aspectRatio: "3/4" }}
          >
            {/* Offset yellow block */}
            <div
              className="absolute inset-0"
              style={{
                background: "var(--accent)",
                border: "var(--border)",
                transform: "translate(10px, 10px)",
                zIndex: 0,
              }}
            />
            {/* Photo */}
            <div
              className="relative overflow-hidden"
              style={{
                border: "var(--border)",
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            >
              <Image
                src="/profile.png"
                alt="Akash Vijay Bharadwaj"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 78vw, 320px"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
