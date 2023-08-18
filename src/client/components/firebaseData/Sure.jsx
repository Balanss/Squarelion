import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { auth, fs,db } from '../../Firebase'
import {collection,deleteDoc,doc,updateDoc} from "firebase/firestore";
import ai from '../images/artificial-intelligence.png'

export default function Sure({setReplyAi,setObjectiveAnswer,objectiveAnswer,subject,page,typeAnswer,user,month}) {


  

  const endpoint =

 import.meta.env.VITE_STACK_API; // gilmonpurry

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_STACK}`, // hide 2182b0ed-c2bc-4b88-959e-2351817e3648
  'Content-Type': 'application/json'
};

const callEndpoint = async (inputData) => {
  const data = {
    'in-0': inputData
  };

  try {
    const response = await axios.post(endpoint, data, { headers });
    return response.data['out-0'];
  } catch (error) {
    throw new Error(`stack-error:${error}`);
  }
};


  const [inputOne, setInputOne] = useState('');


  const handleClick = async () => {
    try {
      const apiResponse = await callEndpoint(inputOne);
      // Do something with apiResponse
      setReplyAi(apiResponse);
      setObjectiveAnswer(apiResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setInputOne(event.target.value);
  };




  // const sendToZapier = async (payload) => {
  //   const zapierURL = 'https://hooks.zapier.com/hooks/catch/15784808/39emfvp/';
  //   try {
  //     const response = await fetch(zapierURL, {
  //       method: 'POST',
  //       mode: 'cors',
  //       body: JSON.stringify(payload),
  //     });
  //     const resp = await response.json();
  //     console.log(resp);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };





  async function handleData(){
if(inputOne > ''){
  // const leadData = {
  //   answer:objectiveAnswer,
  //   contentToSheet:subject,
  //   client:page
  //  };

  //  try {
  //    await sendToZapier(leadData);
  //    // Additional code to execute after sending data to Zapier, if needed
  //  } catch (error) {
  //    console.log(error);
  //  }


 



          fs.collection(page).doc(typeAnswer+month).set({ 
              answer:objectiveAnswer,
              status:'Waiting',
          color:'#00eaff',
          user:user,       
            },{merge:true})

              setTimeout(() => {
     setObjectiveAnswer('')
   },2000)
} else {console.log('error no content')}

 }


 


  return (
    <div className='lg:w-[600px] lg:flex lg:flex-row lg:items-center lg:justify-around'>
      <input type="text" value={inputOne} onChange={handleInputChange} className='text-black mr-[6px] lg:mr-4' placeholder='Write prompt here'/>
      <button onClick={handleClick}
              className="w-35  bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span class="mx-auto">AI Response</span>
            </button>

      <button onClick={handleData} className="relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Add Text Content
  </span>
</button> 
      
    </div>
  );
}
