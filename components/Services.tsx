"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import { serviceImages } from '@/lib/projects'

export default function Services() {
  const { lang } = useLanguage()
  const t = translations[lang].services

  return (
    <section id="services" className="bg-(--bg)">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4">{t.sectionLabel}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white light:text-surface">{t.title}</h2>
        </motion.div>
      </div>

      {/* Service rows with horizontal padding so they don't touch screen edges */}
      <div className="px-4 md:px-8 lg:px-12 pb-12 space-y-4">
        {t.items.map((item, i) => (
          <div
            key={item.name}
            className={`flex flex-col rounded-2xl overflow-hidden ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Image panel */}
            <motion.div
              className="relative w-full md:w-1/2 min-h-[60vw] md:min-h-[52vh] bg-surface"
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
            >
              <Image
                src={serviceImages[i]}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Text panel */}
            <motion.div
              className="w-full md:w-1/2 flex items-center px-8 md:px-14 lg:px-20 py-14 bg-(--bg-surface)"
              initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
            >
              <div>
                <span className="text-gold text-sm tracking-[0.25em] uppercase mb-5 block font-medium">
                  0{i + 1}
                </span>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white light:text-surface mb-5">
                  {item.name}
                </h3>
                <p className="text-white/55 light:text-surface/60 text-base leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
