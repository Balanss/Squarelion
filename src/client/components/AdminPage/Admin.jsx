/* eslint-disable no-unused-vars */
import React from 'react'
import {useState,useEffect} from 'react'
import {collection,doc,setDoc,} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import { useNavigate} from 'react-router-dom';
import User from '../User';
import Nav from '../Nav';
import Loading from '../Loading';
import { experimentalStyled as styled } from '@mui/material/styles';
import Footer from '../Home/Footer';
import Edit from './Edit';
import PartnerLogic from './PartnerLogic';
import usersPic from '../images/new-arrival.png';

import client from '../images/client.png';
import survey from '../images/survey.png';
import AdminSurvey from './AdminSurvey';
import rightArrow from '../images/arrow-right.png';
import userPfp from "../images/user.png"





export default function Admin() {

    const [ name,setName] = useState('')
    const [user,setUser] = useState('')
    const [uuid,setUuid] = useState('')
    const [ isAccepted,setIsAccepted] = useState('')
    const [ level,setLevel] = useState('waiting')
    const navigate = useNavigate()
    const [image, setImage] = useState();
    const [partner, setPartner] = useState([]);


function handleSub(e){
    e.preventDefault()


const docRef = collection(db,'partner')
const colRef = doc(docRef,name)

setDoc(colRef,{name:name},{merge:true})


const storageRef = ref(getStorage(), `products/${'partners'}/${image.name}`);

// Upload the file to the bucket
const uploadTask = uploadBytesResumable(storageRef, image);


// Listen for state changes, errors, and completion of the upload.
uploadTask.on(
  "state_changed",
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    
  },
  (error) => {
    console.error(error);
  },
  //here
  async () => {
    // Upload completed successfully, now get the download URL
    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

   // Save the download URL to Firestore


    const docRef =  collection(db,'partner');
    const colRef =  doc(docRef,name); 


    setDoc(colRef,  {imageUrl: downloadURL,
      name:name ,
      status:0,
    

    },{merge:true})

  },{merge:true}
);

}


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file )

  };

  function handleGo(index){
    partner.map((x,i) => { 
        if (i === index){
            localStorage.setItem('partner',x.name)
            localStorage.setItem('image',x.imageUrl)
            setTimeout(() =>{
                navigate(`/profile/${x.name}`)
            },1000)
           
        }
    })
  }







  useEffect(() => {
    const timeoutId = setTimeout(() => {
         if ( level < 8) {
 navigate('/')
    } if (level > 8){
      clearTimeout(timeoutId);
    }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [level, navigate]);
  

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);



const [switching,setSwitching] = useState('Client')
const [isHovered, setIsHovered] = useState(false);
const [hiding,setHiding] = useState(true);

const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};


const handleLogout = () => {
  auth.signOut().then(() => {
    navigate('/')
    window.location.reload()
  })
};

function handleGoPfP(){
        localStorage.setItem('user',user)
        setTimeout(() =>{
            navigate(`/user/${user}`)
        },1000)
}

const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 650);
  };

  handleResize(); // Call the function initially to set the initial state

  window.addEventListener('resize', handleResize); // Add event listener for window resize

  return () => {
    window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
  };
}, []);

  return (

    <> 
<PartnerLogic partner={partner} setPartner={setPartner}/>
<User  setUser={setUser} user={user} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel}/>
<div className='bg-slate-400 min-h-[100vh] flex flex-col items-center justify-between' style={{color:'white'}}>
{/* <div style={{backgroundColor:'white'}}> <Nav/> </div> */}
 {uuid !== ''  && level > 8 && isLoading === false  && <>  
<div>
<div>

<div className=''>  {isMobile && level > 8? <Nav/>:null} </div>
{/* dashboard menu */}

<aside id="cta-button-sidebar" 
className="fixed top-0 left-0 z-40 w-1/5 h-screen transition-transform -translate-x-full sm:translate-x-0"
 aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <a  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="w-[40px] h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span className="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href='/'
             className=" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="w-[40px] h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span className="ml-3">Home</span>
            </a>
         </li>
         <li>
            <a 
             className=" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" 
             onClick={( ) => setSwitching('Client')}>
            <img className='w-[40px]' src={client} />  
               <span className="flex-1 ml-3 whitespace-nowrap">  CLIENTS  </span>
            </a>
         </li>
         <li>
            <a className=" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={( ) => {setSwitching('Users'),
        setHiding(false),setTimeout(() => setHiding(true),1000)
           }}>
            <img src={usersPic} className='w-[40px]' />
               <span className="flex-1 ml-3 whitespace-nowrap">
                USERS
               </span>
              
            </a>
         </li>
         <li className='transform transition-transform ease-in hover:scale-105 cursor-pointer'>
           {level === 11 ? <> <a onClick={( ) => setSwitching('Survey')}  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src={survey} className='w-[40px]' /> 
              <span className="flex-1 ml-3 whitespace-nowrap">SURVEY</span>
            </a>  </> : null}
         </li>
         <li>
            <a onClick={handleGoPfP}  className="
            transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src={userPfp} className='w-[40px]' />
               <span className="flex-1 ml-3 whitespace-nowrap">{user}</span>
            </a>
         </li>
         <li>
            <a 
            className="transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={handleLogout}>
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span className="flex-1 ml-3 whitespace-nowrap" >Sign Out</span>
            </a>
         </li>

      </ul>

   </div>
</aside>
{switching === 'Client' && <div 
className="p-4 w-4/5">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 w-[300px]
   md:w-[700px] md:overflow-y-hidden md:ml-[100px]
   xl:w-[900px]
    ">
   <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <div  className=" text-center text-2l
          text-gray-400 dark:text-gray-500 flex flex-col h-[150px] justify-around
          ">
         {level > 9 && <>
  <form onSubmit={handleSub} className=' flex flex-col items-center'> 

<input type="text" placeholder='ENTER CLIENT ' onChange={(e) => setName(e.target.value)} className='w-[160px] mb-[15px]' />
          <input type="file" className='w-[100px] mt-[15px]' onChange={handleImageChange} />
          <br />
<button className='mt-[15px]'> Add Client </button>
</form>
 </>}   
         </div>
      </div>

      <div className=" bg-gray-50 dark:bg-gray-800">
        <div className='grid grid-rows-3 grid-cols-3 gap-4 pt-10 pl-10
        '>
        {partner.map((partner ,index) => (
        <>
        <div key={index} className='p-10  flex  justify-center w-[170px] md:w-[170px] 
        md:max-w-[200px] xl:w-[auto]  xl:max-w-[auto] mt-15 mb-5 bg-white rounded-sm' >
        {level === 11?     <img  
        className='transform transition-transform ease-in hover:scale-105 cursor-pointer w-[170px] xl:max-w-[170px] xl:h-[170px]' src={partner.imageUrl} onClick={() => { handleGo(index)}}   /> : null }
          {level !== 11 && partner.name !== 'Test'?    <img  className='partner-image' src={partner.imageUrl}  onClick={() => { handleGo(index)}}   /> : null}
        </div> 
        </>
        ))}
</div>
  </div>

  

   </div>
</div>}


</div>

{switching === 'Users' && <Edit/>}
{switching === 'Survey'  && level === 11 && <AdminSurvey/>}
</div>






  {isLoading === true &&  <>
 <Loading/>
      </>}

      </>}


      
</div>
   

<div className='text-black overflow-hidden  '>    <Footer/> </div>

    
      </> )
}
