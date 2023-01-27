import React, { useState } from "react";
import "./ProgressBar.css"

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setProgress(progress + 10);
    if (progress >= 50) {
      document.querySelector('.circle-50').classList.add('green');
    }
    if (progress >= 100) {
      document.querySelector('.circle-100').classList.add('green');
    }
  };


  const progressBarStyle = {
    width: `${progress}%`,
    transition: 'width 0.7s ease-in-out',
    background: 'green',
    height: '20px'
  };

  return (
    <div>
      <div className="progress-bar">
        <div className="circle circle-0"></div>
        <div className="circle circle-50"></div>
        <div className="circle circle-100"></div>
        <div className="bar" style={progressBarStyle} />
      </div>
      
      <button onClick={handleClick}>Increase Progress</button>
    </div>
  );

}

export default ProgressBar;

