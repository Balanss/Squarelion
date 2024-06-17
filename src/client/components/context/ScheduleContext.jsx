import React, { useState, useEffect, createContext,useMemo, useContext } from 'react';
import { auth, fs } from '../../Firebase';
import { UserContext } from './UserContext';





export const ScheduleContext = createContext(null);

export default function ScheduleProvider({ children }) {
    const [uuid, setUuid] = useState(null);
    const [dataNoting, setDataNoting] = useState([]);
    const [detailedData, setDetailedData] = useState({});
    const [postSchedule, setPostSchedule] = useState([]);
    const [rounded, setRounded] = useState([]);
    const [number, setNumber] = useState(10);
    const {user} = useContext(UserContext)



    
  const getData = () => {
    try {
      const unsubscribe = fs.collection("partner")
        .onSnapshot(querySnapshot => {
          const dataArray = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setDataNoting(dataArray.map(x => x.name));
        });
      return unsubscribe;
    } catch (error) {
      console.error("Error fetching data: ", error);
      // TODO: Show an error message to the user
    }
  };



  useEffect(() => {
    getData();
  }, []);





  

const getRound = async () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // getMonth() is zero-based
  const currentDate = today.getDate();
  const id = `${currentYear}-${currentMonth < 10 ? `0${currentMonth}` : currentMonth}`;

  let unsubscribeFunctions = []; // Store unsubscribe functions

  try {
    // console.log(`Fetching documents for each partner`); // Debugging log

    dataNoting.forEach(partner => {
      const unsubscribeItem = fs.collection(partner) // Use partner.collectionName
        .doc(id)
        .onSnapshot(doc => {
          if (doc.exists) {
            const data = doc.data();
            // console.log(`Received data for ID: ${id} from collection: ${partner}`); // Debugging log

            // Filter the data to get the relevant information
            const filteredData = Object.keys(data).map(key => {
              const item = data[key];
              return item.date === currentDate.toString()
                ? {
                    month: item.month,
                    date: item.date,
                    status: item.status,
                    type: item.type,
                    unid: item.unid,
                    user: item.user,
                    client: item.client,
                    color: item.color,
                    partner: partner.name // Add partner name for identification
                  }
                : null;
            }).filter(item => item !== null);

            setRounded(  data); // Keep this if you need the full data
            setPostSchedule((prevSchedule) => [...prevSchedule, ...filteredData]);
          } else {
            console.log(`No document found for ID: ${id} in collection: ${partner.collectionName}`);
          }
        });

      unsubscribeFunctions.push(unsubscribeItem); // Accumulate unsubscribe functions
    });

    return () => {
      unsubscribeFunctions.forEach(unsubscribe => unsubscribe()); // Unsubscribe all
    };
  } catch (error) {
    console.log("Error loading data", error);
    return () => {
      unsubscribeFunctions.forEach(unsubscribe => unsubscribe()); // Ensure cleanup on error
    };
  }
};



console.log(postSchedule)

  useEffect(() => {
    const unsubscribe = getRound();

  
  }, [user]);

  




  
    const value = useMemo(() => ({postSchedule,number,setNumber}),[postSchedule,number,setNumber]);

    return <ScheduleContext.Provider value={value}>{children}</ScheduleContext.Provider>;
}