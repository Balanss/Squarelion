import React from 'react'

import { useState, useEffect } from "react";
import { fs } from "../../../../Firebase";
import { motion } from "framer-motion";
import {Tilt} from 'react-tilt'


export default function CreatedBy({data,setData,user,round,item}) {
  const getData = async () => {
    try {
      const dataArray = [];
      for (const r of round) {
        const querySnapshot = await fs
          .collection(r)
          .where("CreatedBY", "==", user)
          .get();
        const roundData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          CreatedBY: doc.data().CreatedBY,
        }));

        dataArray.push(...roundData);
      }
      setData(dataArray);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
    getData();
    }

    fetchAllData();
  }
  , [user, round]);

  const [ noData, setNoData] = useState("Loading")

  useEffect(() => {
    setTimeout(() => {
      setNoData(0)
    }, 5000);
  }
  , [data]);

    return  (
        <>
            {data === 0 ? null : (
         <Tilt>
           <motion.div variants={item}
            className={`block max-w-sm p-6 phones:w-[125px] xl:w-[250px] text-white border border-y-[#2c1f42] border-x-[#2f3763] rounded-lg shadow-card text-left bg-[#111d39] `}
          >
            <h5 className={` 'mb-2 text-4xl font-bold tracking-tight `}>
              {data.length === 0 ? (
            noData === 0? noData : <div className="px-3 py-1 text-xs font-medium leading-none text-center  rounded-full animate-pulse bg-blue-900 text-blue-200">
            {noData}
          </div>
              ) : (
                data.length !== 0 ? data.length : 0
              )}
            </h5>
            <p className={`font-normal text-xs xl:text-2xl text-gray-400 `}>
              Created Content
            </p>
          </motion.div>
         </Tilt>
        )}
        </>
    )
  
}
