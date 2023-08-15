import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import UserInputForm from './components/UserInputForm';
import MessageDisplay from './components/MessageDisplay';
import Footer from './components/Footer';

function App() {
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const fetchMessage = () => {
    fetch('http://localhost:8000/api/random-message/')
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

export default App;
