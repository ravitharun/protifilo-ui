// import React from 'react';
import Navbar from "./Navbar";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

function Skills() {
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5" data-aos="fade-up">
        <h3>Skills & Technologies</h3>
        <div className="skill-container mt-4">
          <div className="mb-3">
            <h5>HTML</h5>
            <ProgressBar animated now={90} label={`${90}%`} />
          </div>
          <div className="mb-3">
            <h5>CSS</h5>
            <ProgressBar animated now={80} label={`${80}%`} />
          </div>
          <div className="mb-3">
            <h5>JavaScript</h5>
            <ProgressBar animated now={85} label={`${85}%`} />
          </div>
          <div className="mb-3">
            <h5>React</h5>
            <ProgressBar animated now={75} label={`${75}%`} />
          </div>
          <div className="mb-3">
            <h5>Bootstrap</h5>
            <ProgressBar animated now={70} label={`${70}%`} />
          </div>
          <div className="mb-3">
            <h5>Git</h5>
            <ProgressBar animated now={65} label={`${65}%`} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
