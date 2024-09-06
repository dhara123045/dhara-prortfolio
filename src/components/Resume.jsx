import React from 'react';
import html from '../asset/html.png';
import react from '../asset/react.png';
import bootstrap from '../asset/bootstrap-framework.png';
import '../App.css';


const Resume = () => {
  return (
    <div className="container">
      <h6 style={{ color: '#7ca8d4', textAlign: 'center' }}>My Resume</h6>
      <h1 className="display-4 text-center mb-5">Academic knowledge and hands-on expertise</h1>
      
      {/* Education and Experience Section */}
      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-4">Education</h2>
          <div className="timeline">
            <div className="event mb-3">
              <div className="date">2023 - 2025</div>
              <div className="font-weight-bold">VANITA VISHRAM WOMEN'S UNIVERSITY</div>
              <div className="text-light">SCHOOL OF SCIENCE AND TECHNOLOGY</div>
            </div>
            <div className="event mb-3">
              <div className="date">2021 - 2022</div>
              <div className="font-weight-bold">AKSHAR JYOTI HIGHER SECONDARY SCHOOL</div>
              <div className="text-light">H.S.C</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Experience</h2>
          <div className="timeline">
            <div className="event mb-3">
              <div className="date">2023 Aug - Present</div>
              <div className="font-weight-bold">Front-end Developer</div>
              <div className="text-light">Tatva Tech</div>
            </div>
          </div>
        </div>
      </div>

      {/* Web Development Stack Section */}
      <div className="text-center my-5">
        <h1>Web Development Stack</h1>
        <div className="stack d-flex justify-content-center flex-wrap">
          <div className="item mx-3">
            <img src={html} alt="HTML5 Logo" style={{ height: '100px' }} />
            <h3>Html</h3>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="item mx-3">
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-css3-3d-logo-download-in-png-blend-fbx-gltf-file-formats--html-language-programming-brand-vol-1-pack-logos-3640300.png" alt="CSS3 Logo" style={{ height: '100px' }} />
            <h3>CSS</h3>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="item mx-3">
            <img src={bootstrap} alt="Bootstrap Logo" style={{ height: '100px' }} />
            <h3>Bootstrap</h3>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="item mx-3">
            <img src={react} alt="React Logo" style={{ height: '100px' }} />
            <h3>React.js</h3>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
        </div>
      </div>


    </div>
  );
};

export default Resume;
