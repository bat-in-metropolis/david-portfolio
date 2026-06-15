"use client"
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

const ABOUT_IMAGE = '/projects/exterior-1.jpg'

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let startTime: number
    const duration = 1800
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <div ref={ref}>
      <div className="font-heading text-4xl md:text-5xl font-bold text-[#C9A84C]">
        {count}{suffix}
      </div>
      <div className="text-white/50 light:text-[#1A1A1A]/55 text-sm mt-2 tracking-wide">{label}</div>
    </div>
  )
}

export default function About() {
  const { lang } = useLanguage()
  const t = translations[lang].about

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--bg-surface)]">
        <Image
          src={ABOUT_IMAGE}
          alt="Navbharat Infra project"
          fill
          className="object-cover opacity-15"
        />
      </div>
      {/* Gradient overlay — dark in dark mode, warm in light mode */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/90 to-[#0F0F0F]/65 light:from-[#F7F3EE]/92 light:to-[#F7F3EE]/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-5">{t.sectionLabel}</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white light:text-[#1A1A1A] mb-6">{t.title}</h2>
            <p className="text-white/60 light:text-[#1A1A1A]/65 text-base leading-relaxed mb-7">{t.desc}</p>
            <p className="font-heading text-xl text-[#C9A84C] italic">{t.tagline}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {t.stats.map(stat => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
