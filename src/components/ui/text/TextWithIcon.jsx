import PropTypes from 'prop-types'
import SvgIcon from '@/components/ui/SvgIcon'

const default_svg_props = {
  width: '24px',
  height: '24px',
  fill: '#ffffff'
}

const TextWithIcon = ({
  index,
  item,
  iconType = 'icon',
  iconColor = 'white',
  iconName = 'check'
}) => {
  const svgSetting = iconColor ? { ...default_svg_props, fill: iconColor } : default_svg_props

  return (
    <li className='flex items-center gap-2'>
      <span
        className='rounded-full'
        style={{ background: iconColor }}
      >
        {iconType !== 'icon' ? (
          <div
            className='flex items-center justify-center font-arial'
            style={{ width: svgSetting.width, height: svgSetting.height }}
          >
            {index + 1}
          </div>
        ) : (
          <SvgIcon
            iconName={iconName}
            svgProps={svgSetting}
          />
        )}
      </span>
      <p className='text-p-1'>{item.content}</p>
    </li>
  )
}

TextWithIcon.propTypes = {
  index: PropTypes.number,
  item: PropTypes.string.isRequired,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  iconName: PropTypes.string
}

export default TextWithIcon
