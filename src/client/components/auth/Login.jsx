import React from 'react'
import {useState, useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { auth, fs } from '../../Firebase'
import { googleAuthProvider } from '../../Firebase';
import logo from "../images/logo.png"
import User from '../users/User';
import Nav from '../navbar/Nav';

export default function Login() {


  const [ email,setEmail] = useState('')
  const [ password,setPassword] = useState("")
  const [user,setUser] = useState('')
const [uuid,setUuid] = useState('')
const [ isAccepted,setIsAccepted] = useState('')
const [ level,setLevel] = useState('')
const [successMsg,setSuccessMsg] = useState('')
const navigate = useNavigate()
const [isButtonDisabled, setIsButtonDisabled] = useState(false);


  const handleSubmit = (e) =>{
    e.preventDefault()
if (email && password !== ''){
  auth.signInWithEmailAndPassword(email, password).then(() => {
    setSuccessMsg("Sucessfully logged in")
    
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);

    setTimeout(() => {
      setSuccessMsg("");
      navigate("/")
    },2000)
  }).catch(error =>console.log('error'))

  }
}

  


  const handleSignIn = () => {


    auth.signInWithPopup(googleAuthProvider)
      .then((result) => {

        if(result.user.displayName){     // Handle successful sign-in
        setSuccessMsg("Sucessfully logged in")
        setTimeout(() => {
          setSuccessMsg("");
          // navigate("/")
        },2000)} else {
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
      
      } )
      .catch((error) => {
        // Handle sign-in error
        console.error(error);
      });
    }

  return (
    < >
<User  setUser={setUser} user={user} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel}/>
<Nav/>
<div className='fixed w-[100%] h-[100%] bg-sky-100 '>
  <div className=''>
    <div className='bottom-[250px] md:w-[4/5] absolute inset-0 flex items-center justify-center flex-col sm:flex-row pt-20 '>
  <img src={logo} className='h-[0] w-[0] sm:h-[375px] sm:w-[375px]   ' />
<form className='flex flex-col h-[400px] items-center justify-around w-[300px] bg-slate-600 sm:h-[375px] sm:w-[375px]  ' onSubmit={handleSubmit}>
<input type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)}  />
<input type='text' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
<div className='sm:text-center sm:mt-10'>
<button   disabled={isButtonDisabled} 
 className={`${
  isButtonDisabled
    ? 'opacity-50 cursor-not-allowed from-blue-500 via-blue-600 to-blue-700'
    : 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
} text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-5`}
>Login</button>
<button  onClick={() => navigate('/signup')} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign-up</button>



<div className='mt-3'>
<button onClick={handleSignIn} 
className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
  </svg>
  Sign in with Google
</button>

</div>

</div>

<h2 className='text-2xl text-white text-center'>  {successMsg} </h2> 
</form>






    </div>
    
  </div>

 <div className='success-msg' >   </div> 

  </div>
    </>
  )
}
