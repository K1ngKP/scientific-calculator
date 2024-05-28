import React from 'react';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator'
import EquationSolver from './components/EquationSolver';
const App = () => {
  return (
    <Router>
      
      <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/equation-solver/*" element={<EquationSolver />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
