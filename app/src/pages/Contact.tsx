import { useState, FormEvent } from 'react'
import './Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', interest: '' })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="page">
      {/* ── Hero ── */}
      <section className="contact-hero">
        <div className="hero-orbs">
          <div className="orb orb-1" style={{ width: 400, height: 400, opacity: 0.12 }} />
          <div className="orb orb-2" style={{ opacity: 0.1 }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="section-tag animate-fade-up">📬 Get In Touch</div>
          <h1 className="animate-fade-up delay-1" style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="animate-fade-up delay-2" style={{ maxWidth: 580, margin: '0 auto', fontSize: '1.05rem' }}>
            Whether you're a student looking for guidance, a college exploring training partnerships,
            or a company interested in CSR initiatives — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Contact Main ── */}
      <section className="section">
        <div className="container contact-grid">
          {/* Info Panel */}
          <div className="contact-info animate-fade-up">
            <div className="section-tag" style={{ marginBottom: '1.5rem' }}>Reach Us Directly</div>

            <div className="contact-card card">
              <div className="contact-item">
                <div className="contact-icon-wrap" style={{ background: 'rgba(108,63,255,0.1)' }}>📍</div>
                <div>
                  <div className="contact-item-label">Our Location</div>
                  <div className="contact-item-value">V-Hub, Vardhaman College of Engineering<br />Hyderabad - 501218</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-wrap" style={{ background: 'rgba(0,212,170,0.1)' }}>📞</div>
                <div>
                  <div className="contact-item-label">Phone / WhatsApp</div>
                  <a href="tel:+917989763304" className="contact-item-value contact-link">+91 7989763304</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-wrap" style={{ background: 'rgba(255,107,53,0.1)' }}>✉️</div>
                <div>
                  <div className="contact-item-label">Email Address</div>
                  <a href="mailto:rejoltedtech@gmail.com" className="contact-item-value contact-link">rejoltedtech@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Reach out for */}
            <div className="contact-reasons card" style={{ marginTop: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1rem' }}>We'd love to hear about</h3>
              {[
                { icon: '🎓', text: 'Course & internship enrollments' },
                { icon: '🏫', text: 'College training partnerships' },
                { icon: '🤝', text: 'CSR & skilling initiatives' },
                { icon: '💼', text: 'Campus placement drives' },
              ].map(r => (
                <div key={r.text} className="reason-row">
                  <span>{r.icon}</span>
                  <span>{r.text}</span>
                </div>
              ))}
            </div>

            <div className="response-time-note">
              <span className="response-dot" />
              <span>We usually respond within <strong>24–48 hours</strong> on working days.</span>
            </div>
          </div>

          {/* Form Panel */}
          <div className="contact-form-wrap animate-fade-up delay-2">
            {!submitted ? (
              <div className="card contact-form-card">
                <div className="section-tag" style={{ marginBottom: '1.25rem' }}>Send a Message</div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  How Can We <span className="gradient-text">Help You?</span>
                </h2>
                <p style={{ fontSize: '0.875rem', marginBottom: '1.75rem' }}>
                  Fill in the form below and our team will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="grid-2" style={{ gap: '1rem', marginBottom: '1.25rem' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        className="form-input"
                        type="text"
                        placeholder="Your full name"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        className="form-input"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      className="form-input"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="interest">I'm interested in *</label>
                    <select
                      id="interest"
                      className="form-select"
                      required
                      value={form.interest}
                      onChange={e => setForm(f => ({ ...f, interest: e.target.value }))}
                    >
                      <option value="">Select an option...</option>
                      <option value="courses">Courses</option>
                      <option value="internship">Internship</option>
                      <option value="csr">CSR / Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      className="form-textarea"
                      placeholder="Tell us how we can help you..."
                      required
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message ✉️
                  </button>
                </form>
              </div>
            ) : (
              <div className="card contact-success">
                <div className="success-icon">🎉</div>
                <h2>Message Received!</h2>
                <p style={{ margin: '1rem 0 1.5rem' }}>
                  Thank you for reaching out, <strong style={{ color: 'var(--text)' }}>{form.name}</strong>!
                  Our team will get back to you at <strong style={{ color: 'var(--primary-light)' }}>{form.email}</strong>
                  {' '}within 24–48 working hours.
                </p>
                <button className="btn btn-secondary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '', interest: '' }) }}>
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
