/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import check from '../images/check.png'
import error from '../images/error.png'
import wip from '../images/wip.png'
import { format } from 'date-fns';
import axios from 'axios'


export default function ButtonPress({objective,type,date,post,page,month,setObjective,qty,user}) {


  const [ doubleCheck,setDoubleCheck] = useState(false)
  const [ timer,setTimer] = useState('waiting')
  const [ aiReply,setAiReply] = useState('')
    
const [ succ,setSucc] = useState()

// const [parsedDate,setParsedDate] = useState(new Date(month))
const [monthInWords,setMonthInWords] = useState('')


const sendToZapier = async (payload) => {
  const zapierURL = import.meta.env.VITE_ZAP_SEND_CONTENT;
  try {
    const response = await fetch(zapierURL, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(payload),
    });
    const resp = await response.json();
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
};


useEffect(() => {
  const parsedDate = new Date(month)
  const adjustedMonth = parsedDate.getMonth() + 1;
  // Set the adjusted month in words
  setMonthInWords(format(new Date(parsedDate.getFullYear(), adjustedMonth ), 'MMMM '));

  
},[month,monthInWords]);



    async function handleData(){
      // Format the month as a string of words
  if (objective && type && date !== ''   ){
    const leadData = {
     date:date,
      type: type,
      objective: objective,
       count: post,
       status: 'pending',
       color:'orange',
       statusText:'pending',
       month:month,
       user:user,
      countNoti : 1,
      client:page,
      content:objective,
      channel:type,
      monthInWords:monthInWords,
      answer:aiReply,
    

    };

    try {
      await sendToZapier(leadData);
      // Additional code to execute after sending data to Zapier, if needed
    } catch (error) {
      console.log(error);
    }


    setTimeout(() => {
      setObjective('')
    },1000)

    setSucc(check)
    setTimeout(() => {
      setSucc('')
    },2000)
   
   } else {
    setSucc(error)
    setTimeout(() => {
      setSucc('')
    },2000)
   }


// fs.collection('partner').doc(page).set({
//   status: qty - -1,
// },{merge:true})


      }



      const endpoint =
    
      import.meta.env.VITE_STACK_API; // gilmonpurry
    
    const headers = {
      Authorization: `Bearer ${import.meta.env.VITE_STACK}`, // hide
      'Content-Type': 'application/json'
    };
    
    const callEndpoint = async (objective) => {
      const data = {
        'in-0': objective
      };
    
      try {
        const response = await axios.post(endpoint, data, { headers });
        return response.data['out-0'];
      } catch (error) {
        throw new Error(`stack-error:${error}`);
      }
    };
    
    
      const [inputOne, setInputOne] = useState('');

      
      const handleAI = async () => {
        try {
          const apiResponse = await callEndpoint(objective);
          // Do something with apiResponse
          setAiReply(apiResponse);
          setTimer('loading');
         
        } catch (error) {
          console.error(error);
        }
      
        
      };

      useEffect(() => {
        const check = () => {
          if (aiReply !== '') {
            setTimer('responded');
          }
        };
    
        const interval = setInterval(check, 1000); // Check every 1 second (adjust the interval as needed)
    
        // Clean up the interval when the component unmounts or when the aiReply becomes non-empty
        return () => clearInterval(interval);
      }, [aiReply]);

   

  return (<> 

  
   
  <section>

{timer !== 'loading' &&   <button  onClick={handleData} className= 'opacity-100   relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800' >
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Post Content 
  </span>
</button>}

{timer === 'loading' && 
  <button disabled  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
    <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Loading...
</button>}

  </section>


<section >

<div className='lg:flex lg:flex-wrap lg:items-center lg:flex-row lg:w-[300px] lg:justify-evenly gap-1 text-center bg-slate-400 shadow-md text-black font-bold mb-10 p-2
md:mt-5'>

<h1 > Use AI to make the content right away?</h1>
<button disabled={objective  === ''? true : false}
 className={`${objective  === ''? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'} mb-4 mt-4 mr-3 w-35 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-ble-500 hover:text-black shadow-md py-2 px-6 inline-flex items-center' 
 `}
  onClick={() => {handleAI()}} >  Yes </button>

<button className='cursor-pointer   w-35 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center' 
onClick={handleData}>  No </button>

</div>


</section>


{/* <div class="absolute  inset-0 h-screen bg-opacity-50 bg-gray-500">

  <div class=" w-[400px]  p-8 bg-white shadow-md">

    <h1 class="text-2xl font-bold w-[400px]">{aiReply}</h1>

  </div>
</div> */}



   

  
   
   

   
    </>
  )
}
