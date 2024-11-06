import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import SocialLinks from './components/SocialLinks';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';


function App() {
  

  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <SocialLinks />
    </div>
  );
}

export default App;
