import React from 'react'
import { aboutdata } from '../models'

const About = () => {
  return (
    <div className='section'>
        <p className='sechead'>About me</p>
        <ul style={{flexDirection:"column",gap:5}}>
            {aboutdata.map((data,index)=>(
                <li key={index}><b>-</b> {data}</li>
            ))}
        </ul>
    </div>
  )
}

export default About