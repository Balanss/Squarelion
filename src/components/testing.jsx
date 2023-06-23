import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import Items from '../Items'




const Modal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h3>Modal Content</h3>
          <p>This is the content of the modal.</p>
        </div>
      </div>
    )
  );
};

export default function Home() {


  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (

    <>
  

  <div>
      <h2>Modal Example</h2>
      
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
   
    {Items.map((item,i) => (
      <div key={i}>
         {item.title}
         <Link to={`/profile/${item.id}`}> press me </Link> 
       </div>
    ))}
   </>
  )
}
