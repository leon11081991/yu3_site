import React, { useContext, useRef } from 'react'

interface ScrollToSectionProviderProps {
  children: React.ReactNode
}

type ScrollToSectionContextType = {
  registerSection: (sectionName: string, el: HTMLElement) => void
  scrollToSection: (sectionName: string) => void
}

// 創建context
const ScrollToSectionContext = React.createContext<ScrollToSectionContextType | undefined>(
  undefined
)

export const ScrollToSectionProvider = ({ children }: ScrollToSectionProviderProps) => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement }>({}) // 儲存個別section的ref

  // 註冊 Section（回傳一個可用於 ref 的函式）
  const registerSection = (sectionName: string, el: HTMLElement) => {
    if (el) sectionRefs.current[sectionName] = el
  }

  // 滾動到指定 Section
  const scrollToSection = (sectionName: string) => {
    const section = sectionRefs.current[sectionName]
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <ScrollToSectionContext.Provider value={{ registerSection, scrollToSection }}>
      {children}
    </ScrollToSectionContext.Provider>
  )
}

// 使用 Context 的自訂 Hook，確保 Context 正確
export const useScrollToSectionContext = () => {
  const context = useContext(ScrollToSectionContext)
  if (!context) {
    throw new Error('useScrollToSectionContext 必須在 ScrollToSectionProvider 內使用')
  }
  return context
}
