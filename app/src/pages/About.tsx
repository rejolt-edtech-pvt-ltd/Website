import './About.css'

const whyUs = [
  {
    icon: '👨‍🏫',
    title: 'Expert Mentors',
    desc: 'Learn from industry professionals with real-world experience in their respective domains.',
  },
  {
    icon: '🛠️',
    title: 'Practical Curriculum',
    desc: 'Every program is built around hands-on projects, not just theory — because employers value what you can build.',
  },
  {
    icon: '🌐',
    title: 'Flexible Online Learning',
    desc: 'Study at your own pace from anywhere in India, with lifetime access to recorded sessions.',
  },
  {
    icon: '💸',
    title: 'Affordable Pricing',
    desc: 'Premium quality education at prices built for students, starting at just ₹1,499.',
  },
]

const timeline = [
  { year: 'Research', label: 'Years of in-depth research into industry-academia gaps.' },
  { year: 'Build', label: 'Designed an innovative, project-first learning framework.' },
  { year: 'Launch', label: 'Launched internship-style programs bridging classroom and workplace.' },
  { year: 'Impact', label: '1,000+ students skilled, confident, and career-ready.' },
]

export default function About() {
  return (
    <main className="page">
      {/* ── Hero Banner ── */}
      <section className="about-hero">
        <div className="hero-orbs">
          <div className="orb orb-1" style={{ width: 500, height: 500 }} />
          <div className="orb orb-2" style={{ width: 300, height: 300 }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="section-tag animate-fade-up">Our Story</div>
          <h1 className="animate-fade-up delay-1" style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
            About <span className="gradient-text">REJOLT EDTECH</span>
          </h1>
          <p className="animate-fade-up delay-2" style={{ maxWidth: 620, margin: '0 auto', fontSize: '1.05rem' }}>
            An E-Learning &amp; Skill Development company on a mission to make every
            Indian student career-ready through joyful, industry-aligned education.
          </p>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="section">
        <div className="container who-grid">
          <div className="who-text animate-fade-up">
            <div className="section-tag">Who We Are</div>
            <h2 style={{ margin: '1rem 0' }}>
              India's Rising <span className="gradient-text">EdTech Company</span>
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              REJOLT EDTECH PRIVATE LIMITED is an E-Learning &amp; Skill Development company
              where learners grow by working with us to unleash their latent potential and
              achieve a diverse range of career goals.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              We focus on students, fresh graduates, and job seekers across India who are
              eager to build skills that make them truly employable — not just certificate holders.
            </p>
            <p>
              By fostering a joyful and interactive style of learning, our innovative training
              approaches significantly improve employability and open doors to real opportunities
              students always dreamed of.
            </p>
          </div>
          <div className="who-visual animate-fade-up delay-2">
            <div className="about-visual-card card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>⚡</div>
              <h3 style={{ marginBottom: '0.75rem', textAlign: 'center' }}>REJOLT EDTECH</h3>
              <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>
                PRIVATE LIMITED
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['E-Learning Company', 'Skill Development', 'Career Mentorship', 'Real-World Internships'].map(t => (
                  <div key={t} className="about-feature-row">
                    <span className="about-check">✓</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-inner">
            <div className="mission-icon">🎯</div>
            <div className="section-tag" style={{ marginBottom: '1rem' }}>Our Mission</div>
            <h2 style={{ marginBottom: '1.25rem' }}>
              Bridging the Gap Between{' '}
              <span className="gradient-text-accent">Academics &amp; Industry</span>
            </h2>
            <p style={{ maxWidth: 700, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
              After years of research and numerous trials, REJOLT EDTECH found an innovative
              solution for closing the critical gap between what universities teach and what
              employers actually need. Our mission is to make every student <strong style={{ color: 'var(--text)' }}>truly job-ready</strong> —
              through real-world projects, skilled mentors, and a curriculum that evolves with the industry.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Approach</div>
            <h2>How We <span className="gradient-text">Teach</span></h2>
            <p>Our learning philosophy is built around four core pillars that drive real outcomes.</p>
            <div className="glow-divider" />
          </div>

          <div className="grid-2 approach-grid">
            {[
              { icon: '🎮', title: 'Interactive Education', desc: 'Live sessions, quizzes, collaborative projects, and hands-on labs — learning that keeps you engaged from start to finish.' },
              { icon: '😄', title: 'Joyful Learning Style', desc: "We believe great learning happens when you're enjoying the journey. Our mentors make even complex topics approachable and fun." },
              { icon: '🏗️', title: 'Real-World Projects', desc: 'Every internship program includes projects modeled on actual industry scenarios, giving your résumé the edge it needs.' },
              { icon: '🎤', title: 'Mock Interview Practice', desc: 'Our mock interview sessions help pre-final and final-year students walk into any interview with confidence and clarity.' },
            ].map((item, i) => (
              <div key={item.title} className={`card approach-card animate-fade-up delay-${i + 1}`}>
                <div className="approach-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey ── */}
      <section className="section journey-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Journey</div>
            <h2>From <span className="gradient-text">Research</span> to Real Impact</h2>
            <div className="glow-divider" />
          </div>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={t.year} className={`timeline-item animate-fade-up delay-${i + 1}`}>
                <div className="timeline-dot" />
                <div className="timeline-content card">
                  <div className="timeline-year">{t.year}</div>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.4rem' }}>{t.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Why Choose REJOLT</div>
            <h2>Built for <span className="gradient-text">Student Success</span></h2>
            <p>Four strong reasons thousands of learners trust REJOLT for their career transformation.</p>
            <div className="glow-divider" />
          </div>

          <div className="grid-2">
            {whyUs.map((w, i) => (
              <div key={w.title} className={`card why-card animate-fade-up delay-${i + 1}`}>
                <div className="why-icon">{w.icon}</div>
                <div>
                  <h3>{w.title}</h3>
                  <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
