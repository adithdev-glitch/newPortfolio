import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Hero from './pages/Hero.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import ExperienceEducation from './pages/Exp&Edu.jsx'
import Contact from './pages/Contact.jsx'
import AllProjects from './pages/AllProjects.jsx'

function ScrollToAnchorOrTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <div id="about">
        <About />
      </div>
      <ExperienceEducation />
      <Skills />
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToAnchorOrTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
