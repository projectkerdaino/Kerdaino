
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import System from './pages/System';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/system' element={<System />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}
