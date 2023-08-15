import React, { useState } from 'react';

const UserInputForm = ({ onFetchMessage }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFetchMessage();  // Fetch the message when the form is submitted
  };

  return (
    <div>
      <h2>Enter your name:</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name here"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default UserInputForm;
