// src/components/GlowCard.tsx

import { useRef, useState } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'
import * as S from './styles'

const GlowCard = ({ children }: { children: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  useMousePosition(cardRef, setCoords)

  return (
    <S.GlowCard
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && <S.GlowOverlay style={{ left: coords.x, top: coords.y }} />}
      {children}
    </S.GlowCard>
  )
}

export default GlowCard
