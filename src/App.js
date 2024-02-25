import React from 'react';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <SplashScleen />
    </div>
  );
}

function SplashScleen() {
  return (
    <div id="splash-scleen" className="splash-scleen--black flex--container">
      <h1>HayashiTomoya</h1>
    </div>
  );
}

export default App;
