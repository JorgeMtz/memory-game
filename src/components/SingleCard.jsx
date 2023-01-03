import cover from "./assets/img/cover.png"
import "./SingleCard.scss"

const SingleCard = ({ item, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(item)
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={item.src} className="front" alt="card front" />
        <img
          src={cover}
          className="back"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default SingleCard
