import React from 'react'
import { prodata } from '../models'

const Projects = () => {
  return (
    <div className='section'>
      <p className='sechead'>Projects</p>
      <ul style={{flexDirection:'column'}}>
        {prodata.map((data,index)=>(
          <div className='con'>
            <p className='eduname'>{data.name}</p>
            <p className='prodesc'><span style={{fontWeight:600,fontSize:14}}>Description: </span>{data.desc}</p>
            <ul>
              {data.tech.map((item,idx)=>(
                <li key={idx} className='tech'>{item}</li>
              ))}
            </ul>
            <button className='cv' style={{marginTop:5,padding:10,width:'max-content'}}><a>View Site</a></button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Projects