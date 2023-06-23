import React from 'react'
import Nav from './Nav'
import Logo from "./images/Logo.png"
import User from './User'
import {useState, useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { auth, fs } from '../Firebase'
import { googleAuthProvider } from '../Firebase';
import google from "./images/google.png"

export default function Login() {


  const [ email,setEmail] = useState('')
  const [ password,setPassword] = useState("")
  const [user,setUser] = useState('')
const [uuid,setUuid] = useState('')
const [ isAccepted,setIsAccepted] = useState('')
const [ level,setLevel] = useState('')
const [successMsg,setSuccessMsg] = useState('')
const navigate = useNavigate()


  const handleSubmit = (e) =>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password).then(() => {
      setSuccessMsg("Sucessfully logged in")

      
      // setEmail("")
      // setPassword("")
      // setErrorMsg("")
      setTimeout(() => {
        setSuccessMsg("");
        navigate("/")
      },2000)
    }).catch(error => setErrorMsg(error.message))

  }

  // useEffect(() => {

  //   if(uuid === '' && level !== 10){
  //     {navigate('/admindashboard')}
  //   }
  
  // },[uuid,level])
  


  const handleSignIn = () => {
    auth.signInWithPopup(googleAuthProvider)
      .then((result) => {
        // Handle successful sign-in
        setSuccessMsg("Sucessfully logged in")

      
        // setEmail("")
        // setPassword("")
        // setErrorMsg("")
        setTimeout(() => {
          setSuccessMsg("");
          navigate("/")
        },2000) 
      
      } )
      .catch((error) => {
        // Handle sign-in error
        console.error(error);
      });
    }

  return (
    <div>
<User  setUser={setUser} user={user} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel}/>
<Nav/>
<div className='signup-main'>
  <div className='inner-signup'>
  <div className='test'> </div>
    <div className='signup-div'>
        
<form className='signup-form' onSubmit={handleSubmit}>
<input type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
<input type='text' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
<div >
<button style={{marginRight:'20px',color:'black',backgroundColor:'background-color: #194375'}}> Login </button> 
 <button style={{color:'black',backgroundColor:'background-color: #194375'}} onClick={() => navigate('/')}> Signup </button>

<div style={{marginTop:'15px'}}>
  <button onClick={handleSignIn} className='google-sign'>  Google sign-in <img style={{width:'30px'}} src={google} /> </button>
</div>
</div>

<h2>  {successMsg} </h2> 
</form>


{/* {level === 10 ? navigate("/admindashboard") : null}
{level === 8 ? navigate("/") : null}
{level === 6 ? navigate("/") : null}
{level === 2 ? navigate("/") : null} */}




    </div>
    
  </div>

 <div className='success-msg'>   </div> 

  </div>
    </div>
  )
}
