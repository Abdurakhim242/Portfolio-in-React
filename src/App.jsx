import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Tabs from './components/Tabs.jsx';
import img from "./assest/soon.png"

function App() {
  return (
    <div>
      <section id="about" className="container">
        <h1 className="sub-title">About Me</h1>
        <Tabs />
      </section>

      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
