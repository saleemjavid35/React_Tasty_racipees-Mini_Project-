import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="not-found-page">
    <Header />
    <div className="not-found-container">
      <img
        src="https://i.postimg.cc/NfPQNjCw/erroring-1notfound.png"
        className="not-found-image"
        alt="not found"
      />
      <h1>Page Not Found</h1>
      <p>
        we are sorry, the page you requested could not be found Please go back
        to the homepage
      </p>
      <Link to="/">
        <button type="button">Home Page</button>
      </Link>
    </div>
  </div>
)

export default NotFound
