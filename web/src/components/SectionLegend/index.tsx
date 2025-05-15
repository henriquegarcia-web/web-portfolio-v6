import * as S from './styles'

interface ISectionLegend {
  children?: React.ReactNode
}

const SectionLegend = ({ children }: ISectionLegend) => {
  return <S.SectionLegend>{children}</S.SectionLegend>
}

export default SectionLegend
