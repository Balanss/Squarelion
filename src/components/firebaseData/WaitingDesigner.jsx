/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/Firebase.jsx'
import {useState, useEffect} from 'react'
import design from '../images/graphic-designer.png'
export default function WaitingDesigner({typeAnswer,month,page}) {
    function handleData(){
     
        
        fs.collection(page).doc(typeAnswer+month).set({
            color:'gold',
            status:'https://firebasestorage.googleapis.com/v0/b/squarelion-43d29.appspot.com/o/icons%2Fgraphic-designer.png?alt=media&token=42299087-2375-419c-9c53-572d90276e80',
            statusText:'Designer'

          },{merge:true})
  }
  return (
    <img src={design} className='style-status  extra-designer' onClick={handleData}/> 
  )
}
