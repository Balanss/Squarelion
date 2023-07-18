import React, { useState ,useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { auth, fs,db } from '../../../Firebase'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";

const CalendarWithNotes = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [notes, setNotes] = useState({});
  const [id,setId] = useState('');
  const [count ,setCount] = useState (0)


  const [cDate, setCDate] = useState([]);

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






const checkIfNotesAndCDateAreEqual = () => {
  const dateISO = cDate.id; // Get the date in ISO string format from cDate
  return notes[dateISO] === cDate.note; // Compare the note value for the date in both objects
};




  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddNote = () => {
    const note = prompt('Enter your note:');
    if (note) {
      setNotes((prevNotes) => ({
        ...prevNotes,
        [selectedDate.toISOString()]: note,
      }));

      const docRef = collection(db,'calendar');
      const colRef = doc(docRef,selectedDate.toISOString());
      setDoc(colRef,{note:note},{merge:true});

    }
  };





  return (
    <div className=" mx-auto px-4 py-8 lg:w-[40vw]">
     
      <div className="calendar-container mb-8">
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
      )}







    </div>
  );
};

export default CalendarWithNotes;


