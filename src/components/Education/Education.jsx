// Education.jsx

import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-details">
        <div className="education-item">
            <h3>Shirushti Vidhyalaya Mat Hr Sec School</h3>
            <p>10th</p>
            <p>Graduated: April 2019</p>
          </div>
          <div className="education-item">
            <h3>CCMA Govt Girls Hr Sec School</h3>
            <p>Bio-Maths</p>
            <p>Graduated: March 2021</p>
          </div>
          <div className="education-item">
            <h3>Karpagam Institute of Technology</h3>
            <p>Information Technology</p>
            <p>Expected Graduation: June 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
