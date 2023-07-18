import React, { useState ,useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { auth, fs,db } from '../../../Firebase'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";

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



  return (
    <div className='flex flex-col lg:max-w-[300px] max-h-[700px]    overflow-scroll'> 
    {currentDateElement.map((x,id) => {return   <div key={id} className="note bg-gray-100 mt-4 p-4 rounded mr-3 pb-6 mb-10">
      <p> {x.id.slice(0,10)} </p>
    <p className="text-sm font-bold mb-2">Note: {x.note}</p>
    <p className='text-xl cursor-pointer font-bold mb-2' onClick={() => handleClick(x,id)}> + </p>
    <input placeholder='ADD EXTRA NOTE'   className='w-full bg-white' onChange={(e) => setExtra(e.target.value)}  />
     </div>}
   
   )}
    
    </div>
  )
}
