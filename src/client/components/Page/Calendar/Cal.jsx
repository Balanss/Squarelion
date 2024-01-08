import React, { useState, useEffect } from "react";
import DateSchedule from "./DateSchedule";
import {motion } from 'framer-motion'


const CalendarWithNotes = ({ user, level }) => {
  const [calLoading, setCalLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCalLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="p-5 phones:p-0 phones:m-0 mb-10 text-lg  font-semibold text-left text-white lg:w-[75vw] m-auto shadow-card2 bg-[#111d39] border border-y-[#2c1f42] border-x-[#2f3763] " >
      <section className="phones:p-5 phones:text-center">
      <p className="mt-1 text-2xl font-semibold  text-gray-500 dark:text-gray-400">
      Calendar
        </p>
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          {" "}
          
          Add events to the Squarelion Calendar
        </p>
      </section>
        <hr />
        <section className="flex justify-center gap-5 wrap sm:w-[75vw] flex-col text-black   laptopL:w-full laptopL:flex-row  ">
          <motion.div className={` rounded-md`} 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay:  0.3 }}>
            <DateSchedule user={user} />
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default CalendarWithNotes;
