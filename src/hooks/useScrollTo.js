import { useLayoutEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollTo = () => {
  const { pathname, search } = useLocation()

  // 提供手動滾動函式
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useLayoutEffect(() => {
    console.log('Path changed:', pathname, search) // Debug: 檢查是否觸發
    scrollToTop()
  }, [pathname, search, scrollToTop])

  return { scrollToTop } // 回傳函式，讓外部可手動觸發
}

export default useScrollTo
