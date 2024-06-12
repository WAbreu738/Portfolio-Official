import React from 'react';
import GlobalStyles from './GlobalStyle'; // Import the global styles
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      {/* <GlobalStyles /> */}
      <Hero />
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
