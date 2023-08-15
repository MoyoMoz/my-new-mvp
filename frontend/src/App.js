import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';


function App() {
  return (
    <div className="w3-content" style={{ maxWidth: '1500px' }}>
      <header className="w3-container w3-xlarge w3-padding-24">
        <a href="#" className="w3-left w3-button w3-white">MY ART</a>
        <a href="#about" className="w3-right w3-button w3-white">About</a>
        <LogoutButton className="w3-right w3-button w3-white" />
        <LoginButton className="w3-right w3-button w3-white" />
      </header>
      
      <div className="w3-row">
        <div className="w3-half">
          <img src="/static/images/divine_woman_on_laptop1.png" style={{ width: '100%' }} alt="Divine Woman" />
          <img src="/static/images/pic21.png" style={{ width: '100%' }} alt="Pic 21" />
          <img src="/static/images/pic10.png" style={{ width: '100%' }} alt="Pic 10" />
        </div>
        <div className="w3-half">
          <img src="/static/images/pic1.png" style={{ width: '100%' }} alt="Pic 1" />
          <img src="/static/images/pic22.png" style={{ width: '100%' }} alt="Pic 22" />
        </div>
      </div>

      <footer className="w3-light-grey w3-padding-64 w3-center" id="about">
        {/* Add the content from the "About" section of template.html here */}
        {/* Example: */}
        <h2>About</h2>
        <img src="/static/images/boy.jpg" className="w3-image w3-padding-32" width="300" height="300" alt="About" />
        {/* Repeat for other content */}
      </footer>
    </div>
  );
}

export default App;
