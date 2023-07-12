/* eslint-disable no-unused-vars */
import Nav from '../Nav'
import React,{useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
import { auth, fs,db } from '/src/Firebase.jsx'
import useLogo from '../images/useLogo.png'
import User from '../User'
import Footer from './Footer'
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




  return (<> 



  {loading === false &&  <>
  
    <div className='bg-gray-100 flex justify-center  pb-4 pt-4 border-b-yellow-500 border-solid border-2' ><Nav  /></div>
    <Title/>


  <div className=''>

<div> 
<div className='relative before:absolute before:bg-[url("./components/images/bg/small.jpg")] before:-inset-1
before:w-screen before:h-screen before:background-size:cover before:bg-no-repeat' >

</div>
<div className='relative'>
<img src={useLogo} alt="logo" className='' />
    <h2 className=''>
    Duis lobortis consequat eros, vitae pretium ipsum ultricies quis. Nam porta massa et rutrum eleifend. Suspendisse potenti. Nulla facilisi. Ut vel feugiat magna. Fusce vitae libero arcu. Nam dignissim felis ex, 
    nec porta nulla vehicula non. Donec urna erat,
     pharetra ut fermentum vitae, pretium quis elit. Cras pellentesque magna nisi. </h2>
</div>
    
</div>

<div  className=''> 
<img src={useLogo} alt="logo"  className=''/>
    <h2  className=''>
    Duis lobortis consequat eros, vitae pretium ipsum ultricies quis. Nam porta massa et rutrum eleifend. Suspendisse potenti. Nulla facilisi. Ut vel feugiat magna. Fusce vitae libero arcu. Nam dignissim felis ex, 
    nec porta nulla vehicula non. Donec urna erat,
     pharetra ut fermentum vitae, pretium quis elit. Cras pellentesque magna nisi. </h2>
</div>

<div >
   <div className=''> 
    <img src={useLogo} alt="logo"  />
    <h2 className=''>
    Duis lobortis consequat eros, vitae pretium ipsum ultricies quis. Nam porta massa et rutrum eleifend. Suspendisse potenti. Nulla facilisi. Ut vel feugiat magna. Fusce vitae libero arcu. Nam dignissim felis ex, 
    nec porta nulla vehicula non. Donec urna erat,
     pharetra ut fermentum vitae, pretium quis elit. Cras pellentesque magna nisi. </h2>
     <Link to ='/partnerProgram' > Join us as a partner </Link>
</div> 
</div>


  </div>
<Footer />

  </>} 


  {loading === true &&  <>
       <Loading/>
      </>}
   
  </>  )
}
