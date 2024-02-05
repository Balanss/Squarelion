import React,{useEffect, useState} from 'react'
import LeaveFunctions from './LeaveFunctions'


export default function App({user}) {

  const [month, setMonth] = useState('');
  const [monthNumber, setMonthNumber] = useState('');
  const [data, setData] = useState([]);

  const handleMonthChange = (e) => {
    setMonth(e.target.value); // update the state with the new value (the month string)
    const monthString = e.target.value.split('-')[1]; // get the month part of the string
    setMonthNumber(parseInt(monthString, 10)); // parse the month to an integer and update the state
  };

const [ mappedObjects , setMappedObjects ] = useState([]);

useEffect(() => {
  if (data[0]) {
    const innerObjects = Object.values(data[0]);
    setMappedObjects( innerObjects.map(obj => ({type: obj.type, to: obj.to, from: obj.from})))
  
  
  } else {
    console.log('data[0] is undefined or null');
  }
}
, [data]);

  



  return (
    <div className="inline-flex bg-secondary flex-col mt-10 gap-5 lg:w-[35vw] border border-y-[#2c1f42] border-x-[#2f3763]  p-4 max-h-[400px] lg:max-h-[800px] overflow-y-auto" >
      <LeaveFunctions user={user} monthNumber={monthNumber} setData={setData} />
    <section className="flex flex-col items-start justify-between w-screen">
<h2 className="text-white mb-2 phones:text-lg  text-2xl font-semibold">Current Leave</h2>
<label>  Month: <input type="month" value={month} onChange={handleMonthChange} className='text-black mb-2'/> </label>
<hr className='bg-white w-full' />
{mappedObjects.map((item, index) => (
  
  <div key={index} className='flex flex-col gap-2 text-white '>
    <section className='flex flex-row gap-10 overflow-y-scroll '>
          <p className='text-white'>type: {item.type}</p>
    <p className='text-white'>From: {item.from}</p>
    <p className='text-white'>To: {item.to}</p>
    <p className='text-white'>User: {item.user}</p>
    
    </section>

  </div>  
))}
</section>
 </div>
  )
}
