/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/Firebase.jsx'
import {useState, useEffect} from 'react'
import approved from '../images/approved.png'
export default function WaitingApproved({typeAnswer,month,page}) {
    function handleData(){
     
        
        fs.collection(page).doc(typeAnswer+month).set({
            color:'green',
            status:'https://firebasestorage.googleapis.com/v0/b/squarelion-43d29.appspot.com/o/icons%2Fapproved.png?alt=media&token=473c64e4-5512-4916-b71c-b9e2153a205b'

          },{merge:true})
  }
  return (
    <img src={approved}  className='style-status  extra-approved' onClick={handleData}/> 
  )
}
