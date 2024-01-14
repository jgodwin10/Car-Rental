import { useState } from 'react'
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from "./Pages/Home"
import About from './Pages/About';
import Contact from './Pages/Contact';
import Models from './Pages/Models';
import Testimonials from './Pages/Testimonials';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
