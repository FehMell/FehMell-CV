const TOOL_COLORS = {
  frontend: '#EC4899',
  react: '#087EA4',
  tailwind: '#06B6D4',
  spring: '#6DB33F',
  java: '#ED8B00',
}

function Highlight({ color, children }: { color: string; children: string }) {
  return (
    <strong className="font-semibold" style={{ color }}>
      {children}
    </strong>
  )
}

interface AboutTextProps {
  language: 'pt' | 'en'
}

export function AboutText({ language }: AboutTextProps) {
  if (language === 'en') {
    return (
      <p>
        I'm a <Highlight color={TOOL_COLORS.frontend}>Front-end</Highlight> developer passionate about
        programming and about turning ideas into beautiful, intuitive, easy-to-use interfaces. I work mainly
        with <Highlight color={TOOL_COLORS.react}>React.js</Highlight>,{' '}
        <Highlight color={TOOL_COLORS.tailwind}>Tailwind CSS</Highlight>, and REST API integration with{' '}
        <Highlight color={TOOL_COLORS.spring}>Spring Boot</Highlight> (
        <Highlight color={TOOL_COLORS.java}>Java</Highlight>), always aiming to build responsive, accessible
        applications with a great user experience.
      </p>
    )
  }

  return (
    <p>
      Sou desenvolvedora <Highlight color={TOOL_COLORS.frontend}>Front-end</Highlight> apaixonada por
      programação e por transformar ideias em interfaces bonitas, intuitivas e fáceis de usar. Trabalho
      principalmente com <Highlight color={TOOL_COLORS.react}>React.js</Highlight>,{' '}
      <Highlight color={TOOL_COLORS.tailwind}>Tailwind CSS</Highlight> e integração de APIs REST com{' '}
      <Highlight color={TOOL_COLORS.spring}>Spring Boot</Highlight> (
      <Highlight color={TOOL_COLORS.java}>Java</Highlight>), sempre buscando criar aplicações responsivas,
      acessíveis e com uma ótima experiência para o usuário.
    </p>
  )
}
