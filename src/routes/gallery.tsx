import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

type Photo = {
  id: string
  unsplashId: string
  title: string
  category: string
  width: number
  height: number
}

const photos: Photo[] = [
  { id: '1', unsplashId: 'photo-1506905925346-21bda4d32df4', title: 'Mountain Peaks', category: 'Landscape', width: 1200, height: 800 },
  { id: '2', unsplashId: 'photo-1513542789411-b6a5d4f31634', title: 'Urban Grid', category: 'Architecture', width: 800, height: 1100 },
  { id: '3', unsplashId: 'photo-1545569341-9eb8b30979d9', title: 'Tokyo Nights', category: 'Urban', width: 1200, height: 750 },
  { id: '4', unsplashId: 'photo-1480714378408-67cf0d13bc1b', title: 'City Blur', category: 'Urban', width: 900, height: 1200 },
  { id: '5', unsplashId: 'photo-1492691527719-9d1e07e534b4', title: 'Concrete Forms', category: 'Architecture', width: 1200, height: 900 },
  { id: '6', unsplashId: 'photo-1507003211169-0a1dd7228f2d', title: 'Portrait Study', category: 'Portrait', width: 800, height: 1000 },
  { id: '7', unsplashId: 'photo-1441974231531-c6227db76b6e', title: 'Forest Light', category: 'Landscape', width: 1200, height: 800 },
  { id: '8', unsplashId: 'photo-1558618666-fcd25c85cd64', title: 'Minimal Workspace', category: 'Still Life', width: 1000, height: 700 },
  { id: '9', unsplashId: 'photo-1516116216624-53e697fedbea', title: 'Coastal Edge', category: 'Landscape', width: 1200, height: 900 },
  { id: '10', unsplashId: 'photo-1449824913935-59a10b8d2000', title: 'Night Streets', category: 'Urban', width: 1000, height: 750 },
  { id: '11', unsplashId: 'photo-1523712999610-f77fbcfc3843', title: 'Golden Hour', category: 'Landscape', width: 1200, height: 800 },
  { id: '12', unsplashId: 'photo-1487017159836-4e23ece2e4cf', title: 'Studio Setup', category: 'Still Life', width: 800, height: 900 },
]

const categories = ['All', 'Landscape', 'Architecture', 'Urban', 'Portrait', 'Still Life']

function netlifyImageUrl(unsplashId: string, w: number, h?: number) {
  const unsplashUrl = `https://images.unsplash.com/${unsplashId}?auto=format&fit=crop`
  const params = new URLSearchParams({ url: unsplashUrl, w: String(w) })
  if (h) params.set('h', String(h))
  params.set('fit', 'cover')
  params.set('q', '85')
  return `/.netlify/images?${params.toString()}`
}

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState<Photo | null>(null)

  const filtered = activeCategory === 'All' ? photos : photos.filter((p) => p.category === activeCategory)

  return (
    <div style={{ padding: '5rem 1.5rem', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
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
          Photography
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
          Seeing the world
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            one frame at a time.
          </span>
        </h1>
        <p style={{ color: '#71717a', maxWidth: '50ch', lineHeight: 1.7 }}>
          A curated collection of images from my travels and studio sessions.
          Shot on Fujifilm X-T5 and occasionally on 35mm film.
        </p>
      </div>

      {/* Filter bar */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem',
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              border: `1px solid ${activeCategory === cat ? '#8b5cf6' : '#27272a'}`,
              backgroundColor: activeCategory === cat ? 'rgba(139,92,246,0.12)' : 'transparent',
              color: activeCategory === cat ? '#a78bfa' : '#71717a',
              fontSize: '0.85rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontFamily: 'inherit',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="masonry-grid">
        {filtered.map((photo) => (
          <div
            key={photo.id}
            className="masonry-item card-hover"
            onClick={() => setLightbox(photo)}
            style={{
              cursor: 'pointer',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#18181b',
              border: '1px solid #27272a',
            }}
          >
            <img
              src={netlifyImageUrl(photo.unsplashId, 600)}
              alt={photo.title}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)',
                opacity: 0,
                transition: 'opacity 0.3s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1.25rem',
              }}
              className="photo-overlay"
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = '1'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = '0'}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <ZoomIn size={16} />
              </div>
              <span style={{ color: '#71717a', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {photo.category}
              </span>
              <span style={{ color: '#fafafa', fontSize: '1rem', fontWeight: 600, marginTop: '0.25rem' }}>
                {photo.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.95)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            backdropFilter: 'blur(8px)',
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            <X size={20} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '1000px', width: '100%' }}
          >
            <img
              src={netlifyImageUrl(lightbox.unsplashId, 1200, 800)}
              alt={lightbox.title}
              style={{
                width: '100%',
                borderRadius: '0.75rem',
                display: 'block',
                maxHeight: '80vh',
                objectFit: 'contain',
              }}
            />
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  color: '#fafafa',
                  fontSize: '1.25rem',
                }}
              >
                {lightbox.title}
              </span>
              <span
                style={{
                  color: '#8b5cf6',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {lightbox.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
