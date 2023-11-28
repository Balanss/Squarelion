/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc,arrayUnion} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import design from '../images/graphic-designer.png'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { set } from 'date-fns';
import DesignerFunctions from '../Designer/DesignerFunctions';
import Roles from '../AdminPage/Roles/Roles';

export default function WaitingDesigner({typeAnswer,month,page,post,objectiveAnswer,color,boosting,uniqueId,user,type,subject,img,date,pri}) {

const [forDesigner, setForDesigner] = useState('')
const [message, setMessage] = useState('')
const [designerData, setDesignerData] = useState([])
const [roles,setRoles] = useState([])
const [name, setName] = useState('')
const[areYouSure, setAreYouSure] = useState(false)

    function handleData(){
setModal(true)
  }


function handleToDdesigner(){


    if(imageUrls[0] === ''){
      fs.collection( `DesignerPage`).doc(post+month+page).set({
        color:'gold',
        status:'Designer',
        statusText:'Designer',
        month:month,
        page:page,
        post:post,
      date:date,
        user:user,
        type:type,
        hide:false,
        SendTo:name,
        prio:pri,
          subject: arrayUnion(forDesigner + "- " + user),
      },{merge:true})
    } else {
      fs.collection( `DesignerPage`).doc(post+month+page).set({
        color:'gold',
        status:'Designer',
        statusText:'Designer',
        month:month,
        page:page,
        post:post,
      date:date,
        user:user,
        type:type,
        img:img,
        img1: imageUrls[0] || "",
        img2: imageUrls[1] || "",
       img3: imageUrls[2] || "",
         img4: imageUrls[3] || "", 
        hide:false,
        SendTo:name,
        prio:pri,
          subject: arrayUnion(forDesigner + "- " + user),
      },{merge:true})
    }

    
    setMessage(`Has been sent to ${name}`)

    setTimeout(() => {setAreYouSure(false)}, 2000);
  
  
fs.collection(page).doc(post+month).set({
  color:'gold',
  status:'Waiting Designer',
  statusText:'Designer'
},{merge:true})


setForDesigner('')
setTimeout(() => {
  setMessage('')
  } , 3000);
  }

  const [modal, setModal] = useState(false);





  const [imageUrls, setImageUrls] = useState([]);
  const [files, setFiles] = useState([]);

  const [uploading, setUploading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Images");

  const handleUploadImages = async event => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) {
      return;
    }

    if (selectedFiles.length > 4) {
      alert("You can only upload a maximum of 4 images at once.");
      return;
    }

    setUploading(true);

    const storageRefs = [];
    const uploadTasks = [];
    const downloadURLs = [];

    // Upload each file to the bucket
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const storageRef = ref(
        getStorage(),
        `products/${name}/${file.name}`
      );
      storageRefs.push(storageRef);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTasks.push(uploadTask);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // Update progress if needed
        },
        error => {
          console.error("Upload Error:", error);
          // Handle the error appropriately
          setUploading(false);
        },
        async () => {
          // Upload completed successfully, now get the download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          downloadURLs.push(downloadURL);

          if (downloadURLs.length === selectedFiles.length) {
            // All uploads completed successfully, now update Firestore
        
            setImageUrls(downloadURLs);
            setFiles(selectedFiles);
            setUploadButtonText("Upload Complete");
            setUploading(false);
          
          }
        }
      );
    }
  };


  const [messageDesigner,setMessageDesigner] = useState([]);

  useEffect(() => {
   setMessageDesigner( designerData.find((item) => item.post === post && item.month === month && item.page === page))
  }, [post, month, page, designerData]);


 
