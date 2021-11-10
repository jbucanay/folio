import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import About from './components/about /About'
import Work from './components/work/Work'
import Blog from './components/blog/Blog'
import Contact from "./components/contact/Contact";
import Home from './components/home/Home'
import Nav from "./components/navbar/Nav";
import gilbert from './gilbert.png'

function App() {
  return (

<BrowserRouter>

  <Nav />

  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />} />
    <Route path="/work" element={<Work />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
