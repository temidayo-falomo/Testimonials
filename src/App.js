import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home';
import Testimonial from './pages/testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testimonial" element={<Testimonial />} />
      </Routes>
    </div>
  );
}

export default App;
