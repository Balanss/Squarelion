/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import addFile from '../images/add-file.png'



import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



export default function SendFromForm({objectiveAnswer,typeAnswer,month,color,page,level,setObjectiveAnswer,user}) {
    
    function handleData(){    
            fs.collection(page).doc(typeAnswer+month).set({ 
                answer:objectiveAnswer,
                status:'Waiting',
            color:'#00eaff',
            user:user,       
              },{merge:true})

              setObjectiveAnswer('')
      }


      const [imageUrl, setImageUrl] = useState("");
      const [name,setName] = useState("")
      const [image, setImage] = useState();
      const [posts, setPosts] = useState([]);
  
      useEffect(() =>{
          setName(localStorage.getItem('partner'))
      },[name])





      

  
      function handleSub(e){

       
          e.preventDefault()
      
      const docRef = collection(db,'partner')
      const colRef = doc(docRef,name)
      
      setDoc(colRef,{name:name},{merge:true})
      
      
      const storageRef = ref(getStorage(), `products/${name}/${image.name}`);
      
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
      
      
         fs.collection(page).doc(typeAnswer+month).set({
                
         designer:downloadURL,
         
      
         
        },{merge:true})
      
      
        
      
        },{merge:true}
      );
  
     
      }
      
  
      const handleImageChange = (e) => {
          const file = e.target.files[0];
          setImage(file )
      
        };
  
       

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



  return (<>  
{level > 8 && <>
  <div className='handlesend flex flex-row items-center gap-2'>
       <button onClick={handleData} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Add Text Content
  </span>
</button> 


{!isMobile?
 <form onSubmit={handleSub} className='ml-10 lg:flex lg:gap-2'> 


<input  className='sm:mr-4' type="file" onChange={handleImageChange} style={{width:'100px'}} />

<button  className="text-white bg-gray-800  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700
lg:w-[120px]">Add Design</button>
</form> : null}


 </div> </>}
   
  {level === 8 && <>
  
    <div className='above-div-send-designer' > 
   

<form onSubmit={handleSub} className='designer-upload'> 
    <input type="file"  clonChange={handleImageChange} style={{width:'90px'}} />
     <button> Add Design Picture </button>
</form> 
 </div>
   </> }

 </> )
}
