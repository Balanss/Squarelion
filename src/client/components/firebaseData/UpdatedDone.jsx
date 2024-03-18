/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Facebook from '../Page/automation/Facebook';


export default function UpdatedDone({month,page,post,imageUrl,objectiveAnswer}) {


  


  const [doubleCheck, setDoubleCheck] = useState(false)
  const [name,setName] = useState('')
  const [alreadyPosted, setAlreadyPosted] = useState(false)
  const [report, setReport] = useState('')


  useEffect(() =>{
    setName(localStorage.getItem('partner'))
},[name])


useEffect(() => {
  const fetchData = async () => {
    const docRef = doc(db, page, "Status");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data && data[ page+post+month ]) {
        setReport(data[page+post+month].Status);
      } else {
        console.log("No such field!");
      }
    } else {
      console.log("No such document!");
    }
  };

  fetchData();
}, []);




async function handleData() {
  try {
    const docRef = collection(db, page);
    const colRef = doc(docRef, month);
    await setDoc(colRef, { [post + month]: { color:'green', status:'Ready to Post', statusText:'Posting'} }, { merge: true });


    const statusRef = doc(db, page, "Status");
    getDoc(statusRef).then((docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data && data [`${page + post + month}.Status`] && (data[page + post + month].status)) {
          updateDoc(statusRef, {
            [`${page + post + month}.Status`]: 'Ready to Post'
          });
        } else {
         console.log('already an field')
        }
      } else {
        console.log("No such document!");
      }
    });

  } catch (error) {
    console.error("Error updating document: ", error);
  }
}


  const handleClick = () => {
    setDoubleCheck(true)
  }

  



  return (
    <> 
   <Facebook doubleCheck={doubleCheck} setDoubleCheck={setDoubleCheck} month={month} answer={objectiveAnswer} page={page} imageUrl={imageUrl} />
    <button className={`bg-green-400  w-[30vw] m-auto  mt-2 mb-2 p-2 cursor-pointer transition-transform transform-gpu hover:scale-110 ${report === 'Posted'? 'opacity-40':'opacity-100'}`} disabled={report === "Posted"? true : false}  onClick={() => {handleClick(); handleData();}}>  {report === "Posted"? "Already on FB" : " Post Now"} </button> 
 
   </>)
}
