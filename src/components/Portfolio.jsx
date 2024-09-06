import React from 'react';
import p1 from '../asset/Screenshot 2024-09-03 181835.png';
import p2 from '../asset/Screenshot 2024-09-03 182334.png';
import p3 from '../asset/Screenshot 2024-09-03 182812.png';


const Portfolio = () => {
  return (
    <div className="portfolio container">
      <h1 className="text-center my-5">See my work</h1>
      
      {/* Filters Section */}
      <div className="filters text-center mb-4">
        <button className="btn btn-primary mx-2">All</button>
        <button className="btn btn-secondary mx-2">HTML</button>
        <button className="btn btn-secondary mx-2"> CSS</button>
        <button className="btn btn-secondary mx-2">JavaScript</button>
        <button className="btn btn-secondary mx-2">React</button>
        <button className="btn btn-secondary mx-2">UI/UX</button>

      </div>

      {/* Projects Section */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="project card h-100">
            <img
              src={p1}
              alt="Mobile Travel App"
              className="card-img-top"
            />
            {/* <div className="card-body">
              <h2 className="card-title">Tatva Tech</h2>
              <p className="card-text"></p>
            </div> */}
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="project card h-100">
            <img
              src={p2}
              alt="Music App"
              className="card-img-top"
            />
            {/* <div className="card-body">
              <h2 className="card-title">Music App</h2>
              <p className="card-text">Musics</p>
            </div> */}
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="project card h-100">
            <img
              src={p3}
              alt="Music App"
              className="card-img-top"
            />
            {/* <div className="card-body">
              <h2 className="card-title">Music App</h2>
              <p className="card-text">Musics</p>
            </div> */}
          </div>
        </div>

        
      </div>

      <div className="text-center my-5">
        <button className="btn btn-primary">Load More</button>
      </div>
    </div>
  );
};

export default Portfolio;
