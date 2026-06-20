import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Alex Chen — Designer & Developer' },
      { name: 'description', content: 'Full-stack designer and developer crafting beautiful, functional digital experiences.' },
      { name: 'theme-color', content: '#09090b' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Nav />
        <main style={{ paddingTop: '64px' }}>
          {children}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
