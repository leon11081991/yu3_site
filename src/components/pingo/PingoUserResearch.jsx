import PropTypes from 'prop-types'
import BaseSectionGrid from '@/components/templates/BaseSectionGrid'
import TextWithTitle from '@/components/ui/text/TextWithTitle'
import UserCard from '@/components/ui/card/UserCard'

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
      label: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired
}

const UserResearchHeader = ({ title, descriptions }) => {
  return (
    <>
      <h3 className='heading-2'>{title}</h3>
      <DescriptionBlock items={descriptions} />
    </>
  )
}

UserResearchHeader.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.array.isRequired
}

const UserResearchList = ({ users }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
      {users.map(research => (
        <UserCard
          key={research.id}
          {...research}
        />
      ))}
    </div>
  )
}

UserResearchList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired
}

const PingoUserResearch = ({ title, descriptions, researches }) => {
  return (
    <BaseSectionGrid
      topContent={
        <UserResearchHeader
          title={title}
          descriptions={descriptions}
        />
      }
      mainContent={<UserResearchList users={researches} />}
    />
  )
}

PingoUserResearch.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.array.isRequired,
  researches: PropTypes.array.isRequired
}

export default PingoUserResearch
