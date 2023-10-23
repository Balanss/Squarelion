import React,{useEffect,useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {collection,deleteDoc,doc,updateDoc,setDoc} from "firebase/firestore";
import { auth, fs,db } from '../../../Firebase'


const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  width:'80vw',
  overflowX:'scroll',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Demo({round,page}) {

  const [isCopied, setIsCopied] = useState(false);

const a = (round.filter((x) => x.ref > 0));

const [openModal, setOpenModal] = React.useState(false);
const handleOpenModal = () => setOpenModal(true);
const handleClose = () => setOpenModal(false);


function handleClick(x,index){
  // const docRef = collection(db,page);
  // const colRef=doc(docRef,x.ref +''+ x.fakeMonth);
  // setDoc(colRef,{'answer':x.answer },{merge:true});

  const h1Element = document.getElementById('h1-to-copy');
  if (h1Element) {
    // Create a range and select the H1 content
    const range = document.createRange();
    range.selectNode(h1Element);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      // Execute the copy command
      document.execCommand('copy');
      setIsCopied(true);
    } catch (err) {
      console.error('Copy failed:', err);
    }

    // Clean up the selection range
    window.getSelection().removeAllRanges();
  }

}

function handleDel(x,index){
  const docRef = collection(db,page);
  const colRef=doc(docRef,x.id);
  deleteDoc(colRef)
}




  return (
    <div>
<button onClick={handleOpenModal}  className='bg-blue-700 text-white px-3 py-2 rounded-md ml-3 '> Bot Promps </button>

<Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='max-w-[80vw] max-h-[80vw]  '
      >
        <Box sx={style} className='!lg-w-[800px]'>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center'}} className='lg:flex' >
          {a.map((x,index) => {
    return <div key={index} className='lg:mr-10'>
       <h1> Post Count : {x.ref} </h1>
       <h1 > Content : <h1 id="h1-to-copy"> {x.answer} </h1> </h1>
       <hr className='mt-5 pb-5 ' />
       <h1> channel : {x.channel}</h1>
       <h1> date : {x.date}</h1>
       <h1> month : {x.fakeMonth}</h1>
       <hr className='mt-5 pb-5 ' />
       <p> Accepting will result in adding content to post {x.ref} !! </p>
     <br />
       <button className='bg-blue-700 text-white px-3 py-2 rounded-md ml-3 mt-5'  onClick={() => {handleClick(x,index)}}> Copy </button>
       <button className='bg-red-700 text-white px-3 py-2 rounded-md ml-3 mt-5' onClick={() => {handleDel(x,index)}}> Delete</button>


    </div>
})}



          </Typography>
        </Box>
      </Modal>

    </div>
  )
}
