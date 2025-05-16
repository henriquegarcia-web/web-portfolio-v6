// src/screens/HomeScreen/styles.ts

import styled from 'styled-components'

import { Wrapper } from '@/utils/styles/commons'
import { Globals } from '@/utils/styles/globals'

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
