import React,{useState,useEffect} from 'react'
import { collection, doc, getDoc, getDocs, updateDoc } from '@firebase/firestore'
import { auth, fs,db } from '../../Firebase'
import { Modal, Box, Typography } from '@mui/material'


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


export default function SqlPropInfo({setShowSecret,showSecret,edit,editText,message,setMessage,setEdit,confirm,setConfirm,sendToModal,sendToModal2,setUpdated,updated}) {




  return (
    <>
    
  
    <Modal
        open={showSecret}
        onClose={() => setShowSecret(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>

{confirm === false && <>
    <Typography id="modal-modal-title" variant="h6" component="h2">
        <form className='flex flex-col ' onSubmit={(e) => e.preventDefault()}>
            <input type='text' placeholder='Enter Key' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => {
                if(e.target.value === '1234'){
                    setConfirm(true)
                }
            }} />
            <button className='border-2 border-gray-300 rounded-md p-2 mt-5 bg-blue-500 hover:bg-blue-700 ' 
            > Submit</button>
        </form>
    </Typography>
</>  }

{confirm === true && <>

    <Typography id="modal-modal-title" variant="h6" component="h2">
    {sendToModal} 
    <br/>
   {sendToModal2}
</Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">      
                <form className='flex flex-col ' onSubmit={(e) => e.preventDefault()}>
                     <input type='text' placeholder={`update password`} className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setUpdated(e.target.value)} />

                      <button className='border-2 border-gray-300 rounded-md p-2 mt-5 bg-blue-500 hover:bg-blue-700 ' 
                      onClick={()=> {
                            const docRef = collection(db,'sqlProperties')
                            const colRef = doc(docRef,edit)
                            updateDoc(colRef,{[editText]:updated})
                            setMessage('Updated')
                            setTimeout(() => {
                             setShowSecret(false)
                             setMessage('')
                             setEdit('')
                             setUpdated('')
                            }, 2000);
                      }}> Update</button>
                </form>
                {message}
            </Typography>
</>}

        </Box>
    </Modal>

    
    </>
  )
}
