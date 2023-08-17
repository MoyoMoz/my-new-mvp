import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import UserInputForm from './components/UserInputForm';
import MessageDisplay from './components/MessageDisplay';
import Footer from './components/Footer';

function App() {
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Define the API_URL
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

  const fetchMessage = (userName) => {
    // Use the API_URL in the fetch call
    fetch(`${API_URL}/api/random-message/?name=${userName}`)
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
        setImageUrl(data.image_url);
      });
  };

  return (
    <div className="App">
      <Header />
      <UserInputForm onFetchMessage={fetchMessage} />
      <MessageDisplay message={message} imageUrl={imageUrl} />
      <Footer />
    </div>
  );
}

// lets go Heroku 

export default App;
