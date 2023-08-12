import React, { useState } from 'react';

const UserInputForm = ({ onNameSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameSubmit(name); // Call the onNameSubmit function passed as a prop
    setName(''); // Clear the name input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Enter your name:</label>
      <input
        type="text"
        id="name"
        value={name} yeah
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default UserInputForm;
