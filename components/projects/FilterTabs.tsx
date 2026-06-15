"use client"
import { motion } from 'framer-motion'
import { ProjectCategory } from '@/lib/projects'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

interface FilterTabsProps {
  active: ProjectCategory | 'all'
  onChange: (cat: ProjectCategory | 'all') => void
}

export default function FilterTabs({ active, onChange }: FilterTabsProps) {
  const { lang } = useLanguage()
  const f = translations[lang].projects.filters

  const tabs: { key: ProjectCategory | 'all'; label: string }[] = [
    { key: 'all', label: f.all },
    { key: 'exterior', label: f.exterior },
    { key: 'interior', label: f.interior },
    { key: 'construction', label: f.construction },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`relative px-5 py-2 text-sm rounded-full transition-colors cursor-pointer ${
            active === tab.key
              ? 'text-[#0F0F0F]'
              : 'text-white/55 light:text-[#1A1A1A]/60 border border-white/15 light:border-[#1A1A1A]/20 hover:border-white/35 light:hover:border-[#1A1A1A]/40 hover:text-white light:hover:text-[#1A1A1A]'
          }`}
        >
          {active === tab.key && (
            <motion.div
              layoutId="filter-pill"
              className="absolute inset-0 bg-[#C9A84C] rounded-full"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span className="relative z-10 font-medium">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}
