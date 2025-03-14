import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const Card = ({ name, title, category, cover }) => {
  return (
    <li className='gap-6 cursor-pointer'>
      <Link
        to={`/project/${name}`}
        className='flex flex-col gap-4'
      >
        <div className='flex-1 rounded-[4px] overflow-hidden'>
          <BlurLazyImage
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

Card.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  cover: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    placeholderImg: PropTypes.string.isRequired
  })
}

export default Card