const [sureYouWantToDelete, setSureYouWantToDelete] = useState(false)

  const handleDelete = async () => {
   setSureYouWantToDelete(true)
  }

  const handleSureDelete = async () => {
    await deleteDoc(doc(db, "DesignerPage", messageDesigner.id));
    setSureYouWantToDelete(false)
    setModal(false)
  }
 

  const handleAreYouSure = () => {
    setAreYouSure(true)
  }



  return ( <>
  
  <DesignerFunctions setDesignerData={setDesignerData} />
  <Roles roles={roles} setRoles={setRoles} />
    <p  className='bg-yellow-500 w-[30vw] m-auto mt-2 p-2 mb-2 cursor-pointer transition-transform transform-gpu hover:scale-110' onClick={handleData}> Designer </p>


{modal === true &&
<div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'>
  
  <section className='bg-white w-[50vw] phones:w-[90vw]  m-auto mt-20 p-2 rounded-lg h-auto' >
  <button className='bg-red-500 w-[10vw] phones:w-auto m-auto mt-2 p-2 mb-2 cursor-pointer transition-transform transform-gpu hover:scale-110' onClick={() => setModal(false)}>Close</button>
  
    <textarea className='w-full h-[25vh] border-2 border-black'  value={forDesigner}  placeholder='Enter your text here' onChange={(e) => {
      setForDesigner(e.target.value)
    }}></textarea>
      <p className='text-black'>{message}</p>

      <div className='flex'>
  {roles.map((role,id) => (
          <button  key={id}  className='bg-cyan-500 rounded-md m-auto mt-2 p-2 mb-2 cursor-pointer transition-transform transform-gpu hover:scale-110' onClick={() => {setName(role.Name); handleAreYouSure()}} >
            {role.Name}
          </button>



        ))}
  </div>


  {areYouSure === true && <><p className='text-black'>Are you sure you want to send this to {name}?</p>
        <button className='bg-red-500 w-[10vw] ml-5 m-auto mt-2 p-2 mb-2 cursor-pointer transition-transform transform-gpu hover:scale-110' onClick={() => handleToDdesigner()}>Yes</button>
    <button className='bg-red-500 w-[10vw] ml-5 m-auto mt-2 p-2 mb-2 cursor-pointer transition-transform transform-gpu hover:scale-110' onClick={() => setAreYouSure(false)}>No</button>
    </>}

    <hr />

  <div className=' '>
  <label className="custom-file-upload cursor-pointer text-white bg-gray-800  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 lg:w-[120px]"> <input type="file" accept="image/*" multiple onChange={handleUploadImages}/>{uploadButtonText} </label>

 
    <button className='bg-red-600 text-white w-[10vw] phones:w-auto ml-5 m-auto mt-2 p-2 mb-2 cursor-pointer transition-transform transform-gpu hover:scale-110' onClick={handleDelete}>Delete</button>
    {sureYouWantToDelete === true && <><p className='text-black'>Are you sure you want to delete this post?</p>
    <button className='bg-red-500 w-[10vw] ml-5 m-auto mt-2 p-2 mb-2 cursor-pointer transition-transform transform-gpu hover:scale-110' onClick={handleSureDelete}>Yes</button>
    <button className='bg-yellow-500 w-[10vw] ml-5 m-auto mt-2 p-2 mb-2 cursor-pointer transition-transform transform-gpu hover:scale-110' onClick={() => setSureYouWantToDelete(false)}>No</button>
     </>}



  </div>
  <hr className='mb-1 text-black'/>
  <div className='inline-flex'>
    
  <img src={imageUrls[0]} alt={imageUrls[0]} style={{width:'100px'}}/>
    <img src={imageUrls[1]} alt={imageUrls[1]} style={{width:'100px'}}/>
    <img src={imageUrls[2]} alt={imageUrls[2]} style={{width:'100px'}}/>
    <img src={imageUrls[3]} alt={imageUrls[3]} style={{width:'100px'}}/>
  </div>
 <hr className='mt-1 text-black'/>
<br />

{messageDesigner && messageDesigner.subject.map((message, index) => (
  <p key={index}>{message}</p>
))}

  
  </section>

  </div>}




 </> )
}
