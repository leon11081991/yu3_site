import PropTypes from 'prop-types'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import TextWithTitle from '@/components/ui/text/TextWithTitle'
import CheckFilledIcon from '@/assets/icons/check-filled.svg'

const DescriptionBlock = ({ items }) => {
  return items.map(({ id, label, content }) => (
    <TextWithTitle
      key={id}
      label={label}
      content={content}
    />
  ))
}

DescriptionBlock.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      content: PropTypes.string.isRequired
    })
  ).isRequired
}

const InfoItem = ({ text }) => {
  return (
    <div className='flex gap-2'>
      <img src={CheckFilledIcon} />
      <p className='text-p1'>{text}</p>
    </div>
  )
}

InfoItem.propTypes = {
  text: PropTypes.string
}

const ReflectionHeader = ({ title, descriptions, items }) => {
  return (
    <>
      <h3 className='heading-2'>{title}</h3>
      <div className='flex flex-col gap-16'>
        <DescriptionBlock items={descriptions} />
        <div className='flex flex-col gap-3'>
          {items.map(item => (
            <InfoItem
              key={item.id}
              text={item.content}
            />
          ))}
        </div>
      </div>
    </>
  )
}

ReflectionHeader.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      content: PropTypes.string.isRequired
    })
  ).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired
}

const PingoReflection = ({ title, descriptions, informations }) => {
  return (
    <BaseSectionGrid
      topContent={
        <ReflectionHeader
          title={title}
          descriptions={descriptions}
          items={informations}
        />
      }
    />
  )
}

PingoReflection.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      content: PropTypes.string.isRequired
    })
  ).isRequired,
  informations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired
}

export default PingoReflection
