import React from 'react'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ExperienceEducation from './pages/Exp&Edu'
import Contact from './pages/Contact'

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
