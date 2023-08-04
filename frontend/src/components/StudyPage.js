import React from 'react';
import { useNavigate } from 'react-router-dom';
import MandalaButton from './MandalaButton';
import StudyButtonImg from '../images/StudyButton.svg';
import BuildButtonImg from '../images/BuildButton.svg';
import PracticeButtonImg from '../images/PracticeButton.svg';

function StudyPage() {
  const navigate = useNavigate();

  const handleButtonClick = (label) => {
    switch (label) {
      case 'Study':
        navigate('/study');
        break;
      case 'Build':
        navigate('/build');
        break;
      case 'Practice':
        navigate('/practice');
        break;
      default:
        break;
    }
  };

  return (
    <div className="study-page">
      <MandalaButton 
        label="Study" 
        image={StudyButtonImg} 
        color="#9933FF" 
        onClick={() => handleButtonClick('Study')}
      />
      <MandalaButton 
        label="Build" 
        image={BuildButtonImg} 
        color="#33FF33" 
        onClick={() => handleButtonClick('Build')}
      />
      <MandalaButton 
        label="Practice" 
        image={PracticeButtonImg} 
        color="#33FFFF" 
        onClick={() => handleButtonClick('Practice')}
      />
    </div>
  );
}

export default StudyPage;
