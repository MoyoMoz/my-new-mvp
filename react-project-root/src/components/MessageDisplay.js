import React from 'react';

const MessageDisplay = ({ message }) => {
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default MessageDisplay;





// import React, { useState } from 'react';
// import axios from 'axios';

// function MessageDisplay({ userName }) {
//   const [message, setMessage] = useState("");

//   // Function to fetch a random message
//   const fetchMessage = async () => {
//     try {better
//       const response = await axios.get(`http://127.0.0.1:8000/capstone/api/random-message/?name=${userName}`);
//       setMessage(response.data.message);
//     } catch (error) {
//       console.error('An error occurred while fetching the message:', error);
//     }
//   };

//   return (
//     <div>
//       <h3>{message}</h3>
//       <button onClick={fetchMessage}>Get a New Message</button>
//     </div>
//   );
// }

// export default MessageDisplay;
