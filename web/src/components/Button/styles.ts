import styled from 'styled-components'

import { ButtonVariant } from '.'
import { fontHeight, fontSize, fontWeight } from '@/utils/styles/fonts'
import { backgroundColor, color } from '@/utils/styles/colors'

export const Button = styled.button<{ variant: ButtonVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 15px 10px;
  border-radius: 8px;
  cursor: pointer;

  ${fontSize('regular')}
  ${fontHeight('regular')}
  ${fontWeight('medium')}

  ${color('textButton')}
  ${backgroundColor('primary')}
`
