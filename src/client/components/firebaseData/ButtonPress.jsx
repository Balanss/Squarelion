/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import check from '../images/check.png'
import error from '../images/error.png'
import wip from '../images/wip.png'


export default function ButtonPress({objective,type,date,post,page,month,setObjective,qty,user}) {
    
const [ succ,setSucc] = useState()

    function handleData(){
     
 

         if (objective && type && date !== '' ){
          fs.collection(page).doc(post+month).set({
                
            date:date,
            type: type,
            objective: objective,
             count: post,
             status: 'pending',
             color:'orange',
             statusText:'pending',
             month:month,
             user:user,
            countNoti : 1,

           
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
  status: qty - -1,
},{merge:true})

      }



   

  return (<> 

  
   
  
<button onClick={handleData} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Post Content
  </span>
</button>

   

  
   
   

   
    </>
  )
}
