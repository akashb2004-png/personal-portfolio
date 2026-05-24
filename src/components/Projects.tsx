"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./About";

const projects = [
  {
    index: "01",
    name: "Bidly",
    tagline: "Cloud-native auction platform",
    description:
      "Scalable microservices auction platform (FastAPI, Docker, Kubernetes) with real-time async via WebSocket & RabbitMQ. Integrated Stripe and Twilio for payments and notifications.",
    tech: ["FastAPI", "Docker", "Kubernetes", "RabbitMQ", "WebSocket", "Stripe", "Twilio"],
    award: true,
    period: "Jan – Apr 2026",
    github: "https://github.com/akashb2004-png/Bidly",
  },
  {
    index: "02",
    name: "ESMOS",
    tagline: "Healthcare multi-cloud migration",
    description:
      "Multi-cloud Kubernetes on Azure AKS — zero-downtime migration of Odoo ERP, Moodle LMS, OCA Helpdesk. Cross-cloud AWS telemetry + full DevSecOps CI/CD. ~$55/month.",
    tech: ["Kubernetes", "Azure AKS", "AWS", "Terraform", "Docker", "Chaos Engineering"],
    award: true,
    period: "Jan – May 2026",
    github: "https://github.com/akashb2004-png/IS214ESM_M3",
  },
  {
    index: "03",
    name: "FxSafe",
    tagline: "EasyA × Ripple Hackathon",
    description:
      "Decentralised FX app on the XRPL testnet for migrant workers. Automated currency conversion, real-time transaction feedback. Built with Next.js, TypeScript, XRPL.js SDK.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "XRPL.js", "Node.js"],
    period: "Jun 2025",
    github: "https://github.com/akashb2004-png/fxsafe",
  },
  {
    index: "04",
    name: "FitU",
    tagline: "AI-powered fitness platform",
    description:
      "Full-stack fitness platform with scheduling, workout planning, nutrition tracking, and a 3D virtual gym. Gemini AI for personalised recommendations.",
    tech: ["Vue.js", "Node.js", "Firebase", "Bootstrap", "Gemini AI"],
    period: "Aug – Dec 2025",
    github: "https://github.com/akashb2004-png/FitU",
  },
  {
    index: "05",
    name: "Hatch",
    tagline: "UX & product design",
    description:
      "End-to-end UX and product design for a baby memory platform. Memory Timeline, Milestone Prompts, smart tag-based organisation, Duplicate Media detection.",
    tech: ["Figma", "UX Research", "Prototyping", "Product Design"],
    period: "Aug – Dec 2025",
  },
  {
    index: "06",
    name: "Staffing Optimizer",
    tagline: "Decision model for institutional planning",
    description:
      "Excel-based model using institutional data to forecast enrolment, staffing, and operating costs. Regression analysis, Monte Carlo Simulation, Excel Solver + VBA automation.",
    tech: ["Excel VBA", "Regression Analysis", "Monte Carlo", "Solver"],
    period: "Aug – Dec 2025",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-20 px-6" style={{ background: "var(--bg-alt)", borderBottom: "var(--border)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Projects</SectionLabel>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="neo-card flex flex-col overflow-hidden"
                style={{ background: "var(--bg)" }}
              >
                {/* Top bar */}
                <div
                  className="px-4 py-3 flex items-center justify-between"
                  style={{ borderBottom: "var(--border)", background: p.award ? "var(--accent)" : "var(--fg)" }}
                >
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: p.award ? "var(--fg)" : "white" }}>
                    {p.award ? "★ Award Nominee" : "SMU Project"}
                  </span>
                  <span className="font-bold text-lg" style={{ color: p.award ? "var(--fg)" : "rgba(255,255,255,0.3)" }}>
                    {p.index}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <div>
                    <h3 className="font-bold text-lg leading-tight mb-1" style={{ color: "var(--fg)" }}>
                      {p.name}
                    </h3>
                    <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                      {p.tagline}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-bold px-2 py-0.5"
                        style={{ border: "var(--border-thin)", color: "var(--fg)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div
                  className="px-5 py-3 flex items-center justify-between"
                  style={{ borderTop: "var(--border)" }}
                >
                  <span className="text-xs font-bold font-mono" style={{ color: "var(--muted)" }}>
                    {p.period}
                  </span>
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide transition-all duration-150 px-3 py-1.5"
                      style={{ border: "var(--border-thin)", color: "var(--fg)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "2px 2px 0 var(--fg)";
                        (e.currentTarget as HTMLElement).style.transform = "translate(-1px,-1px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                        (e.currentTarget as HTMLElement).style.transform = "none";
                      }}
                    >
                      GitHub <ArrowUpRight size={11} />
                    </a>
                  ) : (
                    <span className="text-xs font-bold" style={{ color: "var(--muted)" }}>No repo</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
