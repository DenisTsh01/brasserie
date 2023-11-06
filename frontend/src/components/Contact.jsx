import React from 'react';
import './contactPage.css'; // Importarea stilurilor CSS

function ContactPage() {
  return (
    <div className="contact-container">
      <header>
        <h1>Contact și Program</h1>
      </header>
      <div className="main-content">
        <div className="program">
          <h2>Programul Cafenelei</h2>
          <p>Luni: 08:00 - 18:00</p>
          <p>Marți: 08:00 - 18:00</p>
          <p>Miercuri: Cafenea închisă</p>
          <p>Joi: 08:00 - 18:00</p>
          <p>Vineri: 08:00 - 18:00</p>
          <p>Sâmbătă: 10:00 - 14:00</p>
          <p>Duminică: 10:00 - 14:00</p>
        </div>
        <div className="contact-info">
          <h2>Contact</h2>
          <div className="contact-details">
            <h3>E-mail</h3>
            <a href="mailto:contact@cafenea.com">contact@cafenea.com</a>
          </div>
          <div className="contact-details">
            <h3>Telefon</h3>
            <p>123-456-789</p>
          </div>
          <h3>Pagina de Facebook</h3>
          <a href="https://www.facebook.com/cafenea" target="_blank" rel="noopener noreferrer">
            Facebook Cafenea
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
