import React from 'react';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import A1 from '../asset/about.jpg'

function About() {
  return (
    <div className="container about-container py-5">
      <div className="row">
        <div className="col-md-4 about-image">
          <img
            src={A1}
            alt="About Me"
            className="img-fluid "
          />
        </div>
        <div className="col-md-8 about-content">
        <h6 style={{ color : '#7ca8d4' }}>About Me</h6>
          <h2 style={{ color: '#' }}>My intro</h2>
          
          <p>
            "Hi, I'm Dhara Jada, a passionate Front-End Developer with a keen eye for design and detail. I specialize in building responsive, user-friendly interfaces using the latest front-end technologies. My goal is to create intuitive web experiences that are both functional and beautiful."
          </p>
          <ul className="list-unstyled contact-info mt-4">
            <li className="mb-2">
              <i className="fas fa-user"></i> <span>Name:</span> &nbsp;&nbsp;Dhara Jada
            </li>
            <li className="mb-2">
              <i className="fas fa-phone"></i> <span>Phone:</span>&nbsp; +91 9313604013
            </li>
            <li className="mb-2">
              <i className="fas fa-envelope"></i> <span>Email:</span> &nbsp;&nbsp;dharajada96@email.com
            </li>
          </ul>

          <h3 className="mt-4">My Work</h3>
          <ul className="list-inline interests mt-3">
            <li className="list-inline-item mr-4">
              <i className="fab fa-html5"></i> <span className="ml-1">&nbsp;HTML</span>&nbsp;&nbsp;
            </li>
            <li className="list-inline-item mr-4">
              <i className="fab fa-css3-alt"></i> <span className="ml-1">&nbsp;CSS</span>&nbsp;&nbsp;
            </li>
            <li className="list-inline-item mr-4">
              <i className="fab fa-js"></i> <span className="ml-1">&nbsp;JavaScript</span>&nbsp;&nbsp;
            </li>
            <li className="list-inline-item mr-4">
              <i className="fab fa-react"></i> <span className="ml-1">&nbsp;React</span>&nbsp;&nbsp;
            </li>
          </ul>
        </div>
      </div><br/><br/><br/>

      {/* Services Section */}
      <div className="services py-5">
      <h6 style={{ color: '#7ca8d4', textAlign: 'center' }}>Services</h6>

        <h2 className="text-center">What Can I Do?</h2>
        <div className="row services-grid">
          <div className="col-md-3 service text-center">
            <div className="service-icon">
              <i className="fas fa-palette fa-3x mb-3"></i>
            </div>
            <h3>Web Design</h3>
            <p>
              I create visually appealing and user-centered designs that align with client goals, ensuring a seamless and engaging user experience.
            </p>
          </div>
          <div className="col-md-3 service text-center">
            <div className="service-icon">
              <i className="fas fa-search fa-3x mb-3"></i>
            </div>
            <h3>SEO</h3>
            <p>
              I implement on-page SEO strategies to enhance website visibility and ensure search engines index content effectively.
            </p>
          </div>
          <div className="col-md-3 service text-center">
            <div className="service-icon">
              <i className="fas fa-pencil-ruler fa-3x mb-3"></i>
            </div>
            <h3>UI/UX Design</h3>
            <p>
              Crafting intuitive and interactive interfaces that provide meaningful user experiences is my forte, ensuring smooth user journeys.
            </p>
          </div>
          <div className="col-md-3 service text-center">
            <div className="service-icon">
              <i className="fas fa-laptop-code fa-3x mb-3"></i>
            </div>
            <h3>Web Development</h3>
            <p>
              From responsive layouts to dynamic functionality, I develop robust websites using modern technologies like React and JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
