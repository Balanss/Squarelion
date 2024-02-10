import React,{useEffect, useState,useContext} from 'react'
import LeaveFunctions from './LeaveFunctions'
import { UserContext } from '../../context/UserContext';
import { collection, doc, increment, setDoc } from 'firebase/firestore';
import { db } from '../../../Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function App() {

  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));
  const [monthNumber, setMonthNumber] = useState('');
  const [data, setData] = useState([]);
  const [checkMonth, setCheckMonth] = useState([]);
 

  const {user,pto,wfh,level} = useContext(UserContext);

  const handleMonthChange = (e) => {
    setMonth(e.target.value); // update the state with the new value (the month string)
    const monthString = e.target.value.split('-')[1]; // get the month part of the string
    setMonthNumber(parseInt(monthString, 10)); // parse the month to an integer and update the state
  };

const [ mappedObjects , setMappedObjects ] = useState([]);

useEffect(() => {
  if (data[0]) {
    const innerObjects = Object.values(data[0]);
    setMappedObjects( innerObjects.map(obj => ({type: obj.type, to: obj.to, from: obj.from, user: obj.user,accepted:obj.accepted,askedOn:obj.askedOn,id:obj.uuid})))
  } else {
    console.log('data[0] is undefined or null');
  }
}
, [data]);


  
const [ granted, setGranted] = useState('');
const [ask, setAsk] = useState('waiting');
 const [selectedUser, setSelectedUser] = useState('none')
 const [type, setType] = useState('0')
 const [id,setId] = useState('0')

const handleClicked = () => {
  setGranted('Granted');
}

const handleDeny = () => {
  setGranted('Denied');
}



useEffect(() => {
  if (granted === 'Granted' ) {
    toast.success(`granted`);

    const docRef = collection(db, 'Request');  
    const clRef = doc(docRef, `${selectedUser}`);

    setDoc(clRef, {
      [`${ask}`]: {
        accepted: true,
      }
    }, { merge: true });

setTimeout(() => {
  setGranted('');
  setAsk('');
  setSelectedUser('');
  setType('');
}, 1000);

  
  } else if (granted === 'Denied') {
    toast.error(`Denied`);

    const docRef = collection(db, 'Request');  
    const clRef = doc(docRef, `${selectedUser}`);
    setDoc(clRef, {
      [`${ask}`]: {
        accepted: false,
      }
    }, { merge: true });

    const dRef = collection(db, 'admin');
    const cRef = doc(dRef, id);
    setDoc(cRef, {
    [type]: increment(1)
    }, { merge: true });

    setTimeout(() => {
      setGranted('');
      setAsk('');
      setSelectedUser('');
      setType('');
    }, 3000);
    
  }
}, [granted]);




  return (
    <div className="inline-flex bg-secondary flex-col mt-10 gap-5 lg:w-[35vw] border border-y-[#2c1f42] border-x-[#2f3763] phones:p-8 phones:w-screen phones:m-auto  p-4 max-h-[400px] lg:max-h-[800px] overflow-x-auto overflow-y-auto" >
      <LeaveFunctions user={user} monthNumber={monthNumber} setData={setData} />
      <ToastContainer position='top-center' />
    <section className="flex flex-col items-start justify-between w-screen ">
<h2 className="text-white mb-2 phones:text-lg  text-2xl font-semibold">Current Leave</h2>
<label>  Month: <input type="month" value={month} onChange={handleMonthChange} className='text-black mb-2'/> </label>
<hr className='bg-white w-full ' />
{mappedObjects && mappedObjects.length > 0 ? (
  mappedObjects.map((item, index) => (
    <div key={index} className='flex flex-col gap-2 text-white '>
      {(user === item.user && level > 7 || level > 9) && month === item.from.slice(0,7) && (
        <section className='flex flex-row gap-10  phones:gap-1 items-center mt-5 max-h-[300px] phones:text-xs'>
          <p className='text-white phones:w-[100px]'>type: {item.type}</p>
          <p className='text-white phones:w-[100px]'>From: {item.from}</p>
          <p className='text-white phones:w-[100px]'>To: {item.to}</p>
          <p className='text-white w-[120px]'>User: {item.user}</p>
          <p className={`${item.accepted !== ""? 'flex' : 'hidden'} phones:w-[100px]`}>Accepted: {item.accepted? "Granted":'Denied'}</p>
          <p className={`${item.accepted === ""? 'flex' : 'hidden'} text-white phones:w-[100px]`}>Waiting</p>
          {level > 9 && (
            <>
              <button className={`bg-blue-500 text-white p-2 rounded ${item.accepted? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`} disabled={item.accepted? true:false} onClick={() => {handleClicked(); setAsk(item.askedOn); setSelectedUser(item.user),setId(item.id)}}>Grand</button>
              <button className={`bg-red-500 text-white p-2 rounded  ${!item.accepted  ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`} disabled={!item.accepted ? true :false} onClick={() => {handleDeny(); setAsk(item.askedOn); setSelectedUser(item.user);  setType(item.type), setId(item.id)}}>Deny</button>
            </>
          )}
        </section>
      )}
    </div>  
  ))
) : (
  <h1 className='text-center mt-5 text-5xl font-bold'>No current leave</h1>
)}
</section>
 </div>
  )
}
