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
            status:'Waiting Designer',
            statusText:'Designer'

          },{merge:true})
  }
  return (
    <p  className='style-status  extra-designer' onClick={handleData}> For Designer </p>
  )
}
