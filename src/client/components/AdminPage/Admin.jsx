/* eslint-disable no-unused-vars */
import React from 'react'
import {useState,useEffect} from 'react'
import {collection,doc,setDoc,} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db } from '/src/client/Firebase.jsx'
import { useNavigate} from 'react-router-dom';
import User from '../User';
import Nav from '../Nav';
import Loading from '../Loading';

import Footer from '../Home/Footer';
import Edit from './Edit';
import PartnerLogic from './PartnerLogic';
import SidePanel from './SidePanel';
import Docs from './Docs';





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




const [imgLoading,setImgLoading] = useState(true)


useEffect(() => {

  const timer = setTimeout(() => {
    setImgLoading(false);
  }, 1500);

  return () => clearTimeout(timer);
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
   <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
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

    


      <div className=" bg-gray-800 dark:bg-gray-800">
      <div className='lg:grid lg:grid-rows-3 lg:grid-cols-3 lg:gap-4 pt-10 pl-10 lg:max-h-[100vh] sm:max-h-[500px] sm:overflow-scroll'>
  {partner.map((partner, index) => (
    <div key={partner.id} className='p-10 mt-15 mb-5 flex justify-center w-[180px] md:w-[180px] md:h-[180px] bg-transparent hover:bg-white transition duration-1000 rounded-sm'>
      <button
        onClick={() => { handleGo(index) }}
        disabled={level !== 11 && partner.name === 'Test' ? true : false}
        className={level !== 11 && partner.name === 'Test' ? 'opacity-20' : 'opacity-100'}
      >
        <div className="relative">
          {imgLoading && (
            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
 
            </svg>
          )}
          <img
            className={`transform transition-transform ease-in hover:scale-105 cursor-pointer w-[100px] ${imgLoading ? 'opacity-0' : 'opacity-100'}`}
            src={partner.imageUrl}
            alt="Partner Image"
          />
        </div>
      </button>
    </div>
  ))}
</div>

  </div>

  

   </div>
</div>}


</div>

{switching === 'Users' && <Edit/>}
{switching === 'Docs'  && level === 11 && <Docs/>}
</div>
 </>}


      
</div>
   

<div className='text-black overflow-hidden  '>    <Footer/> </div>


{isLoading === true &&  <>
 <Loading/>
      </>}
    
      </> )
}
