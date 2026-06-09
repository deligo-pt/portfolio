export default function Leadership() {
  return (
    <>
      {/* LEADERSHIP */}
      <section className="block wrap" id="leadership" data-screen-label="Leadership">
        <div className="section-head">
          <span className="eyebrow">LEADERSHIP &amp; VISION</span>
          <h2>Beyond Coding</h2>
        </div>

        <div className="leader">
          <div className="visual">
            <div className="crown">
              <svg viewBox="0 0 24 24">
                <path d="M3 18h18l-2-9-4 4-3-6-3 6-4-4-2 9z" />
                <path d="M3 21h18" />
              </svg>
            </div>
          </div>
          <p className="ltext">
            As It Manager &amp; CEO of Codex IT Service, Meskat combines technical
            excellence with business leadership. His mission is to build
            innovative products, empower talented developers, and create
            impactful technology solutions that solve real-world problems.
          </p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section
        className="block wrap"
        id="certifications"
        data-screen-label="Certifications"
      >
        <div className="section-head">
          <span className="eyebrow">CERTIFICATIONS</span>
          <h2>Credentials in a glass frame</h2>
        </div>

        <div className="cert-card">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="5" />
              <path d="M8.5 12.5L7 22l5-3 5 3-1.5-9.5" />
            </svg>
          </div>
          <div className="cmid">
            <div className="ctitle">Complete Web Development Course</div>
            <div className="csub">Programming Hero</div>
          </div>
          <div className="cyear">
            ISSUED 2023
            <br />
            COURSE
          </div>
        </div>
      </section>
    </>
  );
}
