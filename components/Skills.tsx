"use client";

import { useEffect, useRef } from "react";

// Rotating spherical tag cloud — "A rotating universe of craft."
// Ported verbatim from the design's sphere.js (Fibonacci point distribution +
// per-frame 3D rotation with depth-based scale/opacity/hue).
const TAGS = [
  "Next JS", "Redux", "Tailwind CSS", "Material UI", "Bootstrap", "Daisy UI",
  "Node.js", "Express.js", "REST API", "MongoDB", "JavaScript", "TypeScript",
  "Git", "GitHub", "Figma", "Vercel", "Netlify", "Chrome DevTools",
  "Leadership", "Problem Solving", "Team Management", "Communication", "Networking",
];

export default function Skills() {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = sphereRef.current;
    if (!root) return;

    type Pt = { el: HTMLSpanElement; x: number; y: number; z: number };
    const els: Pt[] = [];
    const N = TAGS.length;
    const R = 170;

    // distribute points on a sphere (Fibonacci)
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(-1 + (2 * i) / N);
      const theta = Math.sqrt(N * Math.PI) * phi;
      const el = document.createElement("span");
      el.className = "tag";
      el.textContent = TAGS[i];
      root.appendChild(el);
      els.push({
        el,
        x: R * Math.cos(theta) * Math.sin(phi),
        y: R * Math.sin(theta) * Math.sin(phi),
        z: R * Math.cos(phi),
      });
    }

    let rotX = 0, rotY = 0, velX = 0.0016, velY = 0.0042;
    let dragging = false, lx = 0, ly = 0;
    let raf = 0;

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      lx = e.clientX;
      ly = e.clientY;
      root.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lx, dy = e.clientY - ly;
      lx = e.clientX;
      ly = e.clientY;
      velY = dx * 0.0002;
      velX = -dy * 0.0002;
      rotY += dx * 0.005;
      rotX += -dy * 0.005;
    };
    const onPointerUp = () => { dragging = false; };

    root.addEventListener("pointerdown", onPointerDown);
    root.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    root.style.cursor = "grab";

    function frame() {
      if (!dragging) { rotX += velX; rotY += velY; }
      const cx = Math.cos(rotX), sx = Math.sin(rotX);
      const cy = Math.cos(rotY), sy = Math.sin(rotY);
      for (let i = 0; i < els.length; i++) {
        const p = els[i];
        // rotate Y
        const x1 = p.x * cy - p.z * sy;
        const z1 = p.x * sy + p.z * cy;
        // rotate X
        const y2 = p.y * cx - z1 * sx;
        const z2 = p.y * sx + z1 * cx;
        const scale = (R + z2) / (2 * R); // 0..1 depth
        const opacity = 0.25 + scale * 0.75;
        const fontSize = 11 + scale * 5;
        p.el.style.transform =
          "translate(-50%,-50%) translate(" + x1.toFixed(1) + "px," + y2.toFixed(1) + "px) scale(" + (0.7 + scale * 0.5).toFixed(2) + ")";
        p.el.style.opacity = opacity.toFixed(2);
        p.el.style.fontSize = fontSize.toFixed(1) + "px";
        p.el.style.zIndex = String(Math.round(scale * 100));
        // hue shift: nearer = brighter cyan, farther = violet tint
        p.el.style.color = scale > 0.55 ? "#00F5FF" : scale > 0.35 ? "#7fe9f2" : "#AF6EFF";
      }
      raf = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      cancelAnimationFrame(raf);
      root.removeEventListener("pointerdown", onPointerDown);
      root.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      for (const p of els) p.el.remove();
    };
  }, []);

  return (
    <section className="block wrap" id="skills" data-screen-label="Skills">
      <div className="section-head">
        <span className="eyebrow">SKILLS UNIVERSE</span>
        <h2>
          A <span className="grad">rotating universe</span> of craft.
        </h2>
        <p className="sub">
          Drag the sphere to explore the stack. Or browse the catalog by
          category.
        </p>
      </div>

      <div className="universe">
        <div className="sphere-wrap">
          <div id="sphere" ref={sphereRef}></div>
        </div>
        <div className="catalog">
          <div className="cat-card">
            <div className="cat-name">FRONTEND</div>
            <div className="cat-chips">
              <span className="chip">React JS</span>
              <span className="chip">Next JS</span>
              <span className="chip">Redux</span>
              <span className="chip">Tailwind CSS</span>
              <span className="chip">Material UI</span>
              <span className="chip">Bootstrap</span>
              <span className="chip">Daisy UI</span>
            </div>
          </div>
          <div className="cat-card">
            <div className="cat-name">BACKEND</div>
            <div className="cat-chips">
              <span className="chip">Node.js</span>
              <span className="chip">Express.js</span>
              <span className="chip">REST API</span>
            </div>
          </div>
          <div className="cat-card">
            <div className="cat-name">DATABASE</div>
            <div className="cat-chips">
              <span className="chip">MongoDB</span>
            </div>
          </div>
          <div className="cat-card">
            <div className="cat-name">LANGUAGES</div>
            <div className="cat-chips">
              <span className="chip">JavaScript</span>
              <span className="chip">TypeScript</span>
            </div>
          </div>
          <div className="cat-card">
            <div className="cat-name">TOOLS</div>
            <div className="cat-chips">
              <span className="chip">Git</span>
              <span className="chip">GitHub</span>
              <span className="chip">Figma</span>
              <span className="chip">Vercel</span>
              <span className="chip">Netlify</span>
              <span className="chip">Chrome DevTools</span>
            </div>
          </div>
          <div className="cat-card">
            <div className="cat-name">SOFT SKILLS</div>
            <div className="cat-chips">
              <span className="chip">Leadership</span>
              <span className="chip">Problem Solving</span>
              <span className="chip">Team Management</span>
              <span className="chip">Communication</span>
              <span className="chip">Networking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
