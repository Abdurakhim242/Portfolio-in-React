import "./App.css";
import logoImg from "./images/logo.png";
import logoWhite from "./images/logo-white.png";
import userImg from "./images/image.png";
import calculatorImg from "./images/calculator.png";
import tictactoe from "./images/tic-tac-toe.png";
import modme from "./images/modme.png";

import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const App = ({ info }) => {
  const [activeTab, setActiveTab] = useState("skills");
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const data = Object.fromEntries(
    (info || []).map((item) => [item.title.toLowerCase(), item.value])
  );

  const opentab = (tabname) => setActiveTab(tabname);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const changeLanguage = (lng) => i18n.changeLanguage(lng);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "";
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div id="loader">
        <div className="spinner">Welcome to my Portfolio</div>
      </div>
    );
  }

  return (
    <>
      <div id="header">
        <div className="container">
          <nav>
            <img
              src={isDarkMode ? logoWhite : logoImg}
              alt="Logo"
              className="Logo"
            />
            <div className="menu-toggle" onClick={toggleMenu}>
              <i className="fa fa-bars"></i>
            </div>
            <ul className={menuOpen ? "active" : ""}>
              <li>
                <Link to="header" smooth duration={500}>
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="about" smooth duration={500}>
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="services" smooth duration={500}>
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link to="portfolio" smooth duration={500}>
                  {t("nav.portfolio")}
                </Link>
              </li>
              <li>
                <Link to="contact" smooth duration={500}>
                  {t("nav.contact")}
                </Link>
              </li>
              <button onClick={toggleTheme} className="theme-toggle">
                {isDarkMode ? "🌙 Dark" : "☀️ Light"}
              </button>
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                defaultValue={i18n.language}
              >
                <option value="en">EN</option>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
              </select>
            </ul>
          </nav>
          <div className="header-text">
            <p>{t("header.role")}</p>
            <h1>
              {t("header.greeting")} <span>{data.name}</span>
              <br />
              {t("header.from")} {data.country}
            </h1>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={userImg} alt="User" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">{t("about.title")}</h1>
              <p>
                {t("about.description", {
                  age: data.age,
                  education: data.education,
                  skills: data.skills,
                })}
              </p>

              <div className="tab-titles">
                <p
                  className={`tab-links ${
                    activeTab === "skills" ? "active-link" : ""
                  }`}
                  onClick={() => opentab("skills")}
                >
                  {t("about.skills")}
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "experience" ? "active-link" : ""
                  }`}
                  onClick={() => opentab("experience")}
                >
                  {t("about.experience")}
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "education" ? "active-link" : ""
                  }`}
                  onClick={() => opentab("education")}
                >
                  {t("about.education")}
                </p>
              </div>

              <div
                className={`tab-contents ${
                  activeTab === "skills" ? "active-tab" : ""
                }`}
              >
                <ul>
                  <li>
                    <span>{t("skills.frontend")}</span>
                    <br />
                    UI/UX
                  </li>
                  <li>
                    <span>{t("skills.web")}</span>
                    <br />
                    Responsive
                  </li>
                  <li>
                    <span>{t("skills.languages")}</span>
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
                    {t("experience.proj1")}
                  </li>
                  <li>
                    <span>2024</span>
                    <br />
                    {t("experience.proj2")}
                  </li>
                  <li>
                    <span>2024-2025</span>
                    <br />
                    {t("experience.proj3")}
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

      <div id="services">
        <div className="container">
          <h1 className="sub-title">{t("services.title")}</h1>
          <div className="services-list">
            <div>
              <i className="fa-solid fa-code"></i>
              <h2>{t("services.web")}</h2>
              <p>{t("services.webDesc")}</p>
              <a href="#">{t("learnMore")}</a>
            </div>
            <div>
              <i className="fa-solid fa-crop-simple"></i>
              <h2>{t("services.projects")}</h2>
              <p>{t("services.projectsDesc")}</p>
              <a href="#">{t("learnMore")}</a>
            </div>
            <div>
              <i className="fa-solid fa-palette"></i>
              <h2>{t("services.ui")}</h2>
              <p>{t("services.uiDesc")}</p>
              <a href="#">{t("learnMore")}</a>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">{t("portfolio.title")}</h1>
          <div className="work-list">
            <div className="work">
              <img src={tictactoe} alt="Tic Tac Toe" />
              <div className="layer">
                <h3>{t("portfolio.tttTitle")}</h3>
                <p>{t("portfolio.tttDesc")}</p>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={calculatorImg} alt="Calculator" />
              <div className="layer">
                <h3>{t("portfolio.calcTitle")}</h3>
                <p>{t("portfolio.calcDesc")}</p>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={modme} alt="Modme" />
              <div className="layer">
                <h3>{t("portfolio.modmeTitle")}</h3>
                <p>{t("portfolio.modmeDesc")}</p>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="btn">
            {t("seeMore")}
          </a>
        </div>
      </div>

      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">{t("contact.title")}</h1>
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
                <a href="https://www.facebook.com/share/14r1UsdT68/?mibextid=wwXIfr">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/abdurakhim.09?igsh=MXhucGFkbTlpbDNnYw%3D%3D&utm_source=qr">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="contact-right">
              <form>
                <input type="text" placeholder={t("contact.name")} required />
                <input type="email" placeholder={t("contact.email")} required />
                <textarea
                  placeholder={t("contact.message")}
                  rows="6"
                  required
                ></textarea>
                <button type="submit" className="btn btn2">
                  {t("contact.send")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          © 2025 {data.name}. {t("copyright")}
        </p>
      </div>
    </>
  );
};

export default App;
