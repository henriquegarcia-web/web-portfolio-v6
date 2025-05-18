import styled from 'styled-components'

import { ButtonVariant } from '.'
import { fontHeight, fontSize, fontWeight } from '@/utils/styles/fonts'
import { backgroundColor, color } from '@/utils/styles/colors'

// export const Button = styled.button<{ variant: ButtonVariant }>`
// display: flex;
// justify-content: center;
// align-items: center;
// width: 100%;
//   height: fit-content;
//   padding: 15px 10px;
//   border-radius: 8px;
//   cursor: pointer;

// ${fontSize('regular')}
// ${fontHeight('regular')}
// ${fontWeight('medium')}

// ${color('textButton')}
// ${backgroundColor('primary')}
// `

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = styled.button<{ variant: ButtonVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 25px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  opacity: 0.85;

  ${fontSize('regular')}
  ${fontHeight('regular')}
  ${fontWeight('medium')}
  text-transform: uppercase;
  letter-spacing: 0.5px;

  border: none;
  ${color('textButton')}
  ${backgroundColor('primary')}

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
