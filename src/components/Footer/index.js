import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="logo-container">
      <img
        src="https://i.postimg.cc/MpTg0ZVH/Group-7420whitehat.png"
        alt="website-footer-logo"
        className="footer-logo"
      />
      <h1 className="footer-title">Tasty Kitchen</h1>
    </div>
    <p className="footer-text">
      The only thing we are serious about is food. Contact us on
    </p>
    <div className="icons-container">
      <FaPinterestSquare className="icon" testid="pintrest-social-icon" />
      <FaInstagram className="icon" testid="instagram-social-icon" />
      <FaTwitter className="icon" testid="twitter-social-icon" />
      <FaFacebookSquare className="icon" testid="facebook-social-icon" />
    </div>
  </div>
)

export default Footer
