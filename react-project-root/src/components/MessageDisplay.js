import React from 'react';

const MessageDisplay = ({ message, imageUrl }) => {
  return (
    <div>
      <h2>{message}</h2>
      {imageUrl && <img src={imageUrl} alt="Motivational" />}
    </div>
  );
};

export default MessageDisplay;
