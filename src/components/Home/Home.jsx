/* eslint-disable no-unused-vars */
import Nav from '../Nav'
import React,{useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
import { auth, fs,db } from '/src/Firebase.jsx'
import useLogo from '../images/useLogo.png'
import User from '../User'
import Footer from './Footer'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


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

<User level={level}  setLevel={setLevel} setUuid={setUuid} setUser={setUser} />

  {loading === false &&  <>
  
    <div className='home-container'><Nav  /></div>

  <div>

<div className='home-logo-text'> 
    <img src={useLogo} alt="logo" className='front-page-logo' />
    <h2 className='home-logo-text-text'>
    Duis lobortis consequat eros, vitae pretium ipsum ultricies quis. Nam porta massa et rutrum eleifend. Suspendisse potenti. Nulla facilisi. Ut vel feugiat magna. Fusce vitae libero arcu. Nam dignissim felis ex, 
    nec porta nulla vehicula non. Donec urna erat,
     pharetra ut fermentum vitae, pretium quis elit. Cras pellentesque magna nisi. </h2>
</div>

<div style={{backgroundColor:'#174174'}} className='home-2nd-banner'> 
<img src={useLogo} alt="logo"  className='front-page-logo-2nd'/>
    <h2 style={{margin:'0 auto',color:'white',marginBottom:'50px'}} className='text-info-2nd'>
    Duis lobortis consequat eros, vitae pretium ipsum ultricies quis. Nam porta massa et rutrum eleifend. Suspendisse potenti. Nulla facilisi. Ut vel feugiat magna. Fusce vitae libero arcu. Nam dignissim felis ex, 
    nec porta nulla vehicula non. Donec urna erat,
     pharetra ut fermentum vitae, pretium quis elit. Cras pellentesque magna nisi. </h2>
</div>

<div style={{  borderBottom: '5px solid gold'}}>
   <div className='home-3rd-banner'> 
    <img src={useLogo} alt="logo" style={{width:'300px',margin:'0 auto',backgroundColor:'white'}} />
    <h2 className='home-logo-text-text'>
    Duis lobortis consequat eros, vitae pretium ipsum ultricies quis. Nam porta massa et rutrum eleifend. Suspendisse potenti. Nulla facilisi. Ut vel feugiat magna. Fusce vitae libero arcu. Nam dignissim felis ex, 
    nec porta nulla vehicula non. Donec urna erat,
     pharetra ut fermentum vitae, pretium quis elit. Cras pellentesque magna nisi. </h2>
     <Link to ='/partnerProgram' style={{paddingBottom:'10px'}}> Join us as a partner </Link>
</div> 
</div>

{/* <div className='home-4th-banner'> 
<div className='home-4th-banner-inner'>
        <img src={useLogo} alt="logo" className='front-page-logo-last' />
    <h2 className='home-logo-text-text' style={{color:'white'}}>
    Duis lobortis consequat eros, vitae pretium ipsum ultricies quis. Nam porta massa et rutrum eleifend. Suspendisse potenti. Nulla facilisi. Ut vel feugiat magna. Fusce vitae libero arcu. Nam dignissim felis ex, 
    nec porta nulla vehicula non. Donec urna erat,
     pharetra ut fermentum vitae, pretium quis elit. Cras pellentesque magna nisi. </h2>
     
</div>
<Link to ='/recruitment' > Join our team </Link>

</div> */}

  </div>
<Footer />

  </>} 


  {loading === true &&  <>
        <div className='loading-screen'> <Stack sx={{ color: 'gold' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
    </Stack>
    <div className='' style={{display:'none'}}><Nav  /></div>
    <h1> Loading ... </h1></div>
      </>}
   
  </>  )
}
