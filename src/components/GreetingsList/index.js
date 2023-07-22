import './index.css'

const GreetingsList = props => {
  const {GreetingsDetails} = props
  const {imageUrl, imageAltText} = GreetingsDetails
  return (
    <li>
      <img className="Greetings-Image" src={imageUrl} alt={imageAltText} />
    </li>
  )
}

export default GreetingsList
