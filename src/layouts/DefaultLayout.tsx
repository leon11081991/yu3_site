import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Sidebar from '@/components/layout/Sidebar'
import useScrollTo from '@/hooks/useScrollTo'
import AppContextProvider from '@/components/templates/AppContextProvider'
import Cursor from '@/components/Cursor'

import { useDynamicTitle } from '@/shared/hooks/useDynamicTitle'

const APP_NAME = 'Yu.3_'

const TITLE_MAP: Record<string, string> = {
  '': '首頁',
  about: '關於我',
  project: '專案作品',
  waca: 'Waca商品多規格',
  kol: 'KOL網紅媒合平台',
  pingo: 'PINGO美食搜集神器',
  kai: '凱奧畫廊',
  mandala: '炘睿生醫'
}

const getTitle = () => {
  const pathname = window.location.pathname
  const keyName = pathname.split('/').pop() || ''
  return `${TITLE_MAP[keyName]} | Yu.3_`
}

const DefaultLayout = () => {
  useScrollTo()
  useDynamicTitle(getTitle() || APP_NAME)

  return (
    <AppContextProvider>
      <Header appName={APP_NAME} />
      <Sidebar />
      <Outlet />
      <Footer />
      <Cursor />
    </AppContextProvider>
  )
}

export default DefaultLayout
