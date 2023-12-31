import React from 'react'
import 'react-quill/dist/quill.snow.css';
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from '../../../Firebase';
import { useState } from 'react';
import bin from '/src/client/components/images/bin-2.png'
import { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



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

  



export default function ModalContent({level,page,round,type,show}) {
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

    {round.map((x,i) => {

const imageCount = [x.designer, x.designer1, x.designer2, x.designer3].filter(Boolean).length;
  // Calculate the image size based on the number of images
  let imageSize;
  switch (imageCount) {
    case 1:
      imageSize = 'auto';
      break;
    case 2:
      imageSize = 'auto';
      break;
    case 3:
      imageSize = 'auto';
      break;
    case 4:
      imageSize = 'auto';
      break;
    default:
      imageSize = '20vw';
  }

  let imageHeight;
    switch (imageCount) {
        case 1:
          imageHeight = 'auto';
          break;
        case 2:
          imageHeight = 'auto';
          break;
        case 3:
          imageHeight = 'auto';
          break;
        case 4:
          imageHeight = 'auto';
          break;
        default:
          imageHeight = 'auto';
    }

            return (
                <div key={x.id} className='inline-flex pb-[50px] pt-[50px] gap-6 flex-wrap items-center  justify-center m-auto'>
            {i === show && <>
        
                {/* designer image */}
               {x.pdf?  <a className='text-white' href={x.pdf} target="_blank" rel="noreferrer"> View pdf </a> : null  }
                {x.designer !== '' && 
                <>
                <span className='flex items-end justify-end '>
                <img src={x.designer} className='' style={{width:imageSize,height:imageHeight}}  onClick={() => {handleOpenModal(i)}}/>
                {level > 8 && <img
              src={bin}
              alt="Delete"
              className="absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10"
              onClick={() => {
                // make an update doc here that updates the designer to null
                const docRef = collection(db, page);
                const colRef = doc(docRef, x.id);
                updateDoc(colRef, { designer: '' }, { merge: true });
              }}
            />}

                </span></>}
        
                {/* designer1, designer2, designer3 images */}
                {(type === 'Stories' || type ==='stories') && <>
                
         {x.designer1 > '' && level > 8 && (
                <span className='flex items-end justify-end  '> 
                <img src={x.designer1} style={{width:imageSize,height:imageHeight}} onClick={() => {handleOpenModal(i)}}/>
         
              
                    <img
                        src={bin}
                        alt="Delete"
                        className="absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10"
                        onClick={() => {
                            // make an update doc here that updates the designer1 to null
                            const docRef = collection(db, page);
                            const colRef = doc(docRef, x.id);
                            updateDoc(colRef, { designer1: '' }, { merge: true });
                        }}
                    />
               
                </span>
                 )}
                


        {x.designer2 > '' && level > 8 && (
                <span className='flex items-end justify-end '>
                <img src={x.designer2}  style={{width:imageSize,height:imageHeight}}  onClick={() => {handleOpenModal(i)}}/>
               
                <img
              src={bin}
              alt="Delete"
              className="absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10"
              onClick={() => {
                //make a upadate doc here that updates the designer2 to null
                const docRef = collection(db, page);
                const colRef = doc(docRef, x.id);
                updateDoc(colRef, { designer2: '' }, { merge: true });
              }}
            />
             
                </span>)}
                
                  {x.designer3 > '' && level > 8 && (
                <span className='flex items-end justify-end'>
                <img
                    src={x.designer3}
                    style={{ maxWidth:imageSize,height:imageHeight, margin: 'auto' }}
                    onClick={() => {
                        handleOpenModal(i);
                    }}
                />
              
                    <img
                        src={bin}
                        alt="Delete"
                        className="absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10"
                        onClick={() => {
                            // make an update doc here that updates the designer3 to null
                            const docRef = collection(db, page);
                            const colRef = doc(docRef, x.id);
                            updateDoc(colRef, { designer3: '' }, { merge: true });
                        }}
                    />
               
                
                </span>)}
                </>  
                
                }
        
        
            </>}
        
            </div>
            )
    }

     
 

)}


        {/* <Modal
    open={openModal}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    className='max-w-[80vw] max-h-[80vw]  '
    >
    <Box sx={isMobile ? phones : style}>
    <Typography id="modal-modal-title" variant="h6" component="h2"  sx={{mt:2}} style={{textAlign:'center'}}  className='flex'>
    <img src={img1} style={{maxWidth: isMobile ? '50vw' : '50vw', maxHeight: isMobile ? '50vh' : '50vh', margin: 'auto'}}/>
    <img src={img2}  style={{maxWidth: isMobile ? '50vw' : '50vw', maxHeight: isMobile ? '50vh' : '50vh', margin: 'auto'}}/>
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }} className='flex'>
    <img src={img3}      style={{maxWidth: isMobile ? '50vw' : '50vw', maxHeight: isMobile ? '50vh' : '50vh', margin: 'auto'}}/>
    <img src={img4}      style={{maxWidth: isMobile ? '50vw' : '50vw', maxHeight: isMobile ? '50vh' : '50vh', margin: 'auto'}}/>
    </Typography>
    </Box>
    </Modal> */}

    </>
  )
}
