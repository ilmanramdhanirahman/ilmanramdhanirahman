import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Code2, Palette, Zap } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '6rem 1.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow bg */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '600px',
            background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative' }}>
          {/* Kicker */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              border: '1px solid rgba(139,92,246,0.3)',
              backgroundColor: 'rgba(139,92,246,0.08)',
              marginBottom: '2rem',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#8b5cf6', display: 'inline-block' }} />
            <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Available for Projects
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              maxWidth: '14ch',
            }}
          >
            <span style={{ color: '#fafafa' }}>Design that</span>{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 40%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              moves
            </span>{' '}
            <span style={{ color: '#fafafa' }}>people.</span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#a1a1aa',
              maxWidth: '56ch',
              marginBottom: '3rem',
              lineHeight: 1.7,
            }}
          >
            I'm Ilman Ramdhani Rahman — a full-stack designer and developer based in San Francisco.
            I craft digital experiences that are fast, beautiful, and purposeful.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#fafafa',
                background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                textDecoration: 'none',
                boxShadow: '0 0 40px rgba(139,92,246,0.3)',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.opacity = '0.9'
                el.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }}
            >
              View Work <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#fafafa',
                border: '1px solid #3f3f46',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#8b5cf6'
                el.style.color = '#a78bfa'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#3f3f46'
                el.style.color = '#fafafa'
              }}
            >
              Get in Touch
            </Link>
          </div>

          {/* Stats */}
          <div
            style={{
              marginTop: '6rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              maxWidth: '480px',
            }}
          >
            {[
              { value: '8+', label: 'Years experience' },
              { value: '60+', label: 'Projects shipped' },
              { value: '12', label: 'Happy clients' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: '2rem',
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    color: '#fafafa',
                    lineHeight: 1,
                    marginBottom: '0.25rem',
                  }}
                >
                  {value}
                </div>
                <div style={{ color: '#71717a', fontSize: '0.8rem', letterSpacing: '0.02em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I do */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid #18181b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#8b5cf6', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            What I do
          </p>
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#fafafa',
              marginBottom: '3rem',
              maxWidth: '20ch',
            }}
          >
            Building at the intersection of design & engineering
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                icon: <Palette size={22} />,
                title: 'Product Design',
                desc: 'From wireframes to polished interfaces — I design systems that scale and delight users at every interaction.',
                color: '#8b5cf6',
              },
              {
                icon: <Code2 size={22} />,
                title: 'Frontend Engineering',
                desc: 'React, TypeScript, and modern CSS. I build performant, accessible UIs that look exactly like the designs.',
                color: '#f59e0b',
              },
              {
                icon: <Zap size={22} />,
                title: 'Full-Stack Development',
                desc: 'APIs, databases, deployments. I architect and ship complete products from the ground up.',
                color: '#34d399',
              },
            ].map(({ icon, title, desc, color }) => (
              <div
                key={title}
                className="card-hover"
                style={{
                  padding: '2rem',
                  borderRadius: '1rem',
                  border: '1px solid #27272a',
                  backgroundColor: '#18181b',
                  cursor: 'default',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: `${color}18`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color,
                    marginBottom: '1.25rem',
                  }}
                >
                  {icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: '1.4rem',
                    color: '#fafafa',
                    marginBottom: '0.75rem',
                    fontWeight: 400,
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: '#71717a', lineHeight: 1.7, fontSize: '0.95rem' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            borderRadius: '1.5rem',
            padding: '4rem 3rem',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(109,40,217,0.08) 100%)',
            border: '1px solid rgba(139,92,246,0.25)',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: '#fafafa',
              marginBottom: '1rem',
            }}
          >
            Got a project in mind?
          </h2>
          <p style={{ color: '#a1a1aa', marginBottom: '2rem', maxWidth: '44ch', margin: '0 auto 2rem' }}>
            I'm always open to discussing new opportunities, collaborations, or just a good conversation about design.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2.5rem',
              borderRadius: '9999px',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#fafafa',
              background: '#8b5cf6',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = '#7c3aed'}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = '#8b5cf6'}
          >
            Let's Talk <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
