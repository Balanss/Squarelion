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
            const querySnapshot = await fs.collection(r)
                .where('CreatedBY', '==', user)
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
}

const getWrittenData = async () => {
    try {
        const dataArray = [];
        for (const r of round) {
            const querySnapshot = await fs.collection(r)
                .where('TextWrittenBy', '==', user)
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
}

const getUploadedData = async () => {
    try {
        const dataArray = [];
        for (const r of round) {
            const querySnapshot = await fs.collection(r)
                .where('DesignUploadedBy', '==', user)
                .get();
            const roundData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                DesignUploadedBy: doc.data().DesignUploadedBy,
                ...doc.data(),
            }));

            dataArray.push(...roundData);
        }
        setUploadedBy(dataArray);
        localStorage.setItem('uploadedBy', JSON.stringify(dataArray));
    } catch (error) {
        console.error(error);
    }
}


useEffect(() => {
    const fetchAllData = async () => {
        await Promise.all([getData(), getWrittenData(), getUploadedData()]);
    };

    fetchAllData();
}, [user, round]);






  return (


    <div className=' text-center text-white flex items-center justify-center flex-col lg:flex-row mb-5 mt-5 gap-10'>
     
<div className={`block max-w-sm p-6 md:w-[250px] lg:w-[200px] xl:w-[280px] text-left text-gray-900 dark:text-white bg-white border border-gray-200 rounded-lg shadow text-gray-900 dark:text-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 `}>
    <h5 className={` "mb-2 text-2xl font-bold tracking-tight " `}>{writtenBy.length === 0 ?  <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div> : writtenBy.length} </h5>
    <p className={`font-normal text-gray-700 dark:text-gray-400 `}>Written Content</p>
</div>

<div className={`block max-w-sm p-6 md:w-[250px] lg:w-[200px] xl:w-[280px] text-gray-900 dark:text-white bg-white border border-gray-200 rounded-lg shadow text-left  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
    <h5 className={` 'mb-2 text-2xl font-bold tracking-tight `}>{data.length === 0 ? <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div> : data.length }</h5>
    <p className={`font-normal text-gray-700 dark:text-gray-400 `}>Created Content</p>
</div>

<div className={`block max-w-sm md:w-[250px] lg:w-[240px] p-6 xl:w-[280px] bg-white border border-gray-200 rounded-lg shadow text-left hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 
`}>
    <h5 className={` 'mb-2 text-2xl font-bold tracking-tight '`}>{uploadedBy.length === 0 ? <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div> : uploadedBy.length}</h5>
    <p className={`font-normal text-gray-700 dark:text-gray-400 `}>Uploaded Design Content</p>
</div>

        
    </div>
  )
}
