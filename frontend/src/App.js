// /Users/somebody/Developer/CapstoneDirectory/CapstoneProject/frontend/src/App.js
import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import './App.css';

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
          <img src={`${process.env.PUBLIC_URL}/static/images/divine_woman_on_laptop1.png`} style={{ width: '100%' }} alt="Image 1" />
          <img src={`${process.env.PUBLIC_URL}/static/images/pic21.png`} style={{ width: '100%' }} alt="Image 2" />
          <img src={`${process.env.PUBLIC_URL}/static/images/pic10.png`} style={{ width: '100%' }} alt="Image 3" />
        </div>
        <div className="w3-half">
          <img src={`${process.env.PUBLIC_URL}/static/images/pic1.png`} style={{ width: '100%' }} alt="Image 4" />
          <img src={`${process.env.PUBLIC_URL}/static/images/pic22.png`} style={{ width: '100%' }} alt="Image 5" />
        </div>
      </div>


      <footer className="w3-light-grey w3-padding-64 w3-center" id="about">
        <h2>About</h2>
        <img src="/w3images/boy.jpg" className="w3-image w3-padding-32" width="300" height="300" />
        <form style={{ margin: 'auto', width: '60%' }} action="/action_page.php" target="_blank">
          <p>
            Just me, myself and I, exploring the universe of unknownment. I have a
          heart of love and an interest of lorem ipsum and mauris neque quam
          blog. I want to share my world with you. Praesent tincidunt sed tellus
          ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla. Praesent tincidunt sed tellus ut
          rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla.
          </p>
          <p className="w3-large w3-text-pink">Do not hesitate to contact me!</p>
          <div className="w3-section">
            <label><b>Name</b></label>
            <input className="w3-input w3-border" type="text" required name="Name" />
          </div>
          <div className="w3-section">
            <label><b>Email</b></label>
            <input className="w3-input w3-border" type="text" required name="Email" />
          </div>
          <div className="w3-section">
            <label><b>Message</b></label>
            <input className="w3-input w3-border" required name="Message" />
          </div>
          <button type="submit" className="w3-button w3-block w3-dark-grey">
            Send
          </button>
        </form>
        <br />
        <p>
          Powered by
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            target="_blank"
            className="w3-hover-text-green"
          >
            w3.css
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
