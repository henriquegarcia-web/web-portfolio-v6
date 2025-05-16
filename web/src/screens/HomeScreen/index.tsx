// src/screens/HomeScreen/index.tsx

import * as S from './styles'

import {
  AttributeCounter,
  SectionTitle,
  SectionLegend,
  UserCard
} from '@/components'
import { portfolioContent } from '@/constants/content'

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
  return (
    <S.ProjectsSection>
      <SectionTitle
        title={portfolioContent.sectionLabels.projects.title}
        subtitle={portfolioContent.sectionLabels.projects.subtitle}
        variant="section"
      />
    </S.ProjectsSection>
  )
}

// ==================================== EXPERIENCE SECTION

interface IExperienceSection {}

const ExperienceSection = ({}: IExperienceSection) => {
  return (
    <S.ExperienceSection>
      <SectionTitle
        title={portfolioContent.sectionLabels.experience.title}
        subtitle={portfolioContent.sectionLabels.experience.subtitle}
        variant="section"
      />
    </S.ExperienceSection>
  )
}

// ==================================== TECS SECTION

interface ITecsSection {}

const TecsSection = ({}: ITecsSection) => {
  return (
    <S.TecsSection>
      <SectionTitle
        title={portfolioContent.sectionLabels.technologies.title}
        subtitle={portfolioContent.sectionLabels.technologies.subtitle}
        variant="section"
      />
    </S.TecsSection>
  )
}

// ==================================== LEARNING SECTION

interface ILearningSection {}

const LearningSection = ({}: ILearningSection) => {
  return (
    <S.LearningSection>
      <SectionTitle
        title={portfolioContent.sectionLabels.learning.title}
        subtitle={portfolioContent.sectionLabels.learning.subtitle}
        variant="section"
      />
    </S.LearningSection>
  )
}
