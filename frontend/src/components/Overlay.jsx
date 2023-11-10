import React from 'react';
import './Overlay.css'; // Stilizare locală pentru Overlay


function Overlay({ isOpen, onClose, children, menu ,date}) {
    return (
      <>
        {isOpen ? (
          <div className="overlay">
            <div className="overlay_background" onClick={onClose}>
              <div className="overlay_container">
                <div className="overlay_controls">
                  <button className="overlay_close" type="button" onClick={onClose}></button>
                </div>
              </div>
              <div className="overlay-content">{children}</div>
              <div className="overlay-menu">
              <div className="overlay-content-text">{menu}</div>
              <div className="overlay-content-text">Nous vous attendons le {date}</div>

              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
  
export default Overlay;