/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import approved from '../images/approved.png'
export default function WaitingApproved({typeAnswer,month,page,qty}) {


  const [name,setName] = useState('')
  useEffect(() =>{
    setName(localStorage.getItem('partner'))
},[name])


    function handleData(){
        fs.collection(page).doc(typeAnswer+month).set({
            color:'green',
            status:'Approved',
            statusText:'Approved'

          },{merge:true})



          fs.collection('partner').doc(name).set({
            status : qty - 1

          },{merge:true})

  }

console.log(qty)

  return (
    <p className='bg-green-500 mt-2 mb-2 p-2 cursor-pointer' onClick={handleData}>  Approved </p> 
  )
}
