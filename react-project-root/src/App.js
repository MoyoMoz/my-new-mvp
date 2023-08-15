import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserInputForm from './components/UserInputForm';
import MessageDisplay from './components/MessageDisplay';

function App() {
  const [message, setMessage] = useState(null); // Define the message state and its setter function

  const fetchMessage = (name) => {
    fetch(`/capstone/api/random-message/?name=${name}`)
      .then((response) => {
        console.log('Response:', response); // Logging the response for debugging
        return response.json();
      })
      .then((data) => setMessage(data.message)) // Use setMessage to update the message state
      .catch((error) => {
        console.error("Error fetching the message:", error);
      });
  }; // <-- This closing curly brace was missing

  const handleNameSubmit = (name) => {
    fetchMessage(name);
  };

  return (
    <div className="App">
      <Header />
      <UserInputForm onNameSubmit={handleNameSubmit} />
      <MessageDisplay message={message} />
      <Footer />
    </div>
  );
}

export default App;
