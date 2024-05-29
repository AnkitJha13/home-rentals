import "../styles/Footer.scss";
import { LocationOn, LocalPhone, Email } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <h3>CONNECT</h3>
        <p>
          Follow us on social media for the latest updates and exclusive offers.
          Have questions or feedback? Reach out to our support team anytime.
          We're here to make your Home booking experience seamless and
          enjoyable!
        </p>
      </div>

      <div className="footer_center">
        <h3>COMPANY</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">Return and Refund Policy</a>
          </li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>CONTACT US</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+91 9876543210</p>
        </div>
        <div className="footer_right_info">
          <Email />
          
            <p>homehub@support.com</p>
         
        </div>
        <div className="footer_right_info">
          <LocationOn />
          <p>India</p>
        </div>
        <img src="/assets/payment.png" alt="payment" />
      </div>
    </div>
  );
};

export default Footer;
