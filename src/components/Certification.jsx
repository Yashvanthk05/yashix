import { useState } from 'react';
import { certdata } from '../models';
import Modal from './Modal';

const Certification = () => {
  const [src, setSrc] = useState('');

  return (
    <div className="section">
      <p className="sechead">Certifications</p>
      <div id="certificates" style={{width:'100%'}}>
        {certdata.map((data, index) => (
          <div className='con' style={{flexDirection:'row',gap:10,cursor:'pointer',width:'100%'}} key={index} onClick={()=>setSrc(data.img)}>
            <img src={data.img} className='certimg' alt={data.name}/>
            <div>
              <p className='eduname'>{data.name}</p>
              <p className='light' style={{fontWeight:600}}>{data.org}</p>
              <p className='light'>{data.issue}</p>
            </div>
          </div>
        ))}
      </div>
      {src.length>0 && <Modal src={src} setSrc={setSrc}/>}
    </div>
  );
};

export default Certification;
