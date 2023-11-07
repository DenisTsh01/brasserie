import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './EventList.css';
import imgDefault from '../assets/images/default.png';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import  Overlay from './Overlay';

function EventList() {
  const [defaultImage, setDefaultImage] = useState({});
  const [events, setEvent] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);


  useEffect(() => {
    getEvents();
  }, []);

  const settingsWithInfinite = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const settingsWithoutInfinite = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      day: 'numeric',
      month: 'short',
    };
    const formattedDate = date.toLocaleDateString('fr-FR', options);
    const time = date.toLocaleTimeString('fr-FR', { hour: 'numeric', minute: 'numeric' });
    return `${formattedDate} ${time}`;
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgDefault,
    }));
  };

  let serverUrl;
if (process.env.NODE_ENV === 'development') {
  serverUrl = 'http://127.0.0.1:8000'; // URL-ul serverului local
} else {
  serverUrl = 'https://backend-production-dafc.up.railway.app'; // URL-ul serverului live
}

  async function getEvents() {
    console.log(serverUrl)
    let response = await fetch(`${serverUrl}/api/events/`);
    let data = await response.json();
   
    setEvent(data);
    const imageUrls = data.map(event => event.photo);
    setImages(imageUrls);
    
    console.log("data photo   : " + data[0].photo )

  }

  const handleDescription = (text) => {
    if (text.length > 45) {
      return text.substring(0, 45) + '...';
    }
    return text;
  };

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOpen(false);
  };

  function convertNewlinesToBr(text) {
    return text.split(/[\r\n]+/).map((line, index) => (
      <span key={index}>
        {line}
        {index !== text.length - 1 && <br />}
      </span>
    ));
  }
  const selectedSettings = events.length >= 3 ? settingsWithInfinite : settingsWithoutInfinite;

  return (
    <div className="eventlist">
      <h2>Évènements à venir</h2>
      <Slider {...selectedSettings}>
        {events.map((item) => (
            <div className="card-container">
          <div className="card" key={item.title} onClick={() => handleCardClick(item)}>
            <div className="card-top">
              <img src={item.photo ? `${serverUrl}${item.photo}` : imgDefault} alt={`${serverUrl}/${item.photo}`}  />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <span className="category">{handleDescription(item.description)}</span>
            </div>
            <span className="event-date">{handleDate(item.date)}</span>
          </div>
          </div>
        ))}
      </Slider>

      {selectedEvent && (
        <Overlay isOpen={isOpen} onClose={handleCloseOverlay} menu={selectedEvent.menu}>
          <h1>{selectedEvent.title}</h1>
          <p>{convertNewlinesToBr(selectedEvent.description)}</p>
        </Overlay>
      )}
    </div>
  );
}

export default EventList;