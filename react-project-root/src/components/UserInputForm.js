import React, { useState } from 'react';

const UserInputForm = ({ setMessage }) => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/capstone/api/random-message/?name=${name}`);
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" onChange={handleInputChange} value={name} />
      <button type="submit">Send</button>
    </form>
  );
};

export default UserInputForm;
























// import React, { useState } from 'react';

// function UserInputForm() {
//   const [name, setName] = useState('');

//   const handleSubmit = () => {
//     // call the backend to get the message here
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         style={{ fontSize: '18px', padding: '10px', width: '80%', marginBottom: '20px' }}
//       />
//       <br />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// export default UserInputForm;
