import type { CvContent } from './types'
import blueZoneImg from '../images/BlueZone.png'
import portfolioImg from '../images/Portfolio.png'

export const pt: CvContent = {
  name: 'Fernanda Mell Albuquerque',
  tagline: 'Desenvolvedora Front-end',
  domain: 'fernandamell.dev',
  searchPlaceholder: 'Currículo de Fernanda Mell',
  statsLine: 'Cerca de 10.000.000.000.000 células (0,24 século)',
  languageNames: { pt: 'Português', en: 'Inglês' },
  relatedSearchesLabel: 'Buscas relacionadas a Fernanda Mell Albuquerque',
  relatedSearches: ['Desenvolvedora Front-end', 'React Developer', 'UI/UX', 'JavaScript'],
  profile: {
    birthDate: '3 de abril de 2002, Santos - São Paulo',
    birthDateLabel: 'Nascimento',
    height: '1,63 m',
    heightLabel: 'Altura',
    studying: 'Tecnólogo na FATEC Rubens Lara',
    studyingLabel: 'Cursando',
  },
  sections: {
    about: {
      title: 'Sobre mim',
      snippet: 'Descubra quem eu sou, o que faço e o que busco na área de tecnologia.',
      full: 'Sou desenvolvedora Front-end apaixonada por programação e por transformar ideias em interfaces bonitas, intuitivas e fáceis de usar. Trabalho principalmente com React.js, Tailwind CSS e integração de APIs REST com Spring Boot (Java), sempre buscando criar aplicações responsivas, acessíveis e com uma ótima experiência para o usuário.',
      siteLinks: [
        {
          title: 'O que procuro',
          snippet: 'Oportunidades, desafios e crescimento profissional.',
          full: 'Estou aberta a oportunidades como Desenvolvedora Front-end, seja em vagas efetivas, estágios ou projetos freelance. Meu objetivo é participar de projetos desafiadores, evoluir constantemente e desenvolver soluções modernas e bem estruturadas.',
        },
      ],
    },
    skills: {
      title: 'Habilidades e ferramentas',
      snippet: 'Conheça um pouco sobre as habilidades que eu uso e tenho experiência.',
      full: 'Ferramentas e tecnologias que uso no meu dia a dia:',
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
        'IA Generativa',
      ],
    },
    projects: {
      title: 'Meus projetos',
      snippet: 'Aqui, você sabe detalhadamente sobre cada projeto que já fiz e participei.',
      full: 'Conheça os projetos que já desenvolvi:',
      technologiesLabel: 'Tecnologias Usadas',
      projects: [
        {
          name: 'Blue Zone Clinic',
          snippet: 'Redesign completo utilizando React, Tailwind CSS e React Router.',
          description:
            'Projeto de redesign da Blue Zone Clinic, desenvolvido para tornar o site mais moderno, organizado e agradável de navegar. A aplicação foi construída com componentes reutilizáveis, navegação entre páginas e um layout adaptado para diferentes tamanhos de tela.',
          image: blueZoneImg,
          technologies: ['React', 'Tailwind CSS', 'React Router'],
          link: 'https://fehmell.github.io/BlueZone-Clinic/',
          linkLabel: 'Ver projeto',
          linkStyle: 'gold',
        },
        {
          name: 'Portfolio profissional',
          snippet: 'Site pessoal desenvolvido com React, TypeScript, Vite e Tailwind CSS.',
          description:
            'Desenvolvimento de um site inspirado no próprio GitHub para apresentar meus serviços como desenvolvedora front-end, com foco em design moderno, responsividade, navegação intuitiva e apresentação de projetos.',
          image: portfolioImg,
          technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
          link: 'https://fehmell.github.io/Portfolio/',
          linkLabel: 'Ver projeto',
          linkStyle: 'blue',
        },
      ],
    },
    experience: {
      title: 'Minha experiência',
      snippet: 'Um pouco sobre minha experiência profissional.',
      full: 'Confira minha trajetória profissional:',
      experiences: [
        {
          company: 'Blue Zone Clinic',
          role: 'Recepcionista Administrativa | Suporte Tecnológico',
          period: '2025 - atual',
          bullets: [
            'Atendimento ao cliente e suporte administrativo.',
            'Desenvolvimento de soluções para automatização do atendimento com foco em uma comunicação humanizada.',
            'Criação de aplicações front-end para facilitar processos internos da clínica.',
            'Desenvolvimento de ferramentas integradas a planilhas para gerenciamento e organização de informações.',
            'Identificação e implementação de melhorias em processos através da tecnologia.',
          ],
        },
      ],
    },
    contacts: {
      title: 'Contatos',
      snippet: 'WhatsApp, LinkedIn, GitHub e e-mail.',
      full: 'Escolha um canal para falar comigo:',
    },
  },
  contactLinks: [
    { label: 'WhatsApp', href: 'https://wa.me/5513991745598', icon: 'whatsapp' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fernanda-mell/', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/FehMell', icon: 'github' },
    { label: 'E-mail', href: 'mailto:mell39654@gmail.com', icon: 'email' },
  ],
}
