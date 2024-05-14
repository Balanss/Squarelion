import React from 'react'
import { updateDoc ,collection,doc,setDoc, arrayUnion} from 'firebase/firestore';
import { db } from '../../Firebase';
import { format } from 'date-fns';
import { useState,useEffect } from 'react';



export default function CreateTemplate({user,uniqueId,boosting,qty,objective,type,date,post,page,month}) {


    const [monthInWords,setMonthInWords] = useState('')

    useEffect(() => {
        const parsedDate = new Date(month)
        const adjustedMonth = parsedDate.getMonth() + 1;
        // Set the adjusted month in words
        setMonthInWords(format(new Date(parsedDate.getFullYear(), adjustedMonth ), 'MMMM '));
      
        
      },[month,monthInWords]);
      

    async function handleData(){

for (let i = 1; i <= 15; i++) {
  const docRef = collection(db, page);
  const colRef = doc(docRef, month);
  await setDoc(colRef, {
    [i + month]: {
      date: i,
      unid: uniqueId + i,
      answer: "",
      designer: '',
      designer1: '',
      designer2: '',
      designer3: '',
      type: 'FB',
      objective: 'cover',
      count:  i,
      order:  i - 1,
      status: 'pending',
      color: 'orange',
      statusText: 'pending',
      month: month,
      user: user,
      client: page,
      content: '',
      channel: 'a',
      monthInWords: monthInWords,
      boosting: 0,
      priority: 'No',
      dbId: post + i,
    }
  }, { merge: true });
}
    
}


  return (
    <div className="rounded-md  mt-5 mb-5 text-center" role="group">
         <button onClick={handleData} className='opacity-100  px-4 py-2 text-sm pb-2 font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white'> Create template </button> 
    </div>
  
  )
}
