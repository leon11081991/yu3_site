import ImageDemonstrationPure from '@/components/ImageDemonstrationPure'

const ProjectPureImagesDemo = ({ images }) => {
  return images.map(image => (
    <ImageDemonstrationPure
      key={image.id}
      image={image}
    />
  ))
}

export default ProjectPureImagesDemo
