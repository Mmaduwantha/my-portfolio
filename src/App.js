import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Home from './pages/Home';
import Skill from './pages/Skill';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Skill' element={<Skill />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
