import { useState } from 'react'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { Home } from './components/Home'
import { Header } from './components/Header'
import { TabsNav } from './components/TabsNav'
import { SearchResult } from './components/SearchResult'
import { AboutText } from './components/AboutText'
import { RelatedSearches } from './components/RelatedSearches'
import { ProfileSidebar } from './components/ProfileSidebar'
import { NameWordmark } from './components/NameWordmark'

function CvPage({ onHome }: { onHome: () => void }) {
  const { content, language, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const base = `${content.domain} › fehmell`

  const tabs = [
    { label: content.sections.about.title, href: '#about' },
    { label: content.sections.skills.title, href: '#skills' },
    { label: content.sections.projects.title, href: '#projects' },
    { label: content.sections.experience.title, href: '#experience' },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#202124] dark:text-[#e8eaed]">
      <Header
        logoText={content.name.split(' ')[0]}
        searchPlaceholder={content.searchPlaceholder}
        language={language}
        onToggleLanguage={toggleLanguage}
        onLogoClick={onHome}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <TabsNav tabs={tabs} />
      <div className="mx-auto max-w-5xl">
        <p className="px-6 pt-4 text-xs text-[#70757a] sm:px-10 dark:text-[#9aa0a6]">{content.statsLine}</p>

        <main className="grid grid-cols-1 gap-10 px-6 py-6 sm:px-10 lg:grid-cols-[1fr_320px]">
          <div className="order-2 flex flex-col gap-9 lg:order-1">
            <SearchResult id="about" section={content.sections.about} path={`${base}/sobre-mim`}>
              <AboutText language={language} />
            </SearchResult>
            <SearchResult id="skills" section={content.sections.skills} path={`${base}/habilidades`} />
            <SearchResult id="projects" section={content.sections.projects} path={`${base}/projetos`} />
            <SearchResult id="experience" section={content.sections.experience} path={`${base}/experiencia`} />

            <RelatedSearches label={content.relatedSearchesLabel} items={content.relatedSearches} />
          </div>

          <ProfileSidebar content={content} className="order-1 lg:order-2" />
        </main>

        <NameWordmark text={content.name.split(' ')[0]} />
      </div>
    </div>
  )
}

function Root() {
  const [view, setView] = useState<'home' | 'cv'>('home')

  return view === 'home' ? (
    <Home onEnter={() => setView('cv')} />
  ) : (
    <CvPage onHome={() => setView('home')} />
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Root />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
