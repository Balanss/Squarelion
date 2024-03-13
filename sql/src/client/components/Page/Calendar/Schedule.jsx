import React from "react";
import { useState, useEffect } from "react";
import { fs } from "../../../Firebase";
import { useNavigate } from "react-router-dom";
import block from "../../images/loading-blocks.gif";
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { fadeIn,textVariant} from "../../../utils/Motion"


export default function Schedule({ user, level, uuid }) {
  //create a const of data and get all firebase data from the collection of partners
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const unsubscribe = fs.collection("partner").onSnapshot(querySnapshot => {
        const dataArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataArray);
      });
      return unsubscribe;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, [user]);

  const [matchingData, setMatchingData] = useState([]);

  const fetchAndCacheData = async () => {
    try {
      // Check if data is in local storage
      const cachedData = JSON.parse(localStorage.getItem("cachedData") || "[]");
      if (cachedData.length > 0) {
        // Data is in local storage, load it from there
        setMatchingData(cachedData);
        return;
      }

      // Data is not in local storage, fetch it from Firebase
      const promises = data.map(dataItem =>
        fs
          .collection(dataItem.name)
          .where("status", "==", "pending")
          .get()
          .then(querySnapshot =>
            querySnapshot.docs.map(doc => ({
              id: doc.id,
              status: doc.data().status,
              ...doc.data(),
            }))
          )
      );

      const results = await Promise.all(promises);
      const matchingDataArray = results.flat();

      // Save fetched data to local storage
      localStorage.setItem("cachedData", JSON.stringify(matchingDataArray));

      // Update state
      setMatchingData(matchingDataArray.filter(item => item.status !== 0));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchAndCacheData();
  }, [data]);

  // Add a function to refresh data from Firebase when needed




  const [SwitchingPage, setSwitchingPage] = useState(false);


  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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

  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
 

  return (
    <>
    <motion.div  ref={ref}
     initial={{ opacity: 0, y: -50 }}
     animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
     variants={fadeIn("left", "spring",  1, 0.50)}  className="m-auto p-[10px]">

 
      <div className="  overflow-hidden flex flex-wrap items-center gap-2 justify-center sm:w-[70vw] laptop:w-[79vw] laptop:content-start phones:p-0  p-5 m-auto   ">
        <section className="">
          {SwitchingPage && (
            <div className=" flex-col  fixed top-0 w-[100vw] bg-slate-600 left-0 z-[100] flex items-center justify-center h-[100vh]">
              <img src={block} className="w-[100px] h-[100px]" />

              <p className="text-white text-2xl animate-bounce">Loading...</p>
            </div>
          )}
        </section>

        <table className="w-full text-sm text-left text-gray-400 shadow-card2 bg-[#111d39] border border-y-[#2c1f42] border-x-[#2f3763]">
          <caption className="p-5 text-lg font-semibold text-left phones:text-center  text-white shadow-card2 bg-[#111d39]">
            Squarelion Agency Partners
            <p className="mt-1 text-sm font-normal text-gray-400">
              Click on any of the images to view the partner page
            </p>
          </caption>
          <thead className="text-xs  uppercase  text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3">
                Source
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className=" py-3">
                Pending Post
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              (dataItem, dataIndex) =>
                dataItem.name !== "Test" && (
                  <motion.tr 
                  transition={{ duration: 0.50, delay:  dataIndex *0.2 }}
                    key={dataIndex}
                    className="shadow-card2 bg-[#111d39] border border-y-[#2c1f42] border-x-[#2f3763]"
                  >
                    <th
                      scope="row"
                      className="px-1 py-1 font-medium  whitespace-nowrap text-white"
                    >
                      <img
                        className="bg-slate-200 ml-3 mt-3 mb-3 mr-3 w-[30px] h-[30px] rounded-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                        src={dataItem.imageUrl}
                        onClick={() => {
                          localStorage.setItem("partner", dataItem.name);
                          localStorage.setItem("image", dataItem.imageUrl);
                          localStorage.setItem("preset", dataItem.Preset || "No preset available");
                          setSwitchingPage(true);
                          setTimeout(() => {
                            navigate(`/profile/${dataItem.name}`);
                          }, 500);
                        }}
                      />
                    </th>

                    <th
                      scope="row"
                      className="px-1 py-1 font-medium  whitespace-nowrap text-white"
                    >
                      {dataItem.name}
                    </th>

                    <td className="px-1 py-1">
                      {level > 8   && dataItem.name !== "Test" && (
                        <>
                          <p>
                            Pending:{" "}
                            {
                              matchingData.filter(
                                matchingItem =>
                                  matchingItem.client === dataItem.name &&
                                  matchingItem.status !== "Approved"
                              ).length
                            }{" "}
                          </p>
                        </>
                      )}

                      {/* {level === 8 && (
                        <>
                          {dataItem.name !== "Test" ? (
                            <p>
                              {" "}
                              Pending :{" "}
                              {
                                matchingData.filter(
                                  matchingItem =>
                                    matchingItem.client === dataItem.name &&
                                    matchingItem.status == "Designer" &&
                                    dataItem.name !== "Test"
                                ).length
                              }{" "}
                            </p>
                          ) : null}
                        </>
                      )} */}
                    </td>
                  
                  </motion.tr>
                )
            )}
          </tbody>
        </table>
      </div>
      </motion.div>
    </>
  );
}
