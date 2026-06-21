"use client"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import { projects } from '@/lib/projects'

const featured = projects.filter(p => p.featured)

const bentoConfig = [
  'row-span-2',
  'col-span-2',
  '',
  'row-span-2',
  'col-span-2',
  '',
]

export default function FeaturedProjects() {
  const { lang } = useLanguage()
  const t = translations[lang].featuredProjects

  return (
    <section id="projects" className="py-24 bg-(--bg)">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">{t.sectionLabel}</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white light:text-surface">{t.title}</h2>
            <p className="text-white/45 light:text-surface/50 mt-3 text-base">{t.subtitle}</p>
          </div>
          <Link
            href="/projects"
            className="text-sm text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors whitespace-nowrap self-start md:self-auto"
          >
            {t.viewAll} →
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-3 md:gap-4">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              className={`relative overflow-hidden rounded-sm bg-surface group cursor-pointer ${bentoConfig[i] ?? ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Image
                src={project.src}
                alt={lang === 'en' ? project.titleEn : project.titleHi}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-gold text-xs uppercase tracking-widest">{project.category}</span>
                <p className="text-white text-sm font-medium mt-1">
                  {lang === 'en' ? project.titleEn : project.titleHi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
