/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Nav from './Nav'
import Logo from "./images/Logo.png"
import {useState, useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { auth, fs ,provider} from '../Firebase'
import User from './User'
import SignupMock from './Signup/SignupMock'
import {signInWithGoogle} from "../Firebase";
import { googleAuthProvider } from '../Firebase';
import google from "./images/google.png"
import DOMPurify from 'dompurify';


export default function Signup() {
const [ name,setName] = useState('')
const [ email,setEmail] = useState('')
const [user,setUser] = useState('')
const [uuid,setUuid] = useState('')
const [ isAccepted,setIsAccepted] = useState('')
const [ level,setLevel] = useState('')
const [ password,setPassword] = useState('')
const [ errorMsg,setErrorMsg ] = useState('')
const [successMsg,setSuccessMsg] = useState('')
const [code,setCode] = useState('')
const [userPlace,setUserPlace] = useState('')
const navigate = useNavigate()


function handleSubmit(e){
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password).then((credentials) => {
        fs.collection('admin').doc(credentials.user.uid).set({
          Name:name,
          Email:email,
           accepted:'no',
           level:0,
           noti:0,
         
        })
    })
        .then(() => {
          setSuccessMsg("Awaiting approval ")
          // setName("");
          // setEmail("")
          // setPassword("")
          // setErrorMsg("")
          // setTimeout(() => {
          //   setSuccessMsg("");
          //   navigate("/admin")
          // },3000)
        })
}


const codeToSee = '123456'


  const handleSignIn = () => {
    auth.signInWithPopup(googleAuthProvider)
      .then((result) => {
        // Handle successful sign-in
        setSuccessMsg("Awaiting approval ")
        fs.collection('admin').doc(result.user.uid).set({
          Name:result.user.displayName,
          Email:result.user.email,
           accepted:'no',
           level:0,
           noti:0,
         
        })
      } )
      .catch((error) => {
        // Handle sign-in error
        console.error(error);
      });
    }


  return (<> 
 
   

<User setUser={setUser} user={user} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel}/>
  <div className='signup-main'>
      <div className='sign-nav'>  <Nav /> </div> 
   
 {code === codeToSee ?
  
  <div className='inner-signup'>
  <div className='test'> </div>
    <div className='signup-div'>
 
<form className='signup-form' onSubmit={handleSubmit}>
<input type='text' placeholder='naam'   onChange={e => setName(sanitizeInput(e.target.value))}/>
<input type='text' placeholder='email'  onChange={e => setEmail(sanitizeInput(e.target.value))}/>
<input type='text' placeholder='password' onChange={e => setPassword(sanitizeInput(e.target.value))} />
<div>
 <button className='signup-btn Button'  > Signup </button>
<button onClick={() => navigate('/login')} className='Button'> Login </button> 
<div style={{marginTop:'15px'}}>
  <button onClick={handleSignIn} className='google-sign Button'>  Google sign-in <img style={{width:'30px'}} src={google} /> </button>
</div>

</div>

<h2 style={{color:'black',padding:'10px'}}>  {successMsg} </h2> 
</form>


{/* {level === 10 ? navigate("/admindashboard") : null} */}




    </div>
    
  </div>
 
 : <SignupMock setCode={setCode} code={code} />}

 <div className='success-msg'>   </div> 

  </div>


  </> )
}
