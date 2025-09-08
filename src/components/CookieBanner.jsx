import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Hide banner and store consent
    setVisible(false);
    localStorage.setItem('cookieConsent', 'true');
  };

  const handleClose = () => {
    // Hide the banner without storing consent
    setVisible(false);
  };

  return (
    visible && (
      <div className="cookie-banner">
        <div className="cookie-text">
          This website uses cookies to ensure you get the best experience on our website. 
          <a href="/cookies" className="cookie-link">What are cookies?</a>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn" onClick={handleAccept}>That's Fine</button>
          <button className="close-btn" onClick={handleClose}>&times;</button>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
