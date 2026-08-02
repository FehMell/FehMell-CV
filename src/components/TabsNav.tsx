interface TabsNavProps {
  tabs: { label: string; href: string }[]
}

export function TabsNav({ tabs }: TabsNavProps) {
  return (
    <nav className="border-b border-[#dadce0] dark:border-[#3c4043]">
      <div className="mx-auto flex max-w-5xl gap-6 overflow-x-auto px-6 text-sm text-[#3c4043] sm:px-10 lg:px-16 dark:text-[#e8eaed]">
        {tabs.map((tab) => (
          <a
            key={tab.href}
            href={tab.href}
            className="whitespace-nowrap border-b-2 border-transparent py-3 hover:border-[#4285F4] hover:text-[#1a0dab] dark:hover:text-[#8ab4f8]"
          >
            {tab.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
