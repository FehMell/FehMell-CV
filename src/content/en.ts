import type { CvContent } from './types'
import blueZoneImg from '../images/BlueZone.png'
import portfolioImg from '../images/Portfolio.png'

export const en: CvContent = {
  name: 'Fernanda Mell Albuquerque',
  tagline: 'Front-end Developer',
  domain: 'fernandamell.dev',
  searchPlaceholder: "Fernanda Mell's Resume",
  statsLine: 'About 10,000,000,000,000 cells (0.24 century)',
  languageNames: { pt: 'Portuguese', en: 'English' },
  relatedSearchesLabel: 'Searches related to Fernanda Mell Albuquerque',
  relatedSearches: ['Front-end Developer', 'React Developer', 'UI/UX', 'JavaScript'],
  profile: {
    birthDate: 'April 3, 2002, Santos - São Paulo',
    birthDateLabel: 'Born',
    height: '1.63 m',
    heightLabel: 'Height',
    studying: 'Technologist degree student at FATEC Rubens Lara',
    studyingLabel: 'Studying',
  },
  sections: {
    about: {
      title: 'About me',
      snippet: 'Discover who I am, what I do, and what I look for in the tech industry.',
      full: "I'm a Front-end developer passionate about programming and about turning ideas into beautiful, intuitive, easy-to-use interfaces. I work mainly with React.js, Tailwind CSS, and REST API integration with Spring Boot (Java), always aiming to build responsive, accessible applications with a great user experience.",
      siteLinks: [
        {
          title: 'What I look for',
          snippet: 'Opportunities, challenges, and professional growth.',
          full: "I'm open to opportunities as a Front-end Developer, whether full-time roles, internships, or freelance projects. My goal is to take part in challenging projects, keep growing constantly, and build modern, well-structured solutions.",
        },
      ],
    },
    skills: {
      title: 'Skills & tools',
      snippet: 'Learn a bit about the skills and tools I use and have experience with.',
      full: 'Tools and technologies I use day to day:',
      skills: [
        'TypeScript',
        'React',
        'JavaScript',
        'HTML5',
        'CSS3',
        'React Query',
        'Figma',
        'Tailwind CSS',
        'Java',
        'Spring Boot',
        'PostgreSQL',
        'Generative AI',
      ],
    },
    projects: {
      title: 'My projects',
      snippet: "Here you can learn in detail about every project I've built or contributed to.",
      full: "Check out the projects I've built:",
      technologiesLabel: 'Technologies Used',
      projects: [
        {
          name: 'Blue Zone Clinic',
          snippet: 'Complete redesign built with React, Tailwind CSS, and React Router.',
          description:
            'Blue Zone Clinic redesign project, built to make the website more modern, organized, and pleasant to navigate. The application was built with reusable components, page navigation, and a layout adapted to different screen sizes.',
          image: blueZoneImg,
          technologies: ['React', 'Tailwind CSS', 'React Router'],
          link: 'https://fehmell.github.io/BlueZone-Clinic/',
          linkLabel: 'View Project',
          linkStyle: 'gold',
        },
        {
          name: 'Professional Portfolio',
          snippet: 'Personal website built with React, TypeScript, Vite, and Tailwind CSS.',
          description:
            'Development of a website inspired by GitHub itself to showcase my services as a front-end developer, focused on modern design, responsiveness, intuitive navigation, and project presentation.',
          image: portfolioImg,
          technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
          link: 'https://fehmell.github.io/Portfolio/',
          linkLabel: 'View Project',
          linkStyle: 'blue',
        },
      ],
    },
    experience: {
      title: 'My experience',
      snippet: 'A bit about my professional experience.',
      full: 'Check out my professional background:',
      experiences: [
        {
          company: 'Blue Zone Clinic',
          role: 'Administrative Receptionist | Technology Support',
          period: '2025 - present',
          bullets: [
            'Customer service and administrative support.',
            'Development of solutions to automate service with a focus on humanized communication.',
            "Creation of front-end applications to streamline the clinic's internal processes.",
            'Development of tools integrated with spreadsheets for managing and organizing information.',
            'Identification and implementation of process improvements through technology.',
          ],
        },
      ],
    },
    contacts: {
      title: 'Contact',
      snippet: 'WhatsApp, LinkedIn, GitHub, and email.',
      full: 'Choose a channel to reach me:',
    },
  },
  contactLinks: [
    { label: 'WhatsApp', href: 'https://wa.me/5513991745598', icon: 'whatsapp' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fernanda-mell/', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/FehMell', icon: 'github' },
    { label: 'Email', href: 'mailto:mell39654@gmail.com', icon: 'email' },
  ],
}
