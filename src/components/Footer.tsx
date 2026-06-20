import { Link } from '@tanstack/react-router'
import { Github, Twitter, Linkedin, Mail, Codepen } from 'lucide-react'

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #27272a',
        backgroundColor: '#09090b',
        padding: '3rem 1.5rem',
        marginTop: '6rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: '1.5rem',
            color: '#fafafa',
          }}
        >
          Alex<span style={{ color: '#8b5cf6' }}>.</span>
        </div>

        <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/gallery', label: 'Gallery' },
            { to: '/projects', label: 'Projects' },
            { to: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: '#a1a1aa',
                textDecoration: 'none',
                fontSize: '0.85rem',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#fafafa'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#a1a1aa'}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {[
            { href: 'https://github.com/ilmanramdhanirahman', icon: <Github size={18} />, label: 'GitHub' },
            { href: 'https://twitter.com/@ilmanramdhanirahman', icon: <Twitter size={18} />, label: 'Twitter' },
            { href: 'https://linkedin.com/in/ilmanramdhanirahman', icon: <Linkedin size={18} />, label: 'LinkedIn' },
            { href: 'https://codepen.io/ilmanramdhanirahman', icon: <Codepen size={18} />, label: 'CodePen' },
            { href: 'mailto:ilmanramdhanirahman@yahoo.com', icon: <Mail size={18} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              style={{
                color: '#52525b',
                transition: 'color 0.2s',
                display: 'flex',
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#8b5cf6'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#52525b'}
            >
              {icon}
            </a>
          ))}
        </div>

        <p style={{ color: '#52525b', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} ilmanramdhanirahman. Built with TanStack Start & Netlify.
        </p>
      </div>
    </footer>
  )
}
