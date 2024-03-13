import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { fs } from '../../../../Firebase'


export default function CurrentTaskFunctions({user,setData,data,setMatchingData,matchingData,month}) {



  const getData = () => {
    try {
      const unsubscribe = fs.collection("partner")
        .onSnapshot(querySnapshot => {
          const dataArray = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setData(dataArray);
        });
      return unsubscribe;
    } catch (error) {
      console.error("Error fetching data: ", error);
      // TODO: Show an error message to the user
    }
  };
  
    
      useEffect(() => {
        const unsubscribe = getData(); // Store the unsubscribe function
        return () => unsubscribe(); // Unsubscribe when the component unmounts
      }, [ month,user]); // Only call getData when the component mounts and when user or month changes

   
 
    
const fetchData = async () => {
    try {
        const promises = data.map(dataItem =>
            fs.collection(dataItem.name)
                .doc(month)
                .get()
                .then(doc => {
                    if (doc.exists) {
                        const data = doc.data();
                        return Object.keys(data)
                            .map(key => {
                                const item = data[key];
                                return item.user
                                    ? {
                                            client: item.client,
                                            month: item.month,
                                            post: item.count,
                                            Time: item.Time,
                                            text: item.TextWrittenBy || item.DesignUploadedBy
                                        }
                                    : null;
                            })
                            .filter(item => item !== null)
                            .sort((a, b) => a.order - b.order); // Sort by order in ascending order
                    } else {
                        console.log("No such document!");
                        return [];
                    }
                })
        );

        const results = await Promise.all(promises);
        const matchingDataArray = results.flat();

        // Update state
        const filteredData = matchingDataArray.filter(item => item.Time);
        setMatchingData(filteredData);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

useEffect(() => {
    fetchData();
}, [month,user,data]); // Add dependencies here






  return (
   <>
            {matchingData.length === 0 ? (
              <h1 className='text-left'>No current task</h1>
            ) : (
              matchingData.map((item, index) =>  {
                // Parse item.Time into a Date object
                const itemDate = new Date(item.Time);
              
                // Get the current date and time
                const currentDate = new Date();
              
                // Calculate the difference in hours
                const diffHours = Math.abs(currentDate - itemDate) / 36e5;
              
                // Render the div only if the difference is less than or equal to 24
                return diffHours <= 24 && (
                  <div className=" phones:w-screen  grid grid-cols-1 items-center" key={item.id || index}>
                    <ul>
                      <li className=" grid    justify-items-center  grid-cols-5   gap-5 items-center laptop:justify-between phones:text-xs ">
                          <div className='flex items-center gap-1'>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <p className="text-white phones:w-[30px]">{item.client.slice(0, 10)}..</p>
                          </div>
                        <p className="text-white phones:w-[50px]">{item.month}</p>
                        <span className="text-white phones:w-[10px]">{item.post}</span>
                        <p className="text-white w-[80px]">{item.Time.slice()}</p>
                        <p className="text-white phones:w-[80px]">{item.text}</p>

                      </li>
                    </ul>
                  </div>
                );
              })
            )}
   </>
  )
}
