import styled from 'styled-components'

import { backgroundColor, color } from '@/utils/styles/colors'
import { fontSize } from '@/utils/styles/fonts'

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  svg {
    transition: all 0.2s ease-in-out;
    opacity: 0.85;

    ${fontSize('xxl')}

    ${color('textSecondary')}
  }

  &:hover {
    svg {
      opacity: 1;
    }

    ${backgroundColor('bgLayout')}
  }
`
