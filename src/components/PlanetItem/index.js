import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {imageUrl, name, description} = planetDetails

  return (
    <div className="planets-container">
      <img alt={`planet ${name}`} className="planet-image" src={imageUrl} />
      <h1 className="planet-name-heading">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
