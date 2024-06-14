import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';
import Certificate from './components/Certificate';

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">
      <Hero />
      <Navbar />
      <About />
      <Technologies />
      <Certificate />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
