// src/constants/content.ts

export const portfolioContent = {
  hero: {
    title: 'Full-Stack',
    subtitle: 'Desenvolvedor',
    legend:
      'Desenvolvedor apaixonado por criar soluções digitais que fazem a diferença, com foco em experiência e inovação.',
    image: {
      url: '/me_01.png',
      alt: 'Henrique Garcia - Web Portfolio'
    },
    name: 'Henrique Garcia',
    role: 'Desenvolvedor full-stack com foco em front-end',
    medias: ['github', 'linkedin', 'threads'],
    cta: 'Vamos conversar',
    metrics: {
      experience: {
        label: 'Anos de experiência',
        value: 5
      },
      projects: {
        label: 'Projetos trabalhados',
        value: 25
      },
      technologies: {
        label: 'Tecnologias dominadas',
        value: 15
      }
    }
  },

  sectionLabels: {
    projects: {
      title: 'Projetos',
      subtitle: 'Recentes'
    },
    experience: {
      title: 'Experiência',
      subtitle: 'Profissional'
    },
    technologies: {
      title: 'Tecnologias',
      subtitle: 'Que Utilizo'
    },
    learning: {
      title: 'Aprendizagens',
      subtitle: 'Recentes'
    }
  },

  projects: [
    {
      title: 'HungryHub',
      description:
        'Plataforma de cardápio online com dashboard para empresas, checkout via Stripe e estrutura SaaS. Criada como MVP e entregue a uma equipe para evolução.',
      url: 'https://www.hungryhub.com.br',
      techStack: ['Next.js', 'React', 'Stripe', 'Firebase', 'Tailwind CSS']
    },
    {
      title: 'Vitrine+',
      description:
        'SaaS para criação de vitrines digitais em qualquer nicho. Desenvolvido com foco em escalabilidade e usabilidade.',
      url: '',
      techStack: ['React', 'Node.js', 'Firebase', 'Ant Design', 'TypeScript']
    },
    {
      title: 'Mais Um Corre',
      description:
        'Simulador crítico de entregadores brasileiros. Jogo com foco em narrativa, realismo e críticas sociais.',
      url: '',
      techStack: ['Unity', 'C#']
    }
  ],

  experience: [
    {
      company: 'Grupo Pereira',
      role: 'Desenvolvedor Front-End Pleno',
      period: '2022 - 2023',
      description:
        'Atuei remotamente no e-commerce da rede, utilizando Magento, React e React Native. Foco em performance, componentes reutilizáveis e manutenção do sistema.'
    },
    {
      company: 'Moovin',
      role: 'Desenvolvedor Front-End',
      period: '2021',
      description:
        'Responsável pela manutenção da plataforma, implementação de novos recursos e colaboração na criação do design system interno.'
    },
    {
      company: 'Freelancer',
      role: 'Desenvolvedor Full-Stack',
      period: '2018 - atual',
      description:
        'Desenvolvimento de sistemas completos sob demanda, planejamento de soluções digitais, integração de APIs e gestão de projetos utilizando métodos ágeis.'
    }
  ],

  technologies: [
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'PHP',
    'React',
    'React Native',
    'Next.js',
    'Redux',
    'Jest',
    'React Testing Library',
    'Cypress',
    'Node.js',
    'Express.js',
    'NestJS',
    'Formik',
    'React Hook Form',
    'Styled Components',
    'SASS',
    'Material UI',
    'Tailwind CSS',
    'Emotion',
    'Ant Design',
    'Bootstrap',
    'Git',
    'BitBucket',
    'Docker',
    'AWS',
    'Digital Ocean',
    'GraphQL',
    'Webpack',
    'Babel',
    'Vite',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Firebase Firestore',
    'Realtime Database',
    'C'
  ]
} as const
