import React from 'react';
import './scss/App.scss';
import Header from './components/header';
import Footer from './components/footer';
import Profile from './components/profile';
import SkillSheet from './components/skillSheet';

export default function App() {
  return (
    <div className="App flex-container__direction--column background">
      <Header />
      <SplashScreen />
      <Content />
      <Footer />
    </div>
  );
}

const Content = () => {
  return (
    <section className="content">
      <Profile />
      <SkillSheet/>
    </section>
  );
}

const SplashScreen = () => {
  return (
    <div id="splash-screen" className="splash-screen">
        <h1 id="name" className="splash-titles margin--auto">Tomoya's Portfolio</h1>
    </div>
  );
}