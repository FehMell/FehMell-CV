export interface SiteLinkContent {
  title: string
  snippet: string
  full: string
}

export interface ProjectItem {
  name: string
  snippet: string
  description: string
  image: string
  technologies: string[]
  link: string
  linkLabel: string
  linkStyle: 'gold' | 'blue'
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  bullets: string[]
}

export interface SectionContent {
  title: string
  snippet: string
  full: string
  siteLinks?: SiteLinkContent[]
  skills?: string[]
  projects?: ProjectItem[]
  technologiesLabel?: string
  experiences?: ExperienceItem[]
}

export interface ContactLink {
  label: string
  href: string
  icon: 'whatsapp' | 'linkedin' | 'github' | 'email'
}

export interface ProfileInfo {
  birthDate: string
  birthDateLabel: string
  height: string
  heightLabel: string
  studying: string
  studyingLabel: string
}

export interface LanguageNames {
  pt: string
  en: string
}

export interface CvContent {
  name: string
  tagline: string
  domain: string
  searchPlaceholder: string
  statsLine: string
  relatedSearchesLabel: string
  relatedSearches: string[]
  profile: ProfileInfo
  languageNames: LanguageNames
  sections: {
    about: SectionContent
    skills: SectionContent
    projects: SectionContent
    experience: SectionContent
    contacts: SectionContent
  }
  contactLinks: ContactLink[]
}
