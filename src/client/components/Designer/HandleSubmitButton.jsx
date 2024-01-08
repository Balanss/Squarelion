import React from 'react'
import { useState } from 'react';
import { collection, addDoc,doc,updateDoc ,setDoc,deleteDoc} from 'firebase/firestore';
import { db, auth, fs } from "../../Firebase";




//THIS SEND MESSAGE INSIDE MODAL
export default function HandleSubmitButton({user, message, setMessage, dPost, dMonth, setContent, dPage, arrayUnion}) {
    
    const handleSubmitMessage = async (e) => {
        e.preventDefault();
        const docRef = collection(db, "DesignerPage");
        const colRef = doc(docRef, dPost + dMonth + dPage);
        updateDoc(colRef, {
          subject: arrayUnion(message +" - "+ user),
          New: false,
        });
    
    
        const docR = collection(db, dPage);
        const colR = doc(docR, dPost + dMonth);
        setDoc(
          colR,
          {
            color: "#FF4500",
            status: "Feedback ",
            StatusText: "Feedback",
       
          },
          { merge: true }
        );
        
       
        setContent(prevContent => [...prevContent, message +" - "+ user]);
    
        setTimeout(() => {
          setMessage("");
        },2000)
    
        
      }
    return (
        <form onSubmit={handleSubmitMessage}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message here" className='border-2 border-black p-2 rounded-md'/>
        <button className='bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800  ml-1 cursor-pointer'>Send</button>
       </form>
    )    
}
