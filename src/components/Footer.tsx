export default function Footer() {
  return (
    <footer
      className="px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ background: "var(--fg)", borderTop: "var(--border)" }}
    >
      <p className="text-sm font-bold" style={{ color: "var(--accent)" }}>
        AKASH BHARADWAJ
      </p>
      <p className="text-xs font-bold tracking-widest uppercase font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
        Singapore · {new Date().getFullYear()} · Built with Next.js
      </p>
    </footer>
  );
}
