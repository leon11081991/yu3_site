import React from 'react'
import { useDynamicSvgImport } from '@/hooks/useDynamicSvgImport'

type SizeKey = 'width' | 'height'

interface SvgIconProps {
  iconName: string
  size?: Record<SizeKey, string>
  svgProps?: React.SVGProps<SVGSVGElement>
}

const SvgIcon: React.FC<SvgIconProps> = ({
  iconName,
  size = { width: '24px', height: '24px' },
  svgProps
}) => {
  const { Icon } = useDynamicSvgImport(iconName)
  const { width, height } = size

  return (
    Icon && (
      <div
        className='flex items-center justify-center'
        style={{ width, height }}
      >
        <Icon {...svgProps} />
      </div>
    )
  )
}

export default SvgIcon
