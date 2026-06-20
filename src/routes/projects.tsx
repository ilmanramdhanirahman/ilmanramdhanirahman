import { createFileRoute } from '@tanstack/react-router'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

type Project = {
  title: string
  description: string
  tags: string[]
  github?: string
  liveUrl?: string
  featured?: boolean
  year: string
  unsplashId?: string
}

const projects: Project[] = [
  {
    title: 'Helix Design System',
    description:
      'A comprehensive component library and design system serving 200k+ users across a B2B SaaS platform. Built with Radix UI primitives, fully accessible, and rigorously documented in Storybook.',
    tags: ['React', 'TypeScript', 'Storybook', 'Radix UI', 'Figma'],
    github: 'https://github.com/alexchen/helix-ds',
    liveUrl: 'https://helix-ds.example.com',
    featured: true,
    year: '2024',
    unsplashId: 'photo-1558618666-fcd25c85cd64',
  },
  {
    title: 'Pulse Analytics Dashboard',
    description:
      'Real-time analytics platform for e-commerce teams. Features live data streaming, custom chart builder, and AI-generated insights. Reduced reporting time by 70% for beta customers.',
    tags: ['Next.js', 'D3.js', 'PostgreSQL', 'WebSockets'],
    github: 'https://github.com/alexchen/pulse',
    liveUrl: 'https://pulse-analytics.example.com',
    featured: true,
    year: '2023',
    unsplashId: 'photo-1551288049-bebda4e38f71',
  },
  {
    title: 'Echo — Voice Notes',
    description:
      'An iOS-inspired web app for capturing voice notes with AI transcription. Uses the Web Speech API for real-time transcription, with LLM-powered summaries and tags.',
    tags: ['React', 'Web Speech API', 'OpenAI', 'Supabase'],
    github: 'https://github.com/alexchen/echo',
    year: '2023',
    unsplashId: 'photo-1487017159836-4e23ece2e4cf',
  },
  {
    title: 'Forma — 3D Portfolio',
    description:
      'Experimental 3D portfolio using Three.js and React Three Fiber. Features interactive scene navigation, custom GLSL shaders, and spatial audio.',
    tags: ['Three.js', 'React Three Fiber', 'GLSL', 'Howler.js'],
    github: 'https://github.com/alexchen/forma',
    liveUrl: 'https://forma.alexchen.dev',
    year: '2022',
    unsplashId: 'photo-1502230831726-fe5549140034',
  },
  {
    title: 'Gradient Studio',
    description:
      'Browser-based tool for creating CSS and SVG gradients with export to multiple formats. 15k+ monthly users, featured in CSS Weekly.',
    tags: ['Vanilla JS', 'CSS', 'Canvas API'],
    liveUrl: 'https://gradient.alexchen.dev',
    year: '2021',
    unsplashId: 'photo-1528360983277-13d401cdc186',
  },
  {
    title: 'Kinetic Type Generator',
    description:
      'A typography animation tool that lets designers create kinetic text animations and export to CSS keyframes or GIF. Open source with 2k GitHub stars.',
    tags: ['Canvas API', 'GSAP', 'FFmpeg.wasm'],
    github: 'https://github.com/alexchen/kinetic-type',
    year: '2020',
    unsplashId: 'photo-1561070791-2526d30994b5',
  },
]

function netlifyImageUrl(unsplashId: string, w: number, h: number) {
  const url = `https://images.unsplash.com/${unsplashId}?auto=format&fit=crop`
  return `/.netlify/images?url=${encodeURIComponent(url)}&w=${w}&h=${h}&fit=cover&q=85`
}

function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

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
          Selected Work
        </p>
        <h1
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: '#fafafa',
            lineHeight: 1.05,
            marginBottom: '1.5rem',
          }}
        >
          Things I've built
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            and shipped.
          </span>
        </h1>
        <p style={{ color: '#71717a', maxWidth: '50ch', lineHeight: 1.7 }}>
          A curated selection of products and experiments — ranging from production SaaS to personal explorations in design and code.
        </p>
      </div>

      {/* Featured projects */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
        {featured.map((project, i) => (
          <div
            key={project.title}
            className="card-hover"
            style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: '0',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              border: '1px solid #27272a',
              backgroundColor: '#18181b',
              minHeight: '400px',
            }}
          >
            {/* Image side */}
            {project.unsplashId && (
              <div
                style={{
                  overflow: 'hidden',
                  order: i % 2 === 0 ? 0 : 1,
                  minHeight: '300px',
                  position: 'relative',
                }}
              >
                <img
                  src={netlifyImageUrl(project.unsplashId, 700, 500)}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(139,92,246,0.9)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#fff',
                  }}
                >
                  Featured
                </div>
              </div>
            )}

            {/* Content side */}
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ color: '#52525b', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                {project.year}
              </div>
              <h2
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: '2rem',
                  color: '#fafafa',
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                  fontWeight: 400,
                }}
              >
                {project.title}
              </h2>
              <p style={{ color: '#a1a1aa', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor: 'rgba(139,92,246,0.1)',
                      color: '#a78bfa',
                      border: '1px solid rgba(139,92,246,0.2)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.6rem 1.25rem',
                      borderRadius: '9999px',
                      backgroundColor: '#8b5cf6',
                      color: '#fff',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = '#7c3aed'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = '#8b5cf6'}
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.6rem 1.25rem',
                      borderRadius: '9999px',
                      border: '1px solid #3f3f46',
                      color: '#a1a1aa',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'border-color 0.2s, color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#8b5cf6'
                      ;(e.currentTarget as HTMLElement).style.color = '#a78bfa'
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#3f3f46'
                      ;(e.currentTarget as HTMLElement).style.color = '#a1a1aa'
                    }}
                  >
                    <Github size={14} /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Grid projects */}
      <h2
        style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: '1.75rem',
          color: '#fafafa',
          marginBottom: '1.5rem',
        }}
      >
        Other notable work
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {rest.map((project) => (
          <div
            key={project.title}
            className="card-hover"
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              border: '1px solid #27272a',
              backgroundColor: '#18181b',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {project.unsplashId && (
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src={netlifyImageUrl(project.unsplashId, 640, 400)}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
                />
              </div>
            )}
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: '#52525b', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                {project.year}
              </div>
              <h3
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: '1.35rem',
                  color: '#fafafa',
                  marginBottom: '0.75rem',
                  fontWeight: 400,
                }}
              >
                {project.title}
              </h3>
              <p style={{ color: '#71717a', lineHeight: 1.6, fontSize: '0.9rem', flex: 1, marginBottom: '1rem' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      backgroundColor: '#27272a',
                      color: '#71717a',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      color: '#8b5cf6',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    <ArrowUpRight size={14} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      color: '#52525b',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#a1a1aa'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#52525b'}
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
