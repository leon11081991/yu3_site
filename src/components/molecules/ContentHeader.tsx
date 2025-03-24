import React from 'react'
import DescriptionBlock from '@/components/molecules/DescriptionBlock'

interface ContentHeaderProps {
  title: string
  descriptions: string[]
  className?: string
  children?: React.ReactNode
}

const ContentHeader = ({ title, descriptions, className = '', children }: ContentHeaderProps) => {
  return (
    <>
      <h3 className='heading-2'>{title}</h3>
      {(descriptions || children) && (
        <div className={`${children ? 'flex flex-col gap-6 lg:gap-16' : ''} ${className}`}>
          {descriptions && <DescriptionBlock descriptions={descriptions} />}
          {children}
        </div>
      )}
    </>
  )
}

export default ContentHeader
