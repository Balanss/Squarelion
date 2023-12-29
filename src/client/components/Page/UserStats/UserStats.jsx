import React from "react";
import { useState, useEffect } from "react";
import GreetingUser from "./GreetingUser";
import { motion } from "framer-motion";

import GettingRound from "./GettingRound";
import CurrentEvents from "./CurrentEvents";
import CurrentTask from "./CurrentTask/CurrentTask";
import WrittenBy from "./OverAllUserStats/WrittenBy";
import UploadedBy from "./OverAllUserStats/UploadedBy";
import CreatedBy from "./OverAllUserStats/CreatedBy";
import ViewTaskDone from "./View/ViewTaskDone";



export default function UserStats({ user ,level}) {
  const [round, setRound] = useState([]);
  const [data, setData] = useState([]);
  const [uploadedBy, setUploadedBy] = useState([]);
  const [writtenBy, setWrittenBy] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);

 

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }


 
  return (
    <div className=" text-center text-white w-[75vw]  phones:w-auto flex items-center justify-start xl:items-start xl:justify-between flex-col lg:flex-row mb-5 mt-5 gap-10">
      <GettingRound setRound={setRound} user={user} />
      <motion.div  className="inline-flex phones:flex-col phones:gap-2 gap-10"    variants={container} 
    initial="hidden"
    animate="visible">

<motion.div className="" variants={item}>

        <GreetingUser user={user} level={level} />

        <section className="flex gap-3 flex-wrap justify-between phones:flex-col ">
      {level > 9 || user === 'Saskia'? <ViewTaskDone user={user} level={level} /> : null}
      <CurrentTask user={user} level={level} />
      <CurrentEvents  user={user} level={level} scheduleData={scheduleData} setScheduleData={setScheduleData} />
      </section>
        

      <section className="mt-10 flex gap-5 flex-row phones:flex-col">
     
        </section>

        <section className="mt-10 flex gap-5 items-center justify-center flex-row phones:flex-col ">
        <WrittenBy user={user} setWrittenBy={setWrittenBy} level={level} round={round} writtenBy={writtenBy} />
        <UploadedBy user={user} setUploadedBy={setUploadedBy} level={level} round={round} uploadedBy={uploadedBy} />
        <CreatedBy user={user} setData={setData} level={level} round={round} data={data} />
        </section>

      
    
      </motion.div>

 

      </motion.div>

     
    </div>
  );
}
