import React, { useState ,useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { auth, fs,db } from '../../../Firebase'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




const GoogleCalendar = () => {
  return (
    <iframe
      src={import.meta.env.VITE_CAL}
     className='w-[95vw] md:w-[57vw]  h-[400px] h-min-[400px] cal:w-[65vw] cal:h-[65vh] '
   
     
      frameBorder="0"
      scrolling="no"
      title="Google Calendar"
    ></iframe>
  );
};



const CalendarWithNotes = ({user}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [notes, setNotes] = useState({});
  const [id,setId] = useState('');
  const [count ,setCount] = useState (0)
  const [ fromDate, setFromDate] = useState('');
  const [ timeDate, setTimeDate] = useState('');
  const [ title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [btnTitle, setBtnTitle] = useState('Submit');


  const [cDate, setCDate] = useState([]);


const sendToZapier = async (payload) => {
  const zapierURL = import.meta.env.VITE_ZAP_SEND_CAL; // SQL TO ZAP TO GOOGLE Calendar
  try {
    const response = await fetch(zapierURL, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(payload),
    });
    const resp = await response.json();
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
};

async function handleSubmit(e){
  e.preventDefault()
  const leadData = {
    from:fromDate,
    user:user,
    description:description,
    title:title,
   };

   try {
     await sendToZapier(leadData);
     // Additional code to execute after sending data to Zapier, if needed
   } catch (error) {
     console.log(error);
   }

   setTimeout(() => {
    setFromDate('')
    setDescription('')
    setTitle('');
   } , 1500);

   setBtnTitle('Submitted.. Page will be updated')

   setTimeout(() => {
    // This code will run after 2 seconds
    window.location.reload(); // Refresh the page
    setBtnTitle('Submit');
  }, 2000); // 2000 milliseconds = 2 seconds
  

}

const handleEditorChange = (value) => {
  setDescription(value);
 };

  return (
    <div className=" px-4 py-8 md:m-auto  md:w-[40vw] ">
       <GoogleCalendar />

<div className=''>
<form onSubmit={handleSubmit} className='mt-20 gap-5 flex flex-col items-center '>
  
  <input type="datetime-local" onChange={e => setFromDate(e.target.value)} value={fromDate} />
 
  <input type="text"  placeholder='Title' onChange={e => setTitle(e.target.value)} value={title}/>
  <ReactQuill
   value={description}
      onChange={handleEditorChange}
      style={{color:'black',backgroundColor:'white'}}
      placeholder='Detailed Text here...'
      className='max-w-[90vw] lg:max-w-[500px]  '    
    />
  <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer'>  {btnTitle}   </button>
</form>  
</div>
    </div>
  );
};

export default CalendarWithNotes;


