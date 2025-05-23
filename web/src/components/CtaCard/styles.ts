import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { CtaVariantType } from '@/constants/content'
import { fontHeight, fontSize, fontWeight } from '@/utils/styles/fonts'
import { backgroundColor, color } from '@/utils/styles/colors'

export const CtaCard = styled(Link)<{ variant: CtaVariantType }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  row-gap: 20px;
  padding: 20px;
  border-radius: 8px;
  transition: all 0.2s ease;

  ${color('textButton')};
  ${({ variant }) =>
    variant === 'primary'
      ? backgroundColor('primary')
      : backgroundColor('tertiary')};

  &:hover {
    ${({ variant }) =>
      variant === 'primary'
        ? backgroundColor('primaryHover')
        : backgroundColor('tertiaryHover')};
  }
`

export const CtaCardIcon = styled.div`
  svg {
    ${fontSize('xxxxl')};
  }
`

export const CtaCardContent = styled.div`
  text-transform: uppercase;

  ${fontSize('xxl')};
  ${fontHeight('xxxl')};
  ${fontWeight('bold')};
`

export const CtaCardArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  margin-left: auto;

  border: 1px solid white;
`
