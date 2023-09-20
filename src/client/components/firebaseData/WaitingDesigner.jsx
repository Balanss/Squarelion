/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import design from '../images/graphic-designer.png'

export default function WaitingDesigner({typeAnswer,month,page,post,objectiveAnswer,color,boosting,uniqueId,user,type,subject,img,date,pri}) {



    function handleData(){
     
        
        fs.collection('DesignerPage').doc(post+month+page).set({
            color:'gold',
            status:'Designer',
            statusText:'Designer',
            month:month,
            page:page,
            post:post,
          date:date,
            uniqueId:uniqueId,
            user:user,
            type:type,
            subject:subject,
            img:img,
            hide:false,
            prio:pri



          },{merge:true})


          fs.collection(page).doc(post+month).set({
            color:'gold',
            status:'Waiting Designer',
            statusText:'Designer'

          },{merge:true})

  }
  return (
    <p  className='bg-yellow-500 w-[30vw] m-auto mt-2 p-2 mb-2 cursor-pointer transition-transform transform-gpu hover:scale-110' onClick={handleData}> Designer </p>
  )
}
