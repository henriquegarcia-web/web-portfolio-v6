// src/components/Footer/styles.ts

import styled from 'styled-components'

import { color, backgroundColor, borderColor } from '@/utils/styles/colors'
import { fontSize, fontWeight } from '@/utils/styles/fonts'
import { Wrapper } from '@/utils/styles/commons'
import { Globals } from '@/utils/styles/globals'

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${Globals.layout.footer.height};

  border-top: 1px solid;
  ${borderColor('borderSecondary')};
  ${backgroundColor('bgLayout')};
`

export const FooterWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  padding: ${Globals.layout.padding} 0;
`

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`

export const FooterName = styled.span`
  ${fontSize('small')};
  ${fontWeight('regular')};

  ${color('textHeading')};

  b {
    ${fontWeight('bold')};
  }
`

// export const FooterNote = styled.span`
//   ${fontSize('small')};
//   ${color('textDescription')};
// `

export const FooterRight = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`

export const FooterIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: all 0.2s;

  ${color('text')};
  ${fontSize('large')};

  &:hover {
    opacity: 1;
  }
`
