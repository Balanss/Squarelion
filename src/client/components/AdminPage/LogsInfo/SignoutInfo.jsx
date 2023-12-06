import React,{useState,useEffect} from 'react'
import { db } from '../../../Firebase';
import { collection, getDocs,updateDoc } from 'firebase/firestore';
import User from '../../User';
import { arrayUnion } from 'firebase/firestore';
import { doc } from 'firebase/firestore';



export default function SignoutInfo() {

    const [entryTime, setEntryTime] = useState("");
    const [exitTime, setExitTime] = useState("");
    const [user, setUser] = useState(0);
    const [level, setLevel] = useState("");
    const [uuid, setUuid] = useState("");
    const [ clicked,setClicked] = useState(false)
    const [ local, setLocal] = useState(null)
  

    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocal(position.coords.latitude.toString());
      });
  
    }, [uuid, user]);

   
function SignoutInfo() {


    if (uuid && local === import.meta.env.VITE_LATI_COD) {
        const entryDate = localStorage.getItem("entryDate");
        const currentDate = new Date().toLocaleDateString();
       
          const currentTime = new Date().toLocaleString();
          localStorage.setItem("LogoutDate", currentDate);
        //   localStorage.setItem("LogoutTime", currentTime);
          setEntryTime(currentTime);
  
          const docRef = collection(db,'admin')
          const colRef = doc(docRef,uuid)
  
          // Update the document in Firebase map with the current date and time
          updateDoc(colRef,{LoggedOut:new Date().toLocaleString()},{merge:true})
          updateDoc(colRef,{logsOut:arrayUnion(new Date().toLocaleString())})

          console.log('logged out in office')
        
      } else {
        console.log("Not in office");
      }

setClicked(true)

setTimeout(() => {
    setClicked(false)
}, 9000);

}
  

  return (
    <> 
  <div className=''>
    <User
        setUser={setUser}
        user={user}
        level={level}
        setLevel={setLevel}
        setUuid={setUuid}
        uuid={uuid}
      />
    <button className={`bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded  ${clicked ? 'opacity-50' : ''}`} onClick={SignoutInfo} disabled={clicked}>
        {clicked ? 'Clocked Out' : 'Clock Out'}
    </button>

    

    {clicked? <span className='text-white bg-slate-700 rounded-lg p-4 '>You have successfully clocked out</span> : null}

    </div>
<div>

</div>


 </> )
}
