import React,{useState} from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc,serverTimestamp} from "firebase/firestore";
import { auth, fs,db } from '../../../Firebase'


export default function PrivateChat({sendTo,text,user,trueChat,setText}) {

//     const now = new Date();
            
//     const formattedTime = now.toLocaleTimeString();

//     const currentDate = new Date();

// const currentDay = currentDate.getDate();
// const currentMonth = currentDate.getMonth() + 1; // Month is zero-based, so add 1
// const currentYear = currentDate.getFullYear();

// const currentHours = currentDate.getHours();
// const currentMinutes = currentDate.getMinutes();
// const currentSeconds = currentDate.getSeconds();


const now = new Date();
const formattedTime = now.toLocaleTimeString();
const currentDate = new Date().toLocaleString();
const slicedDate = currentDate.slice(0, 25);


const [currentTime, setCurrentTime] = useState(formattedTime);

const timestamp = serverTimestamp()
const date = new Date().toString();
const sliced = date.slice(0, 25);
const [count, setCount] = useState(0)
    
            
function handlePrivate(){
fs.collection('chat').doc(sendTo).set(
    
{[sliced]: text + '  - send by  ' +  user


},{merge: true})

fs.collection('chat').doc(trueChat).set(
    
  {[sliced]: text + '  - send by  ' +  user
  
  
  },{merge: true})

  setText('')

}


  return (
    <button onClick={handlePrivate}> private chat </button>
  )
}
