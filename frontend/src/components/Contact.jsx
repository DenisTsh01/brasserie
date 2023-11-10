import React from 'react';
import Maps from './Maps'; // Importați componenta de hartă
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import facebookIcon from '../assets/facebookIcon.svg'
// import FacebookIcon from '../icons8-facebook.svg';
// import TableSVG from '../coffee-shop-restaurant-svgrepo-com.svg'
// import CoffeeShop from '../restaurant-verde.svg'
// import PurpleUmbrela from '../umbrela-mov.svg'

function Contact() {
  return (
<div>
    <h2 className='title-contact'>Trouve nous</h2>
    <div className="about-container">

{/* <div className="restaurant">
      <img src={CoffeeShop} alt="Table" />
    </div>

      <div className="background-svg2">
      <img src={TableSVG} alt="Table" />
    </div>
    <div className="background-svg3">
      <img src={TableSVG} alt="Table" />
    </div>
    
    <div className="background-svg4">
      <img src={PurpleUmbrela} alt="Table" />
    </div> */}
    

      <div className="map-card">   
      
        <Maps />
      </div>
      <div className="contact-and-program">
        <div className="working-hours">
          <h2 className="section-title">Horaires</h2>
          
          <div className="weekdays">
            <p>Lundi: 7:30 - 15:00  17:00 - 21:00</p>
            <p>Mardi: 7:30 - 15:00  17:00 - 21:00</p>
            <p>Mercredi: Fermé</p>
            <p>Jeudi: 7:30 - 15:00  17:00 - 21:00</p>
          </div>
          <div className="weekend">
            <p>Vendredi: 7:30 - 15:00  17:00 - 21:00</p>
            <p>Samedi: 7:30 - 15:00  17:00 - 21:00</p>
            <p>Dimanche: 7:30 - 15:00  17:00 - 21:00</p>
          </div>
        
        </div>
        <div className="contact-info">
          <h2 className="section-title">Contact</h2>
          <p>Email : contact@exemple.com</p>
          <p>Téléphone : 0781 883 290</p>
          <a href="https://www.facebook.com/profile.php?id=61551992615210" target="_blank" className="facebook-link">
            <img src={facebookIcon} alt="Facebook Icon" className="f-icon" />
            <p className="follow-text">Follow us!</p>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact; 