/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {useState, useEffect} from 'react'
import check from '../images/check.png'
import error from '../images/error.png'
import { format } from 'date-fns';
import axios from 'axios'
import { updateDoc ,collection,doc,setDoc, arrayUnion} from 'firebase/firestore';
import { db } from '../../Firebase';


export default function ButtonPress({objective,type,date,post,page,month,setObjective,qty,user,uniqueId,boosting}) {



  const [ timer,setTimer] = useState('waiting')
// const [parsedDate,setParsedDate] = useState(new Date(month))
const [monthInWords,setMonthInWords] = useState('')


const sendToZapier = async (payload) => {
  const zapierURL = import.meta.env.VITE_ZAP_SEND_CONTENT;
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


useEffect(() => {
  const parsedDate = new Date(month)
  const adjustedMonth = parsedDate.getMonth() + 1;
  // Set the adjusted month in words
  setMonthInWords(format(new Date(parsedDate.getFullYear(), adjustedMonth ), 'MMMM '));

  
},[month,monthInWords]);



    async function handleData(){



      // Format the month as a string of words
    // Format the month as a string of words
    if (objective && type && date !== ''   )
    {
      const docRef= collection(db,page )
      const colRef = doc(docRef,post+month)
      setDoc(colRef,{ 
   date:date,
        unid:uniqueId,
         type: type,
         objective: objective,
          count: post,
          order:post - 1,
          status: 'pending',
          color:'orange',
          statusText:'pending',
          month:month,
          user:user,
         client:page,
         content:objective,
         channel:type,
         monthInWords:monthInWords,
         boosting: boosting === '' ? 0 : boosting,
         priority:'No'
     
    },{merge:true});
    alert('Please wait for the post to be sent to the server')
       
     } else {
        alert('Error occured')
     }
        }
  
  
      



  

  return (<> 

<div className="rounded-md  mt-5 mb-5 text-center" role="group">

{timer !== 'loading' &&   <button  onClick={handleData} className= 'opacity-100  px-4 py-2 text-sm pb-2 font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white' >

Post Content 
  
</button>}


</div>

    </>
  )
}
