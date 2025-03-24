import { useCallback } from 'react'

interface UseTemporaryHoverEffectProps {
  className: string
  delay?: number
}

/**
 * 使用者點擊時，添加 hover 效果，300ms 後移除 hover 效果
 * @param className 要添加的 hover 效果的 class name
 * @param delay 延遲時間，預設為 300ms
 * @returns 移除 hover 效果的函式
 */
const useTemporaryHoverEffect = ({ className, delay = 300 }: UseTemporaryHoverEffectProps) => {
  const removeHoverEffect = useCallback(
    (element: HTMLElement) => {
      setTimeout(() => {
        element.classList.remove(className)
      }, delay)
    },
    [className, delay]
  )

  return {
    removeHoverEffect
  }
}

export default useTemporaryHoverEffect
