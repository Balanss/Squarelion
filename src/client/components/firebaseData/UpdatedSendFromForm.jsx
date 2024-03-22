/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import EmojiPicker from 'emoji-picker-react'
import '../../App.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import UpdatedStories from '../Page/UpdatedStories';
import send from "../../assets/send.png";
import emoji from "../../assets/emoji.png";
import trash from "../../assets/trash.png";
import upload from "../../assets/upload.png";





export default function SendFromForm({objectiveAnswer,dbId,preset,typeAnswer,month,color,page,level,setObjectiveAnswer,user,subject,type,post,uniqueId,orderPost}) {
    
  const [ emojiShow,setEmojiShow] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleData() {
  if (objectiveAnswer !== ''){
    try {

      setSuccess('Text Created')

      setTimeout(() => {
        setSuccess(false)
      }, 3000);

     

      const docRef = collection(db, page);
      const colRef = doc(docRef, month);

      await setDoc(colRef, {
        [dbId + month]: {
          answer: objectiveAnswer,
          answerOnWeb: objectiveAnswer + " " + preset,
          status: 'Waiting',
          color: '#00eaff',
          TextWrittenBy: user,
          client: page,
          AssignedTo: null,
          Time: new Date().toLocaleString(),
        }
      }, { merge: true });
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  } else {
    alert('Please write something')
  }
  }



      const [name,setName] = useState("")
      const [image, setImage] = useState();
    
      const [successfully, setSuccessfully] = useState('')
  
      useEffect(() =>{
          setName(localStorage.getItem('partner'))
      },[name])


  
    async  function handleSub(e){

       
      e.preventDefault()
      
      const docRef = collection(db,'partner')
      const colRef = doc(docRef,name)
      
     await setDoc(colRef,{name:name},{merge:true})
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
              setSuccess(`Uploading ${progress}%`)
              // Update progress if needed
            },
            (error) => {
              console.error("Upload Error:", error);
              // Handle the error appropriately
            },
            async () => {

              setSuccess(`Successfully uploaded`)
              setTimeout(() => {
                setSuccess(false)
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
  <div className='handlesend flex lg:items-start ml-2 flex-col items-center gap-5 '>
 <img src={send} onClick={handleData} className='w-12 h-12 cursor-pointer hover:scale-[1.1]'  title='Post'/> 
      {success !== false &&     <div id="toast-success" className=" fixed z-[100000000000000000000] flex items-center  max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div className=" relative z-[100000000000000000] inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span className="sr-only">Check icon</span>
    </div>
    <div className="ms-3 text-sm font-normal w-[100px] break-words ">{success} </div>
    <button onClick ={() => setSuccess(false)} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span className="sr-only" >Close</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div> }

 

{level  > 7 ?  emojiShow? <>
<img src={emoji} onClick={() => setEmojiShow(emojiShow === true?false:true)} className='w-12 h-12 ml-10 cursor-pointer hover:scale-[1.1]'  title='Emoji'/>
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
</>: <img src={emoji} onClick={() => setEmojiShow(emojiShow === true?false:true)} className='w-12 h-12 cursor-pointer  hover:scale-[1.1]'  /> : null}

{!isMobile?<> 

{type !== 'Stories'? <form onSubmit={handleSub} className='lg:flex lg:gap-2 '> 
<label className="">
    <input type="file"  onChange={handleImageChange} />
   <img src={upload} alt="Delete" className=" pointer-cursor  hover:scale-[1.1]  cursor-pointer w-12 h-12"  title='Upload'/> 
    
</label>



</form> : null}

{type === "Stories" ? <UpdatedStories user={user} post={post} orderPost={orderPost} uniqueId={uniqueId} type={type} objectiveAnswer={objectiveAnswer} subject={subject} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level} setObjectiveAnswer={setObjectiveAnswer} /> : null}
</>: null}


 </div> </>}

 {/* <div className="fixed top-0 bg-slate-200 w-[25vw]  ">    
              <h2 className="text-xl ml-4">{successfully}</h2>
            </div> */}


 </> )
}
