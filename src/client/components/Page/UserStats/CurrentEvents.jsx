import React, { useContext } from 'react'
import { useState, useEffect } from "react";
import { db } from "../../../Firebase";
import { collection, doc, onSnapshot, deleteDoc } from "firebase/firestore";
import { motion } from "framer-motion";
  import { fs } from '../../../Firebase';
import { ScheduleContext } from '../../context/ScheduleContext';


export default function CurrentEvents({scheduleData, setScheduleData,level,user}) {


  const {postSchedule,number,setNumber} = useContext(ScheduleContext)




    const colors = [
        "bg-gradient-to-r from-green-700 to-green-800",
        "bg-gradient-to-r from-blue-700 to-blue-800",
        "bg-gradient-to-r from-indigo-700 to-indigo-800",
        "bg-gradient-to-r from-purple-700 to-purple-800",
        "bg-gradient-to-r from-pink-700 to-pink-800",
        "bg-gradient-to-r from-teal-700 to-teal-800",
        "bg-gradient-to-r from-lime-700 to-lime-800",
        "bg-gradient-to-r from-emerald-700 to-emerald-800",
        "bg-gradient-to-r from-fuchsia-700 to-fuchsia-800",
      ];
  
  
    const [randomColor, setRandomColor] = useState("");
  
    useEffect(() => {
      setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
    }, []);
  
  
    // const handleAutoDel = async (id) => {
    //  scheduleData.map((x, i) => {
    //   if (i !== id){
    //     console.log('not equal')
    //   } else {
    //     const docRef = collection(db, "schedule");
    //     const colRef = doc(docRef, x.id);
    //     deleteDoc(colRef);
    //   }
    //   }
    //   )
    // };




const slicedData = postSchedule.slice(0, number);

  return (
    <div className="inline-flex bg-secondary  flex-col mt-10 gap-5 lg:w-[35vw] border border-y-[#2c1f42] border-x-[#2f3763] phones:p-10 phones:w-screen phones:m-auto  p-4 max-h-[500px] phones:max-h-[300px] overflow-y-auto" > 
    <section className="flex flex-col items-start justify-between">
      <h2 className="text-white mb-2 phones:text-lg  text-2xl font-semibold">Today's Events - {postSchedule.length}</h2>
      <div className='flex flex-row items-center justify-between gap-6'>
        <button onClick={(e) => setNumber(number - 5)}> - </button>
        <h1>{number}</h1>
        <button onClick={(e) => setNumber(number + 5)}> + </button>
      </div>
      <hr className='bg-white w-full' />
    </section>


    {slicedData.map((x,id) => {
       if(x.client !== "Test"){
      return  <div className={`grid grid-cols-3 items-start text-center  justify-between text-black p-2 rounded-lg`} style={{backgroundColor: x.color}} key={id}> 
        {/* <p>Creator: {x.user}</p> */}
        <p> Client: {x.client}</p>
        <p>Scheduled: {x.month}-{x.date}</p>
        <p>Status: {x.status}</p>
      </div>
      }
    }
 
    )}

   





  </div>
  )
}
