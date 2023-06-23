/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/Firebase.jsx'
import {useState, useEffect} from 'react'
export default function WaitingApproved({typeAnswer,month,page}) {
    function handleData(){
     
        
        fs.collection(page).doc(typeAnswer+month).set({
            color:'green',
            status:'Approved'

          },{merge:true})
  }
  return (
    <p className='style-status  extra-approved' onClick={handleData}> Approved </p> 
  )
}
