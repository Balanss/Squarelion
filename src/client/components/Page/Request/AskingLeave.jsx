import React, { useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { collection, doc, setDoc } from 'firebase/firestore'; 
import { db } from '../../../Firebase';


Modal.setAppElement('#root');

export default function AskingLeave({user}) {
    const [requestType, setRequestType] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

    const handleSubmit = async (event) => {
      if (!fromDate || !toDate) {
        toast.error('Please fill in all fields');
        return;
      }
      event.preventDefault();
      setModalIsOpen(false);
      toast.success("Your request has been submitted");
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1; // JavaScript months are 0-based


const docRef = collection(db, 'Request');
const colRef = doc(docRef, `${user}`);

setDoc(colRef, {
  [`${day}/${month}`]: {
    from: fromDate,
    to: toDate,
    type: requestType,
    user: user
  }
}, { merge: true });

    };

    return (
        <div className="flex items-center justify-center h-screen">
             <ToastContainer position='top-center' />
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <button type="button" onClick={() => { setRequestType('Leave'); setModalIsOpen(true); }} className="mb-4 p-2 bg-blue-500 text-white rounded">Request Leave</button>
                <button type="button" onClick={() => { setRequestType('WFH'); setModalIsOpen(true); }} className="mb-4 p-2 bg-green-500 text-white rounded">Request WFH</button>
                <button type="submit" className="p-2 bg-red-500 text-white rounded">Submit</button>
            </form>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <div className='flex flex-col justify-center items-center gap-5'>
                <h2>Confirm Request</h2>
                <p>Are you sure you want to request {requestType}?</p>

                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 ">
        <label>
          From:
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        </label>
        <label className='ml-5'>
          To:
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)}  />
        </label>
      </form>


                <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Yes</button>
                <button onClick={() => setModalIsOpen(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">No</button>
           

                </div>
                 </Modal>
        </div>
    );
}

