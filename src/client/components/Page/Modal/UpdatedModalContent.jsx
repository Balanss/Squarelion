import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { collection, doc, updateDoc,setDoc} from "firebase/firestore";
import { db } from '../../../Firebase';
import { useState,useEffect } from 'react';
import bin from '/src/client/components/images/bin-2.png'



const style = {
    position: 'absolute',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'ghostwhite',
    boxShadow: 24,
  };

  const phones= {
    position: 'absolute',
    top: '100%',
    left: '63%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'ghostwhite',
    boxShadow: 24,
  }



  



export default function ModalContent({level,page,round,type,show,month,post}) {
const [img1, setImg1] = useState('')
const [img2, setImg2] = useState('')
const [img3, setImg3] = useState('')
const [img4, setImg4] = useState('')
const [isMobile, setIsMobile] = useState(false);


    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = (i) =>{
        setOpenModal(true);

        round.map((x,i) => {
            if (i === show) {
                setImg1(x.designer)
                setImg2(x.designer1)
                setImg3(x.designer2)
                setImg4(x.designer3)
            }
        }
        )

    }
    const handleClose = () => setOpenModal(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 639);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    

  return (
    <>

    {round.map((x,i) => (
            <div key={x.id}>
            {i === show && <>
        
                {/* designer image */}
               {x.pdf?  <a className='text-white' href={x.pdf} target="_blank" rel="noreferrer"> View pdf </a> : null  }
                {x.designer > "" && 
                <><span className='flex items-center justify-around '>
                <img src={x.designer} className='m-auto mt-[50px]' style={{maxWidth:'200px',maxHeight:'200px',cursor:'zoom-in'}}  onClick={() => {handleOpenModal(i)}}/>
                
                {level > 8 && <img
              src={bin}
              alt="Delete"
              className="absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10"
              onClick={() => {
                // make an update doc here that updates the designer to null
                const docRef = collection(db, page);
                const colRef = doc(docRef, month);
                setDoc(colRef, { [post + month]: {designer:''} }, { merge: true });
              }}
            />}


                       
                       
                
                </span></>}
        
                {/* designer1, designer2, designer3 images */}
                {type === 'Stories' && <>
        
                <span className='flex items-center justify-around mt-3'> 
                <img src={x.designer1} style={{maxWidth:'20vw',maxHeight:'20vh',margin:'auto'}} onClick={() => {handleOpenModal(i)}}/>
        
                {x.designer1 && level > 8 && (
                    <img
                        src={bin}
                        alt="Delete"
                        className="absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10"
                        onClick={() => {
                            // make an update doc here that updates the designer1 to null
                            const docRef = collection(db, page);
                            const colRef = doc(docRef, month);
                            setDoc(colRef, { [post + month]: {designer1:''} }, { merge: true });

                        }}
                    />
                )}
                </span>
                
                
                <span className='flex items-center justify-around'>
                <img src={x.designer2}  style={{maxWidth:'20vw',maxHeight:'20vh',margin:'auto'}}  onClick={() => {handleOpenModal(i)}}/>
                {x.designer2 > '' && level > 8 && (<img
              src={bin}
              alt="Delete"
              className="absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10"
              onClick={() => {
                //make a upadate doc here that updates the designer2 to null
                const docRef = collection(db, page);
                const colRef = doc(docRef, month);
                setDoc(colRef, { [post + month]: {designer2:''} }, { merge: true });
              }}
            />)}
                
                
                </span>
                
                
                <span className='flex items-center justify-around'>
                <img
                    src={x.designer3}
                    style={{ maxWidth: '20vw', maxHeight: '20vh', margin: 'auto' }}
                    onClick={() => {
                        handleOpenModal(i);
                    }}
                />
                {x.designer3 > '' && level > 8 && (
                    <img
                        src={bin}
                        alt="Delete"
                        className="absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10"
                        onClick={() => {
                            // make an update doc here that updates the designer3 to null
                            const docRef = collection(db, page);
                            const colRef = doc(docRef, month);
                            setDoc(colRef, { [post + month]: {designer3:''} }, { merge: true });
                        }}
                    />
                )}
                
                </span>
                
                    {/* this views content img */}


                   
        
        
        
                
                </> }
        
        
            </>}
        
            </div>
    )

     
 

    )}


        <Modal
    open={openModal}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    className='max-w-[80vw] max-h-[80vw]  '
    >
     <Box sx={isMobile ? phones : style}>
    <Typography id="modal-modal-title" variant="h6" component="h2"  sx={{mt:2}} style={{textAlign:'center'}}  className='flex'>
    <img src={img1} style={{maxWidth: isMobile ? '50vw' : '40vw', maxHeight: isMobile ? '50vh' : '40vh', margin: 'auto'}}/>
    <img src={img2}  style={{maxWidth: isMobile ? '50vw' : '40vw', maxHeight: isMobile ? '50vh' : '40vh', margin: 'auto'}}/>
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }} className='flex'>
    <img src={img3}      style={{maxWidth: isMobile ? '50vw' : '40vw', maxHeight: isMobile ? '50vh' : '40vh', margin: 'auto'}}/>
    <img src={img4}      style={{maxWidth: isMobile ? '50vw' : '40vw', maxHeight: isMobile ? '50vh' : '40vh', margin: 'auto'}}/>
    </Typography>
    </Box>
    </Modal>
 
    </>
  )
}
