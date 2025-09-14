import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTop from './components/UI/BackToTop';
import ThreeBackground from './components/3D/ThreeBackground';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-x-hidden">
        <ThreeBackground />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <Team />
                <Projects />
                <Contact />
              </>
            } />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;