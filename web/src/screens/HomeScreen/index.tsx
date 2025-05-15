// src/screens/HomeScreen/index.tsx

import SectionLegend from '@/components/SectionLegend'
import * as S from './styles'

import { AttributeCounter, SectionTitle, UserCard } from '@/components'

interface IHomeScreen {}

const HomeScreen = ({}: IHomeScreen) => {
  return (
    <S.HomeScreen>
      <S.HomeWrapper>
        <HeroSection />
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
      <S.HeroSectionLeft>
        <UserCard />
      </S.HeroSectionLeft>
      <S.HeroSectionRight>
        <SectionTitle
          title="Full-Stack"
          subtitle="Desenvolvedor"
          variant="hero"
        />
        <SectionLegend>
          Desenvolvedor apaixonado por criar soluções digitais que fazem a
          diferença, com foco em experiência e inovação.
        </SectionLegend>
        <S.HeroSectionAttributes>
          <AttributeCounter counter={5} attribute="Anos de Experiência" />
          <AttributeCounter counter={25} attribute="Projetos Trabalhados" />
          <AttributeCounter counter={15} attribute="Tecnologias Dominadas" />
        </S.HeroSectionAttributes>
      </S.HeroSectionRight>
    </S.HeroSection>
  )
}
