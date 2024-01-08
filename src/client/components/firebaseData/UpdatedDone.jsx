/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'


export default function UpdatedDone({typeAnswer,month,page,qty,objective,type,date,post,subject,uniqueId,aiReply,user,objectiveAnswer,monthInWords,boosting}) {


  const [name,setName] = useState('')
  useEffect(() =>{
    setName(localStorage.getItem('partner'))
},[name])



function handleData(){
     

    const docRef = collection(db, page);
    const colRef = doc(docRef, month);
    setDoc(colRef, { [post + month]: { color:'green',
    status:'Posted',
    statusText:'Posted'} }, { merge: true });
}





  return (
    <button className='bg-green-400  w-[30vw] m-auto  mt-2 mb-2 p-2 cursor-pointer transition-transform transform-gpu hover:scale-110' onClick={handleData}>  Posted </button> 
  )
}
