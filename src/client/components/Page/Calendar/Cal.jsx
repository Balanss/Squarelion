import React, { useState ,useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { auth, fs,db } from '../../../Firebase'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Schedule from './Schedule';




const GoogleCalendar = () => {
  return (
    <iframe
      src={import.meta.env.VITE_CAL}
     className='w-[95vw] md:w-[50vw]  h-[400px] h-min-[400px] cal:w-[40vw] cal:h-[65vh]  m-auto'

      title="Google Calendar"
    ></iframe>
  );
};

const LoadingDiv = () => {
return(
  <div className="w-[95vw] md:w-[50vw]  h-[400px] h-min-[400px] cal:w-[40vw] cal:h-[65vh]  m-auto flex items-center justify-center  border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
</div>
)
}



const CalendarWithNotes = ({user,level}) => {
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

   setBtnTitle('Submitted.. Page after you refresh')

   setTimeout(() => {
    // This code will run after 2 seconds
   
    setBtnTitle('Submit');
  }, 3000); // 2000 milliseconds = 2 seconds
  

}

const handleEditorChange = (value) => {
  setDescription(value);
 };

 const [calLoading,setCalLoading] = useState(true)

 useEffect(() => {
  setTimeout(() => {
    setCalLoading(false)
  }
  , 1000);
  
}
, []);



  return ( <>  
<section className='cal:flex md:ml-[20%] gap-5 mt-10'>
<form onSubmit={handleSubmit} className='mt-10 mr-2 gap-5 flex flex-col items-center mb-2 bg-slate-700 p-10 '>
  
  <input type="datetime-local" onChange={e => setFromDate(e.target.value)} value={fromDate} />
 
  <input type="text"  placeholder='Title' onChange={e => setTitle(e.target.value)} value={title}/>
  <ReactQuill
   value={description}
      onChange={handleEditorChange}
      style={{color:'black',backgroundColor:'white'}}
      placeholder='Detailed Text here...'
      className='max-w-[90vw] lg:max-w-[300px]  '    
    />
  <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer relative'>  {btnTitle}   </button>
</form>  

<div className={`${calLoading === false? 'hidden':'false'}`}>
  <LoadingDiv/>
</div>

<div className={`${calLoading === false? 'block':'hidden'}`}>
  <GoogleCalendar/>
</div>
</section>


    <div className=" px-4 py-8 md:m-auto  md:w-[60vw] ">
<div className='mt-5'>

  <hr />


{level > 7 ?   <Schedule user={user} level={level} /> : null}
</div>
    </div>

  
</>  );
};

export default CalendarWithNotes;


