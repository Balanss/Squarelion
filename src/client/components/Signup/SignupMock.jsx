import React,{useEffect,useState} from 'react'
import logo from "../images/Logo.png"

export default function SignupMock({setCode,code}) {



  return (<>
  <div className='fixed w-[100%] h-[100%] bg-sky-100 '>
  <div className=''> </div>
    <div className='' >
     
       <div className=' absolute inset-0 flex flex-col items-center flex-wrap top-[300px]'>
        <div className='text-center p-20 rounded-sm bg-slate-400'>
          
        <h2 className='text-3xl mb-10'> Enter Code </h2>
        <input type="number" onChange={(e) => setCode(e.target.value)} />
        <br />
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         onClick={() => setCode(code)} style={{marginTop:'15px'}}> Enter   <svg className="ml-3 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
       </svg></button>

        {/* <img src={logo} style={{width:'60px'}}/> */}
        </div>
          
       </div>
     
    </div>
  </div>
 
    </>)
}
