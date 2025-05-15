import styled from 'styled-components'

import { fontHeight, fontSize, fontWeight } from '@/utils/styles/fonts'
import { color } from '@/utils/styles/colors'

export const AttributeCounter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  max-width: 180px;
`

export const Counter = styled.div`
  ${fontSize('attributeCounter')}
  ${fontHeight('attributeCounter')}
  ${fontWeight('medium')}

  ${color('textLegend')}
`

export const Attribute = styled.div`
  text-transform: uppercase;

  ${fontSize('xl')}
  ${fontHeight('xxl')}
  ${fontWeight('medium')}

  ${color('textLegend')}
`
