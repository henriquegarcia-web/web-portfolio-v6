// src/components/styles.ts

import styled from 'styled-components'

export const GlowCard = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
`

export const GlowOverlay = styled.div`
  z-index: 1;
  position: absolute;
  width: 300px;
  height: 300px;
  pointer-events: none;
  transform: translate(-50%, -50%);
  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(0, 112, 243, 0.15) 0%,
    transparent 50%
  );
`
