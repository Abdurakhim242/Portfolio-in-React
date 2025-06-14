import "./App.css";
import logoImg from "./images/logo.png";
import soonImg from "./images/soon.png";
import userImg from "./images/image.png";
import calculatorImg from "./images/calculator.png";
import tictactoe from "./images/tic-tac-toe.png";
import modme from "./images/modme.png";

import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

const App = ({ info }) => {
  const [activeTab, setActiveTab] = useState("skills");

  const data = Object.fromEntries(
    (info || []).map((item) => [item.title.toLowerCase(), item.value])
  );

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  console.log("INFO:", info);
  console.log("DATA:", data);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div class="services-list fade-in">...</div>

      <div id="header">
        <div className="container">
          <nav>
            <img src={logoImg} alt="Logo" className="Logo" />
            <ul>
              <li>
                <Link to="header" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="portfolio" smooth={true} duration={500}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
              <button onClick={toggleTheme} className="theme-toggle">
                {isDarkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
            </ul>
          </nav>
          <div className="header-text">
            <p>Frontend Developer</p>
            <h1>
              Hi, I'm <span>{data.name}</span>
              <br />
              From {data.country}
            </h1>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={userImg} alt="User" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>
                Hi! I’m a {data.age}-year-old beginner front-end developer
                passionate about creating websites and web applications. I study
                at {data.education} and have experience with {data.skills}. I
                enjoy working on small projects and constantly improving my
                skills. My goal is to grow as a developer and gain real-world
                experience in web development.
              </p>

              <div className="tab-titles">
                <p
                  className={`tab-links ${
                    activeTab === "skills" ? "active-link" : ""
                  }`}
                  onClick={() => opentab("skills")}
                >
                  Skills
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "experience" ? "active-link" : ""
                  }`}
                  onClick={() => opentab("experience")}
                >
                  Experience
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "education" ? "active-link" : ""
                  }`}
                  onClick={() => opentab("education")}
                >
                  Education
                </p>
              </div>

              <div
                className={`tab-contents ${
                  activeTab === "skills" ? "active-tab" : ""
                }`}
              >
                <ul>
                  <li>
                    <span>Front-End</span>
                    <br />
                    UI/UX basics
                  </li>
                  <li>
                    <span>Web Development</span>
                    <br />
                    Responsive Design
                  </li>
                  <li>
                    <span>Languages</span>
                    <br />
                    {data.skills}
                  </li>
                </ul>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "experience" ? "active-tab" : ""
                }`}
              >
                <ul>
                  <li>
                    <span>2025</span>
                    <br />
                    Developed small projects, including a Tic-Tac-Toe game using
                    HTML, CSS, and JavaScript.
                  </li>
                  <li>
                    <span>2024</span>
                    <br />
                    Built responsive web pages with adaptive layouts
                  </li>
                  <li>
                    <span>2024-2025</span>
                    <br />
                    Practicing UI/UX basics and improving JavaScript skills
                  </li>
                </ul>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "education" ? "active-tab" : ""
                }`}
              >
                <ul>
                  <li>
                    <span>202X - Present</span>
                    <br />
                    {data.education}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="services">
        <div className="container">
          <h1 className="sub-title">My Services</h1>
          <div className="services-list">
            <div>
              <i className="fa-solid fa-code"></i>
              <h2>Website layout development</h2>
              <p>HTML, CSS responsive design</p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <i className="fa-solid fa-crop-simple"></i>
              <h2>Small JavaScript projects</h2>
              <p>Tic-Tac-Toe, Calculator, Games</p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <i className="fa-solid fa-palette"></i>
              <h2>UI/UX Design Basics</h2>
              <p>Design concepts and user experience</p>
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Portfolio</h1>
          <div className="work-list">
            <div className="work">
              <img src={tictactoe} alt="Tic Tac Toe" />
              <div className="layer">
                <h3>Tic-Tac-Toe Game</h3>
                <p>
                  Developed a fully functional Tic-Tac-Toe game with JavaScript.
                </p>
                <a
                  href="https://github.com/yourusername/tic-tac-toe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={calculatorImg} alt="Calculator" />
              <div className="layer">
                <h3>Calculator</h3>
                <p>Simple calculator built using JavaScript.</p>
                <a
                  href="https://github.com/yourusername/calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={modme} alt="IT TAT modme (demo)" />
              <div className="layer">
                <h3>IT TAT modme (demo)</h3>
                <p>Simple calculator built using React.</p>
                <a
                  href="https://github.com/yourusername/calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="btn">
            See More
          </a>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" style={{ padding: "50px 0" }}>
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}
          >
            <div
              className="contact-left"
              style={{ flexBasis: "35%", color: "#ababab" }}
            >
              <h1 className="sub-title">Contact Me</h1>
              <p>
                <i className="fa-solid fa-phone"></i> {data.phone}
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i> {data.email}
              </p>
              <p>
                <i className="fa-solid fa-location-dot"></i> {data.country}
              </p>
              <div className="social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="contact-right" style={{ flexBasis: "60%" }}>
              <form>
                <input
                  className="nameInp"
                  type="text"
                  placeholder="Name"
                  required
                />
                <input
                  className="emailInp"
                  type="email"
                  placeholder="Email"
                  required
                />
                <textarea placeholder="Message" rows="6" required></textarea>
                <button className="btn btn2" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© 2025 {data.name}. All rights reserved.</p>
      </div>
    </>
  );
};

export default App;
// portfolio