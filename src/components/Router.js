import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Team from './Team';
import Carrer from './Carrer';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Pricing from './Pricing';
import Contact from './Contacts';
import Login from './Login';




const Router = () => {
  
  
  return (
  
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about/:id" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/carrer" element={<Carrer />} />
      <Route path="/dashboard/:email" element={<Dashboard />} />
      <Route path="/profile/:name" element={<Profile />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      

    </Routes>
   
  )
}

export default Router