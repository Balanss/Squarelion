/* eslint-disable no-unused-vars */
import Nav from '../Nav'
import React,{useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
import { auth, fs,db } from '/src/client/Firebase.jsx'
import useLogo from '../images/useLogo.png'
import User from '../User'
import Footer from './Footer'
import axios from 'axios'
import Loading from '../Loading'
import Title from '../../Title'




export default function Home() {





    const [user,setUser] = useState('')
    const [ level,setLevel] = useState('')
    const [uuid,setUuid] = useState('')

    

    useEffect(() => {
      // Send user data to the server whenever it changes
      axios.post('http://localhost:5173/', { user })
        .then(response => {
          console.log(response.data); // Log the response from the server if needed
        })
        .catch(error => {
          console.error(error);
        });
    }, [user]);
    



const [isVisible, setIsVisible] = useState(true);
const [zIndex, setZIndex] = useState(0);

useEffect(() => {
  // Set the highest z-index value when the component is mounted
  setZIndex(9999);

  // After 500ms, set the visibility to false (display none)
  const timeout = setTimeout(() => {
    setIsVisible(false);
  }, 800);

  // Clean up the timeout when the component is unmounted
  return () => clearTimeout(timeout);
}, []);


  return (<> 




  
    <div
      className={`absolute inset-0 ${isVisible ? 'block' : 'hidden'}`}
      style={{ zIndex, backgroundColor: 'white' }}
    >
    <Loading/>
    </div>

    <div className='bg-gray-100 flex justify-center  pb-4 pt-4 border-b-yellow-500 border-solid border-2 flex-col' ><Nav  /></div>
    <Title/>
    <User setUser={setUser} user={user} level={level} setLevel={setLevel} setUuid={setUuid} uuid={uuid}/>


  <div className='bg-slate-200 '>

<div className='bg-blue-950   border-solid border-b-2 border-yellow-500 sm:pt-10'> 
    <img src={useLogo} alt="logo" className='w-30 m-auto bg-gray-200 max-w-xs p-4  '  />
    <h2 className=' text-white text-center p-5 sm:w-3/4 m-auto lg:w-85 lg:max-w-[35%]'>
   Welcome to Squarelion.
   {<br />}
    Professional branding services for serious businesses.
No kidding, we do the magic!
 </h2>
 <h1 className='text-white text-center text-xl p-5 sm:w-3/4 m-auto lg:w-85 lg:text-3xl lg:max-w-[35%]'>  UNLEASH THE POWER OF YOUR BRAND  </h1>
</div>

<div  className='border-solid border-b-2 border-yellow-500 sm:flex sm:justify-center sm:items-center sm:pb-20 sm:pt-10 
md:flex md:items-center lg:w-3/4 lg:m-auto '> 
<img src={useLogo} alt="logo"  className='w-30 m-auto bg-gray-200 max-w-xs p-4'/>
    <h2  className='p-4 text-center  lg:max-w-[45%] xg:max-w-[55%]'>
    We know that we can add value to any serious business whether they are small, medium, large and international corporations.
Do you want to maximize your return on investment for your marketing and brand communication activities? 

 </h2>


</div>


   <div className=' bg-gray-100  sm:relative  sm:bg-transparent  sm:bottom-10'> 
    <img src={useLogo} alt="logo"  className='w-30 m-auto  max-w-xs p-4 sm:bg-slate-200'  />
    <h2 className='w-3/4 m-auto pb-5 md:w-[400px]'>
    This is Squarelion Tech  hub of creativity and innovation, where talented minds work diligently to produce exceptional content for its audience.
     To discover more about Squarelion and explore their offerings.
    </h2>

    <h1 className='text-center text-xl p-5 sm:w-3/4 m-auto lg:w-85 lg:text-3xl lg:max-w-[35%]'> Visit our website for detailed information.  </h1>
     <div className='text-center'>
     <button className=" relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
     <a href='https://squarelion.agency/'  className='flex items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>  HERE </a>
</button>
     </div>

    
</div> 



  </div>
  <div className='border-solid border-t-2  border-yellow-500'>
    <Footer  />
  </div>


 




   
  </>  )
}
