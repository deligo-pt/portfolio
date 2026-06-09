function LiveIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h5" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="block wrap" id="projects" data-screen-label="Projects">
      <div className="section-head">
        <span className="eyebrow">FEATURED PROJECTS</span>
        <h2>Work that ships.</h2>
        <p className="sub">
          A selection of production-grade products — from social platforms to
          booking systems.
        </p>
      </div>

      <div className="projects">
        {/* PH Travels */}
        <article className="project p1">
          <div className="preview">
            <div className="chrome">
              <i className="r"></i>
              <i className="y"></i>
              <i className="g"></i>
              <span className="label">IN FIGMA</span>
            </div>
            <div className="pic">
              <svg viewBox="0 0 24 24">
                <path d="M2 16l9-3 4-9 2 1-2 8 5 2-1 3-6-2-3 4-2-1 1-4-4-1z" />
              </svg>
            </div>
          </div>
          <div className="body">
            <h3>PH Travels</h3>
            <p className="desc">
              Full Stack travel-sharing platform with SSR optimization and
              SEO-focused architecture.
            </p>
            <ul className="feats">
              <li>User Authentication</li>
              <li>Profile Management</li>
              <li>Travel Posts</li>
              <li>Social Interactions</li>
            </ul>
            <div className="ptech">
              <span className="chip">Next.js</span>
              <span className="chip">Redux</span>
              <span className="chip">TypeScript</span>
              <span className="chip">MongoDB</span>
              <span className="chip">Node.js</span>
              <span className="chip">Express.js</span>
            </div>
            <div className="links">
              <a href="#">
                <LiveIcon />
                Live
              </a>
              <a href="#">
                <CodeIcon />
                Code
              </a>
              <span className="url">ph-travels.app</span>
            </div>
          </div>
        </article>

        {/* PH Cleaning */}
        <article className="project p2">
          <div className="preview">
            <div className="chrome">
              <i className="r"></i>
              <i className="y"></i>
              <i className="g"></i>
              <span className="label">IN FIGMA</span>
            </div>
            <div className="pic">
              <svg viewBox="0 0 24 24">
                <path d="M3 21l6-6M14 4l6 6-9 9-6-6 9-9zM14 4l2-2 4 4-2 2" />
              </svg>
            </div>
          </div>
          <div className="body">
            <h3>PH Cleaning</h3>
            <p className="desc">
              Car wash &amp; service booking platform with smart scheduling.
            </p>
            <ul className="feats">
              <li>Service Search</li>
              <li>Slot Booking</li>
              <li>User Authentication</li>
              <li>Service Comparison</li>
            </ul>
            <div className="ptech">
              <span className="chip">React</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Redux</span>
              <span className="chip">MongoDB</span>
              <span className="chip">Node.js</span>
              <span className="chip">Tailwind CSS</span>
            </div>
            <div className="links">
              <a href="#">
                <LiveIcon />
                Live
              </a>
              <a href="#">
                <CodeIcon />
                Code
              </a>
              <span className="url">ph-cleaning.app</span>
            </div>
          </div>
        </article>

        {/* Jobify */}
        <article className="project p3">
          <div className="preview">
            <div className="chrome">
              <i className="r"></i>
              <i className="y"></i>
              <i className="g"></i>
              <span className="label">IN FIGMA</span>
            </div>
            <div className="pic">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" />
              </svg>
            </div>
          </div>
          <div className="body">
            <h3>Jobify</h3>
            <p className="desc">
              Job portal platform with authentication and dashboard management.
            </p>
            <ul className="feats">
              <li>Job Posting</li>
              <li>User Dashboard</li>
              <li>Authentication</li>
              <li>CRUD Operations</li>
            </ul>
            <div className="ptech">
              <span className="chip">React</span>
              <span className="chip">MongoDB</span>
              <span className="chip">Express.js</span>
              <span className="chip">Firebase</span>
              <span className="chip">Tailwind CSS</span>
            </div>
            <div className="links">
              <a href="#">
                <LiveIcon />
                Live
              </a>
              <a href="#">
                <CodeIcon />
                Code
              </a>
              <span className="url">jobify.app</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
