import React from 'react'
import { edudata } from '../models'

const Education = () => {
  return (
    <div className='section'>
      <p className='sechead'>Education</p>
      <ul style={{ flexDirection: "column", alignItems: "start", minWidth: '100%' }}>
        {edudata.map((data, index) => (
          <li key={index} style={{ width: '100%' }}>
            <div className='con' style={{ display: 'flex', gap: 10, width: '100%' }}>
              {/* <a href={data.link}><img src={data.logo} id='eduicon' /></a> */}
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <a className='eduname' href={data.link}>{data.name}</a>
                  <span className='light'>{data.from} - {data.to}</span>
                </div>
                <p className='eduname'>{data.addr}</p>
                <p className='light' style={{fontWeight:600}} >{data.degree}</p>
                <p className='light'>Grade: {data.grade} {data.metric}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Education
