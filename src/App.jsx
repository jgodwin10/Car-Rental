import { useState } from 'react'
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import "./App.css"


function App() {
  return (
    <>
     <Navbar />
     <Outlet />
    </>
  )
}

export default App;
