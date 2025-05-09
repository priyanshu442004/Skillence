import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Internship from './Pages/Internship/Internship';
import Hackathon from './Pages/Hackathon/Hackathon';
import Contact from './Pages/Contact-Us/Contact';
import About from './Pages/About-Us/About';
const App = () => {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    <Footer/>
    </Router>
    </div>
  );
};

export default App;
