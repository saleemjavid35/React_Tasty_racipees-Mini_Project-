import {Link} from 'react-router-dom'
import {BsFillStarFill} from 'react-icons/bs'
import './index.css'

const RestaurantCard = props => {
  const {restaurantDetails} = props
  const {userRating, name, cuisine, imageUrl, id} = restaurantDetails
  const {rating, totalReviews} = userRating

  return (
    <Link to={`/restaurant/${id}`} className="restaurant-link">
      <li className="restaurant-item" testid="restaurant-item">
        <img src={imageUrl} alt="restaurant logo" className="restaurant-logo" />
        <div className="restaurant-details">
          <h1 className="restaurant-title">{name}</h1>
          <h1 className="total-reviews-count">{totalReviews}</h1>
          <p className="cuisine">{cuisine}</p>
          <div className="rating-container">
            <BsFillStarFill className="star" />
            <p className="rating">{rating}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RestaurantCard
