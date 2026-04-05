import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Content from './components/Content/Content';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Stats />
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Content />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
