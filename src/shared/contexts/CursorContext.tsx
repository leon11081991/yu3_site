import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface CursorProviderProps {
  children: React.ReactNode
}

interface CursorState {
  isHovered: boolean
  text?: string
  size?: number
  color?: string
  variant?: string
  [key: string]: any
}

type CursorAction = 'enter' | 'leave'

type CursorContextType = {
  cursorState: CursorState
  handleCursor: (action: CursorAction, options?: Partial<CursorState>) => void
}

const CursorContext = React.createContext<CursorContextType | undefined>(undefined)

export const CursorProvider = ({ children }: CursorProviderProps) => {
  const [cursorState, setCursorState] = useState<CursorState>({
    isHovered: false,
    text: '',
    size: 8,
    color: 'white',
    variant: 'default' // 可用於未來不同動畫
  })

  const { pathname } = useLocation() // 取得當前頁面路徑

  useEffect(() => {
    setCursorState(prev => ({
      ...prev,
      text: '',
      size: 8,
      color: 'white',
      isHovered: false
    }))
  }, [pathname])

  const handleCursor = (action: CursorAction, options?: Partial<CursorState>) => {
    setCursorState(prev => ({
      ...prev,
      isHovered: action === 'enter',
      ...(action === 'enter' ? options : { text: '', size: 8, color: 'white', variant: 'default' })
    }))
  }

  return (
    <CursorContext.Provider value={{ cursorState, handleCursor }}>
      {children}
    </CursorContext.Provider>
  )
}

export const useCursorContext = (): CursorContextType => {
  const context = useContext(CursorContext)
  if (!context) {
    throw new Error('useCursorContext 必須在 CursorProvider 內使用')
  }
  return context
}
