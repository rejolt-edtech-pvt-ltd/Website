import { Link } from 'react-router-dom'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Rahul Sharma',
    course: 'Web Development Internship',
    location: 'Hyderabad',
    year: 'Final Year, B.Tech CSE',
    rating: 5,
    text: "The Web Development Internship at REJOLT completely changed how I approached coding. I went from copying tutorials to actually building projects on my own. The mentors were always available and helped me understand the 'why' behind every concept. I walked into my campus placement with so much more confidence!",
    avatar: 'RS',
    color: '#6c3fff',
  },
  {
    name: 'Priya Reddy',
    course: 'AWS Internship',
    location: 'Bengaluru',
    year: 'Pre-Final Year, B.E. IT',
    rating: 5,
    text: "Before REJOLT's AWS Internship, cloud was just a buzzword to me. Now I can set up EC2 instances, configure S3 buckets, and design basic cloud architectures. The real-world project gave me something concrete to show during internship drives. Truly grateful for this experience!",
    avatar: 'PR',
    color: '#00d4aa',
  },
  {
    name: 'Mohammed Faisal',
    course: 'Data Analytics Internship',
    location: 'Hyderabad',
    year: 'Fresh Graduate',
    rating: 5,
    text: "I had no idea how to work with real datasets until the Data Analytics Internship at REJOLT. The curriculum was well-structured, and the mentors gave us actual business problems to solve. Landing a data analyst role at an MNC shortly after was the best reward I could have asked for.",
    avatar: 'MF',
    color: '#ff6b35',
  },
  {
    name: 'Ananya Gupta',
    course: 'REJOLT All Access Subscription',
    location: 'Pune',
    year: 'Final Year, BCA',
    rating: 5,
    text: "The All Access Subscription was the best investment I made in myself. I completed the Web Dev and Graphic Design tracks, and the mock interview sessions gave me clarity on how to present myself professionally. REJOLT's approach is genuinely different — interactive, fun, and deeply practical.",
    avatar: 'AG',
    color: '#ffd93d',
  },
  {
    name: 'Kiran Patil',
    course: 'Web Development Internship',
    location: 'Nagpur',
    year: 'Pre-Final Year, B.Tech EEE',
    rating: 5,
    text: "I come from a non-CS branch, and I was worried the Web Dev Internship would be too advanced for me. But the mentors started from the basics and kept things simple without dumbing them down. By the end of the program, I had a full portfolio project that I'm genuinely proud of.",
    avatar: 'KP',
    color: '#8b6dff',
  },
  {
    name: 'Sneha Joshi',
    course: 'AWS Internship',
    location: 'Chennai',
    year: 'Job Seeker',
    rating: 5,
    text: "I had been struggling to land interviews for over six months. After completing the AWS Internship and attending REJOLT's mock interview sessions, I finally understood where I was going wrong. Within two months of completing the program, I received and accepted an offer. The confidence boost alone was worth every rupee.",
    avatar: 'SJ',
    color: '#00d4aa',
  },
]

export default function Testimonials() {
  return (
    <main className="page">
      {/* ── Hero ── */}
      <section className="testimonials-hero">
        <div className="hero-orbs">
          <div className="orb orb-1" style={{ width: 450, height: 450, opacity: 0.12 }} />
          <div className="orb orb-2" style={{ opacity: 0.1 }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="section-tag animate-fade-up">💬 Real Stories</div>
          <h1 className="animate-fade-up delay-1" style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
            What Our <span className="gradient-text">Learners Say</span>
          </h1>
          <p className="animate-fade-up delay-2" style={{ maxWidth: 600, margin: '0 auto', fontSize: '1.05rem' }}>
            Every REJOLT learner comes with a dream and leaves with skills, confidence, and a
            community rooting for their success. These are their stories.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="testimonials-stats-bar">
        <div className="container testimonials-stats-inner">
          {[
            { n: '1000+', l: 'Happy Students' },
            { n: '4.9★', l: 'Average Rating' },
            { n: '95%', l: 'Satisfaction Rate' },
            { n: '3', l: 'Internship Tracks' },
          ].map(s => (
            <div key={s.l} className="t-stat">
              <div className="t-stat-n">{s.n}</div>
              <div className="t-stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Testimonials Grid ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Student Reviews</div>
            <h2>Real Experiences, <span className="gradient-text">Real Impact</span></h2>
            <p>From final-year students to working professionals — here's what they experienced at REJOLT.</p>
            <div className="glow-divider" />
          </div>

          <div className="testimonials-masonry">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`card testimonial-card animate-fade-up delay-${(i % 3) + 1}`}>
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-rating">
                  {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ background: `${t.color}25`, color: t.color }}>
                    {t.avatar}
                  </div>
                  <div className="testimonial-meta">
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-info">{t.year} · {t.location}</div>
                    <span className="badge badge-primary" style={{ fontSize: '0.7rem', marginTop: '0.3rem' }}>
                      {t.course}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section testimonials-cta-section">
        <div className="container">
          <div className="testimonials-cta card">
            <div className="cta-orb" />
            <div className="section-tag" style={{ marginBottom: '1rem' }}>Join the Next Batch</div>
            <h2 style={{ marginBottom: '1rem' }}>
              Your Success Story <span className="gradient-text">Starts Here</span>
            </h2>
            <p style={{ maxWidth: 560, margin: '0 auto 2rem' }}>
              The next batch is filling up fast. Join hundreds of learners who transformed
              their careers with REJOLT — enroll today and take the first step.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/courses" className="btn btn-primary">
                Browse Programs ✨
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Talk to Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
