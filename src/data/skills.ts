export type SkillDetail = {
  name: string
  level?: 'Beginner' | 'Proficient' | 'Exploring'
}

export type SkillGroup = {
  title: string
  summary: string
  skills: SkillDetail[]
}

export const coreSkills: SkillGroup[] = [
  {
    title: 'Frontend craft',
    summary: 'Reusable interfaces in React with smooth, accessible interactions.',
    skills: [
      { name: 'React + TypeScript/JavaScript', level: 'Beginner' },
      { name: 'Tailwind CSS', level: 'Beginner' },
    ],
  },
  {
    title: 'Backend & data',
    summary: 'Comfortable wiring APIs, and handling auth.',
    skills: [
      { name: 'MySQL', level: 'Beginner' },
      { name: 'PHP', level: 'Beginner' },
    ],
  },
  {
    title: 'Support & enablement',
    summary: 'Keeping systems healthy and people confident in the tools they use.',
    skills: [
      { name: 'Hardware diagnostics', level: 'Proficient' },
      { name: 'Network troubleshooting', level: 'Proficient' },
    ],
  },
]

export const tools: string[] = [
  'MySQL Workbench',
  'Figma',
  'Jira',
  'HTML & CSS',
  'Git & GitHub',
  'VS Code',
  'Unity',

]
