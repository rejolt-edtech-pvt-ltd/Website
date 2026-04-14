import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ credential: '', password: '' })
  const [error, setError] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('Please use the official REJOLT learning platform to log in. Contact support at rejoltedtech@gmail.com if you need help.')
  }

  return (
    <main className="page login-page">
      <div className="login-orbs">
        <div className="orb orb-1" style={{ width: 500, height: 500, opacity: 0.15, top: '-150px', right: '-150px' }} />
        <div className="orb orb-2" style={{ width: 350, height: 350, opacity: 0.1, bottom: '-100px', left: '-100px' }} />
      </div>

      <div className="login-container">
        {/* Left Panel */}
        <div className="login-left">
          <div className="login-left-content">
            <Link to="/" className="navbar-logo" style={{ display: 'flex', marginBottom: '2rem' }}>
              <div className="navbar-logo-icon">⚡</div>
              <span style={{
                background: 'linear-gradient(135deg,#6c3fff,#8b6dff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Outfit,sans-serif',
                fontWeight: 800,
                fontSize: '1.25rem',
              }}>REJOLT</span>
            </Link>

            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: 1.3 }}>
              Login to Your{' '}
              <span className="gradient-text">Learning Dashboard</span>
            </h1>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Access your enrolled courses, internship content, and progress tracking
              all in one place — continue your learning journey right where you left off.
            </p>

            <div className="login-features">
              {[
                { icon: '📚', text: 'Access all enrolled courses & internships' },
                { icon: '📈', text: 'Track your learning progress' },
                { icon: '🎯', text: 'Download certificates after completion' },
                { icon: '💬', text: 'Connect with mentors & peers' },
              ].map(f => (
                <div key={f.text} className="login-feature-row">
                  <span className="login-feature-icon">{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel – Form */}
        <div className="login-right">
          <div className="login-form-card card">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="section-tag" style={{ marginBottom: '0.75rem' }}>Student Portal</div>
              <h2 style={{ fontSize: '1.6rem' }}>Welcome Back 👋</h2>
              <p style={{ fontSize: '0.875rem', marginTop: '0.4rem' }}>
                Sign in to continue learning
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="cred">Phone / Email</label>
                <input
                  id="cred"
                  className="form-input"
                  type="text"
                  placeholder="Enter phone or email address"
                  required
                  value={form.credential}
                  onChange={e => setForm(f => ({ ...f, credential: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <label className="form-label" htmlFor="password" style={{ margin: 0 }}>Password</label>
                  <button
                    type="button"
                    onClick={() => {}}
                    style={{ background: 'none', border: 'none', color: 'var(--primary-light)', fontSize: '0.8rem', cursor: 'pointer', fontFamily: 'Inter,sans-serif' }}
                  >
                    Forgot Password?
                  </button>
                </div>
                <div style={{ position: 'relative' }}>
                  <input
                    id="password"
                    className="form-input"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Enter your password"
                    required
                    value={form.password}
                    onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                    style={{ paddingRight: '3rem' }}
                  />
                  <button
                    type="button"
                    className="pass-toggle"
                    onClick={() => setShowPass(s => !s)}
                    aria-label="Toggle password visibility"
                  >
                    {showPass ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              {error && (
                <div className="login-error">
                  <span>⚠️</span>
                  <span>{error}</span>
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '1.25rem' }}>
                Login to Dashboard →
              </button>
            </form>

            <div className="login-divider"><span>New to REJOLT?</span></div>

            <div className="login-signup-note">
              <p>
                Sign up with your <strong style={{ color: 'var(--text)' }}>org code</strong> from your institution, or
                contact our support team to get started.
              </p>
              <a href="mailto:rejoltedtech@gmail.com" className="btn btn-secondary btn-sm" style={{ marginTop: '0.875rem', justifyContent: 'center', width: '100%' }}>
                ✉️ Contact Support
              </a>
            </div>

            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '1.5rem' }}>
              By logging in, you agree to REJOLT's Terms of Service & Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
