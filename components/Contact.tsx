"use client"
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

const PHONE_NUMBER = '+919000000000'
const WHATSAPP_NUMBER = '919000000000'

export default function Contact() {
  const { lang } = useLanguage()
  const t = translations[lang].contact

  const whatsappMessage =
    lang === 'en'
      ? 'Hi, I am interested in your services.'
      : 'नमस्ते, मुझे आपकी सेवाओं में रुचि है।'

  return (
    <section id="contact" className="py-28 bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-5">{t.sectionLabel}</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white light:text-[#1A1A1A] mb-5">{t.title}</h2>
          <p className="text-white/50 light:text-[#1A1A1A]/55 text-base mb-12 max-w-xl mx-auto leading-relaxed">{t.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#0F0F0F] font-semibold text-sm tracking-wide rounded hover:bg-[#b8963e] transition-colors min-w-[180px]"
            >
              <PhoneIcon />
              {t.call}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-white/25 light:border-[#1A1A1A]/25 text-white light:text-[#1A1A1A] font-semibold text-sm tracking-wide rounded hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors min-w-[180px]"
            >
              <WhatsAppIcon />
              {t.whatsapp}
            </a>
          </div>

          <p className="text-white/30 light:text-[#1A1A1A]/35 text-sm flex items-center justify-center gap-2">
            <LocationIcon />
            {t.address}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.69A2 2 0 012.18 0H5.2a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.5 7.59a16 16 0 006 6l.96-.97a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
