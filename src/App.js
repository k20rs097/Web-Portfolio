import React from 'react';
import './scss/App.scss';

export default function App() {
  return (
    <div className="App">
      <Header />
      <SplashScreen />
      <Content />
      <Footer />
    </div>
  );
}

const Content = () => {
  return (
    <div className="content align--centerX">
        <SkillSheet />        
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
      <SkillCard
        language="HTML"
        skillLevel={3}
        about=""
      />
    </div>
  );
}

const SkillCard = ({ language, languageIcon, skillLevel, about }) => {
  const solidStars = Array(skillLevel).fill().map((_, index) => (
    <i key={`solid-star-${index}`} className="fa-solid fa-star"></i>
  ));

  const regularStars = Array(5 - skillLevel).fill().map((_, index) => (
    <i key={`regular-star-${index}`} className="fa-regular fa-star"></i>
  ));

  return (
    <div className="skill-card">
      <div className="skill-info">
        <h1 className="skill-name">{language}</h1>
        <p className="skill-about">{about}</p>
        <div className="stars">
          {solidStars}
          {regularStars}
        </div>
      </div>
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
              <li className="menu-item"><a href="">経歴</a></li>
              <li className="menu-item"><a href="">研究室</a></li>
              <li className="menu-item"><a href="">自主開発</a></li>
          </ul>
      </nav>
    </header>
  );
}

const Footer = () => {
  return (
    <footer>
      <div id="scroll-to-top-button" className="scroll-button align--centerX">
          <i className="fa-regular fa-circle-up"></i>
      </div>
      <div className="copyright">
          <p className="copyright-text">(c) 2024 Hayashi Tomoya All Rights Reserved.</p>
      </div>
    </footer>
  );
}