export type Project = {
  title: string
  year: string
  description: string
  impact: string
  stack: string[]
  live?: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'CondoLink - Condominium Management System for Chateau Valenzuela Condominium',
    year: '2025',
    description:
      'A responsive web app that gives condominium residents and staff a single dashboard for announcements, amenity bookings, and maintenance requests.',
    impact:
      'Reduced manual request tracking by 60% for our pilot building through automated notifications and role-based workflows.',
    stack: ['React', 'TypeScript', 'PHP', 'MySQL', 'Tailwind'],
    repo: 'https://github.com/iReaching/CAPSTONE1',
    live: 'https://condolink.click',
  },
  {
    title: 'SLIMEOUT',
    year: '2024',
    description:
      'Lightweight one button game travelling through the unlimited maze.',
    impact:
      'Enjoy a fun and challenging experience as you navigate through an endless maze, testing your reflexes and decision-making skills.',
    stack: ['Unity', 'C#'],
    repo: 'https://github.com/iReaching/MAZEGAME'
  }
]
