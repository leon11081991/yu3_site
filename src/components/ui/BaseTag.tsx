import { TagType } from '@/models/tag.type'

const TAG_STYLE_TYPE: Record<TagType, string> = {
  default: 'border-gray-04 text-p2 font-p2 bg-gray-01/40',
  light: 'border-gray-02 text-p1 font-p1'
}

interface BaseTagProps {
  text: string
  type?: TagType
  className?: string
}

const BaseTag = ({ text, type = 'default', className }: BaseTagProps) => {
  return (
    <div className={`px-4 py-1 border rounded-[50px] ${TAG_STYLE_TYPE[type]} ${className}`}>
      {text}
    </div>
  )
}

export default BaseTag
