"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./About";

export default function CommunityService() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="community" className="py-20 px-6" style={{ background: "var(--bg)", borderBottom: "var(--border)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Community</SectionLabel>

          <div className="neo-card overflow-hidden max-w-3xl" style={{ background: "var(--bg-alt)" }}>
            <div className="px-6 py-5 flex flex-wrap items-start justify-between gap-4" style={{ borderBottom: "var(--border)", background: "var(--fg)" }}>
              <div>
                <p className="font-bold text-base" style={{ color: "var(--accent)" }}>Project Luminaire 12</p>
                <p className="font-bold text-sm text-white mt-0.5">Logistics Member</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold uppercase px-2 py-1" style={{ background: "var(--accent)", color: "var(--fg)" }}>
                  Oct 2024 – Jun 2025
                </span>
                <p className="text-xs font-bold uppercase mt-1 text-white">Zambales, Philippines</p>
              </div>
            </div>
            <div className="px-6 py-5 grid sm:grid-cols-2 gap-3">
              {[
                "Installed solar-powered lights with Liter of Light, enhancing energy access for underserved communities.",
                "Taught multiple subjects to elementary students through interactive, grade-level lessons.",
                "Offered a school feeding programme by preparing meals to promote student health and attendance.",
                "Collaborated with 24 volunteers on community service and cultural exchange initiatives.",
              ].map((b, i) => (
                <div key={i} className="flex gap-2 text-sm leading-relaxed">
                  <span className="font-bold flex-shrink-0" style={{ color: "var(--accent)", WebkitTextStroke: "0.5px var(--fg)" }}>—</span>
                  <span style={{ color: "var(--muted)" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
