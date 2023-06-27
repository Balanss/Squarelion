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
            status:'https://firebasestorage.googleapis.com/v0/b/squarelion-43d29.appspot.com/o/icons%2Fwait.png?alt=media&token=b1309fef-359e-4645-8806-5e408112c834'

          },{merge:true})
  }
  return (
    <img src={wait} className='style-status  extra-approval' onClick={handleData}/> 
  )
}
