import { useState, useEffect } from 'react'

// Define screen size breakpoints
const BREAKPOINTS = {
  lg: 992 // Large screens >= 992px
}

type ScreenSize = 'sm' | 'lg'

const useScreenSize = (): ScreenSize => {
  // Function to determine screen size based on window width
  const getScreenSize = (): ScreenSize => {
    return window.innerWidth >= BREAKPOINTS.lg ? 'lg' : 'sm'
  }

  // Initialize with current screen size
  const [screenSize, setScreenSize] = useState<ScreenSize>(() => {
    // Handle SSR case where window might not be available
    if (typeof window === 'undefined') return 'lg'
    return getScreenSize()
  })

  useEffect(() => {
    // Update screen size when window resizes
    const handleResize = () => {
      setScreenSize(getScreenSize())
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenSize
}

export default useScreenSize
