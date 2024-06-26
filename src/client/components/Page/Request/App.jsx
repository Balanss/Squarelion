import React,{useEffect, useState,useContext} from 'react'
import LeaveFunctions from './LeaveFunctions'
import { UserContext } from '../../context/UserContext';
import { collection, doc, increment, setDoc } from 'firebase/firestore';
import { db } from '../../../Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function App() {

 const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [monthNumber, setMonthNumber] = useState(new Date().toISOString().slice(0, 7)) ;
  const [data, setData] = useState([]);
  const [checkMonth, setCheckMonth] = useState([]);
 

  const {user,pto,wfh,level} = useContext(UserContext);


const handleMonthChange = (e) => {
  const monthString = e.target.value.split('-')[1]; // get the month part of the string
  setMonth(parseInt(monthString, 10)); // parse the month to an integer and update the state

  setMonthNumber(e.target.value);
};





const handleProcess = async (item) => {
 const { user, askedOn } = item;
  
    const docRef = collection(db, 'Request');  
    const clRef = doc(docRef, `${user}`);
    
   await setDoc(clRef, {
      [`${item.month}/${item.day}`]: {
        accepted: 'Approved',
      }
    }, { merge: true });

    toast.success(`granted`);


}

async function handleDeny(item) {  
    const { uuid, type, user, askedOn } = item;
   
    const docRef = collection(db, 'Request');  
    const clRef = doc(docRef, `${user}`);
    await setDoc(clRef, {
      [`${item.month}/${item.day}`]: {
        accepted: 'Denied',
      }
    }, { merge: true });
    toast.error(`Denied`);
  
    const dRef = collection(db, 'admin');
    const cRef = doc(dRef, uuid);
    await setDoc(cRef, {
    [type]:increment(1) 
    }, { merge: true });

}

const matchingUsers = data.flatMap(outerArray => 
  outerArray.filter(innerArray => 
    innerArray.user 
  )
);




  return (
    <div className="inline-flex bg-secondary flex-col  mt-10 gap-5  border border-y-[#2c1f42] border-x-[#2f3763] phones:px-8 phones:w-screen phones:m-auto  px-4 max-h-[400px] lg:max-h-[800px] lg:overflow-y-auto" >
      <LeaveFunctions user={user} monthNumber={monthNumber} setData={setData} monthNumbers={monthNumber} pto={pto} wfh={wfh} />
      <ToastContainer position='top-center' />
    <section className="flex flex-col items-start justify-between  ">
<h2 className="text-white mb-2 phones:text-lg  text-2xl font-semibold">Current Leave</h2>
 <input type="month" value={monthNumber} onChange={handleMonthChange} className='text-white rounded-md mb-2 bg-[#2f3763]'/>
<hr className='bg-white w-full ' />

 
{matchingUsers&& matchingUsers.length > 0 ?    matchingUsers.map((item, index) => (
    <div key={index} className='flex flex-col gap-2 py-2 px-1 text-white  '>
    {(item && item.user && user === item.user && level > 7 || level > 9) && item.month === month ?  (
        <section className={`${item.accepted? 'bg-blue-900 text-white' : 'bg-red-900'} flex flex-row gap-2 lg:w-[500px]  p-2 rounded-md phones:gap-1 items-center mt-5 max-h-[300px] phones:text-xs`}>
          <p className='text-white phones:w-[100px]'>{item.type} </p>
          {level > 9 && item.accepted === 'pending' && (
            <>
              <button className={`bg-blue-500 text-white p-1 rounded `} onClick={() => { handleProcess(item)}}>Grand</button>
              <button className={`bg-red-500 text-white p-1 rounded`}  onClick={() => { handleDeny(item);}}>Deny</button>
            </>
          )} 
          <p className='text-white '>{item.user}</p>
          <p className='text-white '>Date: {item.month}/{item.day}</p>
          <p className={`${item.accepted !== ""? 'flex' : 'hidden'} phones:w-[100px]`}>{item.accepted}</p>
          <p className={`${item.accepted === ""? 'flex' : 'hidden'} text-white phones:w-[100px]`}>Waiting</p>
        
     
        </section>
      ) : (
     null
      )}
    </div>  
  ))  : <div className=' lg: min-w-[400px] phones:min-w-screen overflow-hidden'>
  <h1 className='text-center'>No current leaves</h1>
</div>}

</section>
 </div>
  )
}
