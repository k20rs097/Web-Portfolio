import React from 'react';
import './scss/App.scss';
import Header from './components/header';
import Footer from './components/footer';
import SkillSheet from './components/skillSheet';

export default function App() {
  return (
    <div className="App flex-container__direction--column">
      <Header />
      <SplashScreen />
      <Content />
      <Footer />
    </div>
  );
}

const Content = () => {
  return (
    <div className="content">
        <SkillSheet/>
    </div>
  );
}

const SplashScreen = () => {
  return (
    <section id="splash-screen" className="splash-screen--bg-black">
        <h1 id="name" className="splash-titles margin--auto">Hayashi Tomoya</h1>
        <h1 id="title" className="splash-titles margin--auto">Web-Portfolio</h1>
    </section>
  );
}