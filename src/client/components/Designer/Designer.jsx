import React,{useState} from 'react'
import Nav from '../Nav'
import { auth, fs,db } from '../../Firebase'
import User from '../User'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import DesignerFunctions from './DesignerFunctions';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DesignerHeader from './DesignerHeader';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };




export default function Designer() {

  const [designerData, setDesignerData] = useState([]);
  const [imageUrl, setImageUrl] = useState(""); // State for the designer data

  const [image, setImage] = useState(""); // State for the designer data
  const [ successfully, setSuccessfully] = useState(''); 
  const [ content, setContent] = useState('');

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);



  function handleSub(id){



       designerData.map((designer,index) => {
          if (id === index){
          
            const storageRef = ref(getStorage(), `products/${imageUrl}`);

            // Upload the file to the bucket
            const uploadTask = uploadBytesResumable(storageRef, imageUrl);
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
               const docRef = collection(db,'DesignerPage')
               const colRef = doc(docRef,designer.post+designer.month+designer.page)
               
               updateDoc(colRef,{designer:downloadURL},{merge:true})
               console.log('success')
               setSuccessfully('Image has been uploaded. Click view button to view image!' )

               setTimeout(() => {
                setSuccessfully('')
               }, 7000);         
              },{merge:true}      
            );
          } else {
            return console.log('error')
          }
        
        });
}


const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageUrl(file )

  };

  function handleSend(id){
    designerData.map((designer,index) => {
      if (id === index){
     
        console.log('success',designer.post)
 
        const docRef = collection(db,designer.page)
        const colRef = doc(docRef,designer.post+designer.month)
        updateDoc(colRef,{designer:designer.designer,hide:true,color:'#00eaff',status:'Design Done',StatusText:'Design Done'},{merge:true})

         const docR = collection(db,'DesignerPage')
         const colR = doc(docR,designer.post+designer.month+designer.page)
         deleteDoc(colR)
 setImageUrl('')


      } else {
        return console.log('error')
      }
    
    });
  }

 
  const [button, setButton] = useState(false)

console.log(imageUrl)

  return (
   <>
   <Nav />
   
   <section>
    <DesignerHeader/>
   </section>



   <div className='min-h-[100vh] bg-slate-600 pt-[100px]'>
    <div className='flex flex-col items-center'>
    <DesignerFunctions setDesignerData={setDesignerData}/>

    <section>
      {designerData.map((designer,id) => (
     designer.hide === true ? null :    <div key={id}  className='flex flex-row items-center justify-end border-black border-b-2 mb-8'> 
        <img src={designer.img} className='w-[50px] h-[50px] rounded-md mr-4' />
     <p className='text-black  bg-white text-md border-black border-2 p-2'> Post: {designer.post} </p>
     <p className='text-black  bg-white text-md border-black border-2 p-2'> Date : {designer.date}-{designer.month} </p>
     <p className='text-black  bg-white text-md border-black border-2 p-2'> Client : {designer.page} </p>
     <p className={`text-black text-md border-black border-2 p-2 ${designer.prio === 'Prio'? 'bg-red-600':'bg-white'}`}>  {designer.prio} </p>
     <h1 className='cursor-pointer text-black  bg-white text-md border-black border-2 p-2  hover:scale-110 transition-transform '  onClick={() => {handleOpenModal(),setImage(designer.designer) ,setContent(designer.subject)}}> View </h1>



     <form onSubmit={() => {handleSub(id)}} className='designer-upload  mr-5 ml-4'> 
<input type="file" className='mb-5 mr-5'  onChange={handleImageChange} style={{width:'90px'}} />
{imageUrl === '' ? null : <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"  type='submit'>
  <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Click to Upload Image
    </span>
    </button>}
</form> 

<div >

{designer.designer === undefined ? null : 
<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"  onClick={() => {handleSend(id)}}>
<span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Complete Design
</span>
</button> }

</div>


   </div>
      ))}

    </section>
      </div>

      
 <div className='fixed bottom-0 bg-slate-200 w-full  '>
  <h2 className='text-xl ml-4' >
  {successfully}
  </h2>
 </div>


   </div>



   <Modal
       open={openModal}
       onClose={handleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
       className='max-w-[80vw] max-h-[80vw]  '
     >
       <Box sx={style}>
         <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center'}} >
           {content} 
        <img src={image}/>
         </Typography>

       </Box>
     </Modal>


   
   </>
  )
}
