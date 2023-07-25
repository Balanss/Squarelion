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



  return (
    <div className=' break-all flex flex-col lg:flex lg:flex-row lg:justify-start lg:flex-wrap lg:w-[600px]'> 
    {currentDateElement.map((x,id) => {return   <div key={id} 
    className= {`text-xl ${x.checked ? 'bg-green-700 mt-4 p-4 rounded mr-3 pb-6 mb-10 border-2 border-solid border-gray-600 '
     :   ' mt-4 p-4 rounded mr-3 pb-6 mb-10  bg-white border-2 border-solid border-gray-600'}`}    >
      <p onClick={() => handleOpenModal()}> {x.id.slice(0,10)} </p>
    <p className="text-sm  mb-2">Note: {x.note}</p>
 

 


 <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='max-w-[80vw] max-h-[80vw]  '
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center'}} >
                   
                   <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={(() => {
  const docRef = collection(db,'calendar');
  const colRef = doc(docRef,x.id);
  deleteDoc(colRef,x.note,{merge:true});
})}> Delete</button>

<div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
<input  className='ml-10 cursor-pointer' type='radio' checked={x.checked === true?true:false} onClick={() => {
  const docRef = collection(db,'calendar');
  const colRef = doc(docRef,x.id);
  setDoc(colRef,{checked:true},{merge:true});
}}  /> 
<label for="bordered-radio-2" className="w-full py-2 ml-2 text-sm font-medium  text-black dark:text-black">Mark as Done  </label>
</div>


  <p className='text-3xl cursor-pointer f mb-2' onClick={() => handleClick(x,id)}> + </p>
<input placeholder='ADD EXTRA NOTE'   className='w-full bg-gray-200 mt-5 cursor-pointer'  onChange={(e) => setExtra(e.target.value)}  />

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {/* {!x.answer ? null :<h6 key={i} onClick={() => setObjectiveAnswer(x.answer) } style={{color:'black'}}> {x.answer} </h6>}  */}
          </Typography>
        </Box>
      </Modal>




     </div>}







   
   )}
    
    </div>
  )
}



