import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa6'
import photo from '../images/FehMell.jpg'
import type { CvContent, ContactLink } from '../content/types'

const BADGE_META: Record<ContactLink['icon'], { Icon: typeof FaGithub; color: string }> = {
  github: { Icon: FaGithub, color: '#181717' },
  linkedin: { Icon: FaLinkedin, color: '#0A66C2' },
  whatsapp: { Icon: FaWhatsapp, color: '#25D366' },
  email: { Icon: FaEnvelope, color: '#EA4335' },
}

interface ProfileSidebarProps {
  content: CvContent
  className?: string
}

export function ProfileSidebar({ content, className }: ProfileSidebarProps) {
  return (
    <aside
      className={`flex h-fit flex-col gap-4 border-b border-[#dadce0] pb-6 lg:border-b-0 lg:border-l lg:pb-0 lg:pl-8 dark:border-[#3c4043] ${className ?? ''}`}
    >
      <img
        src={photo}
        alt={content.name}
        className="h-56 w-full rounded-md object-cover object-top"
      />

      <div>
        <h2 className="text-lg font-medium">{content.name}</h2>
        <p className="text-sm text-[#5f6368] dark:text-[#9aa0a6]">{content.tagline}</p>
      </div>

      <dl className="flex flex-col divide-y divide-[#dadce0] text-sm dark:divide-[#3c4043]">
        <div className="flex items-start justify-between gap-4 py-3 first:pt-0">
          <dt className="font-medium text-[#3c4043] dark:text-[#e8eaed]">{content.profile.birthDateLabel}</dt>
          <dd className="text-right text-[#3c4043] dark:text-[#bdc1c6]">{content.profile.birthDate}</dd>
        </div>
        <div className="flex items-start justify-between gap-4 py-3">
          <dt className="font-medium text-[#3c4043] dark:text-[#e8eaed]">{content.profile.heightLabel}</dt>
          <dd className="text-right text-[#3c4043] dark:text-[#bdc1c6]">{content.profile.height}</dd>
        </div>
        <div className="flex items-start justify-between gap-4 py-3 last:pb-0">
          <dt className="font-medium text-[#3c4043] dark:text-[#e8eaed]">{content.profile.studyingLabel}</dt>
          <dd className="text-right text-[#3c4043] dark:text-[#bdc1c6]">{content.profile.studying}</dd>
        </div>
      </dl>

      <div className="border-t border-[#dadce0] pt-4 dark:border-[#3c4043]">
        <h3 className="text-base font-medium">{content.sections.contacts.title}</h3>
        <div className="mt-3 flex gap-4">
          {content.contactLinks.map((link) => {
            const { Icon, color } = BADGE_META[link.icon]
            return (
              <a
                key={link.icon}
                href={link.href}
                target={link.icon === 'email' ? undefined : '_blank'}
                rel="noreferrer"
                className="flex flex-col items-center gap-1.5"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-[#dadce0] transition-transform hover:scale-105 dark:ring-[#3c4043]"
                  style={{ backgroundColor: color }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <span className="text-xs text-[#3c4043] dark:text-[#e8eaed]">{link.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
