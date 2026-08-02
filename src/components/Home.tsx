import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { ColorfulText } from './ColorfulText'
import { ThemeToggle } from './ThemeToggle'

interface HomeProps {
  onEnter: () => void
}

export function Home({ onEnter }: HomeProps) {
  const { content, language, setLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const themeLabel = language === 'pt' ? 'Alternar tema escuro' : 'Toggle dark theme'
  const enterLabel = language === 'pt' ? 'Ir para o currículo' : 'Go to resume'

  const languageButtonClass = (active: boolean, size: string) =>
    `rounded-full text-sm ${size} ${
      active
        ? 'border border-[#4285F4] bg-[#e8f0fe] text-[#1a73e8] dark:bg-[#3c4043] dark:text-[#8ab4f8]'
        : 'border border-transparent bg-[#f8f9fa] text-[#3c4043] hover:border-[#dadce0] dark:bg-[#303134] dark:text-[#e8eaed] dark:hover:border-[#5f6368]'
    }`

  return (
    <>
      {/* Mobile: search bar with the arrow built in, full-width language pills (matches the Google app layout) */}
      <div className="relative flex min-h-screen flex-col items-center justify-center gap-8 bg-white px-6 dark:bg-[#202124] sm:hidden">
        <div className="absolute right-6 top-6">
          <ThemeToggle theme={theme} onToggle={toggleTheme} label={themeLabel} />
        </div>

        <h1 className="text-6xl font-medium tracking-tight">
          <ColorfulText text={content.name.split(' ')[0]} />
        </h1>

        <button
          type="button"
          onClick={onEnter}
          aria-label={enterLabel}
          className="flex w-full max-w-xl items-center gap-3 rounded-full border border-[#dadce0] px-5 py-4 text-left text-[#3c4043] shadow-sm hover:shadow-md dark:border-[#5f6368] dark:text-[#e8eaed] dark:hover:shadow-[#000]/40"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 shrink-0 text-[#9aa0a6]">
            <circle cx="11" cy="11" r="7" />
            <path strokeLinecap="round" d="m20 20-3.5-3.5" />
          </svg>
          <span className="min-w-0 flex-1 truncate">{content.searchPlaceholder}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>

        <div className="flex w-full max-w-xl gap-3">
          <button
            type="button"
            onClick={() => setLanguage('pt')}
            className={languageButtonClass(language === 'pt', 'flex-1 py-3')}
          >
            {content.languageNames.pt}
          </button>
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={languageButtonClass(language === 'en', 'flex-1 py-3')}
          >
            {content.languageNames.en}
          </button>
        </div>
      </div>

      {/* Desktop/tablet: unchanged */}
      <div className="relative hidden min-h-screen flex-col items-center justify-center gap-8 bg-white px-6 dark:bg-[#202124] sm:flex">
        <div className="absolute right-6 top-6">
          <ThemeToggle theme={theme} onToggle={toggleTheme} label={themeLabel} />
        </div>

        <h1 className="text-7xl font-medium tracking-tight sm:text-8xl">
          <ColorfulText text={content.name.split(' ')[0]} />
        </h1>

        <div className="flex w-full max-w-xl items-center gap-3">
          <button
            type="button"
            onClick={onEnter}
            className="flex flex-1 items-center gap-3 rounded-full border border-[#dadce0] px-5 py-3 text-left text-[#3c4043] shadow-sm hover:shadow-md dark:border-[#5f6368] dark:text-[#e8eaed] dark:hover:shadow-[#000]/40"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 shrink-0 text-[#9aa0a6]">
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m20 20-3.5-3.5" />
            </svg>
            {content.searchPlaceholder}
          </button>

          <button
            type="button"
            onClick={onEnter}
            aria-label={enterLabel}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#dadce0] text-[#3c4043] hover:bg-[#f8f9fa] dark:border-[#5f6368] dark:text-[#e8eaed] dark:hover:bg-[#303134]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setLanguage('pt')}
            className={languageButtonClass(language === 'pt', 'px-4 py-2')}
          >
            {content.languageNames.pt}
          </button>
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={languageButtonClass(language === 'en', 'px-4 py-2')}
          >
            {content.languageNames.en}
          </button>
        </div>
      </div>
    </>
  )
}
