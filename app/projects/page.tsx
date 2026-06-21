import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Gallery from '@/components/projects/Gallery'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse completed architecture, interior design, and construction projects by Navbharat Infra in Patna, Bihar.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
