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
    <button  onClick={handlePrivate} type="button" className="text-white bg-gradient-to-r   md:w-[500px] !m-auto from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Chat</button>
  
  )
}
