import { Link } from 'react-router-dom'
import './Home.css'

const services = [
  {
    icon: '💻',
    title: 'Tech Courses',
    desc: 'Master in-demand technologies with structured, hands-on curricula.',
    tags: ['AWS', 'Web Dev', 'Data Analytics', 'Python', 'C', 'GitHub'],
    color: '#6c3fff',
  },
  {
    icon: '🎨',
    title: 'Non-Tech Courses',
    desc: 'Creative and business skills to round out your professional profile.',
    tags: ['Graphic Design', 'No-Code Dev', 'Entrepreneurship'],
    color: '#00d4aa',
  },
  {
    icon: '🎯',
    title: 'Mock Interviews',
    desc: 'Build confidence and performance through real-world interview simulations.',
    tags: ['Job Seekers', 'Final Year', 'Pre-Final Year'],
    color: '#ff6b35',
  },
  {
    icon: '🚀',
    title: 'Internships',
    desc: 'Get hands-on experience by building real-world industry projects.',
    tags: ['AWS', 'Web Dev', 'Data Analytics'],
    color: '#ffd93d',
  },
]

const courses = [
  {
    title: 'REJOLT All Access Subscription',
    price: 2500,
    original: 5000,
    discount: 50,
    url: 'https://www.rejoltedtech.com/courses/611772',
    image: '/allaccess.png',
    badge: 'Best Value',
    badgeClass: 'badge-gold',
  },
  {
    title: 'Web Development Internship',
    price: 1499,
    original: 2000,
    discount: 25,
    url: 'https://www.rejoltedtech.com/courses/610536',
    image: '/webdev.png',
    badge: 'Popular',
    badgeClass: 'badge-primary',
  },
  {
    title: 'Amazon Web Services (AWS) Internship',
    price: 1499,
    original: 2000,
    discount: 25,
    url: 'https://www.rejoltedtech.com/courses/609692',
    image: '/aws.png',
    badge: 'In Demand',
    badgeClass: 'badge-accent',
  },
  {
    title: 'Data Analytics Internship',
    price: 1499,
    original: 2000,
    discount: 25,
    url: 'https://www.rejoltedtech.com/courses/609571',
    image: '/analytics.png',
    badge: 'Trending',
    badgeClass: 'badge-secondary',
  },
]

const achievements = [
  { number: '1000+', label: 'Students Enrolled' },
  { number: '95%', label: 'Satisfaction Rate' },
  { number: '4', label: 'Internship Tracks' },
  { number: '10+', label: 'Expert Mentors' },
]

