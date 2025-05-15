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
  flex-direction: column;
`

// ==================================== HERO SECTION

export const HeroSection = styled.div`
  display: flex;
  column-gap: 40px;
`

export const HeroSectionLeft = styled.div`
  display: flex;
  width: 40%;
`

export const HeroSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 60%;
`

export const HeroSectionAttributes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`
