"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./About";

const experiences = [
  {
    role: "Business Analyst Intern",
    company: "NTT Data",
    period: "May 2026 – Present",
    bullets: [
      "Spearheaded comprehensive requirements engineering sessions for large-scale enterprise systems, working closely with technical stakeholders to map out integration touchpoints, API structures, and data workflows while building strong client relationships.",
      "Designed and implemented an AI-powered rapid prototyping process to develop and launch a fully functional Next.js web application on Vercel, completing the entire delivery within a 24-hour window.",
      "Streamlined product validation processes by pioneering a fast-paced, locally driven prototyping approach that removed conventional delivery barriers and achieved swift alignment with client expectations.",
      "Led presales activities and requirements scoping, converting complex client objectives into well-defined project specifications and rapid demonstrations to drive business development and secure new opportunities.",
    ],
  },
  {
    role: "Project Management Intern",
    company: "Anchanto Pte Ltd",
    period: "Jun – Jul 2021",
    bullets: [
      "Automated platform delivery reports using VBA, revamping efficiency and accuracy in tracking project outcomes.",
      "Revamped business templates to streamline reporting and internal documentation.",
      "Set up and managed Confluence spaces to support platform delivery and cross-team collaboration.",
      "Facilitated project management tasks including coordination, documentation, and ad-hoc operational support.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-20 px-6" style={{ background: "var(--bg)", borderBottom: "var(--border)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Work Experience</SectionLabel>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="neo-card p-0 overflow-hidden"
                style={{ background: "var(--bg-alt)" }}
              >
                {/* Header */}
                <div className="px-5 py-4" style={{ borderBottom: "var(--border)", background: "var(--fg)" }}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-bold text-base leading-tight" style={{ color: "var(--accent)" }}>
                        {exp.company}
                      </p>
                      <p className="font-bold text-sm mt-0.5" style={{ color: "white" }}>
                        {exp.role}
                      </p>
                    </div>
                    <span
                      className="text-xs font-bold tracking-wide uppercase flex-shrink-0 px-2 py-1"
                      style={{ background: "var(--accent)", color: "var(--fg)", border: "1px solid var(--fg)" }}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>
                {/* Bullets */}
                <div className="px-5 py-4 space-y-2">
                  {exp.bullets.map((b, j) => (
                    <div key={j} className="flex gap-3 text-sm leading-relaxed">
                      <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: "var(--accent)", WebkitTextStroke: "0.5px var(--fg)" }}>—</span>
                      <span style={{ color: "var(--muted)" }}>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
