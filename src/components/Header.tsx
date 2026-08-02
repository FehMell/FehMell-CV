import { ColorfulText } from './ColorfulText'
import { ThemeToggle } from './ThemeToggle'

interface HeaderProps {
  logoText: string
  searchPlaceholder: string
  language: 'pt' | 'en'
  onToggleLanguage: () => void
  onLogoClick: () => void
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function Header({
  logoText,
  searchPlaceholder,
  language,
  onToggleLanguage,
  onLogoClick,
  theme,
  onToggleTheme,
}: HeaderProps) {
  const backLabel = language === 'pt' ? 'Voltar para a página inicial' : 'Back to home'
  const themeLabel = language === 'pt' ? 'Alternar tema escuro' : 'Toggle dark theme'

  const SearchIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 shrink-0">
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="m20 20-3.5-3.5" />
    </svg>
  )

  const BackIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  )

  return (
    <div>
      {/* Mobile: logo on its own row, search bar below it (matches the Google app layout) */}
      <div className="flex flex-col gap-3 px-6 py-4 sm:hidden">
        <div className="flex items-center justify-between">
          <button type="button" onClick={onLogoClick} className="text-2xl font-medium tracking-tight">
            <ColorfulText text={logoText} />
          </button>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} label={themeLabel} />
            <button
              type="button"
              onClick={onToggleLanguage}
              className="rounded-full border border-[#dadce0] px-3 py-1.5 text-sm font-medium text-[#3c4043] hover:bg-[#f8f9fa] dark:border-[#5f6368] dark:text-[#e8eaed] dark:hover:bg-[#303134]"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-3 rounded-full border border-[#dadce0] px-4 py-2 text-sm text-[#3c4043] dark:border-[#5f6368] dark:text-[#e8eaed]">
            {SearchIcon}
            <span className="truncate">{searchPlaceholder}</span>
          </div>

          <button
            type="button"
            onClick={onLogoClick}
            aria-label={backLabel}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#dadce0] text-[#3c4043] hover:bg-[#f8f9fa] dark:border-[#5f6368] dark:text-[#e8eaed] dark:hover:bg-[#303134]"
          >
            {BackIcon}
          </button>
        </div>
      </div>

      {/* Desktop/tablet: single row, unchanged */}
      <div className="hidden items-center gap-4 px-6 py-4 sm:flex sm:px-10 lg:px-16">
        <button type="button" onClick={onLogoClick} className="text-2xl font-medium tracking-tight">
          <ColorfulText text={logoText} />
        </button>

        <div className="flex min-w-0 max-w-2xl flex-1 items-center gap-3 rounded-full border border-[#dadce0] px-4 py-2 text-sm text-[#3c4043] dark:border-[#5f6368] dark:text-[#e8eaed]">
          {SearchIcon}
          <span className="truncate">{searchPlaceholder}</span>
        </div>

        <button
          type="button"
          onClick={onLogoClick}
          aria-label={backLabel}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#dadce0] text-[#3c4043] hover:bg-[#f8f9fa] dark:border-[#5f6368] dark:text-[#e8eaed] dark:hover:bg-[#303134]"
        >
          {BackIcon}
        </button>

        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} label={themeLabel} />
          <button
            type="button"
            onClick={onToggleLanguage}
            className="rounded-full border border-[#dadce0] px-4 py-1.5 text-sm font-medium text-[#3c4043] hover:bg-[#f8f9fa] dark:border-[#5f6368] dark:text-[#e8eaed] dark:hover:bg-[#303134]"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </div>
    </div>
  )
}
