interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
  label: string
}

export function ThemeToggle({ theme, onToggle, label }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      aria-pressed={isDark}
      className={`relative flex h-7 w-14 shrink-0 items-center rounded-full border transition-colors ${
        isDark ? 'border-[#5f6368] bg-[#3c4043]' : 'border-[#dadce0] bg-white'
      }`}
    >
      <span
        className={`absolute left-0.5 flex h-5 w-5 items-center justify-center rounded-full shadow-sm transition-transform ${
          isDark ? 'translate-x-7 bg-[#202124] text-[#fbbc05]' : 'translate-x-0 bg-white text-[#5f6368]'
        }`}
      >
        {isDark ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
            <circle cx="12" cy="12" r="4" />
            <path
              strokeLinecap="round"
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            />
          </svg>
        )}
      </span>
    </button>
  )
}
