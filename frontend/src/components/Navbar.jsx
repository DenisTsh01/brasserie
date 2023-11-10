import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; 
import { ScrollSpy } from 'bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import Scrollspy from 'react-scrollspy';

function Navbar() {
  const [click, setClick] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <ScrollLink to='section0' spy={true} smooth={true} offset={-80} duration={500}  className='navbar-logo' onClick={closeMobileMenu}>
            {
            windowWidth < 350
              ? "Brasserie"
              : windowWidth < 550
              ? "Café des Sports"
              : "Brasserie Café des Sports"}
           
          </ScrollLink>
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ?    faXmark: faBars } />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <ScrollLink to='section1'  spy={true} smooth={true} offset={-180} duration={500} className='nav-links' onClick={closeMobileMenu}>
               Menu
              </ScrollLink>
            </li>
            <li className='nav-item'>
              <ScrollLink
                to='section2' 
                spy={true} smooth={true} offset={-200} duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Événements
              </ScrollLink>
            </li>
            <li className='nav-item'>
              <ScrollLink
                to='section3' spy={true} smooth={true} offset={-100} duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Trouve nous
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
