import PropTypes from 'prop-types'
import { useDynamicSvgImport } from '@/hooks/useDynamicSvgImport'

const SvgIcon = ({ iconName, svgProps }) => {
  const { Icon } = useDynamicSvgImport(iconName)

  return (
    Icon && (
      <div className='flex items-center justify-center'>
        <Icon {...svgProps} />
      </div>
    )
  )
}

SvgIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  svgProps: PropTypes.object
}

export default SvgIcon
