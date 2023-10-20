import React from "react";
import { useState, useEffect } from "react";
import { fs, db } from "../../../Firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

export default function Schedule({ user }) {
  //create a const of data and get all firebase data from the collection of partners
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      const matchingDataArray = [];

      // Loop through each name obtained from data
      for (const dataItem of data) {
        const name = dataItem.name;

        try {
          const querySnapshot = await fs.collection(name).get();
          const dataArray = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          matchingDataArray.push(...dataArray);
        } catch (error) {
          console.error(`Error fetching data from collection ${name}:`, error);
        }
      }

      // Set the matching data in state
      setMatchingData(matchingDataArray);
    };

    fetchData();
  }, [data]); // Include data in the dependencies array to react to changes in data

  return (
    <div className="overflow-hidden flex flex-wrap">
      {data.map((dataItem, dataIndex) => (
        <section
          key={dataIndex}
          className="mb-8 bg-slate-600 p-2 text-white max-h-[50vh] overflow-y-auto"
        >
          <img
            className="bg-slate-200 ml-3 mb-3 w-[80px] h-[80px] rounded-md"
            src={dataItem.imageUrl}
          />
          <ul className="px-6 space-y-2 ">
            {matchingData
              .filter(matchingItem => matchingItem.client === dataItem.name)
              .map((matchingItem, matchingIndex) =>
                matchingItem.status === "Approved" ? null : (
                  <li
                    key={matchingIndex}
                    className="break-words bg-slate-700 p-2"
                  >
                    {matchingItem.status} <br /> {matchingItem.month}-
                    {matchingItem.date}
                  </li>
                )
              )}
          </ul>
        </section>
      ))}
    </div>
  );
}
