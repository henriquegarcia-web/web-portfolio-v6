// src/components/styles.ts

import styled from 'styled-components'

export const GlowBackdrop = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
`

export const GlowOverlay = styled.div`
  z-index: 1;
  position: absolute;
  width: 400px;
  height: 400px;
  pointer-events: none;
  transform: translate(-50%, -50%);
  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(0, 112, 243, 0.05) 0%,
    transparent 60%
  );
`
