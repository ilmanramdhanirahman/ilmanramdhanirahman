import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Codepen,
  Dribbble,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  MessageCircle,
} from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const socials = [
  {
    name: 'GitHub',
    handle: '@alexchen',
    href: 'https://github.com/alexchen',
    icon: <Github size={22} />,
    color: '#fafafa',
    bg: '#27272a',
    desc: 'Open source work & experiments',
  },
  {
    name: 'Twitter / X',
    handle: '@alexchendev',
    href: 'https://twitter.com/alexchendev',
    icon: <Twitter size={22} />,
    color: '#1da1f2',
    bg: 'rgba(29,161,242,0.1)',
    desc: 'Thoughts on design & code',
  },
  {
    name: 'LinkedIn',
    handle: 'Alex Chen',
    href: 'https://linkedin.com/in/alexchen',
    icon: <Linkedin size={22} />,
    color: '#0a66c2',
    bg: 'rgba(10,102,194,0.1)',
    desc: 'Professional experience',
  },
  {
    name: 'Dribbble',
    handle: '@alexchen',
    href: 'https://dribbble.com/alexchen',
    icon: <Dribbble size={22} />,
    color: '#ea4c89',
    bg: 'rgba(234,76,137,0.1)',
    desc: 'Design shots & UI explorations',
  },
  {
    name: 'CodePen',
    handle: '@alexchen',
    href: 'https://codepen.io/alexchen',
    icon: <Codepen size={22} />,
    color: '#47cf73',
    bg: 'rgba(71,207,115,0.1)',
    desc: 'CSS experiments & demos',
  },
  {
    name: 'Email',
    handle: 'hello@alexchen.dev',
    href: 'mailto:hello@alexchen.dev',
    icon: <Mail size={22} />,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    desc: 'Best way to reach me',
  },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (submitted) {
    return (
      <div
        style={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'rgba(52,211,153,0.12)',
              border: '1px solid rgba(52,211,153,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              color: '#34d399',
            }}
          >
            <CheckCircle2 size={36} />
          </div>
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: '2.5rem',
              color: '#fafafa',
              marginBottom: '1rem',
            }}
          >
            Message sent!
          </h2>
          <p style={{ color: '#71717a', lineHeight: 1.7, marginBottom: '2rem' }}>
            Thanks for reaching out — I typically respond within 24 hours.
            Looking forward to connecting.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              backgroundColor: '#27272a',
              color: '#fafafa',
              border: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '4rem' }}>
        <p
          style={{
            color: '#8b5cf6',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          Get in Touch
        </p>
        <h1
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: '#fafafa',
            lineHeight: 1.05,
            marginBottom: '1rem',
          }}
        >
          Let's build something{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            remarkable.
          </span>
        </h1>
        <p style={{ color: '#71717a', maxWidth: '48ch', lineHeight: 1.7 }}>
          Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Contact form */}
        <div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={(e) => {
              e.preventDefault()
              setLoading(true)
              const form = e.currentTarget
              const formData = new FormData(form)
              fetch('/contact.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(
                  formData as unknown as Record<string, string>,
                ).toString(),
              })
                .then(() => {
                  setSubmitted(true)
                  setLoading(false)
                })
                .catch(() => setLoading(false))
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label
                  htmlFor="name"
                  style={{ display: 'block', color: '#a1a1aa', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '0.5rem', textTransform: 'uppercase' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #27272a',
                    backgroundColor: '#18181b',
                    color: '#fafafa',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => (e.target as HTMLElement).style.borderColor = '#8b5cf6'}
                  onBlur={(e) => (e.target as HTMLElement).style.borderColor = '#27272a'}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  style={{ display: 'block', color: '#a1a1aa', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '0.5rem', textTransform: 'uppercase' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #27272a',
                    backgroundColor: '#18181b',
                    color: '#fafafa',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => (e.target as HTMLElement).style.borderColor = '#8b5cf6'}
                  onBlur={(e) => (e.target as HTMLElement).style.borderColor = '#27272a'}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                style={{ display: 'block', color: '#a1a1aa', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '0.5rem', textTransform: 'uppercase' }}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What's this about?"
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '0.75rem',
                  border: '1px solid #27272a',
                  backgroundColor: '#18181b',
                  color: '#fafafa',
                  fontSize: '0.95rem',
                  outline: 'none',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => (e.target as HTMLElement).style.borderColor = '#8b5cf6'}
                onBlur={(e) => (e.target as HTMLElement).style.borderColor = '#27272a'}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                style={{ display: 'block', color: '#a1a1aa', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '0.5rem', textTransform: 'uppercase' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder="Tell me about your project, idea, or just say hello..."
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '0.75rem',
                  border: '1px solid #27272a',
                  backgroundColor: '#18181b',
                  color: '#fafafa',
                  fontSize: '0.95rem',
                  outline: 'none',
                  fontFamily: 'inherit',
                  resize: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box',
                  lineHeight: 1.6,
                }}
                onFocus={(e) => (e.target as HTMLElement).style.borderColor = '#8b5cf6'}
                onBlur={(e) => (e.target as HTMLElement).style.borderColor = '#27272a'}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.9rem 2rem',
                borderRadius: '9999px',
                background: loading ? '#3f3f46' : 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                color: '#fafafa',
                fontSize: '0.95rem',
                fontWeight: 600,
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: loading ? 'none' : '0 0 40px rgba(139,92,246,0.3)',
                transition: 'opacity 0.2s',
                fontFamily: 'inherit',
                alignSelf: 'flex-start',
              }}
            >
              <Send size={16} />
              {loading ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Right column: info + socials */}
        <div>
          {/* Quick info */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: '1.75rem',
                color: '#fafafa',
                marginBottom: '1.5rem',
                fontWeight: 400,
              }}
            >
              Quick info
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: <MapPin size={16} />, label: 'Location', value: 'San Francisco, CA' },
                { icon: <Clock size={16} />, label: 'Timezone', value: 'PST (UTC−8)' },
                { icon: <MessageCircle size={16} />, label: 'Response time', value: 'Usually within 24 hours' },
              ].map(({ icon, label, value }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    backgroundColor: '#18181b',
                    border: '1px solid #27272a',
                  }}
                >
                  <span style={{ color: '#8b5cf6' }}>{icon}</span>
                  <div>
                    <div style={{ color: '#52525b', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
                    <div style={{ color: '#d4d4d8', fontSize: '0.9rem', marginTop: '0.1rem' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social links */}
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: '1.75rem',
              color: '#fafafa',
              marginBottom: '1.25rem',
              fontWeight: 400,
            }}
          >
            Find me online
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {socials.map(({ name, handle, href, icon, color, bg, desc }) => (
              <a
                key={name}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-hover"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '0.875rem',
                  border: '1px solid #27272a',
                  backgroundColor: '#18181b',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = color
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#27272a'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color,
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#fafafa', fontSize: '0.9rem', fontWeight: 600 }}>{name}</div>
                  <div style={{ color: '#52525b', fontSize: '0.8rem' }}>{desc}</div>
                </div>
                <div style={{ color: '#3f3f46', fontSize: '0.8rem' }}>{handle}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
