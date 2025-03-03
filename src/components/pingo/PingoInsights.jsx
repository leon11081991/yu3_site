import PropTypes from 'prop-types'
import ContentContainer from '@/layouts/ContentContainer'
import TextWithTitle from '@/components/ui/text/TextWithTitle'

const PingoInsights = ({ title, descriptions }) => {
  return (
    <ContentContainer>
      <section className='section-content border-b-[1px] border-gray-03'>
        <div className='two-cols-container'>
          <h3 className='heading-2'>{title}</h3>
          {descriptions.map(item => (
            <TextWithTitle
              key={item.id}
              label={item.label}
              content={item.content}
            />
          ))}
        </div>
      </section>
    </ContentContainer>
  )
}

PingoInsights.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.array.isRequired
}

export default PingoInsights
