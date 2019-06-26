import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Slider from './components/Slider/slider';
import Selling from './components/sale/selling';


function App() {
  return (
    <div className="App">

      <Navbar />
      <Slider />
      <Selling />
    
      
    </div>
  );
}

export default App;
