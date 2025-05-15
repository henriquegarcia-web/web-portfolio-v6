import * as S from './styles'

interface ISectionTitle {
  variant: 'hero' | 'section'
  title: string
  subtitle: string
}

const SectionTitle = ({ variant, title, subtitle }: ISectionTitle) => {
  return (
    <S.SectionTitle ishero={variant === 'hero' ? 1 : 0}>
      {variant === 'hero' ? (
        <>
          <h2>{subtitle}</h2>
          <h1>{title}</h1>
        </>
      ) : (
        <>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </>
      )}
    </S.SectionTitle>
  )
}

export default SectionTitle
