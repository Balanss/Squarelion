import React from 'react'
import { useState, useEffect,useMemo,useContext } from "react";
import { fs } from "../../../../Firebase";
import { motion } from "framer-motion";
import {Tilt} from 'react-tilt'
import { UserContext } from "../../../context/UserContext";


export default function UploadedBy({uploadedBy,setUploadedBy,user,round,item}) {

const {level} = useContext(UserContext);

  const getUploadedData = async () => {
    try {
      const dataArray = [];
      for (const r of round) {
        const querySnapshot = await fs
          .collection(r)
          .where("DesignUploadedBy", "==", user)
          .get();
        const roundData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          DesignUploadedBy: doc.data().DesignUploadedBy,
          ...doc.data(),
        }));

        dataArray.push(...roundData);
      }
      return dataArray;
    } catch (error) {
      console.error(error);
    }
  };

  const memoizedUploadedData = useMemo(() => getUploadedData(), [user, round]);

  useEffect(() => {
    const fetchAllData = async () => {
      const data = await memoizedUploadedData;
      setUploadedBy(data);
      localStorage.setItem("uploadedBy", JSON.stringify(data));
    };

    fetchAllData();
  }, [memoizedUploadedData]);


  const [ noData, setNoData] = useState("Loading")

  useEffect(() => {
    setTimeout(() => {
      setNoData(0)
    }, 5000);
  }
  , [uploadedBy]);

  return (
    <>
     
       {level > 5 &&   <Tilt>
           <motion.div variants={item}
            className={`block max-w-sm p-6 phones:w-[125px]  xl:w-[250px] border border-y-[#2c1f42] border-x-[#2f3763] rounded-lg shadow-card text-left bg-[#111d39] `}
          >
            <h5 className={` 'mb-2 text-4xl  font-bold tracking-tight '`}>
              {uploadedBy.length === 0 ? (
             noData === 0? noData : <div className="px-3 py-1 text-xs font-medium leading-none text-center  rounded-full animate-pulse bg-blue-900 text-blue-200">
              {noData}
            </div>
              ) : (
                uploadedBy.length
              )}
            </h5>
            <p className={`font-normal text-xs xl:text-2xl text-gray-400 `}>
             Design Content
            </p>
          </motion.div>
         </Tilt>}
     
    </>
  )
}
