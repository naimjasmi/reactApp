
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faPhone, faInfo, faMapMarkerAlt, faEnvelope, faCubes } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

export default function Contact() {
    return (
      <div className="Contact">
        <div className="topnav">
          <a href="/"> <FontAwesomeIcon icon={faHome} /> Home</a>
          <a href="/workgroup"> <FontAwesomeIcon icon={faUsers} /> Workgroup</a>
          <a className="active" href="/contact"><FontAwesomeIcon icon={faPhone} /> Contact</a>
          <a href="/activity"><FontAwesomeIcon icon={faCubes} /> Activity</a>
        </div>
  
        <div className="contact-content">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p>123 Main Street, City, Country</p>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>contact@example.com</p>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} />
              <p>+123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    );
  }


