import React from 'react'
import { useState, useEffect } from "react";
import { db } from "../../../Firebase";
import { collection, doc, onSnapshot, deleteDoc } from "firebase/firestore";
import { motion } from "framer-motion";


export default function CurrentEvents({scheduleData, setScheduleData}) {


    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "schedule"), snapshot => {
          const data = [];
          snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() });
          });
          // Sort the data array by closest date to latest
          data.sort((a, b) => new Date(a.selectedDate) - new Date(b.selectedDate));
          setScheduleData(data);
        });
        return unsubscribe;
      }, []);


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
  
  
    const handleAutoDel = async (id) => {
     scheduleData.map((x, i) => {
      if (i !== id){
        console.log('not equal')
      } else {
        const docRef = collection(db, "schedule");
        const colRef = doc(docRef, x.id);
        deleteDoc(colRef);
      }
      }
      )
    };
  


  return (
    <div className="inline-flex bg-secondary  flex-col mt-10 gap-5 lg:w-[35vw] border border-y-[#2c1f42] border-x-[#2f3763] phones:p-10 phones:w-screen phones:m-auto  p-4 max-h-[400px] lg:max-h-[800px] overflow-y-auto" > 
    <section className="flex flex-col items-start justify-between">
      <h2 className="text-white mb-2 phones:text-lg  text-2xl font-semibold">Upcoming Events</h2>
      <hr className='bg-white w-full' />
    </section>
  {scheduleData.length === 0 ? <p className="text-white phones:text-lg  text-2xl font-bold">No events scheduled</p> :   
  scheduleData.map((x, id) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); // set time to 00:00:00.000
      const selectedDate = new Date(x.selectedDate);
      selectedDate.setDate(selectedDate.getDate() + 1);
      selectedDate.setHours(0, 0, 0, 0); // set time to 00:00:00.000
      const isPastDate = selectedDate < currentDate;
      if (isPastDate) {
        handleAutoDel(id); // Skip rendering for past events
      
      }
      return (
        <React.Fragment key={id} >
          <motion.div
           initial={{ opacity: 0, y:10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.75, delay: id * 0.3 }}
            className={`text-white text-xs ${randomColor} p-2 mt-2 rounded-md inline-flex flex-col max-w-[200px] lg:max-w-[500px] break-words `}
          >
            <h1 className="font-bold mb-2 flex justify-between">
              {x.user}{" "}
              <span
                className="cursor-pointer hover:text-red-700 "
                onClick={() => {
                  const docRef = collection(db, "schedule");
                  const colRef = doc(docRef, x.id);
                  deleteDoc(colRef);
                }}
              >
                {" "}
                X{" "}
              </span>{" "}
            </h1>
            <p >
              {x.selectedDate.replace("T", " ")}
              <span className="ml-1 "> @ {x.timer}  </span>
              <span className="ml-1"> | {x.Title}  </span>
            </p>
          </motion.div>
          <hr className="opacity-25" />
        </React.Fragment>
      );
    })}



  </div>
  )
}
