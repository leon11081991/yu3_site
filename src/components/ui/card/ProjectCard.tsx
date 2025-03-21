import { Link } from 'react-router-dom'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'
import TagList from '@/components/molecules/TagList'
import { useCursorContext } from '@/shared/contexts/CursorContext'

interface CardProps {
  name: string
  title: string
  category: string
  cover: {
    src: string
    alt: string
    placeholderImg: string
  }
  tagList: string[]
}
const ProjectCard = ({ name, title, category, cover, tagList }: CardProps) => {
  const { handleCursor } = useCursorContext()

  return (
    <li
      className='gap-6 cursor-pointer'
      onMouseEnter={() =>
        handleCursor('enter', { text: 'View', size: 100, color: 'rgba(0,0,0,0.3)' })
      }
      onMouseLeave={() => handleCursor('leave')}
    >
      <Link
        to={`/project/${name}`}
        className='flex flex-col gap-4'
      >
        <div className='relative flex-1 rounded-lg overflow-hidden group'>
          <TagList
            tagList={tagList}
            className='absolute left-4 top-4 z-10'
          />
          <BlurLazyImage
            className='transition duration-300 group-hover:scale-110'
            src={cover.src}
            alt={cover.alt}
            placeholder={cover.placeholderImg}
            width={713}
            height={476}
          />
        </div>
        <div>
          <h2
            className='heading-2'
            title={title}
          >
            {title}
          </h2>
          <p className='text-gray-05 heading-4'>{category}</p>
        </div>
      </Link>
    </li>
  )
}

export default ProjectCard
