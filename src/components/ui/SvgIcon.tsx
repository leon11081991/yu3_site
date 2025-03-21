import React from 'react'
import { useDynamicSvgImport } from '@/hooks/useDynamicSvgImport'

interface SvgIconProps {
  iconName: string
  svgProps?: React.SVGProps<SVGSVGElement>
}

const SvgIcon: React.FC<SvgIconProps> = ({ iconName, svgProps }) => {
  const { Icon } = useDynamicSvgImport(iconName)

  return (
    Icon && (
      <div className='flex items-center justify-center'>
        <Icon {...svgProps} />
      </div>
    )
  )
}

export default SvgIcon
