"use client";

import { useEffect, useState } from "react";

const skillGroups = [
  {
    title: "Professional",
    items: [
      "Microsoft Office",
      "Task coordination",
      "Administrative support",
    ],
  },
  {
    title: "Leadership",
    items: [
      "Class representation",
      "Team leadership",
      "Collaborative teamwork",
    ],
  },
  {
    title: "Languages",
    items: [
      "Indonesian - Native",
      "English - Elementary",
      "Dutch - Elementary",
    ],
  },
];

const education = [
  {
    school: "University of Indonesia",
    program: "Dutch Literature",
    period: "Aug 2026 - Present",
    accent: "ui",
  },
  {
    school: "BINUS Online",
    program: "Accounting",
    period: "May 2026 - Present",
    accent: "binus",
  },
];

function SocialIcon({
  name,
}: {
  name: "instagram" | "linkedin";
}) {
  return name === "instagram" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 9.5V18M6.5 6.3v.1M10.5 18v-8.5M10.5 13.1c0-2.3 1.5-3.8 3.6-3.8 2.1 0 3.4 1.4 3.4 4V18M10.5 13.1c0-2.3 1.5-3.8 3.6-3.8" />
    </svg>
  );
}

export default function Home() {
  // =========================
  // MENU
  // =========================
  const [menuOpen, setMenuOpen] = useState(false);

  // =========================
  // CURSOR
  // =========================
  const [pointer, setPointer] = useState({
    x: 0,
    y: 0,
  });

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // =========================
  // MOUSE POINTER
  // =========================
  useEffect(() => {
    const move = (event: MouseEvent) => {
      setPointer({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          LOADING SCREEN
          CSS akan mengatur animasi keluar.
      ===================================================== */}
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-brand">
            Farha<span>.</span>
          </div>

          <div
            className="loading-cat"
            aria-hidden="true"
          >
            /ᐠ｡ꞈ｡ᐟ\
          </div>

          <div className="loading-status">
            Loading portfolio...
          </div>

          <div className="loading-line">
            <div className="loading-progress" />
          </div>

          <div className="loading-year">
            2026
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN WEBSITE
      ===================================================== */}
      <main>
        {/* =========================
            CURSOR GLOW
        ========================= */}
        <div
          className="cursor-glow"
          style={{
            transform: `translate(${pointer.x - 160}px, ${
              pointer.y - 160
            }px)`,
          }}
        />

        {/* =========================
            NAVBAR
        ========================= */}
        <nav className="nav wrap">
          <a className="brand" href="#top">
            Farha<span>.</span>
          </a>

          <div
            className={`nav-links${
              menuOpen ? " open" : ""
            }`}
          >
            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a
              href="#education"
              onClick={closeMenu}
            >
              Education
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
            >
              Skills
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
            >
              Experience
            </a>
          </div>

          <button
            className="menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <i />
            <i />
          </button>
        </nav>

        {/* =========================
            HERO
        ========================= */}
        <section
          id="top"
          className="hero wrap"
        >
          <p className="eyebrow reveal">
            Accounting & Dutch Literature student{" "}
            <span>(Indonesia)</span>
          </p>

          <h1>
            <span className="line clip">
              <em>Curious,</em>
            </span>

            <span className="line clip">
              capable & <em>growing.</em>
            </span>
          </h1>

          <div className="hero-bottom reveal delay-2">
            <p>
              Farha Arpegias Fadhail Kawakib is a
              dedicated student who brings
              adaptability, leadership, and a
              collaborative spirit to every
              opportunity.
            </p>

            <a
              href="#about"
              className="circle-link"
            >
              Explore profile <b>&darr;</b>
            </a>
          </div>

          <div className="orb one" />
          <div className="orb two" />

          <img
            className="hero-photo hero-photo-animated"
            src="/images/Farha.jpeg"
            alt="Farha Sabria at sunset"
          />
        </section>

        {/* =========================
            ABOUT
        ========================= */}
        <section
          id="about"
          className="about wrap"
        >
          <p className="eyebrow reveal">
            01 / A little about me
          </p>

          <div className="about-grid">
            <h2 className="reveal">
              Learning across{" "}
              <em>two disciplines.</em>
            </h2>

            <div className="about-copy reveal delay-1">
              <p>
                I am a dedicated university
                student pursuing Accounting at
                BINUS University and Dutch
                Literature at the University of
                Indonesia. Studying both
                disciplines has strengthened my
                ability to manage multiple
                responsibilities, adapt to
                different academic environments,
                and develop a broad range of
                skills.
              </p>

              <p>
                I bring strong leadership and
                teamwork skills, and I am
                adaptable, responsible, and
                committed to continuous learning.
                Through academic and organizational
                experiences, I aim to contribute
                effectively both independently
                and as part of a team.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            EDUCATION
        ========================= */}
        <section
          id="education"
          className="education wrap"
        >
          <div className="section-head reveal">
            <p className="eyebrow">
              02 / Education
            </p>

            <p>Current studies</p>
          </div>

          <div className="education-grid">
            {education.map((item, index) => (
              <article
                className="education-card reveal"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                key={item.school}
              >
                {item.accent === "ui" ? (
                  <img
                    className="school-logo"
                    src="/images/university-of-indonesia-logo.png"
                    alt="University of Indonesia logo"
                  />
                ) : (
                  <img
                    className="school-logo binus-logo"
                    src="/images/binus-university-logo.png"
                    alt="BINUS University logo"
                  />
                )}

                <div>
                  <h2>{item.school}</h2>
                  <p>{item.program}</p>
                  <span>{item.period}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================
            SKILLS
        ========================= */}
        <section
          id="skills"
          className="skills wrap"
        >
          <div className="section-head reveal">
            <p className="eyebrow">
              03 / Skills & expertise
            </p>

            <p>
              Strengths and capabilities
            </p>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <article
                className="skill-group reveal"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                key={group.title}
              >
                <span className="skill-number">
                  0{index + 1}
                </span>

                <h2>{group.title}</h2>

                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* =========================
            EXPERIENCE
        ========================= */}
        <section
          id="experience"
          className="experience wrap"
        >
          <div className="section-head reveal">
            <p className="eyebrow">
              04 / Experience
            </p>

            <p>
              Aug 2026 - Present
            </p>
          </div>

          <article className="experience-card reveal">
            <img
                    className="school-logo"
                    src="/images/university-of-indonesia-logo.png"
                    alt="University of Indonesia logo"
                  />

            <div className="experience-content">
              <p className="eyebrow">
                University of Indonesia /
                Full-time / Depok, West Java
              </p>

              <h2>Lead Class</h2>

              <p>
                Serving as the Class
                Representative for the Dutch
                Literature program at the Faculty
                of Humanities, University of
                Indonesia. Acting as a primary
                liaison between students and
                lecturers, while coordinating
                class needs and supporting clear,
                collaborative communication.
              </p>

              <span className="experience-tag">
                Leadership & Team Leadership
              </span>
            </div>

            <span className="arrow"></span>
          </article>
        </section>

        {/* =========================
            CONTACT
        ========================= */}
        <section
          id="contact"
          className="contact"
        >
          <div className="wrap">
            <p className="eyebrow reveal">
              05 / Find me online
            </p>

            <h2 className="contact-title reveal">
              Let&apos;s <em>connect.</em>
            </h2>

            <div className="social-links reveal">
              <a
                className="social-link"
                href="https://www.instagram.com/arpegiaz/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <SocialIcon name="instagram" />
                <span>Instagram</span>
                <b></b>
              </a>

              <a
                className="social-link"
                href="https://www.linkedin.com/in/farha-sabria-709b67430/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <SocialIcon name="linkedin" />
                <span>LinkedIn</span>
                <b></b>
              </a>
            </div>

            <footer>
              <span>
                &copy; 2026 Farha Sabria
              </span>

              <span>Indonesia</span>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}