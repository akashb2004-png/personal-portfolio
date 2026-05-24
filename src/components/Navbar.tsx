"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Leadership", href: "#leadership", id: "leadership" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      style={{
        background: "var(--bg)",
        borderBottom: "var(--border)",
        boxShadow: scrolled ? "0 4px 0 #0A0A0A" : "none",
        transition: "box-shadow 0.2s",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#hero"
          className="text-sm font-bold tracking-tight flex-shrink-0"
          style={{ color: "var(--fg)" }}
        >
          AKASH<span style={{ color: "var(--accent)", WebkitTextStroke: "1px var(--fg)" }}>.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-stretch h-14 gap-0">
          {links.map((l) => {
            const isActive = activeSection === l.id;
            return (
              <li key={l.label} className="flex items-stretch">
                <a
                  href={l.href}
                  className="flex items-center px-4 text-xs font-bold tracking-widest uppercase transition-colors duration-100"
                  style={{
                    color: isActive ? "var(--fg)" : "var(--muted)",
                    background: isActive ? "var(--accent)" : "transparent",
                    borderLeft: "var(--border-thin)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--fg)";
                    (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = isActive ? "var(--fg)" : "var(--muted)";
                    (e.currentTarget as HTMLElement).style.background = isActive ? "var(--accent)" : "transparent";
                  }}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hire Me CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-2 flex-shrink-0 transition-all duration-100"
          style={{
            background: "var(--accent)",
            border: "var(--border)",
            color: "var(--fg)",
            boxShadow: "var(--shadow-sm)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "none";
            (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
          }}
        >
          Hire Me →
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 flex-shrink-0"
          style={{ border: "var(--border-thin)", color: "var(--fg)" }}
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "var(--bg)", borderBottom: "var(--border)" }}
          >
            <ul className="px-6 py-0">
              {links.map((l) => {
                const isActive = activeSection === l.id;
                return (
                  <li key={l.label} style={{ borderBottom: "var(--border-thin)" }}>
                    <a
                      href={l.href}
                      className="text-xs font-bold tracking-widest uppercase block py-4"
                      style={{ color: isActive ? "var(--accent)" : "var(--fg)" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
              <li className="py-4">
                <a
                  href="#contact"
                  className="neo-btn w-full justify-center"
                  style={{ background: "var(--accent)", color: "var(--fg)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Hire Me →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
