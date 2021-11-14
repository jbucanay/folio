import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Blog from './components/blog/Blog'
import Contact from "./components/contact/Contact";
import Home from './components/home/Home'
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer"

function App() {
  return (

<BrowserRouter>

  <Nav />

  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <Footer />
</BrowserRouter>
  );
}

export default App;
