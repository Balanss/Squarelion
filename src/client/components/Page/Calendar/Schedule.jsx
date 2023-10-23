import React from "react";
import { useState, useEffect } from "react";
import { fs, db } from "../../../Firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Switch } from "@mui/material";
import block from "../../images/loading-blocks.gif";

export default function Schedule({ user, level }) {
  //create a const of data and get all firebase data from the collection of partners
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const navigate = useNavigate();
  const [view, setView] = useState("");

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
    // Check if data is available in local storage
    const cachedData = localStorage.getItem("cachedData");
    if (cachedData) {
      setMatchingData(JSON.parse(cachedData));
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    const matchingDataArray = [];

    if (localStorage.getItem("cachedData")) {
      // If data is available in local storage, use it
      setMatchingData(JSON.parse(localStorage.getItem("cachedData")));
      console.log("Data fetched from local storage");
    } else {
      for (const dataItem of data) {
        const name = dataItem.name;

        try {
          const querySnapshot = await fs.collection(name).get();
          const dataArray = querySnapshot.docs.map(doc => ({
            id: doc.id,
            status: doc.data().status,
            ...doc.data(),
          }));

          // Filter the dataArray based on status and id here
          const filteredDataArray = dataArray.filter(
            item => item.status !== "Approved" && item.name !== "Test"
          );

          matchingDataArray.push(...filteredDataArray);
        } catch (error) {
          console.error(`Error fetching data from collection ${name}:`, error);
        }
      }

      // Set the matching data in state
      setMatchingData(matchingDataArray);

      // Cache the fetched data in local storage
      localStorage.setItem("cachedData", JSON.stringify(matchingDataArray));
      console.log("Data fetched from Firebase");
    }
  };

  // Add a function to refresh data from Firebase when needed
  const [btnDisabled, setBtnDisabled] = useState(false);
  const refreshData = () => {
    // Clear the cached data
    localStorage.removeItem("cachedData");
    fetchData();
    alert("Data refreshed successfully  ");
    setBtnDisabled(true);

    // Enable the refresh button after 30 seconds
    setTimeout(() => {
      setBtnDisabled(false);
    }, 20000);
  };

  const [onhover, setOnhover] = useState(false);

  const [SwitchingPage, setSwitchingPage] = useState(false);

  return (
    <>
      <section className="flex justify-center ">
        <button
          disabled={btnDisabled}
          onMouseLeave={() => setOnhover(false)}
          onMouseEnter={() => setOnhover(true)}
          onClick={refreshData}
          className="bg-slate-700  outline hover:outline-2 outline-slate-400 text-white px-4 py-2 rounded-md mt-5 mb-10"
        >
          Refresh Data
        </button>
        {onhover && (
          <p className="text-white absolute mt-16 ">
            Updates to current workflow
          </p>
        )}
      </section>

      <div className="overflow-hidden flex flex-wrap sm:w-[60vw] laptop:w-[75vw] xl:w-[1200px]">
        <section className="">
          {SwitchingPage && (
            <div className=" flex-col  fixed top-0 w-[100vw] bg-slate-600 left-0 z-[100] flex items-center justify-center h-[100vh]">
              <img src={block} className="w-[100px] h-[100px]" />

              <p className="text-white text-2xl animate-bounce">Loading...</p>
            </div>
          )}
        </section>
        {data.map(
          (dataItem, dataIndex) =>
            dataItem.name !== "Test" && (
              <section
                key={dataIndex}
                className="mb-8 bg-slate-700 p-2 text-white max-h-[50vh] overflow-y-auto overflow-x-hidden"
              >
                {dataItem.name !== "Test" ? (
                  <img
                    className="bg-slate-200 ml-3 mb-3 w-[200px] h-[150px] rounded-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                    src={dataItem.imageUrl}
                    onClick={() => {
                      localStorage.setItem("partner", dataItem.name);
                      localStorage.setItem("image", dataItem.imageUrl);
                      setSwitchingPage(true);
                      setTimeout(() => {
                        navigate(`/profile/${dataItem.name}`);
                      }, 500);
                    }}
                  />
                ) : null}

                <ul className="px-6 space-y-2 ">
                  {matchingData
                    .filter(
                      matchingItem =>
                        matchingItem.client === dataItem.name &&
                        view === dataItem.name
                    )
                    .map((matchingItem, matchingIndex) =>
                      matchingItem.status === "Approved" ? null : (
                        <li
                          key={matchingIndex}
                          className="break-words bg-slate-700 p-2"
                        >
                          {/* {matchingItem.status} <br /> {matchingItem.month}-
                    {matchingItem.date} */}
                        </li>
                      )
                    )}
                </ul>

                <ul className="px-6 space-y-2 ">
                  {level > 8 && dataItem.name !== "Test" && (
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

                  {level === 8 && (
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
                  )}
                </ul>
              </section>
            )
        )}
      </div>
    </>
  );
}
