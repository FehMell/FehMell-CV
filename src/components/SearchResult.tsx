import { useState, type ReactNode } from 'react'
import type { SectionContent } from '../content/types'
import { SkillChips } from './SkillChips'
import { SiteLink } from './SiteLink'
import { BrowserWindowModal, type BrowserTab } from './BrowserWindowModal'

interface SearchResultProps {
  id?: string
  section: SectionContent
  path: string
  children?: ReactNode
}

const MAIN_TAB_ID = 'main'

export function SearchResult({ id, section, path, children }: SearchResultProps) {
  const [open, setOpen] = useState(false)
  const [activeTabId, setActiveTabId] = useState(MAIN_TAB_ID)

  const hasProjects = !!section.projects?.length

  const tabs: BrowserTab[] = [
    ...(hasProjects
      ? []
      : [
          {
            id: MAIN_TAB_ID,
            title: section.title,
            url: path,
            content: section.experiences ? (
              <div className="flex flex-col gap-6">
                {section.experiences.map((experience) => (
                  <div key={experience.company}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h2 className="text-lg font-medium text-[#202124] dark:text-[#e8eaed]">
                        {experience.company}
                      </h2>
                      <span className="text-sm text-[#5f6368] dark:text-[#9aa0a6]">{experience.period}</span>
                    </div>
                    <p className="text-sm text-[#5f6368] dark:text-[#9aa0a6]">{experience.role}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                      {experience.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <h2 className="mb-1 text-lg font-medium text-[#202124] dark:text-[#e8eaed]">{section.title}</h2>
                {children ?? (
                  <>
                    <p>{section.full}</p>
                    {section.skills && <SkillChips skills={section.skills} />}
                  </>
                )}
              </>
            ),
          },
        ]),
    ...(section.siteLinks?.map((siteLink) => ({
      id: siteLink.title,
      title: siteLink.title,
      url: path,
      content: (
        <>
          <h2 className="mb-1 text-lg font-medium text-[#202124] dark:text-[#e8eaed]">{siteLink.title}</h2>
          <p>{siteLink.full}</p>
        </>
      ),
    })) ?? []),
    ...(section.projects?.map((project) => ({
      id: project.name,
      title: project.name,
      url: project.link.replace(/^https?:\/\//, ''),
      content: (
        <>
          <h2 className="mb-3 text-lg font-medium text-[#202124] dark:text-[#e8eaed]">{project.name}</h2>
          <img
            src={project.image}
            alt={project.name}
            className="mb-3 w-full rounded-lg border border-[#dadce0] object-cover dark:border-[#3c4043]"
          />
          <p>{project.description}</p>
          {project.technologies.length > 0 && (
            <>
              <h3 className="mt-4 text-base font-bold text-[#202124] dark:text-[#e8eaed]">
                {section.technologiesLabel ?? 'Tecnologias Usadas'}
              </h3>
              <SkillChips skills={project.technologies} />
            </>
          )}
          <div className="mt-6 flex justify-center">
            {project.linkStyle === 'gold' ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group inline-block border border-[#C9A227] p-1"
              >
                <span className="block bg-[#C9A227] px-8 py-3 text-sm font-bold text-white transition-colors group-hover:bg-[#B8931F]">
                  {project.linkLabel}
                </span>
              </a>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-lg border border-[#3d4663] bg-[#161b2e] px-6 py-3 text-sm font-bold text-white shadow-[0_0_18px_rgba(96,165,250,0.25)] transition-colors hover:bg-[#1f2540]"
              >
                {project.linkLabel}
              </a>
            )}
          </div>
        </>
      ),
    })) ?? []),
  ]

  const openTab = (tabId: string) => {
    setActiveTabId(tabId)
    setOpen(true)
  }

  const defaultTabId = section.projects?.[0]?.name ?? MAIN_TAB_ID

  return (
    <div id={id} className="scroll-mt-28">
      <button
        type="button"
        onClick={() => openTab(defaultTabId)}
        className="text-left text-xl text-[#1a0dab] hover:underline dark:text-[#8ab4f8]"
      >
        {section.title}
      </button>
      <p className="text-sm text-[#006621] dark:text-[#81c995]">{path}</p>
      <p className="mt-1 text-sm text-[#4d5156] dark:text-[#bdc1c6]">{section.snippet}</p>

      {section.siteLinks && (
        <div className="mt-4 grid grid-cols-1 gap-4 border-l-2 border-[#dadce0] pl-4 sm:grid-cols-2 dark:border-[#3c4043]">
          {section.siteLinks.map((siteLink) => (
            <SiteLink key={siteLink.title} content={siteLink} onOpen={() => openTab(siteLink.title)} />
          ))}
        </div>
      )}

      {section.projects && (
        <div className="mt-4 grid grid-cols-1 gap-4 border-l-2 border-[#dadce0] pl-4 sm:grid-cols-2 dark:border-[#3c4043]">
          {section.projects.map((project) => (
            <SiteLink
              key={project.name}
              content={{ title: project.name, snippet: project.snippet, full: project.description }}
              onOpen={() => openTab(project.name)}
            />
          ))}
        </div>
      )}

      <BrowserWindowModal
        open={open}
        tabs={tabs}
        activeTabId={activeTabId}
        onTabChange={setActiveTabId}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}
