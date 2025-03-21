import BaseTag from '@/components/ui/BaseTag'
import { TagType } from '@/models/tag.type'

interface TagListProps {
  tagList: string[]
  type?: TagType
  className?: string
}

const TagList = ({ tagList, type = 'default', className = '' }: TagListProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tagList.map(text => (
        <BaseTag
          key={text}
          type={type}
          text={text}
        />
      ))}
    </div>
  )
}

export default TagList
