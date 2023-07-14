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

    
const [loading,setLoading] = useState(true)

useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  },500)
},[])






useEffect(() => {
  // Send count to server whenever it changes
  axios.post('/api/logCount', { user })
    .then(response => {
      console.log(response.data); // Log the response from the server if needed
    })
    .catch(error => {
      console.error(error);
    });
}, [user]);


  return (<> 



  {loading === false &&  <>
  
    <div className='bg-gray-100 flex justify-center  pb-4 pt-4 border-b-yellow-500 border-solid border-2' ><Nav  /></div>
    <Title/>
    <User setUser={setUser} user={user} level={level} setLevel={setLevel} setUuid={setUuid} uuid={uuid}/>


  <div className='bg-slate-200 h-[100vh]'>

<div className='bg-blue-950   border-solid border-b-2 border-yellow-500 sm:pt-10'> 
    <img src={useLogo} alt="logo" className='w-30 m-auto bg-gray-200 max-w-xs p-4  '  />
    <h2 className=' text-white text-center p-5 sm:w-3/4 m-auto lg:w-85 lg:max-w-[35%]'>
    Duis lobortis consequat eros, vitae pretium ipsum ultricies quis. Nam porta massa et rutrum eleifend. Suspendisse potenti. Nulla facilisi. Ut vel feugiat magna. Fusce vitae libero arcu. Nam dignissim felis ex, 
    nec porta nulla vehicula non. Donec urna erat,
     pharetra ut fermentum vitae, pretium quis elit. Cras pellentesque magna nisi. </h2>
</div>

<div  className='border-solid border-b-2 border-yellow-500 sm:flex sm:justify-center sm:items-center sm:pb-20 sm:pt-10 
md:flex md:items-center lg:w-3/4 lg:m-auto '> 
<img src={useLogo} alt="logo"  className='w-30 m-auto bg-gray-200 max-w-xs p-4'/>
    <h2  className='p-4 text-center  lg:max-w-[45%] xg:max-w-[55%]'>
    Duis lobortis consequat eros, vitae pretium ipsum ultricies quis. Nam porta massa et rutrum eleifend. Suspendisse potenti. Nulla facilisi. Ut vel feugiat magna. Fusce vitae libero arcu. Nam dignissim felis ex, 
    nec porta nulla vehicula non. Donec urna erat,
     pharetra ut fermentum vitae, pretium quis elit. Cras pellentesque magna nisi. </h2>
</div>


   <div className=' bg-gray-100  sm:relative  sm:bg-transparent  sm:bottom-10'> 
    <img src={useLogo} alt="logo"  className='w-30 m-auto  max-w-xs p-4 sm:bg-slate-200'  />
    <h2 className='w-3/4 m-auto pb-5 md:w-[400px]'>
    Duis lobortis consequat eros, vitae pretium ipsum ultricies quis. Nam porta massa et rutrum eleifend. Suspendisse potenti. Nulla facilisi. Ut vel feugiat magna. Fusce vitae libero arcu. Nam dignissim felis ex, 
    nec porta nulla vehicula non. Donec urna erat,
     pharetra ut fermentum vitae, pretium quis elit. Cras pellentesque magna nisi. </h2>
     <div className='text-center'>
     <button class=" relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
     <Link to ='/partnerProgram'  className='flex items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'> Join us as a partner </Link>
</button>
     </div>

    
</div> 



  </div>
  <div className='border-solid border-t-2  border-yellow-500'>
    <Footer  />
  </div>


  </>} 


  {loading === true &&  <>
       <Loading/>
      </>}
   
  </>  )
}
