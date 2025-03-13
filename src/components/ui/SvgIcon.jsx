import PropTypes from 'prop-types'
import { useDynamicSvgImport } from '@/hooks/useDynamicSvgImport'

const SvgIcon = ({ iconName, svgProps }) => {
  const { SvgIcon } = useDynamicSvgImport(iconName)

  return (
    SvgIcon && (
      <div className='flex items-center justify-center'>
        <SvgIcon {...svgProps} />
      </div>
    )
  )
}

SvgIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  svgProps: PropTypes.object
}

export default SvgIcon
