"use client"
import { createContext, useContext, useState } from 'react'

type Lang = 'en' | 'hi'

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LanguageContext.Provider value={{ lang, toggleLang: () => setLang(l => l === 'en' ? 'hi' : 'en') }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
