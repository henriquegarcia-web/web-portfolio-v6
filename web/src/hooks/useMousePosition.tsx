import { useEffect } from 'react'

interface Position {
  x: number
  y: number
}

export function useMousePosition(
  ref?: React.RefObject<HTMLElement>,
  callback?: (coords: Position) => void
) {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref?.current) {
        const { top, left } = ref.current.getBoundingClientRect()
        callback?.({
          x: event.clientX - left,
          y: event.clientY - top
        })
      } else {
        callback?.({
          x: event.clientX,
          y: event.clientY
        })
      }
    }

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0]
      if (!touch) return

      if (ref?.current) {
        const { top, left } = ref.current.getBoundingClientRect()
        callback?.({
          x: touch.clientX - left,
          y: touch.clientY - top
        })
      } else {
        callback?.({
          x: touch.clientX,
          y: touch.clientY
        })
      }
    }

    const target = ref?.current || window

    target.addEventListener('mousemove', handleMouseMove as EventListener)
    target.addEventListener('touchmove', handleTouchMove as EventListener)

    return () => {
      target.removeEventListener('mousemove', handleMouseMove as EventListener)
      target.removeEventListener('touchmove', handleTouchMove as EventListener)
    }
  }, [ref, callback])
}
