import "../styles/Footer.scss"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src="/assets/logo.png" alt="logo" /></a>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Return and Refund Policy</a></li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+91 9876543210</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p><a href="mailto:homehub@support.com">homehub@support.com</a></p>
        </div>
        <div className="footer_right_info">
          <LocationOn />
          <p>India</p>
        </div>
        <img src="/assets/payment.png" alt="payment" />
      </div>
    </div>
  )
}

export default Footer
