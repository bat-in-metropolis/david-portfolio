import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Gallery from '@/components/projects/Gallery'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Projects — Navbharat Infra',
  description:
    'Explore our portfolio of engineering design, interior design, and construction projects in Patna, Bihar.',
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
