import { useEffect } from 'react'

const useResizedWidth = (callback: () => void) => {
  useEffect(() => {
    const handleResize = () => {
      callback()
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
}

export default useResizedWidth
