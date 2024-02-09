import React, { useState ,useContext,useEffect} from 'react';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { collection, doc, increment, setDoc, updateDoc } from 'firebase/firestore'; 
import { db } from '../../../Firebase';
import LeaveTitle from './LeaveTitle';
import { UserContext } from '../../context/UserContext';
import { set } from 'date-fns';
import ResetWFH from './ResetWFH';



Modal.setAppElement('#root');

export default function AskingLeave() {

  const {pto,wfh,user,uuid} = useContext(UserContext);

    const [requestType, setRequestType] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [updatedPto, setUpdatedPto] = useState(pto);
  const [updatedWfh, setUpdatedWfh] = useState(wfh);



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


       const dcRef = collection(db, 'admin');
       const clRef = doc(dcRef, uuid);

       if (requestType === 'Leave') {
        updateDoc(clRef, {
          pto: increment(-1)
        });

        setUpdatedPto(updatedPto - 1);
       }
        if (requestType === 'WFH') {
          updateDoc(clRef, {
            WFH: increment(-1)
          });    

          setUpdatedWfh(updatedWfh - 1);
        }

setDoc(colRef, {
  [`${day}/${month}`]: {
    from: fromDate,
    to: toDate,
    type: requestType,
    user: user,
    accepted:'',
    uuid:uuid,
    askedOn:`${day}/${month}`
  }
}, { merge: true });

    };




    return (
        <div className="flex items-center flex-col justify-center h-screen">
          <ResetWFH  />

<div>
  <LeaveTitle user={user}  updatedPto={updatedPto} updatedWfh={updatedWfh}/>
</div>


         <section className='mt-20 bg-secondary p-10 w-full rounded-lg border-tertiary border-2 shadow-card2'>
                  <ToastContainer position='top-center' />
            <form onSubmit={handleSubmit} className="flex flex-row justify-center gap-10 items-start">
                <button type="button" onClick={() => { setRequestType('pto'); setModalIsOpen(true); }} className="mb-4 p-2 bg-blue-500 text-white rounded">Request Leave</button>
                <button type="button" onClick={() => { setRequestType('WFH'); setModalIsOpen(true); }} className="mb-4 p-2 bg-green-500 text-white rounded">Request WFH</button>
                <button type="submit" className="p-2 bg-red-500 text-white rounded">Submit</button>
            </form>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className='bg-slate-900 h-1/2 p-10 w-1/2 text-white'>
                <div className='flex flex-col justify-center items-center gap-5'>
                <h2>Confirm Request</h2>
                <p>Are you sure you want to request {requestType}?</p>

                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 ">
        <label>
          From:
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className='text-black'/>
        </label>
        <label className='ml-5'>
          To:
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className='text-black'  />
        </label>
      </form>


                <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Yes</button>
                <button onClick={() => setModalIsOpen(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">No</button>
           

                </div>
                 </Modal>
         </section>

     
        </div>
    );
}

