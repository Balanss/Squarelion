/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import wait from '../images/wait.png'
export default function WaitingApproval({typeAnswer,month,page,qty}) {


  const [name,setName] = useState('')


    function handleData(){
     
        
        fs.collection(page).doc(typeAnswer+month).set({
            color:'#00eaff',
            status:'Waiting Approval',
            statusText:'Waiting Approval'

          },{merge:true})


          fs.collection('partner').doc(name).set({
            status : qty 

          },{merge:true})



          
  }


  useEffect(() =>{
    setName(localStorage.getItem('partner'))
},[name])


  return (
    <p className='style-status  extra-approval' onClick={handleData}>  Waiting Approval </p> 
  )
}
