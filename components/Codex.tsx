// Cityscape skyline bar heights — verbatim from the design's inline skyline
// script. The bars are static (heights set once, no animation), so they render
// directly server-side rather than via client JS.
const SKYLINE = [
  42, 58, 35, 72, 50, 88, 46, 64, 38, 80, 55, 92, 48, 70, 40, 84, 52, 60, 44,
  76, 50, 66, 36, 82, 58,
];

export default function Codex() {
  return (
    <section
      className="block wrap"
      id="codex"
      data-screen-label="Codex IT Service"
    >
      <div className="section-head">
        <span className="eyebrow">CODEX IT SERVICE</span>
        <h2>Building the future with Codex IT Service</h2>
        <p className="sub">
          Mission: deliver innovative software solutions that help businesses
          scale faster.
        </p>
      </div>

      <div className="svc-chart">
        <div className="panel">
          <div className="glow"></div>
          <div className="grid-lines"></div>
          <div className="skyline" id="skyline">
            {SKYLINE.map((h, i) => (
              <div key={i} className="bar" style={{ height: `${h}%` }} />
            ))}
          </div>
          <span className="clabel" style={{ left: "14%", top: "34%" }}>
            API
          </span>
          <span className="clabel" style={{ left: "30%", top: "24%" }}>
            DB
          </span>
          <span className="clabel" style={{ left: "50%", top: "18%" }}>
            CDN
          </span>
          <span className="clabel" style={{ left: "68%", top: "28%" }}>
            Auth
          </span>
          <span className="clabel" style={{ left: "84%", top: "38%" }}>
            Queue
          </span>
        </div>
      </div>

      <div className="svc-grid">
        <div className="svc-item">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" />
            </svg>
          </div>
          <span>Custom Software Development</span>
        </div>
        <div className="svc-item">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="14" rx="2" />
              <path d="M3 9h18M8 21h8" />
            </svg>
          </div>
          <span>Web Application Development</span>
        </div>
        <div className="svc-item">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
              <circle cx="12" cy="9" r="2" />
            </svg>
          </div>
          <span>SaaS Solutions</span>
        </div>
        <div className="svc-item">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>
          <span>UI/UX Design</span>
        </div>
        <div className="svc-item">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" />
            </svg>
          </div>
          <span>API Development</span>
        </div>
        <div className="svc-item">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
              <path d="M2 3h3l2.5 13h10l2-9H6" />
            </svg>
          </div>
          <span>E-commerce Solutions</span>
        </div>
        <div className="svc-item">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
            </svg>
          </div>
          <span>Business Automation</span>
        </div>
      </div>
    </section>
  );
}
