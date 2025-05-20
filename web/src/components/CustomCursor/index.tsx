import { useRef, useState } from 'react'

import * as S from './styles'

import { useMousePosition } from '@/hooks/useMousePosition'

interface ICustomCursor {}

const CustomCursor = ({}: ICustomCursor) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useMousePosition(undefined, setCoords)

  return (
    <S.CustomCursor style={{ left: coords.x, top: coords.y }}>
      <img src="/cursor.svg" alt="Cursor Customizado" />
    </S.CustomCursor>
  )
}

export default CustomCursor
