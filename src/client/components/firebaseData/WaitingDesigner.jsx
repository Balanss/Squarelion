/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import design from '../images/graphic-designer.png'

export default function WaitingDesigner({typeAnswer,month,page,post,objectiveAnswer,color,boosting,uniqueId,user,type,subject,img,date,pri}) {

const [forDesigner, setForDesigner] = useState('')
const [message, setMessage] = useState('')

    function handleData(){
setModal(true)
  }

  function handleToDdesigner(e){
e.preventDefault()
fs.collection('DesignerPage').doc(post+month+page).set({
  color:'gold',
  status:'Designer',
  statusText:'Designer',
  month:month,
  page:page,
  post:post,
date:date,
  user:user,
  type:type,
  subject:forDesigner,
  img:img,
  hide:false,
  prio:pri



},{merge:true})


fs.collection(page).doc(post+month).set({
  color:'gold',
  status:'Waiting Designer',
  statusText:'Designer'
},{merge:true})

setMessage('Has been sent to the designer')
setForDesigner('')
setTimeout(() => {
  setMessage('')
  } , 3000);
  }

  const [modal, setModal] = useState(false);

  //create a modal when the user clicks on the designer button
  //the modal should allow an input form with text area and a submit button
  //when the user submits let the user know that the request has been sent to the designer
  return ( <>  
    <p  className='bg-yellow-500 w-[30vw] m-auto mt-2 p-2 mb-2 cursor-pointer transition-transform transform-gpu hover:scale-110' onClick={handleData}> Designer </p>


{modal === true &&
<div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'>
  <form className='bg-white w-[50vw] h-[50vh] m-auto mt-20 p-2 rounded-lg' onSubmit={handleToDdesigner}>
    <textarea className='w-full h-[30vh] border-2 border-black' value={forDesigner} placeholder='Enter your text here' onChange={(e) => {
      setForDesigner(e.target.value)
    }}></textarea>
    <input className='bg-yellow-500 w-[30vw] m-auto mt-2 p-2 mb-2 cursor-pointer transition-transform transform-gpu hover:scale-110' type='submit' value='Submit' />
    <p className='text-black'>{message}</p>
  </form>
{}
  </div>}




 </> )
}
