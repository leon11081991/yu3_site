import { useState, useEffect } from 'react'

const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // 檢查用戶代理字串，判斷是否為移動裝置
    const userAgent = navigator.userAgent.toLowerCase()
    const mobileDevices = ['iphone', 'ipod', 'android', 'blackberry', 'windows phone']

    // 判斷是否包含在移動裝置的用戶代理字串中
    const isMobileDevice = mobileDevices.some(device => userAgent.includes(device))

    setIsMobile(isMobileDevice)
  }, [])

  return { isMobile }
}

export default useDevice
