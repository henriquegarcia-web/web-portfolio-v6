// src/components/GlowBackdrop.tsx

import { useRef, useState } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'
import * as S from './styles'

const GlowBackdrop = ({ children }: { children: React.ReactNode }) => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  useMousePosition(backgroundRef, setCoords)

  return (
    <S.GlowBackdrop
      ref={backgroundRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && <S.GlowOverlay style={{ left: coords.x, top: coords.y }} />}
      {children}
    </S.GlowBackdrop>
  )
}

export default GlowBackdrop
