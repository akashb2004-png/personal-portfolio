"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-0 mb-12">
      <span
        className="text-xs font-bold tracking-[0.3em] uppercase px-3 py-2"
        style={{ background: "var(--accent)", border: "var(--border)", color: "var(--fg)" }}
      >
        {children}
      </span>
      <div className="flex-1" style={{ borderTop: "var(--border-thin)" }} />
    </div>
  );
}

const achievements = [
  { label: "Dean's List AY25/26", sub: "Academic Excellence" },
  { label: "Dell Cloud Native Award Finalist", sub: "×2 · IS213 & IS214" },
];

const education = [
  { label: "Degree", value: "BSc Information Systems" },
  { label: "Tracks", value: "Business Analytics · FinTech" },
  { label: "Duration", value: "Aug 2024 – Apr 2028" },
];

const modules = [
  "Business Process Analysis & Solutioning",
  "Enterprise Solution Development",
  "Enterprise Solution Management",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="py-20 px-6"
      style={{ background: "var(--bg-alt)", borderBottom: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>About</SectionLabel>

          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* LEFT: Bio + Achievements */}
            <div className="space-y-7">
              <h2
                className="font-bold leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--fg)", lineHeight: 1 }}
              >
                BUILDING AT THE
                <br />
                <span style={{ background: "var(--accent)" }}>&nbsp;INTERSECTION&nbsp;</span>
                <br />
                OF TECH + BUSINESS
              </h2>

              <p className="text-base font-medium leading-relaxed" style={{ color: "var(--muted)" }}>
                Junior at Singapore Management University studying Information
                Systems with a dual track in Business Analytics and FinTech. I
                sit at the intersection of technology and business — translating
                complex problems into structured solutions across data, systems,
                and stakeholders.
              </p>

              <p className="text-base font-medium leading-relaxed" style={{ color: "var(--muted)" }}>
                Whether analysing data, defining requirements, or shaping product
                direction — I care about clarity, rigour, and impact. Open to
                internships in{" "}
                <strong style={{ color: "var(--fg)" }}>
                  technology and financial services
                </strong>
                .
              </p>

              {/* Achievements */}
              <div>
                <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: "var(--muted)" }}>
                  Achievements
                </p>
                <div className="space-y-3">
                  {achievements.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                      className="flex items-center gap-3 px-4 py-3"
                      style={{
                        border: "var(--border)",
                        background: "var(--bg)",
                        boxShadow: "var(--shadow-sm)",
                      }}
                    >
                      <span
                        className="text-lg font-bold flex-shrink-0"
                        style={{ color: "var(--accent)", WebkitTextStroke: "1px var(--fg)" }}
                      >
                        ★
                      </span>
                      <div>
                        <p className="font-bold text-sm" style={{ color: "var(--fg)" }}>
                          {a.label}
                        </p>
                        <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                          {a.sub}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Education + Modules */}
            <div className="space-y-6">

              {/* Education card */}
              <div className="neo-card overflow-hidden" style={{ background: "var(--bg)" }}>
                <div className="px-5 py-4" style={{ background: "var(--fg)", borderBottom: "var(--border)" }}>
                  <p className="text-sm font-bold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
                    Singapore Management University
                  </p>
                </div>
                {education.map((h, i) => (
                  <div
                    key={h.label}
                    className="flex items-center justify-between px-5 py-4"
                    style={{ borderBottom: i < education.length - 1 ? "var(--border-thin)" : "none" }}
                  >
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                      {h.label}
                    </span>
                    <span className="text-sm font-bold text-right" style={{ color: "var(--fg)" }}>
                      {h.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* A+ Modules */}
              <div className="neo-card overflow-hidden" style={{ background: "var(--bg)" }}>
                <div className="px-5 py-3" style={{ background: "var(--fg)", borderBottom: "var(--border)" }}>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                    A+ Modules
                  </p>
                </div>
                {modules.map((m, i) => (
                  <div
                    key={m}
                    className="flex items-start gap-3 px-5 py-4"
                    style={{ borderBottom: i < modules.length - 1 ? "var(--border-thin)" : "none" }}
                  >
                    <span className="font-bold flex-shrink-0" style={{ color: "var(--accent)", WebkitTextStroke: "0.5px var(--fg)" }}>→</span>
                    <span className="text-sm font-medium" style={{ color: "var(--fg)" }}>{m}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
