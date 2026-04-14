import { useState } from 'react'
import './Courses.css'

const techCourses = ['AWS (Amazon Web Services)', 'Web Development', 'Data Analytics', 'Python Programming', 'C Programming', 'GitHub & Version Control']
const nonTechCourses = ['Graphic Designing (Adobe Photoshop, Canva, Figma)', 'No-Code Development', 'Entrepreneurship 101']

const programs = [
  {
    image: '/allaccess.png',
    title: 'REJOLT All Access Subscription',
    tagline: 'Unlock every course and internship in one plan.',
    price: 2500,
    original: 5000,
    discount: 50,
    url: 'https://www.rejoltedtech.com/courses/611772',
    features: ['Access all tech & non-tech courses', 'All internship programs included', 'Mock interview prep', 'Lifetime updates', 'Certificate of completion'],
    badge: 'Best Value',
    badgeClass: 'badge-gold',
    highlight: true,
  },
  {
    image: '/webdev.png',
    title: 'Web Development Internship',
    tagline: 'Build fully functional websites with modern technologies.',
    price: 1499,
    original: 2000,
    discount: 25,
    url: 'https://www.rejoltedtech.com/courses/610536',
    features: ['HTML, CSS, JavaScript', 'React.js fundamentals', 'Real-world project', 'Mentor-led sessions', 'Internship certificate'],
    badge: 'Popular',
    badgeClass: 'badge-primary',
    highlight: false,
  },
  {
    image: '/aws.png',
    title: 'Amazon Web Services (AWS) Internship',
    tagline: 'Master cloud fundamentals and get AWS-ready.',
    price: 1499,
    original: 2000,
    discount: 25,
    url: 'https://www.rejoltedtech.com/courses/609692',
    features: ['Core AWS services', 'Cloud architecture basics', 'Hands-on labs', 'Industry project', 'Internship certificate'],
    badge: 'In Demand',
    badgeClass: 'badge-accent',
    highlight: false,
  },
  {
    image: '/analytics.png',
    title: 'Data Analytics Internship',
    tagline: 'Turn raw data into meaningful insights.',
    price: 1499,
    original: 2000,
    discount: 25,
    url: 'https://www.rejoltedtech.com/courses/609571',
    features: ['Python for data analysis', 'Data visualisation', 'Real dataset projects', 'Business insights training', 'Internship certificate'],
    badge: 'Trending',
    badgeClass: 'badge-secondary',
    highlight: false,
  },
]

