import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { auth, fs,db } from '../../Firebase'
import {collection,deleteDoc,doc,updateDoc} from "firebase/firestore";
import ai from '../images/artificial-intelligence.png'

export default function Sure({setReplyAi,setObjectiveAnswer,objectiveAnswer,subject,page,typeAnswer,user,month}) {


  //this used for ai to make content will get overhaul later
  

  const endpoint =

 import.meta.env.VITE_STACK_API; // gilmonpurry

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_STACK}`, // 
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
  const [ btnOff,setBtnOff] = useState(false);


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

  function handleButton(){
    setBtnOff(true);

    setTimeout(() => {
      setBtnOff(false);
    },6000)
    
  }

  const handleInputChange = (event) => {
    setInputOne(event.target.value);
  };

  async function handleData(){
if(inputOne > ''){

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


 const [ hoverYes,setHoverYes] = useState('')



const handleMouseEnter =  () => {
  setHoverYes('Note : Once the button is pressed for " AI Response " it will take a few seconds for the ai to post your message in the textfield')
};

const handleMouseLeave =  () => {
  setHoverYes('')
};



  return (
    <div className='lg:w-[600px] lg:flex lg:flex-row lg:items-center lg:justify-around'>
      <input type="text" value={inputOne} onChange={handleInputChange} className='text-black mr-[6px] lg:mr-4' placeholder='Write prompt here'/>
      <button onClick={() => { handleClick(),handleButton()}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={btnOff === true ? true : false} 
              className={` ${btnOff? 'opacity-50 cursor-not-allowed w-35  bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"'  :
               'opacity-100 cursor-pointer w-35  bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"'}`}>
              <span className="mx-auto">AI Response</span>
            </button>


            {hoverYes > '' ? <div className='fixed bottom-0 bg-white text-black z-[1000] w-full h-20 text-center'>
<h3 className='mt-5 font-serif text-xl'> {hoverYes} </h3>
</div> : null}



      <button onClick={handleData} className="relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Add Text Content
  </span>
</button> 
      
    </div>
  );
}
