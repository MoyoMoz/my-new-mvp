import React from 'react';
import '../styles/MandalaButton.css';
import { useNavigate } from 'react-router-dom';
import LogInButtonImg from '../images/LogInButton (1).svg';
import BuildButtonImg from '../images/BuildButton.svg';
import PracticeButtonImg from '../images/PracticeButton.svg';
import StudyButtonImg from '../images/StudyButton.svg';
import LogOutButtonImg from '../images/LogOutButton.svg';


//  MandalaButton component
function MandalaButton({label, image, color, onClick}) {
  let buttonImg;
  switch (label) {
    case 'Log In':
      buttonImg = LogInButtonImg;
      break;
    case 'Build':
      buttonImg = BuildButtonImg;
      break;
    case 'Practice':
      buttonImg = PracticeButtonImg;
      break;
    case 'Study':
      buttonImg = StudyButtonImg;
      break;
    case 'Log Out':  // Use a default button for Log Out
      buttonImg = LogOutButtonImg;
      break;
    default:
      buttonImg = '';  // Add a default case for safety
      break;
  }

  return (
    <button className="mandala-btn" style={{backgroundImage: `url(${buttonImg})`}} onClick={onClick}>
      <span className="btn-label" style={{color: color}}>{label}</span>
    </button>
  );
}

export default MandalaButton;
