/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import addFile from '../images/add-file.png'
import EmojiPicker from 'emoji-picker-react'

import '../../App.css'



import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import UpdatedStories from '../Page/UpdatedStories';
import { set } from 'date-fns';



export default function SendFromForm({objectiveAnswer,dbId,preset,typeAnswer,month,color,page,level,setObjectiveAnswer,user,subject,type,post,uniqueId,orderPost}) {
    
  const [ emojiShow,setEmojiShow] = useState(false)


  async function handleData(){

    const docRef= collection(db,page )
    const colRef = doc(docRef,month)

    setDoc(colRef,{[dbId + month]:{
      answer:objectiveAnswer.slice(3,-4),
                answerOnWeb:objectiveAnswer+" "+preset,
                status:'Waiting',
            color:'#00eaff',
            TextWrittenBy:user,  
                client:page, 
                AssignedTo:null,
                Time: new Date().toLocaleString(),
    }},{merge:true})
 }


  
      const [imageUrl, setImageUrl] = useState("");
      const [name,setName] = useState("")
      const [image, setImage] = useState();
      const [posts, setPosts] = useState([]);
      const [successfully, setSuccessfully] = useState('')
  
      useEffect(() =>{
          setName(localStorage.getItem('partner'))
      },[name])


  
      function handleSub(e){

       
          e.preventDefault()
      
      const docRef = collection(db,'partner')
      const colRef = doc(docRef,name)
      
      setDoc(colRef,{name:name},{merge:true})
      }
      
  
      const handleImageChange = async(e) => {
        try {
          const file = e.target.files[0];
          if (!file) {
            // Handle the case where no file is selected
            return;
          }
      
          setImage(file);
      
          e.preventDefault();
      
          // Assuming 'db' is your Firestore instance and 'name' is defined
          const docRef = collection(db, 'partner');
          const colRef = doc(docRef, name);
      
          await setDoc(colRef, { name: name }, { merge: true });
      
          const storageRef = ref(getStorage(), `products/${name}/${file.name}/${uniqueId}.${orderPost}`);
      
          // Upload the file to the bucket
          const uploadTask = uploadBytesResumable(storageRef, file);
      
          // Listen for state changes, errors, and completion of the upload.
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setSuccessfully(`Uploading ${progress}%`)
              // Update progress if needed
            },
            (error) => {
              console.error("Upload Error:", error);
              // Handle the error appropriately
            },
            async () => {

              setSuccessfully(`Successfully uploaded`)
              setTimeout(() => {
                setSuccessfully('')
              }, 2000);
              // Upload completed successfully, now get the download URL
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      
              // Assuming 'fs' is your Firestore instance and 'page', 'typeAnswer', and 'month' are defined
              const docR= collection(db,page )
              const colR = doc(docR,month)
              setDoc(colR,{[post + month]:{ 
                designer:downloadURL,
                DesignUploadedBy: user,
                status:'Design Done',
                color:"gold",
                Time: new Date().toLocaleString(),

              }},{merge:true})
      
              // Handle success if needed
            }
          );
        } catch (error) {
          console.error("Function Error:", error);
          setSuccessfully(`Failed to upload`)
          // Handle any other errors here
        }
      
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
{level > 7 && <>
  <div className='handlesend flex lg:items-start flex-row items-center gap-5 '>
      {level > 8 ? <button onClick={handleData} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Add Text Content
  </span>
</button> : null  } 

{level  > 8 ?  emojiShow? <>
<h3 className='"text-gray-900 text-black bg-gradient-to-r  from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"' onClick={() => setEmojiShow(emojiShow === true?false:true)}> Emoji </h3>
<div className='  absolute left-0 '>

<EmojiPicker  

width='300px'
    setPlaceHolder='ara'
    emojiSize={30} 
    emojiStyle='google'
    theme='dark'
    onEmojiClick={(e) => setObjectiveAnswer((prevAnswer) => prevAnswer + e.emoji)}
    /> 
</div>
</>: <button  onClick={() => setEmojiShow(emojiShow === true?false:true)} style={{marginLeft:'40px'}}  className=" hidden lg:block  text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Emoji </button> : null}

{!isMobile?<> 

{type !== 'Stories'? <form onSubmit={handleSub} className='lg:flex lg:gap-2 '> 
<label className="custom-file-upload cursor-pointer  text-white bg-gray-800  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700
lg:w-[150px]">
    <input type="file"  onChange={handleImageChange} />
    Upload Image
</label>



</form> : null}

{type === "Stories" ? <UpdatedStories user={user} post={post} orderPost={orderPost} uniqueId={uniqueId} type={type} objectiveAnswer={objectiveAnswer} subject={subject} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level} setObjectiveAnswer={setObjectiveAnswer} /> : null}
</>: null}


 </div> </>}

 <div className="fixed top-0 bg-slate-200 w-[25vw]  ">    
              <h2 className="text-xl ml-4">{successfully}</h2>
            </div>


 </> )
}
