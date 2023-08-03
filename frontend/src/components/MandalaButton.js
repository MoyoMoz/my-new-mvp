import React from 'react';
import '../styles/MandalaButton.css';

function MandalaButton({label, image, color, onClick}) {
  return (
    <button className="mandala-btn" style={{backgroundImage: `url(${image})`}} onClick={onClick}>
      <span className="btn-label" style={{color: color}}>{label}</span>
    </button>
  );
}

export default MandalaButton;
