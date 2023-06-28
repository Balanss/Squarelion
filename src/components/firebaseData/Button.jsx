/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/Firebase.jsx'
import {useState, useEffect} from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import check from '../images/check.png'
import error from '../images/error.png'
import wip from '../images/wip.png'


export default function Button({objective,type,date,post,page,month,setObjective,qty}) {
    
const [ succ,setSucc] = useState()

    function handleData(){
     
         if (objective && type && date !== '' ){
          fs.collection(page).doc(post+month).set({
                
            date:date,
            type: type,
            objective: objective,
             count: post,
             status: 'https://firebasestorage.googleapis.com/v0/b/squarelion-43d29.appspot.com/o/icons%2Fwip.png?alt=media&token=642d26a4-7c84-4111-8476-4cad8e77ebc8',
             color:'orange',
             statusText:'pending',
             month:month
           
          })

          setTimeout(() => {
            setObjective('')
          },1000)

          setSucc(check)
          setTimeout(() => {
            setSucc('')
          },2000)
         
         } else {
          setSucc(error)
          setTimeout(() => {
            setSucc('')
          },2000)
         }

fs.collection('partner').doc(page).set({
  status: qty - - 1,
},{merge:true})

      }



   

  return (<> 

  
     <button onClick={handleData}> <PostAddIcon/>  </button>

   

    <img src={succ} alt={succ}  style={{width:'30px'}}/>
   
   

   
    </>
  )
}
