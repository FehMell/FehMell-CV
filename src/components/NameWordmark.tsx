import { ColorfulText } from './ColorfulText'

export function NameWordmark({ text }: { text: string }) {
  return (
    <div className="flex justify-center border-t border-[#dadce0] bg-[#fafafa] px-6 py-10 dark:border-[#3c4043] dark:bg-[#202124]">
      <p className="text-4xl font-medium tracking-wide sm:text-6xl">
        <ColorfulText text={text} />
      </p>
    </div>
  )
}
