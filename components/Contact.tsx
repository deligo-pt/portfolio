export default function Contact() {
  return (
    <section className="block wrap" id="contact" data-screen-label="Contact">
      <div className="section-head">
        <span className="eyebrow">CONTACT</span>
        <h2>Let&apos;s build something.</h2>
        <p className="sub">
          Open to freelance projects, founder collaborations, and engineering
          leadership conversations.
        </p>
      </div>

      <div className="contact-panel">
        <div className="ctitle">Direct line</div>
        <div className="csub">Reach out via any channel.</div>

        <div className="contact-row">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </div>
          <a href="mailto:meskatabusayed@gmail.com">
            meskatabusayed@gmail.com
          </a>
        </div>
        <div className="contact-row">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
            </svg>
          </div>
          <a href="tel:+8801754759899">+880 1754 759899</a>
        </div>
        <div className="contact-row">
          <div className="ic">
            <svg viewBox="0 0 24 24">
              <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </div>
          <span>Kushtia, Bangladesh</span>
        </div>

        <div className="socials">
          <a href="#" aria-label="GitHub">
            <svg viewBox="0 0 24 24">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 00-6 0C7.2 4.1 6.1 4.4 6.1 4.4a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004.7 10.8c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 17v-7" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg viewBox="0 0 24 24">
              <path d="M22 5.8a8 8 0 01-2.4.7 4 4 0 001.8-2.2 8 8 0 01-2.6 1A4 4 0 0012 8.5a11 11 0 01-8-4 4 4 0 001.2 5.4 4 4 0 01-1.8-.5 4 4 0 003.2 4 4 4 0 01-1.8.1 4 4 0 003.7 2.8A8 8 0 012 18.6a11 11 0 006 1.8c7.2 0 11.2-6 11.2-11.2v-.5A8 8 0 0022 5.8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
