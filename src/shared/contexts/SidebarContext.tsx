import React, { createContext, useState, useContext } from 'react'

interface SidebarContextType {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SidebarContext = createContext<SidebarContextType | null>(null)

interface SidebarProviderProps {
  children: React.ReactNode
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return <SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}
