import React from 'react';
import '../styles/MandalaButton.css';

import LogInButtonImg from '../images/LogInButton.png';
import BuildButtonImg from '../images/build-button-frame-1.svg';
import PracticeButtonImg from '../images/practice-button-frame-2.svg';
import StudyButtonImg from '../images/study-button-frame-1.svg';

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
      buttonImg = '';
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
