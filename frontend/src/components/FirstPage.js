import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogInButtonImg from '../images/LogInButton (1).svg';
import BuildButtonImg from '../images/BuildButton.svg';
import PracticeButtonImg from '../images/PracticeButton.svg';
import StudyButtonImg from '../images/StudyButton.svg';
import LogOutButtonImg from '../images/LogOutButton.svg';
import GuestButtonImg from '../images/GuestButton.svg';


function FirstPage() {
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
    <div className="first-page">
      <MandalaButton 
        label="Log In" 
        image={LogInButtonImg} 
        color="#33FFFF" 
        onClick={() => handleButtonClick('Log In')}
      />
      <MandalaButton 
        label="Guest" 
        image={GuestButtonImg} 
        color="#33FF33" 
        onClick={() => handleButtonClick('Guest')}
      />
    </div>
  );
}

export default FirstPage;
