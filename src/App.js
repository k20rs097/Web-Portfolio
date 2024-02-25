import React from 'react';
import './scss/App.scss';

export default function App() {
  return (
    <div className="App">
      <SplashScreen />
    </div>
  );
}

function SplashScreen() {
  return (
    <section id="splash-screen" className="splash-screen--bg-black">
        <h1 id="name" className="splash__titles margin--auto">Hayashi Tomoya</h1>
        <h1 id="title" className="splash__titles margin--auto">Web-Portfolio</h1>
    </section>
  );
}