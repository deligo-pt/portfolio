"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#journey", label: "Journey" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#codex", label: "Codex" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close the menu when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 921px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="nav-wrap">
      <nav className="nav">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="mark">M</span>
          <span>Meskat</span>
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="#contact">
          Hire Me
        </a>
        <button
          className="nav-burger icon-tile"
          style={{
            width: 34,
            height: 34,
            background: "none",
            boxShadow: "inset 0 0 0 1px var(--border-10)",
            color: "var(--text)",
          }}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            style={{
              width: 18,
              height: 18,
              stroke: "currentColor",
              strokeWidth: 2,
              fill: "none",
            }}
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="nav-menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className="nav-menu-cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </div>
  );
}
