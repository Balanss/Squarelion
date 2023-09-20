/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import wait from '../images/wait.png'
export default function WaitingApproval({typeAnswer,month,page,qty,setShow}) {


  const [name,setName] = useState('')


    function handleData(){
     
        
        fs.collection(page).doc(typeAnswer+month).set({
            color:'#00eaff',
            status:'Waiting',
            statusText:'Approval'

          },{merge:true})


          fs.collection('partner').doc(name).set({
            status : qty 

          },{merge:true})

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
