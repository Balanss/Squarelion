/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'



export default function UpdatedFinals({typeAnswer,month,page,qty,objective,type,date,post,subject,uniqueId,aiReply,user,objectiveAnswer,monthInWords,boosting}) {


  const [name,setName] = useState('')
  useEffect(() =>{
    setName(localStorage.getItem('partner'))
},[name])

const [success,setSuccess] = useState(false)

async function handleData() {
  try {
    const docRef = collection(db, page);
    const colRef = doc(docRef, month);
    await setDoc(colRef, { [post + month]: { color:'#ffff00', status:'Final', statusText:'Final'} }, { merge: true });

    setSuccess('Final, ready to be approved');
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  } catch (error) {
    toast.error('Error has occured, please try again.');
  }
}





  return (<> 
    <button className='bg-[#ffff00]  w-[30vw] m-auto  mt-2 mb-2 p-2 cursor-pointer transition-transform transform-gpu hover:scale-110' onClick={handleData}>  Final </button> 

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


  </>)
}
