import { ReactNode } from 'react'

import { FaFolderOpen, FaCode } from 'react-icons/fa6'

export interface IPortfolioContent {
  user: IUserInfos
  hero: IHeroSection
  projects: IProjectSection
  experience: IExperienceSection
  technologies: ITechnologySection
  learning: ILearningSection
  aboutMe: IAboutMeSection
  contactMe: IContactMeSection
}

export interface IUserInfos {
  name: string
  role: string
}

export interface IHeroSection {
  title: string
  subtitle: string
  legend: string
  image: {
    url: string
    alt: string
  }
  name: string
  role: string
  medias: MediasType[]
  userCta: string
  ctas: ICta[]
  metrics: {
    experience: IMetric
    projects: IMetric
    technologies: IMetric
  }
}

export interface ICta {
  label: string
  url: string
  variant: CtaVariantType
  icon: ReactNode
}

export interface IMetric {
  label: string
  value: number
}

export interface IProjectSection {
  title: string
  subtitle: string
  items: IProjectItem[]
}

export interface IProjectItem {
  images: string[]
  title: string
  description: string
  url: string
  techStack: string[]
}

export interface IExperienceSection {
  title: string
  subtitle: string
  items: IExperienceItem[]
}

export interface IExperienceItem {
  image: string
  company: string
  role: string
  period: string
  description: string
  techStack: string[]
}

export interface ITechnologySection {
  title: string
  subtitle: string
  items: ITechnologyItem[]
}

export interface ITechnologyItem {
  name: string
  logo: string
}

export interface ILearningSection {
  title: string
  subtitle: string
}

export interface IAboutMeSection {
  title: string
  subtitle: string
  content: ReactNode
}

export interface IContactMeSection {
  title: string
  subtitle: string
}

export type MediasType =
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'threads'

export type CtaVariantType = 'primary' | 'secondary'

export const portfolioContent: IPortfolioContent = {
  user: {
    name: 'Henrique Garcia',
    role: 'Desenvolvedor Full-Stack'
  },

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
    userCta: 'Baixar meu currículo',
    ctas: [
      {
        label: 'Conheça meus trabalhos e projetos',
        url: '/portfolio',
        variant: 'primary',
        icon: <FaFolderOpen />
      },
      {
        label: 'Confira minha stack completa',
        url: '/stack',
        variant: 'secondary',
        icon: <FaCode />
      }
    ],
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
        logo: 'javascript'
      },
      {
        name: 'TypeScript',
        logo: 'typescript'
      },
      {
        name: 'React',
        logo: 'react'
      },
      {
        name: 'React Native',
        logo: 'react_native'
      },
      {
        name: 'Next.js',
        logo: 'next_js'
      },
      {
        name: 'Node.js',
        logo: 'node_js'
      },
      {
        name: 'PHP',
        logo: 'php'
      },
      {
        name: 'Python',
        logo: 'python'
      },
      {
        name: 'Firebase',
        logo: 'firebase'
      },
      {
        name: 'Docker',
        logo: 'docker'
      },
      {
        name: 'GraphQL',
        logo: 'graphql'
      },
      {
        name: 'MongoDB',
        logo: 'mongodb'
      },
      {
        name: 'PostgreSQL',
        logo: 'postgresql'
      },
      {
        name: 'Redux',
        logo: 'redux'
      },
      {
        name: 'SASS',
        logo: 'sass'
      },
      {
        name: 'Tailwind CSS',
        logo: 'tailwind_css'
      },
      {
        name: 'AWS',
        logo: 'aws'
      },
      {
        name: 'MySQL',
        logo: 'mysql'
      },
      {
        name: 'Jest',
        logo: 'jest'
      },
      {
        name: 'Express',
        logo: 'express'
      },
      {
        name: 'C',
        logo: 'c'
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