export default function Home() {
  return (
    <main className="page">
      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="hero-orbs">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>

        <div className="container hero-content">
          <div className="section-tag animate-fade-up">🇮🇳 India's Rising EdTech Company</div>
          <h1 className="hero-title animate-fade-up delay-1">
            Learn &amp; Explore From
            <br />
            <span className="gradient-text">The Best Instructors</span>
          </h1>
          <p className="hero-desc animate-fade-up delay-2">
            REJOLT EDTECH empowers students and job seekers with industry-aligned skills —
            through interactive learning, real-world internships, and expert mentorship
            that bridges the gap between academics and career success.
          </p>
          <div className="hero-actions animate-fade-up delay-3">
            <Link to="/about" className="btn btn-primary">
              Get Started ✨
            </Link>
            <Link to="/courses" className="btn btn-secondary">
              Browse Courses →
            </Link>
          </div>

          <div className="hero-img-wrapper animate-fade-up delay-3">
            <img src="/hero.png" alt="Students learning and collaborating" className="hero-img" />
          </div>

          {/* Stats */}
          <div className="hero-stats animate-fade-up delay-4">
            {achievements.map(a => (
              <div key={a.label} className="hero-stat">
                <span className="hero-stat-number">{a.number}</span>
                <span className="hero-stat-label">{a.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating card */}
        <div className="hero-float-card animate-float">
          <div className="float-card-inner">
            <span className="float-icon">🎓</span>
            <div>
              <div className="float-title">New Batch Starting Soon!</div>
              <div className="float-sub">Enroll now &amp; save up to 50%</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Teaser ── */}
      <section className="section about-teaser">
        <div className="container about-teaser-inner">
          <div className="about-teaser-text animate-fade-up">
            <div className="section-tag">Who We Are</div>
            <h2 style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              Bridging Academics &amp;{' '}
              <span className="gradient-text-accent">Industry</span>
            </h2>
            <p style={{ marginBottom: '1.25rem' }}>
              REJOLT EDTECH PRIVATE LIMITED is an E-Learning &amp; Skill Development company
              where learners grow by unleashing their latent potential and achieving diverse
              career goals. Our innovative training approaches — built after years of research
              and real-world trials — significantly improve students' employability skills.
            </p>
            <p style={{ marginBottom: '2rem' }}>
              We've developed a proven solution for closing the gap between industry requirements
              and academic preparation, one batch at a time.
            </p>
            <Link to="/about" className="btn btn-primary btn-sm">
              Learn More About Us →
            </Link>
          </div>
          <div className="about-teaser-visual animate-fade-up delay-2">
            <img src="/about.png" alt="Bridging Academics and Industry" className="about-img" />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">What We Offer</div>
            <h2>Our <span className="gradient-text">Services</span></h2>
            <p>From technical upskilling to mock interview prep — everything you need to launch your career.</p>
            <div className="glow-divider" />
          </div>

          <div className="grid-2 services-grid">
            {services.map((s, i) => (
              <div key={s.title} className={`card service-card animate-fade-up delay-${i + 1}`}>
                <div className="service-icon" style={{ background: `${s.color}18`, color: s.color }}>
                  {s.icon}
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map(t => (
                    <span key={t} className="service-tag" style={{ borderColor: `${s.color}44`, color: s.color, background: `${s.color}12` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="section achievements-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Impact</div>
            <h2>Recent <span className="gradient-text">Achievements</span></h2>
            <p>
              Our learners are landing real opportunities — from internship completions to
              full-time roles in top companies. Every milestone is a testament to their
              hard work and our commitment to quality education.
            </p>
            <div className="glow-divider" />
          </div>

          <div className="grid-4 achievements-grid">
            {achievements.map((a, i) => (
              <div key={a.label} className={`card stat-card animate-fade-up delay-${i + 1}`}>
                <div className="stat-number">{a.number}</div>
                <div className="stat-label">{a.label}</div>
              </div>
            ))}
          </div>

          <div className="achievement-highlight">
            <div className="achievement-highlight-inner">
              <span className="achievement-emoji">🎉</span>
              <div>
                <strong>Milestone Alert:</strong> Over 1,000 students have successfully completed
                REJOLT programs, with hundreds now placed in leading tech companies and startups
                across India.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Courses Preview ── */}
      <section className="section courses-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Featured Programs</div>
            <h2>Our <span className="gradient-text">Courses</span></h2>
            <p>Hand-picked programs designed by industry experts to make you job-ready from day one.</p>
            <div className="glow-divider" />
          </div>

          <div className="grid-2 courses-grid">
            {courses.map((c, i) => (
              <div key={c.title} className={`card course-card animate-fade-up delay-${i + 1}`} style={{ padding: 0, overflow: 'hidden' }}>
                <div className="course-card-image" style={{ backgroundImage: `url(${c.image})` }}>
                  <span className={`badge ${c.badgeClass}`} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>{c.badge}</span>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3 className="course-title">{c.title}</h3>
                  <div className="course-pricing">
                    <span className="course-price">₹{c.price.toLocaleString()}</span>
                    <span className="course-original">₹{c.original.toLocaleString()}</span>
                    <span className="course-discount">{c.discount}% OFF</span>
                  </div>
                  <a href={c.url} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm course-btn">
                    Enroll Now →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/courses" className="btn btn-secondary">
              View All Programs →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
