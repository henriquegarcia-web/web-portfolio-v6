// src/screens/HomeScreen/styles.ts

import styled from 'styled-components'

import { Wrapper } from '@/utils/styles/commons'
import { Globals } from '@/utils/styles/globals'
import { fontHeight, fontSize, fontWeight } from '@/utils/styles/fonts'
import { backgroundColor, borderColor, color } from '@/utils/styles/colors'

export const HomeScreen = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 120px;
  width: 100%;
  margin-top: ${Globals.layout.header.height};
  padding: 0 ${Globals.layout.padding};
`

export const HomeWrapper = styled(Wrapper)`
  display: flex;
  column-gap: 80px;
`

export const HomeLeft = styled.div`
  display: flex;
  width: ${Globals.layout.hero.card.width};
`

export const HomeRight = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 120px;
  width: calc(100% - ${Globals.layout.hero.card.width} - 80px);
`

// ==================================== HERO SECTION

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`

export const HeroSectionAttributes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`

// ==================================== PROJECTS SECTION

export const ProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`

export const ProjectsSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const ProjectCard = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  transition: all 0.2s ease;

  border: 1px solid;
  ${borderColor('borderSecondary')};
`

export const ProjectCardImage = styled.div`
  position: relative;
  width: 220px;
  min-width: 220px;
  height: 140px;
  border-radius: 6px;
  overflow: hidden;

  background-color: #1e1e1e;
  border: 1px solid;
  ${borderColor('borderSecondary')};
`

export const ProjectImageSlider = styled.div<{ $currentIndex: number }>`
  display: flex;
  width: fit-content;
  height: 100%;
  transform: translateX(${({ $currentIndex }) => `-${$currentIndex * 220}px`});
  transition: transform 0.6s ease-in-out;
`

export const ProjectImageSlide = styled.img`
  width: 220px;
  height: 140px;
  object-fit: cover;
  flex-shrink: 0;
`

export const ProjectCardContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`

export const ProjectCardTitle = styled.h3`
  transition: all 0.2s ease;

  ${fontSize('xl')};
  ${fontHeight('xl')};
  ${fontWeight('bold')};
  ${color('textHeading')};
`

export const ProjectCardDescription = styled.p`
  ${fontSize('regular')};
  ${fontHeight('xl')};
  ${color('textDescription')};
`

export const ProjectCardTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;

  span {
    padding: 4px 8px;
    border-radius: 6px;

    font-size: 0.75rem;
    font-weight: 500;

    ${backgroundColor('bgContainer')};
    ${color('textSecondary')};
  }
`

// ==================================== EXPERIENCE SECTION

export const ExperienceSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`

export const ExperienceSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const ExperienceCard = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  transition: all 0.2s ease;

  border: 1px solid;
  ${borderColor('borderSecondary')};
`

export const ExperienceCardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  min-width: 65px;
  height: 65px;
  border-radius: 8px;
  overflow: hidden;

  background-color: #1e1e1e;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ExperienceCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`

export const ExperienceCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ExperienceCardCompany = styled.h4`
  ${fontSize('large')};
  ${fontHeight('large')};
  ${fontWeight('bold')};
  ${color('textHeading')};
`

export const ExperienceCardPeriod = styled.span`
  ${fontSize('xs')};
  ${color('textSecondary')};
`

export const ExperienceCardRole = styled.p`
  ${fontSize('regular')};
  ${fontWeight('medium')};
  ${color('textDescription')};
`

export const ExperienceCardDescription = styled.p`
  ${fontSize('regular')};
  ${fontHeight('xl')};
  ${color('textDescription')};
`

export const ExperienceCardTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;

  span {
    padding: 4px 8px;
    border-radius: 6px;

    font-size: 0.75rem;
    font-weight: 500;

    ${backgroundColor('bgContainer')};
    ${color('textSecondary')};
  }
`

// ==================================== TECS SECTION

export const TecsSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`

export const TecsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const TechCard = styled.div`
  z-index: 10;
  position: relative; 
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
  padding: 14px 18px;
  border-radius: 8px;
  transition: all 0.2s ease;

  border: 1px solid;
  ${borderColor('borderSecondary')};

  &:hover {
    span {
      ${color('primary')};
    }
  }
`

export const TechCardLogo = styled.div`
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const TechCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`

export const TechCardName = styled.h4`
  ${fontSize('regular')};
  ${fontWeight('medium')};
  ${color('textHeading')};
`

// ==================================== LEARNING SECTION

// export const LearningSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   row-gap: 40px;
// `

// ==================================== ABOUT ME SECTION

export const AboutMeSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`

export const AboutMeContent = styled.div`
  ${fontSize('large')};
  ${fontHeight('xxxl')};
  ${fontWeight('light')};

  ${color('text')};
`

// ==================================== CONTACT ME SECTION

export const ContactMeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  width: 100%;
  padding: 60px 0 20px 0;
`

export const ContactMeSectionContent = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: 680px;
`

export const ContactMeFooter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 20px;
`

export const SubmissionStatus = styled.span`
  color: green;
  font-size: 0.9rem;
`
