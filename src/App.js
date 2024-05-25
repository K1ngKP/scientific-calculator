import React from 'react';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator'
const App = () => {
  return (
    <Router>
      
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
