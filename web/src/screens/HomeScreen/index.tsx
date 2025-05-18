// src/screens/HomeScreen/index.tsx

import * as S from './styles'

import {
  AttributeCounter,
  SectionTitle,
  SectionLegend,
  UserCard
} from '@/components'
import { portfolioContent } from '@/constants/content'
import { useEffect, useRef, useState } from 'react'

interface IHomeScreen {}

const HomeScreen = ({}: IHomeScreen) => {
  return (
    <S.HomeScreen>
      <S.HomeWrapper>
        <S.HomeLeft>
          <UserCard />
        </S.HomeLeft>
        <S.HomeRight>
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <TecsSection />
          <AboutMeSection />
        </S.HomeRight>
      </S.HomeWrapper>
      <ContactMeSection />
    </S.HomeScreen>
  )
}

export default HomeScreen

// ==================================== HERO SECTION

interface IHeroSection {}

const HeroSection = ({}: IHeroSection) => {
  return (
    <S.HeroSection>
      <SectionTitle
        title={portfolioContent.hero.title}
        subtitle={portfolioContent.hero.subtitle}
        variant="hero"
      />
      <SectionLegend>{portfolioContent.hero.legend}</SectionLegend>
      <S.HeroSectionAttributes>
        <AttributeCounter
          counter={portfolioContent.hero.metrics.experience.value}
          attribute={portfolioContent.hero.metrics.experience.label}
        />
        <AttributeCounter
          counter={portfolioContent.hero.metrics.projects.value}
          attribute={portfolioContent.hero.metrics.projects.label}
        />
        <AttributeCounter
          counter={portfolioContent.hero.metrics.technologies.value}
          attribute={portfolioContent.hero.metrics.technologies.label}
        />
      </S.HeroSectionAttributes>
    </S.HeroSection>
  )
}

// ==================================== PROJECTS SECTION

interface IProjectsSection {}

const ProjectsSection = ({}: IProjectsSection) => {
  const { title, subtitle, items } = portfolioContent.projects

  return (
    <S.ProjectsSection>
      <SectionTitle title={title} subtitle={subtitle} variant="section" />
      <S.ProjectsSectionContent>
        {items.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </S.ProjectsSectionContent>
    </S.ProjectsSection>
  )
}

interface ProjectCardProps {
  project: any
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { images, title, description, url, techStack } = project

  const [currentIndex, setCurrentIndex] = useState(0)
  const [hovered, setHovered] = useState(false)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (hovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 3000)
    } else {
      clearInterval(intervalRef.current!)
      setCurrentIndex(0)
    }

    return () => clearInterval(intervalRef.current!)
  }, [hovered, images.length])

  return (
    <S.ProjectCard
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <S.ProjectCardImage>
        <S.ProjectImageSlider $currentIndex={currentIndex}>
          {images.map((img: string, i: string) => (
            <S.ProjectImageSlide key={i} src={img} alt={`${title}-${i}`} />
          ))}
        </S.ProjectImageSlider>
      </S.ProjectCardImage>

      <S.ProjectCardContent>
        <S.ProjectCardTitle>{title}</S.ProjectCardTitle>
        <S.ProjectCardDescription>{description}</S.ProjectCardDescription>
        <S.ProjectCardTechStack>
          {techStack.map((tech: string) => (
            <span key={tech}>{tech}</span>
          ))}
        </S.ProjectCardTechStack>
      </S.ProjectCardContent>
    </S.ProjectCard>
  )
}

// ==================================== EXPERIENCE SECTION

interface IExperienceSection {}

const ExperienceSection = ({}: IExperienceSection) => {
  const { title, subtitle, items } = portfolioContent.experience

  return (
    <S.ExperienceSection>
      <SectionTitle title={title} subtitle={subtitle} variant="section" />
      <S.ExperienceSectionContent>
        {items.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </S.ExperienceSectionContent>
    </S.ExperienceSection>
  )
}

interface ExperienceCardProps {
  experience: any
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const {
    company,
    role,
    period,
    description,
    image = '/placeholder-company.png',
    techStack
  } = experience

  return (
    <S.ExperienceCard>
      <S.ExperienceCardImage>
        <img src={image} alt={`Logo da empresa ${company}`} />
      </S.ExperienceCardImage>

      <S.ExperienceCardContent>
        <S.ExperienceCardHeader>
          <S.ExperienceCardCompany>{company}</S.ExperienceCardCompany>
          <S.ExperienceCardPeriod>{period}</S.ExperienceCardPeriod>
        </S.ExperienceCardHeader>
        <S.ExperienceCardRole>{role}</S.ExperienceCardRole>
        <S.ExperienceCardDescription>{description}</S.ExperienceCardDescription>
        <S.ExperienceCardTechStack>
          {techStack.map((tech: string) => (
            <span key={tech}>{tech}</span>
          ))}
        </S.ExperienceCardTechStack>
      </S.ExperienceCardContent>
    </S.ExperienceCard>
  )
}

// ==================================== TECS SECTION

interface ITecsSection {}

const TecsSection = ({}: ITecsSection) => {
  const { title, subtitle, items } = portfolioContent.technologies

  return (
    <S.TecsSection>
      <SectionTitle title={title} subtitle={subtitle} variant="section" />

      <S.TecsGrid>
        {items.map((tech) => (
          <TechCard key={tech.name + tech.level} tech={tech} />
        ))}
      </S.TecsGrid>
    </S.TecsSection>
  )
}

interface TechCardProps {
  tech: any
}

export const TechCard = ({ tech }: TechCardProps) => {
  const { logo, name, level } = tech

  return (
    <S.TechCard>
      <S.TechCardLogo>
        <img src={logo} alt={name} />
      </S.TechCardLogo>
      <S.TechCardInfo>
        <S.TechCardName>{name}</S.TechCardName>
        <S.TechCardLevel>{level}</S.TechCardLevel>
      </S.TechCardInfo>
    </S.TechCard>
  )
}

// ==================================== ABOUT ME SECTION

interface IAboutMeSection {}

const AboutMeSection = ({}: IAboutMeSection) => {
  const { title, subtitle } = portfolioContent.aboutMe

  return (
    <S.AboutMeSection>
      <SectionTitle title={title} subtitle={subtitle} variant="section" />
      <S.AboutMeContent>
        <p>{portfolioContent.aboutMe.content}</p>
      </S.AboutMeContent>
    </S.AboutMeSection>
  )
}

// ==================================== ABOUT ME SECTION

interface IContactMeSection {}

const ContactMeSection = ({}: IContactMeSection) => {
  const { title, subtitle } = portfolioContent.contactMe

  return (
    <S.ContactMeSection>
      <SectionTitle
        title={title}
        subtitle={subtitle}
        variant="section"
        centered
      />
      <S.ContactMeSectionContent></S.ContactMeSectionContent>
    </S.ContactMeSection>
  )
}

// // ==================================== LEARNING SECTION

// interface ILearningSection {}

// const LearningSection = ({}: ILearningSection) => {
//   const { title, subtitle } = portfolioContent.learning

//   return (
//     <S.LearningSection>
//       <SectionTitle title={title} subtitle={subtitle} variant="section" />
//     </S.LearningSection>
//   )
// }
