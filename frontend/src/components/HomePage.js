import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogInButtonImg from '../images/LogInButton (1).svg';
import BuildButtonImg from '../images/BuildButton.svg';
import PracticeButtonImg from '../images/PracticeButton.svg';
import StudyButtonImg from '../images/StudyButton.svg';
import LogOutButtonImg from '../images/LogOutButton.svg';
import GuestButtonImg from '../images/GuestButton.svg';

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = (label) => {
    switch (label) {
      case 'Study':
        navigate('/study');
        break;
      case 'Practice':
        navigate('/practice');
        break;
      case 'Build':
        navigate('/build');
        break;
      default:
        break;
    }
  };

  return (
    <div className="home-page">
      <MandalaButton 
        label="Study" 
        image={StudyButtonImg} 
        color="#9933FF" 
        onClick={() => handleButtonClick('Study')}
      />
      <MandalaButton 
        label="Practice" 
        image={PracticeButtonImg} 
        color="#33FF33" 
        onClick={() => handleButtonClick('Practice')}
      />
      <MandalaButton 
        label="Build" 
        image={BuildButtonImg} 
        color="#33FFFF" 
        onClick={() => handleButtonClick('Build')}
      />
    </div>
  );
}

export default HomePage;
