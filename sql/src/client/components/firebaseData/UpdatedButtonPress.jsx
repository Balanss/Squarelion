/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {useState, useEffect} from 'react'
import { format } from 'date-fns';
import { updateDoc ,collection,doc,setDoc, arrayUnion} from 'firebase/firestore';
import { db } from '../../Firebase';


export default function ButtonPress({objective,type,date,post,page,month,setObjective,qty,user,uniqueId,boosting}) {



  const [ timer,setTimer] = useState('waiting')
// const [parsedDate,setParsedDate] = useState(new Date(month))
const [monthInWords,setMonthInWords] = useState('')
const [success,setSuccess] = useState(false)





useEffect(() => {
  const parsedDate = new Date(month)
  const adjustedMonth = parsedDate.getMonth() + 1;
  // Set the adjusted month in words
  setMonthInWords(format(new Date(parsedDate.getFullYear(), adjustedMonth ), 'MMMM '));

  
},[month,monthInWords]);



    async function handleData(){



      // Format the month as a string of words
  if (objective && type && date !== ''   )
  {
    const docRef= collection(db,page )
    const colRef = doc(docRef,month)
  await  setDoc(colRef,{ [post+month]:{
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
       boosting: boosting === '' ? 0 :  boosting,
       priority:'No',
       dbId:post,
   
  }},{merge:true})

  setSuccess('Post Content Added')

  setTimeout(() => {
    setSuccess(false) 

  }, 3000);
     
   } else {
      alert('Please fill in all the fields before submitting the form.')
   }
      }



  

  return (<> 

<div className="rounded-md  mt-5 mb-5 text-center" role="group">

{timer !== 'loading' &&   <button  onClick={handleData} 
className='opacity-100  px-4 py-2 text-sm pb-2 font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white' >Post Content </button>}

{success !== false &&     <div id="toast-success" className=" fixed  right-0 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span className="sr-only">Check icon</span>
    </div>
    <div className="ms-3 text-sm font-normal">{success}</div>
    <button onClick ={() => setSuccess(false)} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span className="sr-only" >Close</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div> }


</div>

    </>
  )
}
