import React from 'react'
import About from './About'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'

const Content = () => {
  return (
    <div id='content'>
        <About/>
        <hr/>
        <Education/>
        <hr/>
        <Experience/>
        <hr />
        <Projects/>
    </div>
  )
}

export default Content