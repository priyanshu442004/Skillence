import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Internship from './Pages/Internship/Internship';
import Hackathon from './Pages/Hackathon/Hackathon';
import Contact from './Pages/Contact-Us/Contact';
import AboutUs from './Pages/About-Us/AboutUs';
import FAQs from './Pages/FAQ/FAQs';
import PrivacyPolicy from './Pages/Privacy-Policy & Terms/PrivacyPolicy';
import Terms from './Pages/Privacy-Policy & Terms/Terms';
import ScrollToTop from './Components/ScrollToTop';
const App = () => {
  return (
    <div>
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Terms-of-service" element={<Terms />} />
      </Routes>
    <Footer/>
    </Router>
    </div>
  );
};

export default App;
