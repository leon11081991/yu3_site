import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import useScrollTo from '@/hooks/useScrollTo'

const APP_NAME = 'Yu.3_'

const DefaultLayout = () => {
  useScrollTo()

  return (
    <>
      <Header appName={APP_NAME} />
      <Outlet />
      <Footer />
    </>
  )
}

export default DefaultLayout
