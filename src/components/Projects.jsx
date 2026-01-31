import React from 'react';
import { prodata, socialdata } from '../models';

const Projects = () => {
  return (
    <div className="section">
      <p className="sechead" style={{display:'flex',gap:10,alignItems:'center'}}>Projects<a className='light' style={{fontSize:14}} href={socialdata[2].link}>View more</a></p>
      <ul style={{ flexDirection: 'column' }}>
        {prodata.map((data, index) => (
          <div className="con">
            <p className="eduname">{data.name}</p>
            <p className="prodesc">
              <span style={{ fontWeight: 600, fontSize: 14 }}>Description: </span>
              {data.desc}
            </p>
            <ul style={{display:'flex',flexWrap:'wrap'}}>
              {data.tech.map((item, idx) => (
                <li key={idx} className="tech">
                  {item}
                </li>
              ))}
            </ul>
            <button className="cv" style={{ marginTop: 5, padding: 10, width: 'max-content' }}>
              <a href={data.link}>View Site</a>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
