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


export default function ButtonPress({objective,type,date,post,page,month,setObjective,qty,user,uniqueId,boosting}) {


  const [ doubleCheck,setDoubleCheck] = useState(false)
  const [ timer,setTimer] = useState('waiting')
  const [ aiReply,setAiReply] = useState('')
  const [ hoverYes,setHoverYes] = useState('')
  const [ hoverNo,setHoverNo] = useState('')
    
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
     uniqueId:uniqueId,
      type: type,
      objective: objective,
       count: post,
       order:post,
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
      boosting: boosting === '' ? 0 : boosting,
      Priority:'No'
  
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

  const handleMouseEnter =  () => {
    setHoverYes('Once clicked this will generate the ai to create the content, and the button will be loading, once the button is done loading click on the post content button')
  };

  const handleMouseLeave =  () => {
    setHoverYes('')
  };






 

  return (<> 

<div className="rounded-md shadow-sm mt-5 text-center" role="group">

{timer !== 'loading' &&   <button  onClick={handleData} className= 'opacity-100  px-4 py-2 text-sm pb-2 font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white' >

Post Content 
  
</button>}
{timer === 'loading' && 
  <button disabled  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Loading...
</button>}


<button disabled={objective   === ''? true : false}
 className={`${objective  === ''? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'} ml-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white' 
 `}
  onClick={() => {handleAI()}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >  AI Write Content </button>



</div>
   

{hoverYes > '' ? <div className='fixed bottom-0 bg-white text-black z-[1000] w-full h-20 text-center'>
<h3 className='mt-5 font-serif text-xl'> {hoverYes} </h3>
</div> : null}





   

  
   
   

   
    </>
  )
}
