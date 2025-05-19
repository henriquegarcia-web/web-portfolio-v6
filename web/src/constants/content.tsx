import { ReactNode } from 'react'

export interface PortfolioContent {
  hero: HeroSection
  projects: ProjectSection
  experience: ExperienceSection
  technologies: TechnologySection
  learning: LearningSection
  aboutMe: AboutMeSection
  contactMe: ContactMeSection
}

export interface HeroSection {
  title: string
  subtitle: string
  legend: string
  image: {
    url: string
    alt: string
  }
  name: string
  role: string
  medias: string[]
  cta: string
  metrics: {
    experience: Metric
    projects: Metric
    technologies: Metric
  }
}

export interface Metric {
  label: string
  value: number
}

export interface ProjectSection {
  title: string
  subtitle: string
  items: ProjectItem[]
}

export interface ProjectItem {
  images: string[]
  title: string
  description: string
  url: string
  techStack: string[]
}

export interface ExperienceSection {
  title: string
  subtitle: string
  items: ExperienceItem[]
}

export interface ExperienceItem {
  image: string
  company: string
  role: string
  period: string
  description: string
  techStack: string[]
}

export interface TechnologySection {
  title: string
  subtitle: string
  items: TechnologyItem[]
}

export interface TechnologyItem {
  name: string
  logo: string
}

export interface LearningSection {
  title: string
  subtitle: string
}

export interface AboutMeSection {
  title: string
  subtitle: string
  content: ReactNode
}

export interface ContactMeSection {
  title: string
  subtitle: string
}

export const portfolioContent: PortfolioContent = {
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

  projects: {
    title: 'Projetos',
    subtitle: 'Recentes',
    items: [
      {
        images: [
          '/projects/hungryhub_01.png',
          '/projects/hungryhub_02.png',
          '/projects/hungryhub_03.png',
          '/projects/hungryhub_04.png'
        ],
        title: 'HungryHub',
        description:
          'Plataforma de cardápio online com dashboard para empresas, checkout via Stripe e estrutura SaaS. Criada como MVP.',
        url: 'https://www.hungryhub.com.br',
        techStack: ['Next.js', 'React', 'Stripe', 'Firebase', 'Tailwind CSS']
      },
      {
        images: [
          '/projects/hungryhub_01.png',
          '/projects/hungryhub_02.png',
          '/projects/hungryhub_03.png',
          '/projects/hungryhub_04.png'
        ],
        title: 'Vitrine+',
        description:
          'SaaS para criação de vitrines digitais em qualquer nicho. Desenvolvido com foco em escalabilidade e usabilidade.',
        url: '',
        techStack: ['React', 'Node.js', 'Firebase', 'Ant Design', 'TypeScript']
      },
      {
        images: [
          '/projects/hungryhub_01.png',
          '/projects/hungryhub_02.png',
          '/projects/hungryhub_03.png',
          '/projects/hungryhub_04.png'
        ],
        title: 'Mais Um Corre',
        description:
          'Simulador crítico de entregadores brasileiros. Jogo com foco em narrativa, realismo e críticas sociais.',
        url: '',
        techStack: ['Unity', 'C#']
      }
    ]
  },

  experience: {
    title: 'Experiência',
    subtitle: 'Profissional',
    items: [
      {
        image: '/companies/gp_logo.png',
        company: 'Grupo Pereira',
        role: 'Desenvolvedor Front-End Pleno',
        period: '2022 - 2023',
        description:
          'Atuei remotamente no e-commerce da rede, utilizando Magento, React e React Native. Foco em performance, componentes reutilizáveis e manutenção do sistema.',
        techStack: ['Next.js', 'React', 'Stripe', 'Firebase', 'Tailwind CSS']
      },
      {
        image: '/companies/moovin_logo.jpeg',
        company: 'Moovin',
        role: 'Desenvolvedor Front-End',
        period: '2021',
        description:
          'Responsável pela manutenção da plataforma, implementação de novos recursos e colaboração na criação do design system interno.',
        techStack: ['Next.js', 'React', 'Stripe', 'Firebase', 'Tailwind CSS']
      },
      {
        image: '/companies/freelancer_logo.jpg',
        company: 'Freelancer',
        role: 'Desenvolvedor Full-Stack',
        period: '2018 - atual',
        description:
          'Desenvolvimento de sistemas completos sob demanda, planejamento de soluções digitais, integração de APIs e gestão de projetos utilizando métodos ágeis.',
        techStack: ['Next.js', 'React', 'Stripe', 'Firebase', 'Tailwind CSS']
      }
    ]
  },

  technologies: {
    title: 'Tecnologias',
    subtitle: 'Que Utilizo',
    items: [
      {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
      },
      {
        name: 'TypeScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
      },
      {
        name: 'React',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        name: 'React Native',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        name: 'Next.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
      },
      {
        name: 'Node.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
      },
      {
        name: 'PHP',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
      },
      {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
      },
      {
        name: 'Firebase',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
      },
      {
        name: 'Docker',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
      },
      {
        name: 'GraphQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
      },
      {
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
      },
      {
        name: 'PostgreSQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
      },
      {
        name: 'Redux',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
      },
      {
        name: 'SASS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
      },
      {
        name: 'Tailwind CSS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
      },
      {
        name: 'AWS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
      },
      {
        name: 'MySQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
      },
      {
        name: 'Jest',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
      },
      {
        name: 'Express',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
      },
      {
        name: 'C',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
      }
    ]
  },

  learning: {
    title: 'Aprendizagens',
    subtitle: 'Recentes'
  },

  aboutMe: {
    title: 'Quem Eu Sou',
    subtitle: 'Além de dev',
    // headline: 'Nem todo projeto é só código. E eu curto pensar nos dois lados.',
    content: (
      <>
        Sou desenvolvedor full-stack com base sólida no front-end e experiência
        real construindo soluções — da interface ao backend. <br></br>O que
        realmente me move é dar vida a ideias com propósito. Gosto de pensar em
        lógica, estrutura e na experiência de quem está do outro lado da tela.
        <br></br>
        No dia a dia, sou proativo, autodidata e movido por curiosidade. Me
        envolvo com tudo o que faço, gosto de entender o todo e buscar a forma
        mais clara de resolver o problema. <br></br>
        No tempo livre, estudo produtos, simulo ideias, esboço MVPs e às vezes
        até crio jogos que exploram experiências diferentes. Sempre buscando
        aprender, testar e evoluir — com ou sem código.
      </>
    )
  },

  contactMe: {
    title: 'Fale Comigo',
    subtitle: 'Contato'
  }
} as const
