/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import approved from '../images/approved.png'
export default function WaitingApproved({typeAnswer,month,page,qty,objective,type,date,post,subject,uniqueId,aiReply,user,objectiveAnswer,monthInWords,boosting}) {


  const [name,setName] = useState('')
  useEffect(() =>{
    setName(localStorage.getItem('partner'))
},[name])


const sendToZapier = async (payload) => {
  const zapierURL = import.meta.env.VITE_ZAP_SEND;
  try {
    const response = await fetch(zapierURL, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(payload),
    });
    const resp = await response.json();
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
};




   async function handleData(){    


        fs.collection(page).doc(typeAnswer+month).set({
            color:'green',
            status:'Approved',
            statusText:'Approved'

          },{merge:true})



          fs.collection('partner').doc(name).set({
            status : qty - 1

          },{merge:true})


       
            const leadData = {
             date:date,
             uniqueId:uniqueId,
              type: type,
              objective: objective,
               count: post,
               status: 'approved',
               color:'green',
               statusText:'approved',
               month:month,
               user:user,
              countNoti : 1,
              client:page,
              content:subject,
              channel:type,
              answer:objectiveAnswer,
              boosting:boosting,
            
        
            };
        
            try {
              await sendToZapier(leadData);
              // Additional code to execute after sending data to Zapier, if needed
            } catch (error) {
              console.log(error);
            }
          

  }



  return (
    <button className='bg-green-500  w-[30vw] m-auto  mt-2 mb-2 p-2 cursor-pointer transition-transform transform-gpu hover:scale-110' onClick={handleData}>  Approved </button> 
  )
}
