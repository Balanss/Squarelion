import React from "react";
import { useState, useEffect } from "react";
import { fs } from "../../../Firebase";
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";

import Chart from "chart.js/auto";
import { useRef } from "react";
import wip from "../../images/wip2.svg";
import GreetingUser from "./GreetingUser";

export default function UserStats({ user ,level}) {
  const [round, setRound] = useState([]);
  const [onlyNames, setOnlyNames] = useState([]);
  const [data, setData] = useState([]);
  const [uploadedBy, setUploadedBy] = useState([]);
  const [writtenBy, setWrittenBy] = useState([]);

  const getRound = async () => {
    try {
      const unsubscribe = fs
        .collection("partner")
        .onSnapshot(async querySnapshot => {
          const roundArray = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          setRound(roundArray.map(doc => doc.name));
        });

      return unsubscribe;
    } catch (error) {
      console.log("loading");
    }
  };

  useEffect(() => {
    getRound();
  }, [user]);

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
      setUploadedBy(dataArray);
      localStorage.setItem("uploadedBy", JSON.stringify(dataArray));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      await Promise.all([getData(), getWrittenData(), getUploadedData()]);
    };

    fetchAllData();
  }, [user, round]);

  return (
    <div className=" text-center text-white w-[75vw] flex items-center justify-start xl:items-start xl:justify-between flex-col lg:flex-row mb-5 mt-5 gap-10">
      <div className="inline-flex gap-5">
        {writtenBy === 0 ? null : (
          <div
            className={`block max-w-sm p-6 md:w-[125px] lg:w-[125px] xl:w-[180px] text-left text-white  border border-gray-600 rounded-lg shadow   bg-gray-800 hover:bg-gray-700 `}
          >
            <h5 className={` "mb-2 text-md font-bold tracking-tight " `}>
              {writtenBy.length === 0 ? (
                <div className="px-3 py-1 text-xs font-medium leading-none text-center  rounded-full animate-pulse bg-blue-900 text-blue-200">
                  loading...
                </div>
              ) : (
                writtenBy.length
              )}{" "}
            </h5>
            <p className={`font-normal text-xs xl:text-[md] text-gray-400 `}>
              Written Content
            </p>
          </div>
        )}

        {data === 0 ? null : (
          <div
            className={`block max-w-sm p-6 md:w-[125px] lg:w-[125px] xl:w-[180px] text-white  border border-gray-600 rounded-lg shadow text-left   bg-gray-800 hover:bg-gray-700 `}
          >
            <h5 className={` 'mb-2 text-md font-bold tracking-tight `}>
              {data.length === 0 ? (
                <div className="px-3 py-1 text-xs font-medium leading-none text-center  rounded-full animate-pulse bg-blue-900 text-blue-200">
                  loading...
                </div>
              ) : (
                data.length
              )}
            </h5>
            <p className={`font-normal text-xs xl:text-[md] text-gray-400 `}>
              Created Content
            </p>
          </div>
        )}

        {uploadedBy === 0 ? null : (
          <div
            className={`block max-w-sm p-6 md:w-[125px] lg:w-[125px] xl:w-[180px] border border-gray-600 rounded-lg shadow text-left bg-gray-800 hover:bg-gray-700 
`}
          >
            <h5 className={` 'mb-2 text-md font-bold tracking-tight '`}>
              {uploadedBy.length === 0 ? (
                <div className="px-3 py-1 text-xs font-medium leading-none text-center rounded-full animate-pulse bg-blue-900 text-blue-200">
                  loading...
                </div>
              ) : (
                uploadedBy.length
              )}
            </h5>
            <p className={`font-normal text-xs xl:text-[md] text-gray-400 `}>
              Uploaded Design Content
            </p>
          </div>
        )}
      </div>

      <div className="">
        <GreetingUser user={user} level={level} />
      </div>
    </div>
  );
}
