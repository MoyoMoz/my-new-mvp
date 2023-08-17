import React from 'react';

const MessageDisplay = ({ message, imageUrl }) => {
  return (
    <div>
<h2 className="message-box">{message}</h2>
      {imageUrl && <img src={imageUrl} alt="Motivational" className="motivational-image" />}
    </div>
  );
};

export default MessageDisplay;
