import React from 'react'
import Hero from './pages/Hero.jsx'
import About from './pages/About..jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import ExperienceEducation from './pages/Exp&Edu.jsx'
import Contact from './pages/Contact.jsx'

const App = () => {
  return (
<>
<Hero/>
<div id='about'>
<About/>
</div>
<ExperienceEducation/>
<Skills/>
<div id='projects'>
<Projects/>
</div>
<div id="contact">
  <Contact />
</div>
</>
  )
}

export default App
