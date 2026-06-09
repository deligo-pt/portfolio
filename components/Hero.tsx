export default function Hero() {
  return (
    <header className="hero" id="home" data-screen-label="Hero">
      {/* profile card */}
      <div className="profile">
        <div className="glow" />
        <div className="ring2" />
        <div className="ring1" />
        <div className="card-inner">
          <div className="photo" />
          <div className="tech-row">
            <span className="chip">Next.js</span>
            <span className="chip">Node</span>
            <span className="chip">TS</span>
            <span className="chip">Mongo</span>
            <span className="chip">GraphQL</span>
          </div>
          <div className="glass-strip">
            <div className="avail">
              <span className="dot" />
              <span>AVAILABLE FOR PROJECTS</span>
            </div>
            <div className="role">It Manager &amp; CEO</div>
            <div className="org">Codex IT Service</div>
          </div>
        </div>
      </div>

      {/* copy */}
      <div className="hero-copy">
        <span className="pill">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l1.8 5.6L19.5 9l-4.5 3.3L16.6 18 12 14.7 7.4 18l1.6-5.7L4.5 9l5.7-1.4z" />
          </svg>
          From Developer to CEO
        </span>
        <h1>
          Meskat
          <br />
          <span className="grad">Mohammad</span>
          <br />
          Abu Sayed
        </h1>
        <div className="subtitle">
          FULL STACK SOFTWARE ENGINEER → IT MANAGER &amp; CEO
        </div>
        <p className="lead">
          Building scalable digital products, leading engineering teams, and
          transforming ideas into successful technology businesses.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View Projects
            <svg
              viewBox="0 0 24 24"
              style={{ stroke: "currentColor", strokeWidth: 2, fill: "none" }}
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a className="btn btn-ghost" href="#contact">
            <svg
              viewBox="0 0 24 24"
              style={{ stroke: "currentColor", strokeWidth: 2, fill: "none" }}
            >
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
            </svg>
            Download Resume
          </a>
          <a className="btn btn-solid" href="#contact">
            Hire Me
          </a>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="val">3+</div>
            <div className="lbl">Years Experience</div>
          </div>
          <div className="stat">
            <div className="val">50+</div>
            <div className="lbl">Projects Built</div>
          </div>
          <div className="stat">
            <div className="val">MERN</div>
            <div className="lbl">Specialist</div>
          </div>
          <div className="stat">
            <div className="val">CEO</div>
            <div className="lbl">Codex IT Service</div>
          </div>
        </div>
      </div>
    </header>
  );
}
