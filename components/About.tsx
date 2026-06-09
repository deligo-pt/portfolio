export default function About() {
  return (
    <section className="block wrap" id="about" data-screen-label="About">
      <div className="section-head">
        <span className="eyebrow">ABOUT</span>
        <h2>
          Engineer, <span className="grad">It Manager</span>, team builder.
        </h2>
        <p className="sub">
          Meskat is a passionate Full Stack Software Engineer specializing in
          MERN Stack development. His journey started with a deep passion for
          building web apps and evolved into Managing Codex IT Service, where he
          leads technology and product.
        </p>
      </div>

      <div className="skill-grid">
        <div className="skill-card">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <path d="M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" />
            </svg>
          </div>
          <h3>Full Stack Development</h3>
          <p>End-to-end product engineering across React, Node, and MongoDB.</p>
        </div>

        <div className="skill-card">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="5" rx="1.5" />
              <rect x="3" y="11" width="18" height="5" rx="1.5" />
              <path d="M7 6.5h.01M7 13.5h.01" />
            </svg>
          </div>
          <h3>SaaS Development</h3>
          <p>Multi-tenant apps with billing, auth, and analytics baked in.</p>
        </div>

        <div className="skill-card">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01" />
            </svg>
          </div>
          <h3>Enterprise Applications</h3>
          <p>Modular systems built for reliability and long-term scale.</p>
        </div>

        <div className="skill-card">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" />
            </svg>
          </div>
          <h3>API Development</h3>
          <p>Clean, documented REST APIs powering web and mobile clients.</p>
        </div>

        <div className="skill-card">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <rect x="9" y="3" width="6" height="6" rx="1" />
              <rect x="3" y="15" width="6" height="6" rx="1" />
              <rect x="15" y="15" width="6" height="6" rx="1" />
              <path d="M12 9v3M6 15v-2h12v2" />
            </svg>
          </div>
          <h3>System Architecture</h3>
          <p>Designing systems that hold up at 10x traffic and team size.</p>
        </div>

        <div className="skill-card">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <circle cx="9" cy="8" r="3" />
              <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5M16 4a3 3 0 010 7M18 20c0-2.4-1.2-4-3-4.6" />
            </svg>
          </div>
          <h3>Technical Leadership</h3>
          <p>Coaching engineers, raising the bar, and shipping with intent.</p>
        </div>

        <div className="skill-card">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <path d="M4 20l6-6M14 4c4 0 6 2 6 6 0 5-5 8-9 9-1-3-2-4-5-5 1-4 4-9 9-9z" />
              <circle cx="15" cy="9" r="1.4" />
            </svg>
          </div>
          <h3>Startup Building</h3>
          <p>From first commit to first hire — building Codex IT Service.</p>
        </div>
      </div>
    </section>
  );
}
