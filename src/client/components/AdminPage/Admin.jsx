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
import IN from '../images/in.png';
import homeBtn from '../images/home-button.png';
import client from '../images/client.png';
import survey from '../images/survey.png';
import AdminSurvey from './AdminSurvey';
import rightArrow from '../images/arrow-right.png';
import userPfp from "../images/user.png"
import SidePanel from './SidePanel';





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
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);



const [switching,setSwitching] = useState('Client')



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

<SidePanel level={level} user={user} switching={switching} setSwitching={setSwitching}/>

{switching === 'Client' && 
<div 
className="p-4 w-4/5">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 w-[300px]
   md:w-[500px] md:overflow-y-hidden md:ml-[100px]
   lg:w-[700px]
   xl:w-[900px]
    ">
   <div className="flex items-center justify-center h-48 mb-4 rounded b dark:bg-gray-800">
         <div  className=" text-center text-2l
          text-gray-400 dark:text-gray-500 flex flex-col h-[150px] justify-around
          ">
         {level > 9 && <>
  <form onSubmit={handleSub} className=' flex flex-col items-center'> 
<input type="text" placeholder='ENTER CLIENT ' onChange={(e) => setName(e.target.value)} className='w-[160px] mb-[15px]' />
          <input type="file" className='w-[100px] mt-[15px]' onChange={handleImageChange} />
          <br />
          <div className="border-2 border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200">
          Add Client
        </div>

</form>
 </>}   
         </div>
      </div>



      <div className="  dark:bg-gray-800">
        <div className='lg:grid lg:grid-rows-3 lg:grid-cols-3 lg:gap-4 pt-10 pl-10 lg:max-h-[100vh]
        sm:max-h-[500px] sm:overflow-scroll
        '>
        {partner.map((partner ,index) => (
        <>
        <div key={index} className='p-10  mt-15 mb-5 flex  justify-center w-[180px] md:w-[180px] md:h-[180px]
              rounded-sm' >

         <button onClick={() => { handleGo(index)}}
          disabled={level !== 11 && partner.name === 'Test'?true : false} className={level !== 11 && partner.name === 'Test'? 'opacity-20' : 'opacity-100'}>   <img  
        className='transform transition-transform ease-in hover:scale-105 cursor-pointer w-[100px] ' src={partner.imageUrl}    />  </button> 
        
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
 </>}


      
</div>
   

<div className='text-black overflow-hidden  '>    <Footer/> </div>


{isLoading === true &&  <>
 <Loading/>
      </>}
    
      </> )
}
