import React from 'react';
import './scss/App.scss';

export default function App() {
  return (
    <div className="App">
      <Header />
      <SplashScreen />
      <Footer />
    </div>
  );
}

const SplashScreen = () => {
  return (
    <section id="splash-screen" className="splash-screen--bg-black">
        <h1 id="name" className="splash__titles margin--auto">Hayashi Tomoya</h1>
        <h1 id="title" className="splash__titles margin--auto">Web-Portfolio</h1>
    </section>
  );
}

const SkillSheet = () => {
  return (
    <div className="skill-sheet">

    </div>
  );
}

const SkillCard = () => {
  return (
    <div className="skill-card">

    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1 id="title" className="header-title"><a href="#splash-screen">Web-Portfolio</a></h1>
      <nav className="navbar">
          <ul className="menu-group">
              <li className="menu-item"><a href="#hero">HOME</a></li>
              <li className="menu-item"><a href="#">経歴</a></li>
              <li className="menu-item"><a href="#">研究室</a></li>
              <li className="menu-item"><a href="#">自主開発</a></li>
          </ul>
      </nav>
    </header>
  );
}

const Footer = () => {
  return (
    <footer>
      <div className="scroll-to-top-button align--center" id="scroll-to-top-button">
          <i className="fa-regular fa-circle-up"></i>
      </div>
      <div className="copyright">
          <p className="copyright-text">(c) 2024 Hayashi Tomoya All Rights Reserved.</p>
      </div>
    </footer>
  );
}