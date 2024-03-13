import React,{useState,useContext,useEffect} from 'react'
import fb from '../../../assets/facebook.png'
import { UserContext } from "../../context/UserContext";
import { UpdatedPageContext } from "../../context/UpdatedPageContext";
import { db } from "../../../firebase";
import { collection, doc, setDoc,getDoc,onSnapshot,updateDoc } from "firebase/firestore";




export default function Facebook({imageUrl,answer,month,doubleCheck,setDoubleCheck}) {

 
  const [ success, setSuccess ] = useState(false)
  const {user,uuid,level} = useContext(UserContext);
  const {page,setPage,post} = useContext(UpdatedPageContext)
  const [report, setReport] = useState('')
  const [time, setTime] = useState(false)
  const [ selectedTime, setSelectedTime ] = useState('')




  useEffect(() => {
    const docRef = doc(db, page, "Status");

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data && data[page + post + month]) {
          setReport(data[page + post + month]);
        } else {
          console.log("No such field!");
        }
      } else {
        console.log("No such document!");
      }
    });

    // Clean up function
    return () => unsubscribe();
  }, [page, post, month]); // Add dependencies here if they can change over time


  const handlePost = async() => {

    const date = new Date(selectedTime);
    const data = {
      name: page,
      content: answer,
      imageNew: imageUrl,
      id: month,
      field: post,
      // other data you want to send
    };

    if (selectedTime !== '') {
      data.time =selectedTime;
    }

 

   try {


    // const docRef = collection(db, page);
    // const colRef = doc(docRef, month);
    // await setDoc(colRef, { [post + month]: { color:'green', status:'Posted to fb', statusText:'Posted'} }, { merge: true });


       const response = await fetch(import.meta.env.VITE_SINGLE_DOC, {
           method: 'POST',
           mode: 'cors',
           headers: {
               'Content-Type': 'application/json',
             },
           body: JSON.stringify(data),

       });
       const text = await response.text();
       console.log(text);
        // setReport(`Posting to ${page} Facebook page in progress`);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);

        

   } catch (error) {
       console.error('Error:', error);
        setSuccess('Error posting to facebook');

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
   }
    
  }




  return (
    <div className='fixed  top-2 '>
      {doubleCheck && <div className=' w-[45vw] z-[10000000000000000] bg-primary text-white p-10 rounded'>
        <p>Posting to facebook will send the following data:</p>
        <p>to: {page}</p>
        <p> title: {answer}</p>
        <img src={imageUrl} alt='image' className='w-20 h-20'/>
        {level === 11 && (report.Status !== 'Posted' || report.Status !=='Error') && <>
        <button onClick={() => setTime(true)} className='bg-green-900 px-2 mt-2 ml-2 rounded hover:scale-[1.1]'>Post on selected time</button>
        {/* <button onClick={handlePost} className='bg-blue-400 px-2 mt-2 rounded hover:scale-[1.1]'>Yes,Post now</button> */}
        <button onClick={() => setDoubleCheck(false)} className='bg-red-400 px-2 mt-2 ml-2 rounded hover:scale-[1.1]'>No</button>
      
        </>}

        {time && <div className='mt-2 bg-secondary px-4 py-2'>
          <input className='text-black rounded  ' type='datetime-local' onChange={(e) => setSelectedTime(e.target.value)}/>
          {selectedTime !== '' && <button onClick={() => {handlePost();}} className='bg-green-400 px-2 mt-4 ml-2 rounded hover:scale-[1.1]'>Confirm Post</button>}
          </div>}


       <div className='mt-2 bg-secondary p-4 rounded'>
       <h1 className='font-bold tracking-widest'> Status: {report.Status} </h1>
       </div>
      </div>}

   
    </div>
  )
}
