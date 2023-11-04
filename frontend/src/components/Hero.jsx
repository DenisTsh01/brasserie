import React from 'react';
import  { useState, useEffect } from 'react';
import '../App.css';
import './Hero.css';
import coffeVid from '../assets/coffeevideo.mp4'
function Hero() {
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const [showText, setShowText] = useState(window.innerWidth <= 660);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (newWidth <= 660) {
        setShowText(true);
      } else {
        setShowText(false);
      }
      setWindowWidth(newWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='hero-container'>
  <video src={coffeVid} autoPlay loop muted />
  <div className='overlay-text'>
  <span className='fade-in-word element' style={{ animationDelay: '2s' }}>Brasserie</span>
  
  {windowWidth >= 660 ? (
    <span className='fade-in-word element' style={{ animationDelay: '2.7s' }}>- </span>
  ) : null}
  
  <span className='fade-in-word element' style={{ animationDelay: '3s' }}> Café</span>
  
  <span className='fade-in-word element' style={{ animationDelay: '3.4s' }}>des</span>
  
  <span className='fade-in-word element' style={{ animationDelay: '3.8s' }}>Sports</span>
</div>
</div>
  );
}


export default Hero;