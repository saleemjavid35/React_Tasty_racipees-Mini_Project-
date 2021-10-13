import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsFillStarFill} from 'react-icons/bs'
import Header from '../Header'
import Footer from '../Footer'
import ItemCard from '../ItemCard'
import './index.css'

class RestaurantDetails extends Component {
  state = {isLoading: false, itemsList: [], restaurantDetails: {}}

  componentDidMount() {
    this.getItemsList()
  }

  getItemsList = async () => {
    this.setState({
      isLoading: true,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = {
        name: fetchedData.name,
        costForTwo: fetchedData.cost_for_two,
        cuisine: fetchedData.cuisine,
        imageUrl: fetchedData.image_url,
        location: fetchedData.location,
        opensAt: fetchedData.opens_at,
        reviewsCount: fetchedData.reviews_count,
        itemsCount: fetchedData.items_count,
        rating: fetchedData.rating,
      }
      const updatedItemsList = fetchedData.food_items.map(item => ({
        name: item.name,
        cost: item.cost,
        foodType: item.food_type,
        imageUrl: item.image_url,
        id: item.id,
        rating: item.rating,
      }))
      this.setState({
        isLoading: false,
        itemsList: updatedItemsList,
        restaurantDetails: updatedData,
      })
    }
  }

  renderRestaurantDetails = () => {
    const {itemsList, restaurantDetails} = this.state
    const {
      name,
      costForTwo,
      location,
      cuisine,
      imageUrl,
      reviewsCount,
      rating,
    } = restaurantDetails

    return (
      <div>
        <ul className="banner-section" testid="restaurant-item">
          <div className="banner-card">
            <img src={imageUrl} className="banner-image" alt="restaurant" />
            <div className="details-section">
              <h1 className="name">{name}</h1>
              <p className="cuisine">{cuisine}</p>
              <p className="location">{location}</p>
              <div className="rating-cost-section">
                <div className="rating-container">
                  <div className="rating-section">
                    <BsFillStarFill className="star" />
                    <p className="rating">{rating}</p>
                  </div>
                  <p className="reviews">{reviewsCount} ratings</p>
                </div>
                <div className="cost-for-two-section">
                  <p className="cost-for-two">${costForTwo}</p>
                  <p className="cost-for-two">Cost for two</p>
                </div>
              </div>
            </div>
          </div>
        </ul>
        <div className="items-section">
          <ul className="items-container">
            {itemsList.map(item => (
              <ItemCard itemDetails={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderLoader = () => (
    <div
      testid="restaurant-details-loader"
      className="restaurant-loader-container"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="restaurant-details-route">
        <Header />
        {isLoading ? this.renderLoader() : this.renderRestaurantDetails()}
        <Footer />
      </div>
    )
  }
}

export default RestaurantDetails
