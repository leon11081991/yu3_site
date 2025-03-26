import PropTypes from 'prop-types'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

import styles from '@/styles/components/ProjectBanner.module.scss'

const ProjectBanner = ({ src, alt, placeholder, width, height }) => {
  return (
    <div className={`lg:pb-10 ${styles.projectBanner}`}>
      <BlurLazyImage
        src={src}
        alt={`${alt} Banner`}
        placeholder={placeholder}
        width={width}
        height={height}
      />
    </div>
  )
}

ProjectBanner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

export default ProjectBanner
