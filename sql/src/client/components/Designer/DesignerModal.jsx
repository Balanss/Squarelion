import React,{useState,useEffect} from 'react'
import HandleSubmitButton from './HandleSubmitButton';
import close from '../../assets/close.png';
import { deleteObject, ref,getStorage } from "firebase/storage";
import { doc, updateDoc, arrayRemove,getDoc ,deleteField} from "firebase/firestore";
import { fs } from "../../Firebase";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import trash from '../../assets/trash.png';


const style = {
    position: "absolute", bottom: "0", top: "35%", left: "60%",
     transform: "translate(-50%, -50%)", bgcolor: "background.paper", border: "2px solid #000",
      boxShadow: 24, p: 4, overflow: "scroll", 
  };

export default function DesignerModal({
  name,
    image,
    image1,
    image2,
    image3,
    setImage,
    setImage1,
    setImage2,
    setImage3,
    content,
    user,
    message,
    setMessage,
    dPost,
    dMonth,
    dPage,
    setContent,
    arrayUnion,
    exampleImg,
    exampleImg1,
    exampleImg2,
    exampleImg3,
    setShow
}) {



    const handleSubmitButtonProps = {
        user,
        message,
        setMessage,
        dPost,
        dMonth,
        dPage,
        setContent,
        arrayUnion,
        setShow
      };


      const handleHide = () => setShow(false);
      useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                handleHide();
            }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount


    
   
    const handleDelete = async (image) => {
      // Create a reference to the file to delete
      const storageRef = ref(getStorage(), `products/${name}/${image.name}`);
    
      // // Delete the file
      await deleteObject(storageRef);
    
      // Fetch the document from Firestore
      const docRef = doc(fs, "DesignerPage", dPost + dMonth + dPage);
      const docSnap = await getDoc(docRef);
    
      if (docSnap.exists()) {
        // Get the current files object
        const currentFiles = docSnap.data().files;
    
        // Remove the image from the files object
        const newFiles = {...currentFiles};
        Object.keys(newFiles).forEach(key => {
          if (newFiles[key].url === image.url) {
            delete newFiles[key];
          }
        });
    
        // Update the document in Firestore
        try {
          await updateDoc(docRef, {
            files: newFiles,
          });
          toast.success('File successfully deleted');
        } catch (error) {
          toast.error(`Error updating document: ${error.message}`);
        }
      }
    }

    return (



<> 

<ToastContainer />
<div className=' absolute right-4 top-4 '>

  <img src={close} className='w-8 h-8 cursor-pointer hover:scale-[1.1]' onClick={handleHide}/>
</div>

            <section className="flex flex-row  items-start  gap-10  m-auto w-[50vw]"> 

            <div className='flex flex-col w-[50vw] mt-3  '>
                <p>My work</p>
                <hr className='bg-white w-full mb-2'/>
                    {image?.url && (image.type !== 'application/pdf' || image?.url === '') &&  <span className='flex flex-row items-center'> <img className=" "  src={image?.url} />  <img src={trash} className='w-10 h-10 hover:scale-[1.1]'  onClick={() => {handleDelete(image); setImage('')}}/>  </span> }
                    {image1?.url && (image1.type !== 'application/pdf' || image1?.url === '') &&  <span  className='flex flex-row items-center'> <img className=" "  src={image1?.url} />  <img src={trash} className='w-10 h-10 hover:scale-[1.1]'  onClick={() => {handleDelete(image1);setImage1('')}}/>  </span> }
                    {image2?.url && (image2.type !== 'application/pdf' || image2?.url === '') && <span  className='flex flex-row items-center'> <img className=""  src={image2?.url} />  <img src={trash} className='w-10 h-10 hover:scale-[1.1]'  onClick={() => {handleDelete(image2);setImage2('')}}/>  </span>}
                    {image3?.url && (image3.type !== 'application/pdf' || image3?.url === '') &&  <span  className='flex flex-row items-center'> <img className=""  src={image3?.url} />  <img src={trash} className='w-10 h-10 hover:scale-[1.1]'  onClick={() => {handleDelete(image3); setImage3('')}}/>  </span>}
                
                    {image?.url && (image.type === "" || image.type === 'application/pdf') && <span className='flex flex-row items-center'><a title='Click to download' href={image?.url} download>Download {image.name}</a> <img src={trash} className='w-10 h-10 hover:scale-[1.1]' onClick={() => {handleDelete(image)}}/> </span>}
                    {image1?.url && (image1.type === "" || image1.type === 'application/pdf') && <span className='flex flex-row items-center'> <a title='Click to download' href={image1?.url} download>Download {image1.name}</a> <img src={trash} className='w-10 h-10 hover:scale-[1.1]' onClick={() => {handleDelete(image1); setImage1('')}}/> </span>}
                     {image2?.url && (image2.type === "" || image2.type === 'application/pdf') && <span className='flex flex-row items-center'> <a title='Click to download' href={image2?.url} download>Download {image2.name}</a> <img src={trash} className='w-10 h-10 hover:scale-[1.1]' onClick={() => {handleDelete(image2); setImage2('')}}/></span> }
                     {image3?.url && (image3.type === "" || image3.type === 'application/pdf') && <span className='flex flex-row items-center'> <a title='Click to download' href={image3?.url} download>Download {image3.name}</a> <img src={trash} className='w-10 h-10 hover:scale-[1.1]' onClick={() => {handleDelete(image3); setImage3('')}}/> </span>}

            </div>
              

              <div className="flex flex-col items-start mt-3 w-[50vw] border-l-2">
                <p>Examples</p>
                <hr className='bg-white w-full mb-2'/>
                <img className="" src={exampleImg} />
                <img className="" src={exampleImg1} />
                <img className="" src={exampleImg2} />
                <img className='' src={exampleImg3} />
</div>
            </section>
<hr  className='w-screen bg-white mt-4'/>
            <div className='mt-20 rounded text-left p-10 phones:w-[80vw] pc:min-w-[70vw] w-[70vw] pc:max-w-[70vw]  bg-white border-primary'>
{content.map((message, index) => (
<div key={index} className='text-left break-words text-black  rounded px-3  '>
 <p className="w-[80%] m-auto whitespace-pre-wrap "> {message}</p>
 <hr />
  <br />
</div>
))}



</div>
<HandleSubmitButton {...handleSubmitButtonProps} />
</>


    )
}
