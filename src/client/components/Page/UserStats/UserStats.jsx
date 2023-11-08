import React from 'react'
import {useState, useEffect} from 'react'
import { auth, fs,db } from '../../../Firebase'
import Chart from 'chart.js/auto';
import { useRef } from 'react';
import wip from '../../images/wip2.svg'

export default function UserStats({user}) {

    const [round,setRound] = useState([])
    const [onlyNames,setOnlyNames] = useState([])
    const [data,setData] = useState([])
    const [uploadedBy,setUploadedBy] = useState([])
    const [writtenBy,setWrittenBy] = useState([])


    const getRound = async () => {
        try {
          const unsubscribe = fs.collection('partner')
            .onSnapshot(async (querySnapshot) => {
              const roundArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
              }));
      
                setRound(roundArray.map((doc) => doc.name));
             
            }
            );
      
          return unsubscribe;
        } 
        catch (error) {
          console.log('loading');
        }
      };
        
      
        
        useEffect(() => {
          getRound();
        }, [user]);

      

const getData = async () => {
    try {
        const dataArray = [];
        for (const r of round) {
            const querySnapshot = await fs.collection(r).get();
            const roundData = querySnapshot.docs
                .map(doc => ({
                    id: doc.id,
                    CreatedBY: doc.data().CreatedBY,
                    ...doc.data(),
                }))
                .filter(doc => doc.CreatedBY === user); // Only include documents with a CreatedBy field

              

            dataArray.push(...roundData);

        }
        setData(dataArray);
    } catch (error) {
        console.error(error);
    }
}


const getWrittenData = async () => {
    try {
        const dataArray = [];
        for (const r of round) {
            const querySnapshot = await fs.collection(r).get();
            const roundData = querySnapshot.docs
                .map(doc => ({
                    id: doc.id,
                    TextWrittenBy: doc.data().TextWrittenBy,
                    ...doc.data(),
                }))
                .filter(doc => doc.TextWrittenBy === user); // Only include documents with a CreatedBy field

              

            dataArray.push(...roundData);

        }
        setWrittenBy(dataArray);
    } catch (error) {
        console.error(error);
    }
}

const getUploadedData = async () => {
    try {
        const dataArray = [];
        for (const r of round) {
            const querySnapshot = await fs.collection(r).get();
            const roundData = querySnapshot.docs
                .map(doc => ({
                    id: doc.id,
                    DesignUploadedBy: doc.data().DesignUploadedBy,
                    ...doc.data(),
                }))
                .filter(doc => doc.DesignUploadedBy === user); // Only include documents with a CreatedBy field

              

            dataArray.push(...roundData);

        }
        setUploadedBy(dataArray);
    } catch (error) {
        console.error(error);
    }
}


useEffect(() => {
    getData();
    getWrittenData();
    getUploadedData();
}, [user, round]);


// console.log(writtenBy)



// const chartRef = useRef(null);
// const chartInstanceRef = useRef(null);

// useEffect(() => {
//     if (chartRef && chartRef.current) {
//         const myChartRef = chartRef.current.getContext('2d');

//         if (chartInstanceRef.current) {
//             chartInstanceRef.current.destroy();
//         }

//         chartInstanceRef.current = new Chart(myChartRef, {
//             type: 'pie',
//             data: {
//                 labels: ['Created','Written','Uploaded'],
//                 datasets: [
//                     {
//                         label: 'Dataset',
//                         data: [
//                             data.length,
//                             writtenBy.length,
//                             uploadedBy.length,
//                         ], // Each data point is 1, so the pie chart segments will represent the count of data
//                         // Each data point is 1, so the pie chart segments will represent the count of data
//                         backgroundColor: [
//                             'rgba(255, 99, 132, 1)',
//                             'rgba(54, 162, 235, 1.2)',
//                             'rgba(255, 206, 86, 1.2)',
//                             'rgba(75, 192, 192, 1.2)',
//                         ],
//                         borderColor: [
//                             'rgba(255, 99, 132, 1)',
//                             'rgba(54, 162, 235, 1)',
//                             'rgba(255, 206, 86, 1)',
//                             'rgba(75, 192, 192, 1)',
//                         ],
//                         borderWidth: 1,
//                     },
//                 ],
//             },
//             options: {
//                 responsive: true,
//                 plugins: {
//                     legend: {
//                         position: 'top',
//                     },
//                     title: {
//                         display: true,
//                         text: 'Chart #1',
//                         color: 'white',
                      
//                     },
//                 },
//             },
//         });
//     }
// }, [data]); // Add data as a dependency to the useEffect hook


  return (


    <div className=' text-center text-white flex items-center justify-center flex-col lg:flex-row mb-5 mt-5 gap-10'>
     
<div className="block max-w-sm p-6 md:w-[250px] lg:w-[200px] xl:w-[280px] text-left bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{writtenBy.length} </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Written Content</p>
</div>

<div className="block max-w-sm p-6 md:w-[250px] lg:w-[200px] xl:w-[280px] bg-white border border-gray-200 rounded-lg shadow text-left hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.length}</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Created Content</p>
</div>

<div className="block max-w-sm md:w-[250px] lg:w-[240px] p-6 xl:w-[280px] bg-white border border-gray-200 rounded-lg shadow text-left hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{uploadedBy.length}</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Uploaded Design Content</p>
</div>

        
    </div>
  )
}
