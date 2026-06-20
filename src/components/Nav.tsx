import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const state = useRouterState()
  const pathname = state.location.pathname

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: '1px solid rgba(39,39,42,0.8)',
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(9,9,11,0.85)',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: '1.25rem',
            fontWeight: 400,
            color: '#fafafa',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          ilmanramdhanirahman<span style={{ color: '#8b5cf6' }}>.</span>
        </Link>

        {/* Desktop links */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="hidden-mobile"
        >
          {links.map((link) => {
            const isActive = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  color: isActive ? '#8b5cf6' : '#a1a1aa',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.target as HTMLElement).style.color = '#fafafa'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.target as HTMLElement).style.color = '#a1a1aa'
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <a
          href="mailto:ilmanramdhanirahman@yahoo.com"
          style={{
            display: 'none',
            padding: '0.5rem 1.25rem',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: '#fafafa',
            background: '#8b5cf6',
            textDecoration: 'none',
            transition: 'background 0.2s, opacity 0.2s',
          }}
          className="cta-btn"
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = '#7c3aed'
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = '#8b5cf6'
          }}
        >
          Hire Me
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: 'none',
            border: 'none',
            color: '#fafafa',
            cursor: 'pointer',
            padding: '0.25rem',
          }}
          className="mobile-only"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: '1px solid #27272a',
            backgroundColor: '#09090b',
            padding: '1rem 1.5rem 1.5rem',
          }}
        >
          {links.map((link) => {
            const isActive = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.75rem 0',
                  fontSize: '1.1rem',
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  color: isActive ? '#8b5cf6' : '#fafafa',
                  textDecoration: 'none',
                  borderBottom: '1px solid #27272a',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .cta-btn { display: block !important; }
          .mobile-only { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .cta-btn { display: none !important; }
          .mobile-only { display: block !important; }
        }
      `}</style>
    </header>
  )
}
