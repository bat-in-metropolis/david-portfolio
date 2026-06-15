"use client"
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

const NAV_HREFS = ['/#services', '/#projects', '/#about', '/#contact']

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang].footer

  return (
    <footer className="bg-[var(--bg-deep)] border-t border-white/5 light:border-[#1A1A1A]/8">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <Link href="/" className="font-heading text-xl font-bold text-white light:text-[#1A1A1A]">
              Navbharat<span className="text-[#C9A84C]">Infra</span>
            </Link>
            <p className="text-white/35 light:text-[#1A1A1A]/45 text-sm mt-2 italic font-heading">{t.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {t.links.map((label, i) => (
              <a
                key={label}
                href={NAV_HREFS[i]}
                className="text-sm text-white/45 light:text-[#1A1A1A]/50 hover:text-[#C9A84C] transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/5 light:border-[#1A1A1A]/8 mt-8 pt-8">
          <p className="text-white/25 light:text-[#1A1A1A]/35 text-xs text-center">{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
