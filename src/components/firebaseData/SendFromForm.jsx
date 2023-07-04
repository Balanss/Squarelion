/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/Firebase.jsx'
import {useState, useEffect} from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import addFile from '../images/add-file.png'

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



export default function SendFromForm({objectiveAnswer,typeAnswer,month,color,page,level,setObjectiveAnswer}) {
    
    function handleData(){
     
        
            fs.collection(page).doc(typeAnswer+month).set({
                
                answer:objectiveAnswer,
                status:'Awaiting Approval',
            color:'#00eaff',
            
               
              },{merge:true})

              setObjectiveAnswer('')
      }


      const [imageUrl, setImageUrl] = useState("");
      const [name,setName] = useState("")
      const [image, setImage] = useState();
  
      useEffect(() =>{
          setName(localStorage.getItem('partner'))
      },[name])
  
      function handleSub(e){

        console.log('send')
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
  




  return (<>  
{level > 8 && <>
  <div className='above-div-send' style={{display:'flex',marginTop:'50px'}}> {level > 9 ?  <button onClick={handleData} className='addtotext'> <img src={addFile} style={{width:'50px',height:'50px',backgroundColor:'transparent'}}/>  </button> : null } 

<form onSubmit={handleSub} className='designer-upload'> 


    <input type="file" onChange={handleImageChange} style={{width:'90px'}} />
     <button> Add Design </button>
    

</form>  </div> </>}
   
  {level === 8 && <>
  
    <div className='above-div-send-designer' style={{display:'flex',marginTop:'50px'}}> {level !== 10 ? null: <button onClick={handleData} className='addtotext'> <img src={addFile} style={{width:'50px',height:'50px',backgroundColor:'transparent'}}/>  </button> } 

<form onSubmit={handleSub} className='designer-upload'> 


    <input type="file" onChange={handleImageChange} style={{width:'90px'}} />
     <button> Add Design </button>
    

</form>  </div>
   </> }

 </> )
}
