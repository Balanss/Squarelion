/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import design from '../images/graphic-designer.png'
export default function WaitingDesigner({typeAnswer,month,page}) {
    function handleData(){
     
        
        fs.collection(page).doc(typeAnswer+month).set({
            color:'gold',
            status:'Designer',
            statusText:'Designer'

          },{merge:true})
  }
  return (
    <p  className='bg-yellow-500 p-2 mb-2 cursor-pointer transition-transform transform-gpu hover:scale-110' onClick={handleData}> Designer </p>
  )
}
