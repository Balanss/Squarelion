import React from 'react'
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
          <div key={i} className='inline-flex pb-[50px] pt-[50px] gap-6 flex-wrap items-center justify-center m-auto'>
            {i === show && (
              <>
                {x.designer && (              
                    <> 
<div className='flex flex-col gap-y-2'>
  {(x && x.designer && (x.designer.includes('.jpg') || x.designer.includes('.png') || x.designer.includes('.gif') || x.designer.includes('.jpeg'))) ? (
    <div className='flex flex-col gap-y-2'> 
      <span className='flex flex-row'>
        <img src={x.designer} style={{width:imageSize,height:imageHeight}} onClick={() => {handleOpenModal(i)}}/>
        <img src={bin} alt="Delete" className="bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8 h-8" onClick={() => updateDesigner('designer')}/> 
      </span>
    </div> 
  ) : x.designer && <span className='flex flex-row gap-x-2 text-white'><a href={x.designer} download>Download</a> <img src={bin} alt="Delete" className="bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8" onClick={() => updateDesigner(x.designer)}/></span>}

  {( x && x.designer1 && ( x.designer1.includes('.jpg') || x.designer1.includes('.png') || x.designer1.includes('.gif') || x.designer1.includes('.jpeg')))  ? (
    <span className='flex flex-row'>
      <img src={x.designer1} style={{width:imageSize,height:imageHeight}} onClick={() => {handleOpenModal(i)}}/>
      <img src={bin} alt="Delete" className="bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8 h-8" onClick={() => updateDesigner('designer1')}/>
    </span>
  ) :  x.designer1 && <span className='flex flex-row gap-x-2 text-white'><a href={x.designer1} download>Download</a> <img src={bin} alt="Delete" className="bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8" onClick={() => updateDesigner(x.designer1)}/></span>}

  {(x && x.designer2 &&  ( x.designer2.includes('.jpg') || x.designer2.includes('.png') || x.designer2.includes('.gif') || x.designer2.includes('.jpeg'))  ) ? (
    <span className='flex flex-row'>
      <img src={x.designer2} style={{width:imageSize,height:imageHeight}} onClick={() => {handleOpenModal(i)}}/>
      <img src={bin} alt="Delete" className="bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8 h-8" onClick={() => updateDesigner('designer2')}/>
    </span>
  ) : x.designer2 && <span className='flex flex-row gap-x-2 text-white'><a href={x.designer2} download>Download</a> <img src={bin} alt="Delete" className="bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8" onClick={() => updateDesigner(x.designer2)}/></span>}

  {/* Uncomment this if you want to use designer3 */}
  {(x && x.designer3 && ( x.designer3.includes('.jpg') || x.designer3.includes('.png') || x.designer3.includes('.gif') || x.designer3.includes('.jpeg'))) ? (
    <span className='flex flex-row'>
      <img src={x.designer3} style={{width:imageSize,height:imageHeight}} onClick={() => {handleOpenModal(i)}}/>
      <img src={bin} alt="Delete" className="bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8 h-8" onClick={() => updateDesigner('designer3')}/>
    </span>
  ) : x.designer3 && <span className='flex flex-row gap-x-2 text-white'><a href={x.designer3} download>Download</a> <img src={bin} alt="Delete" className="bg-slate-600 text-white rounded-full pointer-cursor border hover:scale-[1.1] border-black cursor-pointer w-8" onClick={() => updateDesigner(x.designer3)}/></span>}
</div>
                   </> )}
              </>
            )}
          </div>
        );
      })}
    </>
  );
}
