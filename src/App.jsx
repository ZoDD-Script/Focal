import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Socials from './components/Socials';
import { cat1, cat2, cat3, cat4, cat5, cat6 } from './assets/img';

// 05719F

function App() {
  const portfolioLinks = [
    {
      title: 'Switches & Sockets',
      caption: 'Illustration',
      image: cat1
    },
    {
      title: 'Drop Light',
      caption: 'Graphic Design',
      image: cat2
    },
    {
      title: 'Panel Lights',
      caption: 'Identity',
      image: cat3
    },
    {
      title: 'Outdoor Lights',
      caption: 'Branding',
      image: cat4
    },
    {
      title: 'Strip Lights',
      caption: 'Website Design',
      image: cat5
    },
    {
      title: 'Ceiling Mounted Lights',
      caption: 'Photography',
      image: cat6
    },
  ]

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Services />
      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>
      <About />
      <Team />
      <Socials />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
