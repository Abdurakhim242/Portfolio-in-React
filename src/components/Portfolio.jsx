import React from 'react';
import './Portfolio.css';
import img from "./src/assest/soon.png"
const works = [
  { title: "Social Media App", img: {img} },
  { title: "Music App", img: {img} },
  { title: "Online Shopping App", img: {img} },
];

const Portfolio = () => (
  <div id="portfolio" className="container">
    <h1 className="sub-title">My Works</h1>
    <div className="work-list">
      {works.map((work, index) => (
        <div className="work" key={index}>
          <img src={work.img} alt={work.title} />
          <div className="layer">
            <h3>{work.title}</h3>
            <p>Lorem ipsum dolor sit amet...</p>
            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      ))}
    </div>
    <a href="#" className="btn">See More</a>
  </div>
);

export default Portfolio;
