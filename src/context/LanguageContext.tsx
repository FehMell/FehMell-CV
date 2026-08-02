import { createContext, useContext, useState, type ReactNode } from 'react'
import { pt } from '../content/pt'
import { en } from '../content/en'
import type { CvContent } from '../content/types'

type Language = 'pt' | 'en'

const contentMap: Record<Language, CvContent> = { pt, en }

interface LanguageContextValue {
  language: Language
  content: CvContent
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')

  const toggleLanguage = () => setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'))

  return (
    <LanguageContext.Provider value={{ language, content: contentMap[language], setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
