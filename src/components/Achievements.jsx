import { useState } from 'react';
import { achievedata } from '../models';
import Modal from './Modal';

const Achievements = () => {
  const [src, setSrc] = useState('');

  return (
    <div className="section">
      <p className="sechead">Achievements</p>
      <div id="certificates" style={{width:'100%'}}>
        {achievedata.map((data, index) => (
          <div
            className="con"
            style={{ flexDirection: 'row', gap: 10, width:'100%',cursor:'pointer' }}
            key={index}
            onClick={() => setSrc(data.img)}
          >
            <div>
              <p className="eduname">{data.name}</p>
              <p className="light" style={{ fontWeight: 600 }}>
                {data.org}
              </p>
              <p className="light">{data.issue}</p>
            </div>
          </div>
        ))}
      </div>
      {src.length > 0 && <Modal src={src} setSrc={setSrc} />}
    </div>
  );
};

export default Achievements;
