import { Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigation } from '@/shared/hooks/useNavigation'

import { BANNER_DATA } from '@/data/banner-data'
import { PROJECT_DATA } from '@/data/project-data'

// 定義可用的頁面元件
const PAGE_COMPONENTS = {
  waca: lazy(() => import('@/components/pages/WacaProjectPage')),
  kol: lazy(() => import('@/components/pages/KolProjectPage')),
  pingo: lazy(() => import('@/components/pages/PingoProjectPage')),
  kai: lazy(() => import('@/components/pages/KaiProjectPage')),
  mandala: lazy(() => import('@/components/pages/MandalaProjectPage'))
}
const NotFound = lazy(() => import('@/views/NotFound'))
const ProjectBanner = lazy(() => import('@/components/ProjectBanner'))
const Button = lazy(() => import('@/components/ui/Button'))

// 定義 Banner 圖片尺寸
const BANNER_SIZE = {
  width: 1920,
  height: 600
}

const Project = () => {
  const { projectName } = useParams()
  const { navigateByStep } = useNavigation()

  // 檢查是否為有效的 projectName
  const isValidProject = projectName in PAGE_COMPONENTS
  // 根據 projectName 動態載入對應的頁面元件
  const SelectedProjectPage = isValidProject ? PAGE_COMPONENTS[projectName] : NotFound

  return (
    <>
      <ProjectBanner
        src={BANNER_DATA[projectName].src}
        alt={BANNER_DATA[projectName].alt}
        placeholder={BANNER_DATA[projectName].placeholder}
        width={BANNER_SIZE.width}
        height={BANNER_SIZE.height}
      />
      <Button
        className='hidden lg:flex static lg:sticky top-20 left-[var(--main-content-padding-x--mobile)] lg:left-[var(--main-content-padding-x)]'
        hasIcon={true}
        onClick={() => navigateByStep(-1)}
      >
        <span className='text-btn'>返回</span>
      </Button>
      <Suspense fallback={<div>Loading...</div>}>
        <SelectedProjectPage {...(isValidProject ? PROJECT_DATA[projectName] : {})} />
      </Suspense>
    </>
  )
}

export default Project
