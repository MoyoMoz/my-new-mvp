import '../styles/LoginPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleButtonClick = (label) => {
    switch (label) {
      case 'Log In':
        navigate('/auth');
        break;
      case 'Guest':
        navigate('/home');
        break;
      default:
        break;
    }
  };

  return (
    <div className="Login-page">
      <button 
        className="login-btn"
        onClick={() => handleButtonClick('Log In')}
      >
        Log In
      </button>
      <button 
        className="guest-btn"
        onClick={() => handleButtonClick('Guest')}
      >
        Guest
      </button>
    </div>
  );
}

export default LoginPage;
