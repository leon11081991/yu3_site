import React, { useEffect } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'
import { useCursorContext } from '@/shared/contexts/CursorContext'
import { useDevice } from '@/shared/hooks/useDevice'

const Cursor: React.FC = () => {
  const { isMobile } = useDevice()
  const { cursorState } = useCursorContext()
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const smoothX = useSpring(cursorX, { damping: 20, stiffness: 200 })
  const smoothY = useSpring(cursorY, { damping: 20, stiffness: 200 })

  const cursorStyle = {
    position: 'fixed',
    top: smoothY,
    left: smoothX,
    width: `${cursorState.size}px`,
    height: `${cursorState.size}px`,
    backgroundColor: cursorState.color,
    fontWeight: cursorState?.fontWeight || 400,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition: 'backgroundColor .5s ease, width .3s ease, height .3s ease',
    zIndex: 1000
  }

  const cursorStyleMobile = {
    display: 'none'
  }

  const updateCursorPosition = (e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateCursorPosition)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [])

  return (
    <motion.div style={isMobile ? cursorStyleMobile : cursorStyle}>{cursorState.text}</motion.div>
  )
}

export default Cursor