export default function Courses() {
  const [activeTab, setActiveTab] = useState<'all' | 'tech' | 'nontech' | 'internships'>('all')

  return (
    <main className="page">
      {/* ── Hero ── */}
      <section className="courses-hero">
        <div className="hero-orbs">
          <div className="orb orb-1" style={{ width: 450, height: 450, opacity: 0.15 }} />
          <div className="orb orb-2" style={{ opacity: 0.12 }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="section-tag animate-fade-up">🎓 Learning Paths</div>
          <h1 className="animate-fade-up delay-1" style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
            Build Skills That <span className="gradient-text">Matter</span>
          </h1>
          <p className="animate-fade-up delay-2" style={{ maxWidth: 600, margin: '0 auto', fontSize: '1.05rem' }}>
            From cloud computing to creative design — explore curated programs that connect
            what you learn today to the role you'll land tomorrow.
          </p>
        </div>
      </section>

      {/* ── Tabs ── */}
      <div className="courses-tabs-wrap">
        <div className="container">
          <div className="courses-tabs">
            {([['all', 'All Programs'], ['tech', '💻 Tech Courses'], ['nontech', '🎨 Non-Tech Courses'], ['internships', '🚀 Internships']] as const).map(([id, label]) => (
              <button
                key={id}
                className={`tab-btn${activeTab === id ? ' active' : ''}`}
                onClick={() => setActiveTab(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tech Courses ── */}
      {(activeTab === 'all' || activeTab === 'tech') && (
        <section className="section">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">Technology</div>
              <h2>💻 Tech <span className="gradient-text">Courses</span></h2>
              <p>
                Master the technologies that power today's digital economy. Each course is structured
                for beginners and intermediate learners, with a clear path to industry readiness.
              </p>
              <div className="glow-divider" />
            </div>
            <div className="courses-list-grid">
              {techCourses.map((course, i) => (
                <div key={course} className={`card course-list-card animate-fade-up delay-${(i % 4) + 1}`}>
                  <div className="course-list-icon">💻</div>
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Non-Tech Courses ── */}
      {(activeTab === 'all' || activeTab === 'nontech') && (
        <section className="section" style={{ paddingTop: activeTab === 'all' ? '1rem' : '5rem' }}>
          <div className="container">
            <div className="section-header">
              <div className="section-tag">Creative & Business</div>
              <h2>🎨 Non-Tech <span className="gradient-text-accent">Courses</span></h2>
              <p>
                Stand out in a crowded market with skills in design, no-code tools, and entrepreneurship —
                the perfect complement to any tech career.
              </p>
              <div className="glow-divider" style={{ background: 'var(--gradient-accent)' }} />
            </div>
            <div className="courses-list-grid">
              {nonTechCourses.map((course, i) => (
                <div key={course} className={`card course-list-card animate-fade-up delay-${(i % 4) + 1}`}>
                  <div className="course-list-icon" style={{ background: 'rgba(0,212,170,0.1)', color: 'var(--accent)' }}>🎨</div>
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Internships ── */}
      {(activeTab === 'all' || activeTab === 'internships') && (
        <section className="section internship-blurb" style={{ paddingTop: activeTab === 'all' ? '1rem' : '5rem' }}>
          <div className="container">
            <div className="section-header">
              <div className="section-tag">Work Experience</div>
              <h2>🚀 <span className="gradient-text-secondary">Internships</span></h2>
              <p>
                Get a real insight into how the industry works by implementing real-world projects
                under the guidance of experienced mentors. Our internship programs are designed
                to simulate a professional environment — bridging the transition from student to professional.
              </p>
              <div className="glow-divider" style={{ background: 'var(--gradient-secondary)' }} />
            </div>
          </div>
        </section>
      )}

      {/* ── Featured Programs ── */}
      {(activeTab === 'all' || activeTab === 'internships') && (
        <section className="section" style={{ paddingTop: '1rem' }}>
          <div className="container">
            <div className="section-header">
              <div className="section-tag">Enroll Now</div>
              <h2>Featured <span className="gradient-text">Programs</span></h2>
              <p>Choose a plan that's right for your goals. All programs include a certificate.</p>
              <div className="glow-divider" />
            </div>

            <div className="programs-grid">
              {programs.map((p, i) => (
                <div key={p.title} className={`card program-card animate-fade-up delay-${i + 1}${p.highlight ? ' program-highlight' : ''}`} style={{ padding: 0, overflow: 'hidden' }}>
                  {p.highlight && <div className="program-ribbon" style={{ zIndex: 2 }}>Most Popular</div>}
                  <div className="course-card-image" style={{ backgroundImage: `url(${p.image})`, height: '180px' }}>
                    <span className={`badge ${p.badgeClass}`} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>{p.badge}</span>
                  </div>
                  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <h3 className="program-title" style={{ marginTop: 0 }}>{p.title}</h3>
                  <p className="program-tagline">{p.tagline}</p>
                  <ul className="program-features">
                    {p.features.map(f => (
                      <li key={f}>
                        <span className="feature-check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="program-pricing">
                    <span className="program-price">₹{p.price.toLocaleString()}</span>
                    <div className="program-price-meta">
                      <span className="program-original">₹{p.original.toLocaleString()}</span>
                      <span className="program-discount">{p.discount}% OFF</span>
                    </div>
                  </div>
                  <a href={p.url} target="_blank" rel="noreferrer" className={`btn ${p.highlight ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', justifyContent: 'center' }}>
                    Buy Now →
                  </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
