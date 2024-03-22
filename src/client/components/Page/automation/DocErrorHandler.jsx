import React from 'react'
import {useState, useEffect} from 'react'
import { db } from '../../../firebase'
import { collection, doc, setDoc,getDoc,onSnapshot,updateDoc, deleteField,deleteDoc} from "firebase/firestore";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';



export default function DocErrorHandler({page,month}) {

    const [report, setReport] = useState('')
    const [checkerMail, setCheckerMail] = useState('')
    const [timer, setTimer] = useState('5')
    const [longerTimer, setLongerTimer] = useState('45')

    const {user} = useContext(UserContext);

useEffect(() => {
    if (!page || !month) {
        console.log("Page or month is not defined!");
        return;
    }

    const docRef = doc(db, page, "Status");
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
            const data = docSnap.data();
           
            if (data && data[page+month+user]) {
                setReport(data[page+month+user].Status);
                setCheckerMail([page+month+user]);
            } else {
                console.log("No such field!");
            }
        } else {
            console.log("No such document!");
        }
    });

    // Cleanup function
    return unsubscribe;
}, [db, page, month]);

//timer to remove error message
useEffect(() => {
    if (report === 'Error!! Content not posted') {
        const intervalId = setInterval(() => {
            setTimer((prevTimer) => prevTimer > 0 ? prevTimer - 1 : 0);
        }, 1000);

        // Schedule update/delete after 5 seconds
        const timeoutId = setTimeout(async () => {
            // Update the document
            const docRef = doc(db, page, "Status");
            await updateDoc(docRef, {
                [page+month+user]: deleteField()
            });
        }, 5 * 1000); // 5 seconds

        // Cleanup function
        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        } 
    } else {

        const intervalId = setInterval(() => {
            setLongerTimer((prevTimer) => prevTimer > 0 ? prevTimer - 1 : 0);
        }, 1000);

        const timeoutId = setTimeout(async () => {
            // Update the document
            const docRef = doc(db, page, "Status");
            await updateDoc(docRef, {
                [page+month+user]: deleteField()
            });
        }, 45 * 1000); // 5 seconds

        // Cleanup function
        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        }
    
    }
}, [report]);



{/* <progress value={timer} max="5"></progress> */}




  return (
    <div className='mb-2'>
       {report === 'Error!! Content not posted' && <p className='text-black underline text-xs'>There was an error.This message will disappear in {timer} seconds</p>}
       {report !== 'Error!! Content not posted' && report !=='no such field!' && report !== ''  && checkerMail[0].includes(user) && <a className='text-black underline' href={report} target='_blank' rel='noopener noreferrer'> Link ,{longerTimer} </a>}
    </div>
  )
}
