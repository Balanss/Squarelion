import React from 'react'
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
    const colR = doc(docR,  dMonth);
    setDoc(
      colR,
      { [dPost + dMonth ]: {
        color: "#FF4500",
        status: "Feedback",
        statusText: "Feedback",
      }},
      { merge: true }
    ).catch(error => console.error("Error updating document:", error));
        
       
    setContent(prevContent => [...prevContent, message +" - "+ user]);
    
        setTimeout(() => {
          setMessage("");
        },2000)
    
        
      }
    return (
        <form onSubmit={handleSubmitMessage} className='mt-10'>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message here" className='border-2 border-black text-black p-2 rounded-md'/>
        <button className='bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800  ml-1 cursor-pointer'>Send</button>
       </form>
    )    
}
