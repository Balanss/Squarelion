import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '../../../Firebase'


export default function PrivateChat({sendTo,text,user}) {

    const now = new Date();
            
    const formattedTime = now.toLocaleTimeString();

    const currentDate = new Date();

const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1; // Month is zero-based, so add 1
const currentYear = currentDate.getFullYear();

const currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();
const currentSeconds = currentDate.getSeconds();



    
            
function handlePrivate(){
fs.collection('chat').doc(sendTo).set({
    
['chat']:{[formattedTime]: text + '  - send by  ' +  user
} 

},{merge: true})


}


  return (
    <button onClick={handlePrivate}> private chat </button>
  )
}
