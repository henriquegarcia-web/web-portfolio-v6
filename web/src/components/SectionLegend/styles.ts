import styled from 'styled-components'

import { fontHeight, fontSize, fontWeight } from '@/utils/styles/fonts'
import { color } from '@/utils/styles/colors'

export const SectionLegend = styled.p`
  ${fontSize('xxl')}
  ${fontHeight('xxxl')}
  ${fontWeight('light')}

  ${color('textLegend')}
`
