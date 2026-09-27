import {
  about,
  achievements,
  aiScope,
  experience,
  featuredProject,
  practices,
  profile,
  projects,
  skills,
} from "@/lib/content";

const nav = [
  { href: "#about", label: "About" },
  { href: "#corpus", label: "Corpus" },
  { href: "#systems", label: "Systems" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

function SectionHead({ index, eyebrow, title, intro }: { index: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="section-head">
      <p className="eyebrow">
        <span className="mono">{index}</span> {eyebrow}
      </p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  );
}

function Arrow() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  const f = featuredProject;

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top" aria-label="Jyotish Kumar, home">
            <span className="brand-mark">JK</span>
            <span className="brand-name">Jyotish Kumar</span>
          </a>
          <nav className="nav-links" aria-label="Sections">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-sm" href="/Jyotish-Kumar-CV.docx">
            Resume
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-bg" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div>
              <p className="status">
                <span className="dot" aria-hidden="true" />
                {profile.availability} · {profile.location}
              </p>
              <h1>
                {profile.name}
                <span className="h1-sub">{profile.role}</span>
              </h1>
              <p className="lede">{profile.headline}</p>
              <div className="cta-row">
                <a className="btn" href={`mailto:${profile.email}`}>
                  Get in touch
                </a>
                <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <Arrow />
                </a>
                <a className="btn ghost" href="/Jyotish-Kumar-CV.docx">
                  Resume
                </a>
              </div>
            </div>

            <aside className="glance" aria-label="At a glance">
              <div className="glance-row">
                <span className="glance-k">Experience</span>
                <span className="glance-v">12+ years</span>
              </div>
              <div className="glance-row">
                <span className="glance-k">Now</span>
                <span className="glance-v">{experience[0].title}, {experience[0].company}</span>
              </div>
              <div className="glance-row">
                <span className="glance-k">Previously</span>
                <span className="glance-v">Staff Engineer, AiDash</span>
              </div>
              <div className="glance-row glance-focus">
                <span className="glance-k">Focus</span>
                <div className="chips">
                  {profile.focus.map((x) => (
                    <span className="chip" key={x}>
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="wrap">
            <dl className="metrics">
              {achievements.map((a) => (
                <div className="metric" key={a.label}>
                  <dt>{a.stat}</dt>
                  <dd>{a.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="about">
          <div className="wrap about-grid">
            <SectionHead index="01" eyebrow="About" title="Senior engineering, end to end." />
            <div className="prose">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="corpus">
          <div className="wrap">
            <SectionHead
              index="02"
              eyebrow={f.tag}
              title={`${f.name}: ${f.title.charAt(0).toLowerCase()}${f.title.slice(1)}`}
              intro={f.summary}
            />

            <div className="feature">
              <ol className="pipeline" aria-label="Retrieval pipeline">
                {f.pipeline.map((p, i) => (
                  <li key={p.step}>
                    <span className="pipe-n mono">{String(i + 1).padStart(2, "0")}</span>
                    <span className="pipe-step">{p.step}</span>
                    <span className="pipe-detail">{p.detail}</span>
                  </li>
                ))}
              </ol>

              <dl className="feature-metrics">
                {f.metrics.map((m) => (
                  <div key={m.label}>
                    <dt>{m.stat}</dt>
                    <dd>{m.label}</dd>
                  </div>
                ))}
              </dl>

              <div className="highlights">
                {f.highlights.map((h) => (
                  <article key={h.title} className="highlight">
                    <h3>{h.title}</h3>
                    <p>{h.body}</p>
                  </article>
                ))}
              </div>

              <div className="chips feature-stack" aria-label="Tech stack">
                {f.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="systems">
          <div className="wrap">
            <SectionHead
              index="03"
              eyebrow="Selected systems"
              title="Platforms I owned into production."
              intro="Each one covers the problem, what I owned, and the outcome. Open a card for the architecture and key decisions."
            />
            <div className="projects">
              {projects.map((p) => (
                <article className="project" key={p.title}>
                  <p className="tag mono">{p.tag}</p>
                  <h3>{p.title}</h3>
                  <p className="project-problem">{p.problem}</p>
                  <div className="outcome">
                    <span className="outcome-k">Outcome</span>
                    <p>{p.outcome}</p>
                  </div>
                  <div className="chips">
                    {p.stack.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <details>
                    <summary>Architecture &amp; decisions</summary>
                    <dl className="steps">
                      <div>
                        <dt>Ownership</dt>
                        <dd>{p.responsibility}</dd>
                      </div>
                      <div>
                        <dt>Architecture</dt>
                        <dd>{p.architecture}</dd>
                      </div>
                      <div>
                        <dt>Decisions</dt>
                        <dd>{p.decisions}</dd>
                      </div>
                    </dl>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="wrap">
            <SectionHead index="04" eyebrow="Experience" title="Where I've worked." />
            <ol className="timeline">
              {experience.map((job) => (
                <li className="job" key={job.company}>
                  <div className="job-when mono">{job.dates}</div>
                  <div className="job-body">
                    <h3>
                      {job.title} <span className="at">· {job.company}</span>
                    </h3>
                    <p className="job-summary">{job.summary}</p>
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="stack">
          <div className="wrap">
            <SectionHead index="05" eyebrow="Stack" title="Core expertise." />
            <div className="skills">
              {skills.map((group) => (
                <article className="skill" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="chips">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach">
          <div className="wrap">
            <SectionHead index="06" eyebrow="Approach" title="How I work." />
            <div className="approach">
              <ol className="practices">
                {practices.map((item, i) => (
                  <li key={item}>
                    <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
              <aside className="scope">
                <h3>AI systems: where I fit</h3>
                <p>{aiScope}</p>
              </aside>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrap">
            <div className="contact">
              <p className="eyebrow">
                <span className="mono">07</span> Contact
              </p>
              <h2>Let&apos;s build something that stays up.</h2>
              <p className="section-intro">
                Open to Staff / Senior backend roles in Bengaluru and on remote-friendly product teams.
              </p>
              <div className="cta-row">
                <a className="btn" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <Arrow />
                </a>
                <a className="btn ghost" href="/Jyotish-Kumar-CV.docx">
                  Download resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Bengaluru · Python · Distributed systems · Retrieval</span>
      </footer>
    </>
  );
}
