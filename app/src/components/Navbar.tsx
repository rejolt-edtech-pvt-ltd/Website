import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  const links = [
    { to: '/',             label: 'Home' },
    { to: '/about',        label: 'About Us' },
    { to: '/courses',      label: 'Courses' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact',      label: 'Contact Us' },
  ]

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
        <div className="navbar-logo-icon">⚡</div>
        <span className="navbar-logo-text">REJOLT</span>
      </NavLink>

      <ul className={`navbar-links${open ? ' open' : ''}`}>
        {links.map(l => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            to="/login"
            className="navbar-cta"
            onClick={() => setOpen(false)}
          >
            Login
          </NavLink>
        </li>
      </ul>

      <div className="navbar-right">
        <button
          className="theme-toggle"
          onClick={toggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <button
          className="hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span style={open ? { transform: 'rotate(45deg) translateY(7px)' } : {}} />
          <span style={open ? { opacity: 0 } : {}} />
          <span style={open ? { transform: 'rotate(-45deg) translateY(-7px)' } : {}} />
        </button>
      </div>
    </nav>
  )
}
