export default function Timeline() {
  return (
    <section className="block wrap" id="journey" data-screen-label="Journey">
      <div className="section-head">
        <span className="eyebrow">CAREER JOURNEY</span>
        <h2>From Developer to CEO</h2>
        <p className="sub">
          An immersive walk through the milestones that shaped the engineer and
          the IT.
        </p>
      </div>

      <div className="timeline" style={{ marginTop: 64 }}>
        {/* stage 1 (left) */}
        <div className="tl-row left">
          <div className="tl-node">
            <svg viewBox="0 0 24 24">
              <path d="M22 10L12 5 2 10l10 5 10-5z" />
              <path d="M6 12v5c0 1 2.7 2 6 2s6-1 6-2v-5" />
            </svg>
          </div>
          <div className="tl-card">
            <div className="stage">STAGE 01 · EDUCATION</div>
            <h3>Brainware University</h3>
            <p>B.Tech in Computer Science &amp; Engineering — AI &amp; ML.</p>
            <div className="chips">
              <span className="chip">AI</span>
              <span className="chip">Machine Learning</span>
              <span className="chip">Algorithms</span>
              <span className="chip">Data Structures</span>
            </div>
          </div>
        </div>

        {/* stage 2 (right) */}
        <div className="tl-row right">
          <div className="tl-node">
            <svg viewBox="0 0 24 24">
              <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" />
            </svg>
          </div>
          <div className="tl-card">
            <div className="stage">STAGE 02 · FULL STACK JOURNEY</div>
            <h3>Frontend → Backend → Architect</h3>
            <p>
              Climbed the stack — from pixels to systems. Specialized in the
              MERN ecosystem and modern React tooling.
            </p>
            <div className="chips">
              <span className="chip">JavaScript</span>
              <span className="chip">TypeScript</span>
              <span className="chip">React.js</span>
              <span className="chip">Next.js</span>
              <span className="chip">Redux</span>
              <span className="chip">Node.js</span>
              <span className="chip">Express.js</span>
              <span className="chip">MongoDB</span>
            </div>
          </div>
        </div>

        {/* stage 3 (left) */}
        <div className="tl-row left">
          <div className="tl-node">
            <svg viewBox="0 0 24 24">
              <path d="M4 20l6-6M14 4c4 0 6 2 6 6 0 5-5 8-9 9-1-3-2-4-5-5 1-4 4-9 9-9z" />
              <circle cx="15" cy="9" r="1.4" />
            </svg>
          </div>
          <div className="tl-card">
            <div className="stage">STAGE 03 · PROFESSIONAL GROWTH</div>
            <h3>Shipping at scale</h3>
            <p>
              Built scalable web apps, REST APIs, and led project teams to solve
              real-world business problems.
            </p>
            <div className="chips">
              <span className="chip">Scalable Apps</span>
              <span className="chip">REST APIs</span>
              <span className="chip">Team Lead</span>
              <span className="chip">System Design</span>
            </div>
          </div>
        </div>

        {/* stage 4 (right) */}
        <div className="tl-row right">
          <div className="tl-node">
            <svg viewBox="0 0 24 24">
              <path d="M3 17l4-7 4 4 5-8 5 6M3 20h18" />
            </svg>
          </div>
          <div className="tl-card">
            <div className="stage">STAGE 04 · IT MANAGER &amp; CEO</div>
            <h3>Codex IT Service</h3>
            <p>
              Developer → Full Stack Software Engineer → It Manager →
              Entrepreneur → CEO.
            </p>
            <div className="chips">
              <span className="chip">It Manager</span>
              <span className="chip">CEO</span>
              <span className="chip">Product</span>
              <span className="chip">Engineering Leadership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
