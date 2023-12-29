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

    


  const updateDesigner = (designer) => {
    const docRef = collection(db, page);
    const colRef = doc(docRef, month);
    setDoc(colRef, { [post + month]: {[designer]:''} }, { merge: true });
  };

  return (
    <>
      {round.map((x,i) => {
        const imageSize = 'auto';
        const imageHeight = 'auto';

        return (
          <div key={x.id} className='inline-flex pb-[50px] pt-[50px] gap-6 flex-wrap items-center justify-center m-auto'>
            {i === show && (
              <>
                {x.pdf && <a className='text-white' href={x.pdf} target="_blank" rel="noreferrer"> View pdf </a>}
                {x.designer && (
                  <span className='flex items-end justify-end '>
                    <img src={x.designer} style={{width:imageSize,height:imageHeight}} onClick={() => {handleOpenModal(i)}}/>
                    {level > 8 && (
                      <img
                        src={bin}
                        alt="Delete"
                        className="absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10"
                        onClick={() => updateDesigner('designer')}
                      />
                    )}
                  </span>
                )}
                {type === 'Stories' && (
                  <>
                    {['designer1', 'designer2', 'designer3'].map(designer => (
                      x[designer] && level > 8 && (
                        <span key={designer} className='flex items-end justify-end'>
                          <img src={x[designer]} style={{width:imageSize,height:imageHeight}} onClick={() => {handleOpenModal(i)}}/>
                          <img
                            src={bin}
                            alt="Delete"
                            className="absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%] cursor-pointer w-10"
                            onClick={() => updateDesigner(designer)}
                          />
                        </span>
                      )
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        );
      })}
    </>
  );
}
