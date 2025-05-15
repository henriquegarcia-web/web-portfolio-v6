// src/utils/styles/commons.ts

import styled from 'styled-components'
import { backgroundColor } from './colors'
import { Globals } from './globals'

// ===================================================== SCREEN

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  ${backgroundColor('bgBase')}
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${Globals.layout.content.maxWidth};
`
