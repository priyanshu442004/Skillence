import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
};

export default App;
