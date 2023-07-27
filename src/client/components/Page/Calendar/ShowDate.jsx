import React, { useState ,useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { auth, fs,db } from '../../../Firebase'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ShowDate() {



    const [cDate, setCDate] = useState([]);
    const [extra ,setExtra] = useState('');

    function handleClick(x,id){
        
       if(extra === ''){
        return null;
       } else {
        const docRef = collection(db,'calendar');
        const colRef = doc(docRef,x.id);
        setDoc(colRef,{note:x.note + ' / ' +' ● ' + extra},{merge:true});
        setExtra('')
  
       }
    }





   
  

    const getWork = async () => {
      try {
        const unsubscribe = fs.collection('calendar')
          .onSnapshot((querySnapshot) => {
            const cDateArray = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }));
  
            cDateArray.sort((a, b) => a.id - b.id); // Sort the array based on the numeric ID
  
            setCDate(cDateArray);
          });
  
        return unsubscribe;
      } catch (error) {
        console.error('Error fetching work data:', error);
      }
    };
  
    useEffect(() => {
      const unsubscribe = getWork();
    }, []);


  const currentDate = new Date().toISOString().slice(0,10);

const currentDateElement = cDate.filter(item => item.id.slice(0,10) >= currentDate);


const [openModal, setOpenModal] = React.useState(false);
const handleOpenModal = () => setOpenModal(true);
const handleClose = () => setOpenModal(false);


const [openAccordionIndex, setOpenAccordionIndex] = useState(null);


const toggleAccordion = (id) => {
  setOpenAccordionIndex((prevIndex) => (prevIndex === id ? null : id));
};





  return (
    <>
       <div className=' break-all flex flex-col lg:flex lg:flex-row  lg:flex-wrap lg:w-[600px] lg:justify-end'> 
    {currentDateElement.map((x,id) => 
    {return    <div>
     
        <div key={x.id} data-accordion={openAccordionIndex === id ? 'arcOpen' : ''} >
          <h2>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium text-left text-black border border-b-0 mb-3 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700  ${x.checked===true? 'bg-green-700':'bg-white'} ${openAccordionIndex === id ? 'arcOpen' : ''}`}
              onClick={() => toggleAccordion(id)}
              aria-expanded={openAccordionIndex === id}
              aria-controls={`accordion-arcOpen-body-${x.id}`}
            >
              <span className="flex items-center">{x.id.slice(0, 10)} </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 rotate-180 shrink-0 ${openAccordionIndex === id ? 'arcOpen' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-arcOpen-body-${x.id}`}
            className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 } ${openAccordionIndex === id ? '' : 'hidden'}`}
            aria-labelledby={`accordion-arcOpen-heading-${x.id}`}
          >
            <p className="text-white dark:text-white">Note: {x.note}</p>
            <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={(() => {
  const docRef = collection(db,'calendar');
  const colRef = doc(docRef,x.id);
  deleteDoc(colRef,x.note,{merge:true});
})}> Delete</button>

<div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
<input  className='ml-10 cursor-pointer' type='radio' readOnly checked={x.checked === true?true:false} onClick={() => {
  const docRef = collection(db,'calendar');
  const colRef = doc(docRef,x.id);
  setDoc(colRef,{checked:true},{merge:true});
}}  /> 
<label htmlFor="bordered-radio-2" className="w-full py-2 ml-2 text-sm font-medium  text-white dark:text-white">Mark as Done  </label>
</div>


  <p className='text-3xl cursor-pointer f mb-2 text-white' onClick={() => handleClick(x,id)}> + </p>
<input placeholder='ADD EXTRA NOTE'   className='w-full bg-gray-200 mt-5 cursor-pointer'  onChange={(e) => setExtra(e.target.value)}  />
          </div>
        </div>
      
    </div>

     })}
    
    </div> 
    </>

  )
}



