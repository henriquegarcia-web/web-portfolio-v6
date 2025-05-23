import * as S from './styles'
import { FaArrowRight } from 'react-icons/fa6'

import { ICta } from '@/constants/content'

interface ICtaCard {
  cta: ICta
}

const CtaCard = ({ cta }: ICtaCard) => {
  const { label, url, variant, icon } = cta

  return (
    <S.CtaCard to={url} variant={variant}>
      <S.CtaCardIcon>{icon}</S.CtaCardIcon>
      <S.CtaCardContent>{label}</S.CtaCardContent>
      <S.CtaCardArrow>
        <FaArrowRight />
      </S.CtaCardArrow>
    </S.CtaCard>
  )
}

export default CtaCard
