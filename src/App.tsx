import React from 'react';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsModern from './components/SkillsModern';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      <Background3D />
      <Navbar />
      <Hero />
      <About />
      <SkillsModern />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;