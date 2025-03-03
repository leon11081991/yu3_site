import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

import classes from '@/styles/components/card/Card.module.scss'

const Card = ({ name, title, category, cover }) => {
  return (
    <li className={classes.card}>
      <Link
        to={`/project/${name}`}
        className={classes.cardContainer}
      >
        <div className={classes.cardCover}>
          <BlurLazyImage
            className={classes.cardCoverImg}
            src={cover.src}
            alt={cover.alt}
            placeholder={cover.placeholderImg}
            width={713}
            height={476}
          />
        </div>
        <div className={classes.cardContent}>
          <h3
            className={`${classes.cardTitle} heading-2`}
            title={title}
          >
            {title}
          </h3>
          <p className={`${classes.cardDesc} heading-4`}>{category}</p>
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
