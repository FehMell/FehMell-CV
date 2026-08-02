import type { IconType } from 'react-icons'
import {
  SiTypescript,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReactquery,
  SiReactrouter,
  SiFigma,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiVite,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'
import { HiSparkles } from 'react-icons/hi2'

interface SkillMeta {
  Icon: IconType
  color: string
}

const SKILL_META: Record<string, SkillMeta> = {
  typescript: { Icon: SiTypescript, color: '#3178C6' },
  react: { Icon: SiReact, color: '#61DAFB' },
  javascript: { Icon: SiJavascript, color: '#F7DF1E' },
  html5: { Icon: SiHtml5, color: '#E34F26' },
  css3: { Icon: SiCss, color: '#1572B6' },
  'react query': { Icon: SiReactquery, color: '#FF4154' },
  'react router': { Icon: SiReactrouter, color: '#CA4245' },
  figma: { Icon: SiFigma, color: '#F24E1E' },
  'tailwind css': { Icon: SiTailwindcss, color: '#06B6D4' },
  vite: { Icon: SiVite, color: '#646CFF' },
  java: { Icon: FaJava, color: '#f89820' },
  'spring boot': { Icon: SiSpringboot, color: '#6DB33F' },
  postgresql: { Icon: SiPostgresql, color: '#4169E1' },
  'ia generativa': { Icon: HiSparkles, color: '#8B5CF6' },
  'generative ai': { Icon: HiSparkles, color: '#8B5CF6' },
}

const DEFAULT_META: SkillMeta = { Icon: HiSparkles, color: '#5f6368' }

export function getSkillMeta(name: string): SkillMeta {
  return SKILL_META[name.toLowerCase()] ?? DEFAULT_META
}
