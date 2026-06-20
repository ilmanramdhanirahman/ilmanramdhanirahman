import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 92 },
  { name: 'Node.js', level: 85 },
  { name: 'Figma', level: 90 },
  { name: 'CSS / Tailwind', level: 95 },
  { name: 'PostgreSQL', level: 78 },
  { name: 'GraphQL', level: 75 },
  { name: 'Three.js', level: 65 },
]

const timeline = [
  {
    year: '2024',
    role: 'Senior Product Designer',
    company: 'Helix Labs',
    desc: 'Leading design for a B2B SaaS platform serving 200k+ users. Built the design system from scratch.',
  },
  {
    year: '2021',
    role: 'Frontend Engineer',
    company: 'Studio North',
    desc: 'Developed marketing sites and interactive experiences for Fortune 500 clients.',
  },
  {
    year: '2019',
    role: 'UI/UX Designer',
    company: 'Forge Agency',
    desc: 'Designed mobile-first interfaces for fintech and healthtech startups.',
  },
  {
    year: '2016',
    role: 'B.S. Computer Science',
    company: 'Stanford University',
    desc: 'Focus on Human-Computer Interaction. Graduated with honors.',
  },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ color: '#d4d4d8', fontSize: '0.875rem', fontWeight: 500 }}>{name}</span>
        <span style={{ color: '#71717a', fontSize: '0.8rem' }}>{level}%</span>
      </div>
      <div
        style={{
          height: '4px',
          borderRadius: '9999px',
          backgroundColor: '#27272a',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            borderRadius: '9999px',
            width: `${level}%`,
            background: 'linear-gradient(90deg, #6d28d9, #8b5cf6)',
          }}
        />
      </div>
    </div>
  )
}

function About() {
  return (
    <div style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '5rem' }}>
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
          About Me
        </p>
        <h1
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: '#fafafa',
            lineHeight: 1.05,
            marginBottom: '0',
          }}
        >
          Designer, developer,
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            obsessive craftsman.
          </span>
        </h1>
      </div>

      {/* Bio + Photo */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          marginBottom: '6rem',
          alignItems: 'start',
        }}
      >
        <div>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#a1a1aa',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}
          >
            I've spent the last 8 years at the crossroads of design and engineering,
            helping teams ship products that people actually love to use. I care deeply
            about the details — the transition that feels just right, the color that
            earns trust, the interaction that sparks delight.
          </p>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#a1a1aa',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}
          >
            When I'm not pushing pixels or writing TypeScript, you'll find me hiking
            the Marin Headlands, obsessing over specialty coffee, or shooting film
            photography around the Bay Area.
          </p>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#a1a1aa',
              lineHeight: 1.8,
            }}
          >
            I believe the best digital products feel inevitable — like they couldn't
            have been designed any other way. That's what I chase with every project.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              inset: '-12px',
              background: 'linear-gradient(135deg, rgba(139,92,246,0.3), transparent)',
              borderRadius: '1.5rem',
              zIndex: 0,
            }}
          />
          <img
            src={`/.netlify/images?url=${encodeURIComponent('/headshot-on-white.jpg')}&w=600&h=720&fit=cover&q=90`}
            alt="Alex Chen"
            style={{
              width: '100%',
              borderRadius: '1.25rem',
              display: 'block',
              position: 'relative',
              zIndex: 1,
              aspectRatio: '4/5',
              objectFit: 'cover',
            }}
          />
          {/* Floating badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(9,9,11,0.9)',
              border: '1px solid #27272a',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#34d399', flexShrink: 0 }} />
            <span style={{ color: '#fafafa', fontSize: '0.85rem', fontWeight: 500 }}>Open to new opportunities</span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div style={{ marginBottom: '6rem' }}>
        <h2
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: '2.5rem',
            color: '#fafafa',
            marginBottom: '2.5rem',
          }}
        >
          Skills & Expertise
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem 4rem',
          }}
        >
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h2
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: '2.5rem',
            color: '#fafafa',
            marginBottom: '2.5rem',
          }}
        >
          Experience & Education
        </h2>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '80px',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, #8b5cf6, transparent)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {timeline.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '2.5rem', paddingLeft: '1rem' }}>
                {/* Year */}
                <div
                  style={{
                    minWidth: '60px',
                    textAlign: 'right',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: '1.1rem',
                      color: '#8b5cf6',
                    }}
                  >
                    {item.year}
                  </span>
                  {/* Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      right: '-2.05rem',
                      top: '0.3rem',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#8b5cf6',
                      border: '2px solid #09090b',
                    }}
                  />
                </div>

                <div style={{ paddingLeft: '1rem' }}>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      color: '#fafafa',
                      fontWeight: 600,
                      marginBottom: '0.25rem',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {item.role}
                  </h3>
                  <div style={{ color: '#8b5cf6', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                    {item.company}
                  </div>
                  <p style={{ color: '#71717a', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
