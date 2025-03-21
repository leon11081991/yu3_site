import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useDynamicTitle = (title: string) => {
  const location = useLocation()
  console.log('location', location)
  useEffect(() => {
    document.title = title
  }, [title])
}
