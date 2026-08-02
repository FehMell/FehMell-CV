import { useEffect, useRef, useState, type ReactNode } from 'react'

export interface BrowserTab {
  id: string
  title: string
  url: string
  content: ReactNode
}

interface BrowserWindowModalProps {
  open: boolean
  tabs: BrowserTab[]
  activeTabId: string
  onTabChange: (id: string) => void
  onClose: () => void
}

export function BrowserWindowModal({ open, tabs, activeTabId, onTabChange, onClose }: BrowserWindowModalProps) {
  const [maximized, setMaximized] = useState(false)
  const activeTabRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  useEffect(() => {
    activeTabRef.current?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  }, [activeTabId])

  if (!open) return null

  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className={
          maximized
            ? 'flex h-full w-full flex-col overflow-hidden bg-white shadow-2xl dark:bg-[#202124]'
            : 'flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-[#202124]'
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-end gap-1 bg-[#dee1e6] px-3 pt-2 dark:bg-[#171717]">
          <div className="flex flex-1 items-end gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab.id
              return (
                <div
                  key={tab.id}
                  ref={isActive ? activeTabRef : undefined}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  onClick={() => onTabChange(tab.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') onTabChange(tab.id)
                  }}
                  className={`flex max-w-[220px] cursor-pointer items-center gap-2 rounded-t-lg px-3 py-2 text-xs ${
                    isActive
                      ? 'bg-white text-[#3c4043] dark:bg-[#202124] dark:text-[#e8eaed]'
                      : 'bg-[#dee1e6] text-[#5f6368] hover:bg-[#e8eaed] dark:bg-[#171717] dark:text-[#9aa0a6] dark:hover:bg-[#303134]'
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`h-3.5 w-3.5 shrink-0 ${isActive ? 'text-[#9aa0a6]' : 'text-[#5f6368]'}`}
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path strokeLinecap="round" d="m20 20-3.5-3.5" />
                  </svg>
                  <span className="min-w-0 truncate">{tab.title}</span>
                  {isActive && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        onClose()
                      }}
                      aria-label="Fechar aba"
                      className="ml-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full hover:bg-[#e8eaed]"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
                        <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
                      </svg>
                    </button>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mb-1 hidden shrink-0 items-center gap-0.5 pl-2 sm:flex">
            <button
              type="button"
              onClick={onClose}
              aria-label="Minimizar"
              className="flex h-7 w-9 items-center justify-center rounded hover:bg-[#00000014] dark:hover:bg-[#ffffff1a]"
            >
              <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1" className="h-2.5 w-2.5 text-[#5f6368] dark:text-[#9aa0a6]">
                <path strokeLinecap="round" d="M1 5h8" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setMaximized((m) => !m)}
              aria-label={maximized ? 'Restaurar' : 'Maximizar'}
              className="flex h-7 w-9 items-center justify-center rounded hover:bg-[#00000014] dark:hover:bg-[#ffffff1a]"
            >
              {maximized ? (
                <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1" className="h-2.5 w-2.5 text-[#5f6368] dark:text-[#9aa0a6]">
                  <path d="M2.5 1h5.5v5.5" />
                  <rect x="1" y="2.5" width="6.5" height="6.5" />
                </svg>
              ) : (
                <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1" className="h-2.5 w-2.5 text-[#5f6368] dark:text-[#9aa0a6]">
                  <rect x="1" y="1" width="8" height="8" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="flex h-7 w-9 items-center justify-center rounded text-[#5f6368] hover:bg-[#e81123] hover:text-white dark:text-[#9aa0a6]"
            >
              <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1" className="h-2.5 w-2.5">
                <path strokeLinecap="round" d="m1 1 8 8M9 1 1 9" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 border-b border-[#dadce0] bg-white px-4 py-2.5 dark:border-[#3c4043] dark:bg-[#202124]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 shrink-0 text-[#5f6368] dark:text-[#9aa0a6]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 shrink-0 text-[#c1c4c8] dark:text-[#5f6368]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 shrink-0 text-[#5f6368] dark:text-[#9aa0a6]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4.5 9a8 8 0 0 1 14-3M19.5 15a8 8 0 0 1-14 3" />
          </svg>
          <div className="flex flex-1 items-center gap-2 truncate rounded-full border border-[#dadce0] bg-[#f1f3f4] px-3 py-1.5 text-xs text-[#3c4043] dark:border-[#5f6368] dark:bg-[#303134] dark:text-[#e8eaed]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3 w-3 shrink-0 text-[#5f6368] dark:text-[#9aa0a6]">
              <rect x="5" y="11" width="14" height="9" rx="1.5" />
              <path strokeLinecap="round" d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            <span className="truncate">{activeTab.url}</span>
          </div>
        </div>

        <div className="min-h-[280px] flex-1 overflow-y-auto px-6 py-5 text-sm text-[#3c4043] dark:bg-[#202124] dark:text-[#e8eaed]">{activeTab.content}</div>
      </div>
    </div>
  )
}
