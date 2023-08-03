import React from 'react';
import MandalaButton from './MandalaButton';
import '../styles/FirstPage.css';

function FirstPage() {
  const handleLoginClick = () => {
    console.log("Login button clicked");
    // Here you could add a call to your login function
  };

  const handleGuestClick = () => {
    console.log("Guest button clicked");
    // Here you could add a call to a function that handles guest access
  };

  return (
    <div className="first-page">
      <MandalaButton 
        label="Log In" 
        image="path_to_login_mandala_image" 
        color="#33FFFF" 
        onClick={handleLoginClick}
      />
      <MandalaButton 
        label="Guest" 
        image="path_to_guest_mandala_image" 
        color="#33FF33" 
        onClick={handleGuestClick}
      />
    </div>
  );
}

export default FirstPage;
