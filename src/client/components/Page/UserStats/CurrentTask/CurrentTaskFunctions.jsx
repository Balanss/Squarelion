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
      }, [month]); // Only call getData when the component mounts and when user or month changes

   
 
    
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
                                            AssignedTo: item.AssignedTo,
                                            month: item.month,
                                            post: item.count,
                                            Time: item.Time,
                                        }
                                    : null;
                            })
                            .filter(item => item !== null)
                            .sort((a, b) => a.order - b.order); // Sort by order in ascending order
                    } else {
                       
                        return [];
                    }
                })
        );

        const results = await Promise.all(promises);
        const matchingDataArray = results.flat();

        // Update state
        const filteredData = matchingDataArray.filter(item => item.AssignedTo === user);
        setMatchingData(filteredData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

useEffect(() => {
    fetchData();
}, [month]); // Add dependencies here




  return (
   <>
            {matchingData.length === 0 ? (
              <h1 className='text-left'>No current task</h1>
            ) : (
              matchingData.map((item, index) => (
                user === item.AssignedTo ? (
                  <div className="max-h-500px phones:max-h-300px overflow-y-auto" key={item.id || index}>
                    <li className="flex flex-row items-center justify-between" >
                      <div className="flex flex-row items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <p className="text-white">{item.client}</p>
                      </div>
                      <p className="text-white">{item.month}</p>
                      <p className="text-white">{item.post}</p>
                      <p className="text-white">{item.Time}</p>
                    </li>
                  </div>
                ) : null
              ))
            )}
   </>
  )
}
