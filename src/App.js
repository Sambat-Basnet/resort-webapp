import React from 'react';
import './App.css';

import Nav from './components/Nav'
import Hero from './components/Hero'
import Calendar from './components/Calendar';
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Hero/>
      <Calendar/>
      <Welcome/>
    </div>
  );
}

export default App;
