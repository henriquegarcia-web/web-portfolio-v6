import styled from 'styled-components'

import { fontHeight, fontSize, fontWeight } from '@/utils/styles/fonts'
import { color } from '@/utils/styles/colors'

export const SectionTitle = styled.div<{ ishero?: number; centered?: number }>`
  display: flex;
  flex-direction: column;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};

  h1 {
    text-transform: uppercase;
    white-space: nowrap;

    ${({ ishero }) =>
      ishero ? fontSize('heroTitle') : fontSize('sectionTitle')}
    ${({ ishero }) =>
      ishero ? fontHeight('heroTitle') : fontSize('sectionTitle')}
    ${fontWeight('black')}

    ${color('textHeading')}
  }

  h2 {
    margin-top: ${({ ishero }) => (ishero ? '0px' : '-12px')};
    text-transform: uppercase;
    white-space: nowrap;

    ${({ ishero }) =>
      ishero ? fontSize('heroLegend') : fontSize('sectionLegend')}
    ${({ ishero }) =>
      ishero ? fontHeight('heroLegend') : fontSize('sectionLegend')}
    ${fontWeight('black')}

    ${color('textSecondary')}
  }
`
