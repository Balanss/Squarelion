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


  const [cDate, setCDate] = useState([]);

//   const getWork = async () => {
//     try {
//       const unsubscribe = fs.collection('calendar')
//         .onSnapshot((querySnapshot) => {
//           const cDateArray = querySnapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data()
//           }));

//           cDateArray.sort((a, b) => a.id - b.id); // Sort the array based on the numeric ID

//           setCDate(cDateArray);
//         });

//       return unsubscribe;
//     } catch (error) {
//       console.error('Error fetching work data:', error);
//     }
//   };

//   useEffect(() => {
//     const unsubscribe = getWork();
//   }, []);






// const checkIfNotesAndCDateAreEqual = () => {
//   const dateISO = cDate.id; // Get the date in ISO string format from cDate
//   return notes[dateISO] === cDate.note; // Compare the note value for the date in both objects
// };




//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleAddNote = () => {
//     const note = prompt('Enter your note:');
//     if (note) {
//       setNotes((prevNotes) => ({
//         ...prevNotes,
//         [selectedDate.toISOString()]: note,
//       }));

//       const docRef = collection(db,'calendar');
//       const colRef = doc(docRef,selectedDate.toISOString());
//       setDoc(colRef,{note:note},{merge:true});

//     }
//   };

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
  <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer'>Submit</button>
</form>  
</div>


      {/* <div className="calendar-container mb-8">
      <Calendar
        onChange={handleDateChange}
        className='lg:!w-[700px]'
        value={selectedDate}
        tileContent={({ date, view }) => {
          // Check if the date is in the past
          const currentDate = new Date();
          if (date < currentDate) {
            return null; // If the date is in the past, don't display the note indicator
          }

          // Check if there is a note for the date in cDate
          if (view === 'month') {
            const dateISO = date.toISOString();
            const hasNote = cDate.some(item => item.id === dateISO);
            if (hasNote) {
              return <p className="note-indicator">●</p>;
            }
          }
          return null;
        }}
      />
      </div>
      
      {selectedDate && (
        <div className="note-editor">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => {handleAddNote(),setId(selectedDate.toISOString());}}
          >
            Add Note
          </button>
        </div>
      )} */}


    </div>
  );
};

export default CalendarWithNotes;


