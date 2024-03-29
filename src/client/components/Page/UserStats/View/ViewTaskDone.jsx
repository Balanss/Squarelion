import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ViewTaskFunction from './ViewTaskFunction';




export default function ViewTaskDone({user}) {

    const [data, setData] = useState([]);
    const [matchingData, setMatchingData] = useState([]);
    const [ month, setMonth ] = useState('');

    
    const date = new Date();
    const year = date.getFullYear().toString();
    const currentMonth = (date.getMonth() + 1).toString().padStart(2, '0'); // JavaScript months are 0-indexed

  

    useEffect(() => {
        setMonth(`${year}-${currentMonth}`);
    }
    , [currentMonth]);
      

 

  return (
    <div className="inline-flex bg-secondary flex-col mt-10 gap-5 w-[70vw] m-auto border border-y-[#2c1f42] border-x-[#2f3763] phones:max-h-[200px] phones:w-screen phones:m-auto  phones:px-10 phones:py-10 p-4 max-h-[400px] lg:max-h-[500px] rounded overflow-x-auto overflow-y-auto" >
            <section className="flex flex-col items-start justify-between">
      <h2 className="text-white mb-2 phones:text-lg  text-2xl font-semibold">Latest Task Done</h2>
      <input date={date} className="bg-[#2f3763] text-white w-full p-2 rounded-md" type="month" value={month} onChange={e => setMonth(e.target.value)} />
      <hr className='bg-white w-full mt-2' />
    </section>

    <ViewTaskFunction setData={setData} month={month} data={data} user={user} setMatchingData={setMatchingData} matchingData={matchingData} />
        
         </div>
  )
}
