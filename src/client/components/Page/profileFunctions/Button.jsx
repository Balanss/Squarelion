import React,{useState, useEffect} from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db,timestamp } from '../../../Firebase'
import {  serverTimestamp } from "firebase/firestore";

export default function Button({text,sendTo,user,imp,allUid,setText}) {


           const now = new Date();
            const formattedTime = now.toLocaleTimeString();
            const currentDate = new Date().toLocaleString();
            const slicedDate = currentDate.slice(0, 25);
           

       const [currentTime, setCurrentTime] = useState(formattedTime);

           const timestamp = serverTimestamp()
           const date = new Date().toString();
           const sliced = date.slice(0, 30);
           const [count, setCount] = useState(0)
         
          

        


    function handleSend() {    
            setCurrentTime(formattedTime);
           
        fs.collection(sendTo).doc(sliced).set({
            text: text ,
            sendBy: user + ' /' + slicedDate,
            timestamp: timestamp,
            imp: imp,
            mail:'https://firebasestorage.googleapis.com/v0/b/squarelion-43d29.appspot.com/o/icons%2Fmail.png?alt=media&token=bdfde3a5-5c9b-4e2c-aa52-4ee31b2defe0',
          },{merge: true})

 


    allUid.map(x => {
      if (user !== x) {
        const docRef = collection(db, sendTo);
        const colRef = doc(docRef, sliced);
        updateDoc(colRef, { [x]: 1 }, { merge: true });
        updateDoc(colRef, { [user]: 0 }, { merge: true });
      } 
    });

    setText('')
  
}

     

        
  return (
    <button  onClick={handleSend} type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Chat</button>
  )
}
