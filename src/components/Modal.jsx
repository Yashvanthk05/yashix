import { IoClose } from 'react-icons/io5';

const Modal = ({ src,setSrc }) => {
  return (
    <div className="modal">
      <span className='modal-title'>{src}</span>
      <button className='modal-close' onClick={()=>setSrc('')}>
        <IoClose size={26} />
      </button>
      <img src={src} className='modalimg' alt={src}/>
    </div>
  );
};

export default Modal;
