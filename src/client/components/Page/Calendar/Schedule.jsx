import React from "react";
import { useState, useEffect } from "react";
import { fs} from "../../../Firebase";
import { useNavigate } from "react-router-dom";
import block from "../../images/loading-blocks.gif";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db ,auth} from "../../../Firebase";



export default function Schedule({ user, level,uuid }) {
  //create a const of data and get all firebase data from the collection of partners
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [view, setView] = useState("");
  const[date,setDate] = useState('')
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



  useEffect(() => {
    if (uuid) {
      const entryDate = localStorage.getItem("Date");
      const currentDate = new Date().toLocaleDateString();
      if (entryDate === currentDate) {
        console.log("Already visited today");
        
      } else {
        const currentTime = new Date().toLocaleString();
        localStorage.setItem("Date", currentDate);
        localStorage.setItem("entryTime", currentTime);
        setEntryTime(currentTime);

        const docRef = collection(db,'admin')
        const colRef = doc(docRef,uuid)
        // Update the document in Firebase map with the current date and time
        updateDoc(colRef,{ScheduleUpdater:new Date().toLocaleString()},{merge:true})
        localStorage.removeItem("cachedData");
    fetchData();
    alert("Data refreshed successfully ");
        
      }
    }
  }, [uuid,user]);




  const [onhover, setOnhover] = useState(false);

  const [SwitchingPage, setSwitchingPage] = useState(false);

  return (
    <>
  
      <div className="overflow-hidden flex flex-wrap items-center gap-2 justify-center sm:w-[60vw] laptop:w-[80vw] laptop:content-start laptopL:overflow-y-scroll   p-5 m-auto  border-2 border-slate-700/50 " >
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

        
        <section className="">
          {SwitchingPage && (
            <div className=" flex-col  fixed top-0 w-[100vw] bg-slate-600 left-0 z-[100] flex items-center justify-center h-[100vh]">
              <img src={block} className="w-[100px] h-[100px]" />

              <p className="text-white text-2xl animate-bounce">Loading...</p>
            </div>
          )}
        </section>
        

        
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md shadow-slate-800">
    <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Squarelion Agency Partners
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Click on any of the images to view the partner page</p>
        </caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              <tr key={dataIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
               
                  <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <img
                className="bg-slate-200 ml-3 mt-3 mb-3 mr-3 w-[30px] h-[30px] rounded-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
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
                  </th>
           
                <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                <td className="px-1 py-1">
                  Coming Soon
                  </td>
              </tr>
            )
        )}
      </tbody>
    </table>


        
      
      </div>
    </>
  );
}
