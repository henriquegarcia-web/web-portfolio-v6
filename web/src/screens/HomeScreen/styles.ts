// src/screens/HomeScreen/styles.ts

import styled from 'styled-components'

import { Wrapper } from '@/utils/styles/commons'
import { Globals } from '@/utils/styles/globals'
import { fontHeight, fontSize, fontWeight } from '@/utils/styles/fonts'
import { backgroundColor, borderColor, color } from '@/utils/styles/colors'

export const HomeScreen = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: ${Globals.layout.header.height};
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
  row-gap: 20px;
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
  row-gap: 20px;
`

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  transition: background-color 0.2s ease;

  border: 1px solid;
  ${borderColor('borderSecondary')}

  &:hover {
    ${backgroundColor('bgElevated')};

    h3 {
      ${color('textBase')};
    }
  }
`

export const ProjectItemImage = styled.div`
  position: relative;
  width: 220px;
  min-width: 220px;
  height: 140px;
  border-radius: 6px;
  overflow: hidden;

  background-color: #1e1e1e;
  border: 2px solid;
  ${borderColor('borderSecondary')}
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

export const ProjectItemContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`

export const ProjectItemTitle = styled.h3`
  transition: background-color 0.2s ease;

  ${fontSize('xl')};
  ${fontHeight('xl')};
  ${fontWeight('bold')};
  ${color('textHeading')};
`

export const ProjectItemDescription = styled.p`
  ${fontSize('regular')};
  ${fontHeight('xl')};
  ${color('textDescription')};
`

export const ProjectItemTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;

  span {
    padding: 4px 8px;
    border-radius: 6px;

    font-size: 0.75rem;
    font-weight: 500;

    ${backgroundColor('bgLayout')};
    ${color('textSecondary')};
  }
`

// ==================================== EXPERIENCE SECTION

export const ExperienceSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

// ==================================== TECS SECTION

export const TecsSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

// ==================================== LEARNING SECTION

export const LearningSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`
