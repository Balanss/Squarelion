import React from 'react'
import { useState, useEffect } from "react";
import { fs } from "../../../../Firebase";
import { motion } from "framer-motion";
import {Tilt} from 'react-tilt'



export default function WrittenBy({writtenBy,setWrittenBy,user,round,item}) {


  const getWrittenData = async () => {
    try {
      const dataArray = [];
      for (const r of round) {
        const querySnapshot = await fs
          .collection(r)
          .where("TextWrittenBy", "==", user)
          .get();
        const roundData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          TextWrittenBy: doc.data().TextWrittenBy,
          ...doc.data(),
        }));

        dataArray.push(...roundData);
      }
      setWrittenBy(dataArray);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
    getWrittenData();
    };

    fetchAllData();
  }, [user, round]);

  const [ noData, setNoData] = useState("Loading")

  useEffect(() => {
    setTimeout(() => {
      setNoData(0)
    }, 5000);
  }
  , [writtenBy]);

  return (
    <>
    
    
          <Tilt>
                      <motion.div variants={item}
            className={`block max-w-sm p-6 phones:w-[125px]  xl:w-[250px] text-left text-white border border-y-[#2c1f42] border-x-[#2f3763] rounded-lg  bg-[#111d39] shadow-card `}
          >
            <h5 className={` "mb-2 text-4xl font-bold tracking-tight  " `}>
              {writtenBy.length === 0 ? (
                <div className="px-3 py-1 text-xs font-medium leading-none text-center  rounded-full animate-pulse bg-blue-900 text-blue-200">
                  loading...
                </div>
              ) : (
                writtenBy.length !== 0 ? writtenBy.length : 0
              )}{" "}
            </h5>
            <p className={`font-normal text-xs xl:text-2xl text-gray-400 `}>
              Written Content
            </p>
          </motion.div>
          </Tilt>


        </>
  )
}
