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
          <LearningSection />
        </S.HomeRight>
      </S.HomeWrapper>
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

      {items.map((item) => (
        <ProjectCard
          key={item.title}
          images={item.images}
          title={item.title}
          description={item.description}
          techStack={item.techStack}
        />
      ))}
    </S.ProjectsSection>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  images: readonly string[]
  techStack: readonly string[]
}

const ProjectCard = ({
  title,
  description,
  images,
  techStack
}: ProjectCardProps) => {
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
    <S.ProjectItem
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <S.ProjectItemImage>
        <S.ProjectImageSlider $currentIndex={currentIndex}>
          {images.map((img, i) => (
            <S.ProjectImageSlide key={i} src={img} alt={`${title}-${i}`} />
          ))}
        </S.ProjectImageSlider>
      </S.ProjectItemImage>

      <S.ProjectItemContent>
        <S.ProjectItemTitle>{title}</S.ProjectItemTitle>
        <S.ProjectItemDescription>{description}</S.ProjectItemDescription>
        <S.ProjectItemTechStack>
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </S.ProjectItemTechStack>
      </S.ProjectItemContent>
    </S.ProjectItem>
  )
}

// ==================================== EXPERIENCE SECTION

interface IExperienceSection {}

const ExperienceSection = ({}: IExperienceSection) => {
  const { title, subtitle, items } = portfolioContent.experience

  return (
    <S.ExperienceSection>
      <SectionTitle title={title} subtitle={subtitle} variant="section" />
    </S.ExperienceSection>
  )
}

// ==================================== TECS SECTION

interface ITecsSection {}

const TecsSection = ({}: ITecsSection) => {
  const { title, subtitle, items } = portfolioContent.technologies

  return (
    <S.TecsSection>
      <SectionTitle title={title} subtitle={subtitle} variant="section" />
    </S.TecsSection>
  )
}

// ==================================== LEARNING SECTION

interface ILearningSection {}

const LearningSection = ({}: ILearningSection) => {
  const { title, subtitle } = portfolioContent.learning

  return (
    <S.LearningSection>
      <SectionTitle title={title} subtitle={subtitle} variant="section" />
    </S.LearningSection>
  )
}
