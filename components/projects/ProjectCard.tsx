"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Project } from '@/lib/projects'
import { useLanguage } from '@/context/LanguageContext'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { lang } = useLanguage()
  const title = lang === 'en' ? project.titleEn : project.titleHi

  return (
    <motion.div
      className="relative overflow-hidden rounded-sm group cursor-pointer bg-[#1A1A1A] mb-4"
      style={{ breakInside: 'avoid' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.4) }}
    >
      <div
        className={`relative w-full ${
          project.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-video'
        }`}
      >
        <Image
          src={project.src}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-[#C9A84C] text-xs uppercase tracking-widest">{project.category}</span>
        <p className="text-white text-sm font-medium mt-1">{title}</p>
      </div>
    </motion.div>
  )
}
