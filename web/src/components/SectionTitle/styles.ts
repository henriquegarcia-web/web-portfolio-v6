import styled from 'styled-components'

import { fontHeight, fontSize, fontWeight } from '@/utils/styles/fonts'
import { color } from '@/utils/styles/colors'

export const SectionTitle = styled.div<{ ishero?: number }>`
  display: flex;
  flex-direction: column;

  h1 {
    text-transform: uppercase;

    ${fontSize('heroTitle')}
    ${fontHeight('heroTitle')}
    ${fontWeight('bold')}

    ${color('textHeading')}
  }

  h2 {
    text-transform: uppercase;

    ${fontSize('heroLegend')}
    ${fontHeight('heroLegend')}
    ${fontWeight('bold')}

    ${color('textSecondary')}
  }
`
