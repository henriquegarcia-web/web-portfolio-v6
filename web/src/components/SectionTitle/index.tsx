import * as S from './styles'

interface ISectionTitle {
  type: 'hero' | 'section'
  title: string
  subtitle: string
}

const SectionTitle = ({ type, title, subtitle }: ISectionTitle) => {
  return (
    <S.SectionTitle ishero={type === 'hero' ? 1 : 0}>
      {type === 'hero' ? (
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
