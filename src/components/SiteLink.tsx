import type { SiteLinkContent } from '../content/types'

interface SiteLinkProps {
  content: SiteLinkContent
  onOpen: () => void
}

export function SiteLink({ content, onOpen }: SiteLinkProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onOpen}
        className="text-left text-base text-[#1a0dab] hover:underline dark:text-[#8ab4f8]"
      >
        {content.title}
      </button>
      <p className="text-sm text-[#4d5156] dark:text-[#bdc1c6]">{content.snippet}</p>
    </div>
  )
}
