import React from 'react';
import dh from '../asset/dhara.jpg';
import Portfolio from './Portfolio';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';

function Home() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6"><br/><br/><br/><br/>
          <h2>I Am</h2>
          <h1 className="display-4">Front-end Developer</h1>
          <p>
            I am a web developer, proficient in coding and maintaining websites
            to ensure functionality and responsiveness.
          </p>
          <div className="buttons mt-4">
            
            <a href="/cv.pdf" download className="btn btn-outline-secondary me-3">
              Download CV  
            </a>
            <button className="btn btn-secondary">See Projects</button>
          </div>
        </div>

        {/* <div className="col-md-4 text-end">
          <img src={dh} alt="Developer" className="img-fluid rounded-circle" />
        </div> */}


      </div><br/><br/><br/><br/><br/><br/>
      <Portfolio/><br/><br/><br/><br/>
      <About/><br/><br/><br/>
      <Resume/><br/><br/><br/>
      <Contact/><br/><br/><br/>
    </div>
    
    
  );
}

export default Home;
