import PropTypes from 'prop-types'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import ContentHeader from '@/components/molecules/ContentHeader'
import TextWithIcon from '@/components/ui/text/TextWithIcon'

const KolChallenge = ({ title, descriptions, pointList }) => {
  return (
    <BaseSectionGrid
      topContent={
        <ContentHeader
          title={title}
          descriptions={descriptions}
        >
          <ul className='flex flex-col gap-4'>
            {pointList.map((item, index) => (
              <TextWithIcon
                key={item.id}
                index={index}
                iconType='index'
                item={item}
                iconColor='#FF7B8E'
              />
            ))}
          </ul>
        </ContentHeader>
      }
      hasDivider={false}
      noPb={true}
    />
  )
}

KolChallenge.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.array.isRequired,
  pointList: PropTypes.array.isRequired
}

export default KolChallenge
