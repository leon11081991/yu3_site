import React from 'react'
import { ScrollToSectionProvider } from '@/shared/contexts/ScrollToSectionContext'
import { SidebarProvider } from '@/shared/contexts/SidebarContext'
import { CursorProvider } from '@/shared/contexts/CursorContext'

interface AppContextProviderProps {
  children: React.ReactNode
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  return (
    <ScrollToSectionProvider>
      <SidebarProvider>
        <CursorProvider>{children}</CursorProvider>
      </SidebarProvider>
    </ScrollToSectionProvider>
  )
}

export default AppContextProvider
