"use client"
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, ProjectCategory } from '@/lib/projects'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import FilterTabs from './FilterTabs'
import ProjectCard from './ProjectCard'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all')
  const { lang } = useLanguage()
  const t = translations[lang].projects

  const filtered =
    activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section className="py-24 bg-(--bg) min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">{t.sectionLabel}</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white light:text-surface mb-3">{t.title}</h1>
          <p className="text-white/45 light:text-surface/50 text-base mb-10">{t.subtitle}</p>
          <FilterTabs active={activeFilter} onChange={setActiveFilter} />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-white/30 light:text-surface/35 text-center py-20 text-base">{t.empty}</p>
        )}
      </div>
    </section>
  )
}
