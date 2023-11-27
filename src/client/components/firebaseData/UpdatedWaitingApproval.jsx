/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import wait from '../images/wait.png'
export default function WaitingApproval({typeAnswer,month,page,qty,setShow,post}) {


  const [name,setName] = useState('')


    function handleData(){
     

      const docRef = collection(db, page);
      const colRef = doc(docRef, month);
      setDoc(colRef, { [post + month]: { color:'#00eaff',
      status:'Waiting',
      statusText:'Approval'} }, { merge: true });

          setShow('')
  }


  useEffect(() =>{
    setName(localStorage.getItem('partner'))
},[name])


  return (
    <p className='bg-sky-500 w-[30vw] m-auto  p-2 cursor-pointer transition-transform transform-gpu hover:scale-110
    ' onClick={handleData}>  Waiting  </p> 
  )
}
