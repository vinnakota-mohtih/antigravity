import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="app">
      <div className="liquid-bg">
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <Analytics />
    </div >
  );
}

export default App;
