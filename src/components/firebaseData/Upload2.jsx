/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/Firebase.jsx'
import {useState, useEffect} from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import addFile from '../images/add-file.png'

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



export default function upload2({objectiveAnswer,typeAnswer,month,color,page,level}) {
    
 


      const [imageUrl, setImageUrl] = useState("");
      const [name,setName] = useState("")
      const [image, setImage] = useState('');
      const [ example, setExample] = useState ('')
  
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
      
      
      if (image === ''){
        fs.collection(page).doc(typeAnswer+month).set({
            textEx:example,
         
            
           },{merge:true})
      } else {
        fs.collection(page).doc(typeAnswer+month).set({
                
            exampleTwo:downloadURL,
            textEx1:example,
         
            
           },{merge:true})
      }
      
      
        
      
        },{merge:true}
      );
  
     
      }
      
  
      const handleImageChange = (e) => {
          const file = e.target.files[0];
          setImage(file )
      
        };
  




  return (<>  
   


    <form onSubmit={handleSub} className='upload1'> 


        <input type="file" onChange={handleImageChange} />
        <textarea  onChange={(e) => setExample(e.target.value)} />
         <button> Add Example </button>

</form>


  
 </> )
}
