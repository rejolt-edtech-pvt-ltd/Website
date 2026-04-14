import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="navbar-logo" style={{ marginBottom: '0.5rem' }}>
              <div className="navbar-logo-icon">⚡</div>
              <span style={{
                background: 'linear-gradient(135deg,#6c3fff,#8b6dff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Outfit,sans-serif',
                fontWeight: 800,
                fontSize: '1.25rem',
              }}>
                REJOLT EDTECH
              </span>
            </div>
            <p>
              Bridging the gap between academics and industry through interactive education,
              real-world projects, and joyful learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="footer-col">
            <h4>Programs</h4>
            <ul>
              <li><a href="https://www.rejoltedtech.com/courses/611772" target="_blank" rel="noreferrer">All Access</a></li>
              <li><a href="https://www.rejoltedtech.com/courses/610536" target="_blank" rel="noreferrer">Web Dev Internship</a></li>
              <li><a href="https://www.rejoltedtech.com/courses/609692" target="_blank" rel="noreferrer">AWS Internship</a></li>
              <li><a href="https://www.rejoltedtech.com/courses/609571" target="_blank" rel="noreferrer">Data Analytics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📍</div>
              <span>V-Hub, Vardhaman College of Engineering, Hyderabad - 501218</span>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📞</div>
              <span>+91 7989763304</span>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">✉️</div>
              <span>rejoltedtech@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} REJOLT EDTECH PRIVATE LIMITED. All rights reserved.</span>
          <span style={{ color: 'var(--text-dim)' }}>Made with ❤️ for learners across India</span>
        </div>
      </div>
    </footer>
  )
}
