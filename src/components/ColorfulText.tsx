export const GOOGLE_COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#4285F4', '#34A853', '#EA4335']

export function ColorfulText({ text }: { text: string }) {
  return (
    <>
      {text.split('').map((letter, i) => (
        <span key={i} style={{ color: GOOGLE_COLORS[i % GOOGLE_COLORS.length] }}>
          {letter}
        </span>
      ))}
    </>
  )
}
