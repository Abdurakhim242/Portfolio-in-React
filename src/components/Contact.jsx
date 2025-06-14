import React from 'react';
import './Contact.css';

const Contact = () => (
  <div id="contact">
    <div className="container">
      <div className="row">
        <div className="contact-left">
          <h1 className="sub-title">Contact Me</h1>
          <p><i className="fa-solid fa-paper-plane"></i> kingsoft200709@icloud.com</p>
          <p><i className="fa-solid fa-square-phone"></i> +998 (91)187-02-42</p>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter-square"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
        <div className="contact-right">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="6" placeholder="Your Message" />
            <button type="submit" className="btn btn2">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>Copyright Abdurakhim. All rights reserved</p>
    </div>
  </div>
);

export default Contact;
