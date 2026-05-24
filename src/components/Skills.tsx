"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./About";

const categories = [
  { label: "Languages", skills: ["Python", "JavaScript", "PHP", "HTML", "CSS", "SQL", "VBA"] },
  { label: "Frameworks", skills: ["FastAPI", "Flask", "React.js", "Vue.js", "Node.js", "Tailwind CSS", "Bootstrap", "Pandas"] },
  { label: "Tools", skills: ["Docker", "Kubernetes", "RabbitMQ", "Git", "WebSocket", "Tableau", "Figma", "Power BI"] },
  { label: "Cloud", skills: ["AWS", "Azure", "Firebase", "Vercel", "Google Cloud"] },
  { label: "Practices", skills: ["Agile / Scrum", "ITIL 4", "DevSecOps", "Requirements Engineering", "UAT", "Chaos Engineering"] },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-20 px-6" style={{ background: "var(--bg-alt)", borderBottom: "var(--border)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Skills</SectionLabel>

          <div className="space-y-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="grid md:grid-cols-5 gap-0 items-start"
                style={{ border: "var(--border)", boxShadow: "var(--shadow-sm)" }}
              >
                {/* Label */}
                <div
                  className="px-4 py-4 md:col-span-1 flex items-center"
                  style={{ background: "var(--fg)", borderRight: "var(--border)" }}
                >
                  <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--accent)" }}>
                    {cat.label}
                  </span>
                </div>

                {/* Pills */}
                <div className="md:col-span-4 px-4 py-3 flex flex-wrap gap-2" style={{ background: "var(--bg-alt)" }}>
                  {cat.skills.map((s, j) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.25, delay: i * 0.07 + j * 0.03 }}
                      className="text-xs font-bold px-3 py-1.5 cursor-default transition-all duration-100"
                      style={{ border: "var(--border-thin)", color: "var(--fg)", background: "var(--bg)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                        (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--bg)";
                        (e.currentTarget as HTMLElement).style.transform = "none";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      {s}
                    </motion.span>
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
