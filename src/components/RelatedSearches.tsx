interface RelatedSearchesProps {
  label: string
  items: string[]
}

export function RelatedSearches({ label, items }: RelatedSearchesProps) {
  return (
    <div>
      <p className="mb-3 text-sm text-[#70757a] dark:text-[#9aa0a6]">{label}</p>
      <div className="flex flex-wrap gap-x-8 gap-y-2">
        {items.map((item) => (
          <span key={item} className="text-sm text-[#1a0dab] dark:text-[#8ab4f8]">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
