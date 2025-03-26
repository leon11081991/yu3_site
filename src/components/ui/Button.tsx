import React from 'react'
import SvgIcon from '@/components/ui/SvgIcon'

interface ButtonProps {
  children: React.ReactNode
  hasIcon?: boolean
  iconName?: string
  className?: string
  onClick: () => void
}

const Button = ({ children, hasIcon, iconName = 'arrowLeft', className, onClick }: ButtonProps) => {
  return (
    <button
      className={`border border-[rgba(255,255,255,0.2)] rounded-[50px] px-4 py-2 bg-gray-01 bg-opacity-10 backdrop-blur-[10px] transition-all duration-300 hover:bg-gray-02 flex items-center gap-1 ${className}`}
      onClick={onClick}
    >
      {hasIcon && (
        <SvgIcon
          iconName={iconName}
          size={{ width: '12px', height: '12px' }}
        />
      )}
      {children}
    </button>
  )
}

export default Button
