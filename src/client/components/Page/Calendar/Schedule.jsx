import React from "react";
import { useState, useEffect } from "react";
import { fs } from "../../../Firebase";
import { useNavigate } from "react-router-dom";
import block from "../../images/loading-blocks.gif";
import { collection, doc, updateDoc } from "firebase/firestore";

export default function Schedule({ user, level, uuid }) {
  //create a const of data and get all firebase data from the collection of partners
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [view, setView] = useState("");
  const [date, setDate] = useState("");
  const [entryTime, setEntryTime] = useState("");

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

      // Compare with data in local storage
      const cachedData = JSON.parse(localStorage.getItem("cachedData") || "[]");
      if (JSON.stringify(cachedData) !== JSON.stringify(matchingDataArray)) {
        // Update local storage
        localStorage.setItem("cachedData", JSON.stringify(matchingDataArray));
      }

      // Update state
      setMatchingData(matchingDataArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAndCacheData();
  }, [data]);

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
      <div className="overflow-hidden flex flex-wrap items-center gap-2 justify-center sm:w-[70vw] laptop:w-[80vw] laptop:content-start laptopL:overflow-y-scroll   p-5 m-auto  border-2 border-slate-700/50 ">
        <section className="">
          {SwitchingPage && (
            <div className=" flex-col  fixed top-0 w-[100vw] bg-slate-600 left-0 z-[100] flex items-center justify-center h-[100vh]">
              <img src={block} className="w-[100px] h-[100px]" />

              <p className="text-white text-2xl animate-bounce">Loading...</p>
            </div>
          )}
        </section>

        <table className="w-full text-sm text-left text-gray-400 shadow-md shadow-slate-800">
          <caption className="p-5 text-lg font-semibold text-left  text-white bg-gray-800">
            Squarelion Agency Partners
            <p className="mt-1 text-sm font-normal text-gray-400">
              Click on any of the images to view the partner page
            </p>
            {/* <section className="flex justify-center ">
        <button
          disabled={btnDisabled}
          onMouseLeave={() => setOnhover(false)}
          onMouseEnter={() => setOnhover(true)}
          onClick={refreshData}
          className="bg-slate-800  outline hover:outline-2 outline-slate-400 text-white px-4 py-2 rounded-md mt-5 mb-10"
        >
          Get Updated Data
        </button>
        {onhover && (
          <p className="text-white absolute mt-16 ">
            Updates to current workflow
          </p>
        )}
      </section> */}
          </caption>
          <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
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
              <th scope="col" className="px-0 py-3">
                Completed
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              (dataItem, dataIndex) =>
                dataItem.name !== "Test" && (
                  <tr
                    key={dataIndex}
                    className=" border-b bg-gray-800 border-gray-700"
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
                    </td>
                    <td className="px-1 py-1">Coming Soon</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
