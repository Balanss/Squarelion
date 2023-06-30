/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/Firebase.jsx'
import {useState, useEffect} from 'react'
import wait from '../images/wait.png'
export default function WaitingApproval({typeAnswer,month,page}) {
    function handleData(){
     
        
        fs.collection(page).doc(typeAnswer+month).set({
            color:'#00eaff',
            status:'Waiting Approval',
            statusText:'Waiting Approval'

          },{merge:true})
  }
  return (
    <p className='style-status  extra-approval' onClick={handleData}>  Waiting Approval </p> 
  )
}
