import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {imageUrl, name, description} = details
  console.log(props)

  return (
    <div>
      <img alt={`planet ${name}`} src={imageUrl} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
export default PlanetItem
