import React from 'react'
import { useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../Firebase';
import toast,{Toaster} from 'react-hot-toast'
import { set } from 'date-fns';

export default function FileUpload({nameOfCompany,endDate,startDate}) {


    const [image, setImage] = useState(null);
    const [type, setType] = useState();
    const [link, setLink] = useState();


    function handleDoc(){
     const docRef = doc(db, "contracts", nameOfCompany);
    
    const storageRef = ref(getStorage(), `contracts/${nameOfCompany}`);
    
    // Upload the file to the bucket
    const uploadTask = uploadBytesResumable(storageRef, image);
    
    
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
await setDoc(docRef, { [`${nameOfCompany} / ${startDate}/ ${endDate}`]: { [type]: downloadURL } }, { merge: true });
}  


    );

    toast.success("File Uploaded")

    setTimeout(() => {
        setType(null)
        setImage(null)
      }, 2000);
   
    }
    

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file )
    
      };

      const handleLink = async() => {
        const docRef = doc(db, "contracts", nameOfCompany);
        await setDoc(docRef, { [`${nameOfCompany} / ${startDate}/ ${endDate}`]: { [type]: link } }, { merge: true });
      }

  return (
    <div className='flex flex-row items-center justify-center gap-x-4 '>  

    <section className='flex flex-col gap-2'> 
    <label className='  rounded-md hover:bg-blue-900 '>
        <input type="text" placeholder='Enter Link' onChange={(e) => {setLink(e.target.value)}} className='rounded text-black' onClick={() => { setType("doc") }} />
    </label>
    <button onClick={handleLink} className='hover:scale-[1.1] hover:underline'>Submit</button>
    </section>

    
    <section className='flex flex-col gap-2'>
    <label className='bg-blue-600 p-2 rounded-md hover:bg-blue-900'>
        <input type="file" onChange={handleImageChange} onClick={() => { setType("pdf") }} cl />
            Upload PDF
    </label>
    <button className='hover:scale-[1.1] hover:underline' onClick={handleDoc}>Submit</button> 
    </section>
  
  

    <section className='flex flex-col gap-2'>
    <label className='bg-blue-600 p-2 rounded-md hover:bg-blue-900'>
        <input type="file" onChange={handleImageChange} onClick={() => { setType("finalPdf") }} />
            Upload Final
    </label>
    <button onClick={handleDoc}>Submit</button>
    </section>

  

<Toaster/>

 </div> )
}
