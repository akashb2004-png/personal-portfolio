"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./About";

const roles = [
  {
    role: "Research Director",
    org: "SMU Fintech Club",
    period: "Jan 2025 – May 2026",
    bullets: [
      "Led a team of research analysts in FinTech domains — Payments & Settlements, Open Banking, Wealth Management, Web 3.0 & DeFi.",
      "Spearheaded strategic planning and member engagement, significantly expanding industry collaborations.",
    ],
  },
  {
    role: "Public Relations Executive",
    org: "SMU Ellipsis",
    period: "Jan – Dec 2025",
    bullets: [
      "Primary liaison with corporate partners, securing sponsorships and collaborations for club events.",
      "Built and maintained long-term sponsor relationships; managed prospectus prep and event communication.",
    ],
  },
  {
    role: "Mentor",
    org: "SMU Coders Assembly",
    period: "Aug – Dec 2025",
    bullets: [
      "Mentored 7 freshmen with no prior programming experience in Python fundamentals.",
      "100% of mentees achieved A– and above.",
    ],
  },
];

export default function Leadership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leadership" className="py-20 px-6" style={{ background: "var(--bg)", borderBottom: "var(--border)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Leadership</SectionLabel>

          <div className="grid md:grid-cols-3 gap-6">
            {roles.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="neo-card overflow-hidden"
                style={{ background: "var(--bg-alt)" }}
              >
                <div className="px-5 py-4" style={{ borderBottom: "var(--border)", background: "var(--fg)" }}>
                  <p className="font-bold text-sm" style={{ color: "var(--accent)" }}>{r.org}</p>
                  <p className="font-bold text-base mt-0.5 text-white">{r.role}</p>
                  <span
                    className="inline-block mt-2 text-xs font-bold uppercase px-2 py-0.5"
                    style={{ background: "var(--accent)", color: "var(--fg)" }}
                  >
                    {r.period}
                  </span>
                </div>
                <div className="px-5 py-4 space-y-2">
                  {r.bullets.map((b, j) => (
                    <div key={j} className="flex gap-2 text-sm leading-relaxed">
                      <span className="flex-shrink-0 font-bold" style={{ color: "var(--accent)", WebkitTextStroke: "0.5px var(--fg)" }}>—</span>
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
