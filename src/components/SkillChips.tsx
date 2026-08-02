import { getSkillMeta } from './skillIcons'

export function SkillChips({ skills }: { skills: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {skills.map((skill) => {
        const { Icon, color } = getSkillMeta(skill)
        return (
          <span
            key={skill}
            className="group flex cursor-default items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium text-[#3c4043] transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-md dark:text-[#e8eaed]"
            style={{ borderColor: `${color}55`, backgroundColor: `${color}22` }}
          >
            <Icon
              className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 ease-out group-hover:-rotate-12 group-hover:scale-125"
              style={{ color }}
            />
            {skill}
          </span>
        )
      })}
    </div>
  )
}
