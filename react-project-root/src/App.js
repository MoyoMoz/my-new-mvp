import React from 'react';
import Header from './components/Header';
import UserInputForm from './components/UserInputForm';
import MessageDisplay from './components/MessageDisplay';
import Footer from './components/Footer';


function App() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <Header />
      <UserInputForm setMessage={setMessage} />
      <MessageDisplay message={message} />
      <Footer />
    </div>
  );
}

export default App;