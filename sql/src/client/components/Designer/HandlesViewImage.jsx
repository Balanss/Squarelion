import React from 'react'
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from "firebase/storage";
import { getDoc } from "firebase/firestore";
import { setDoc, doc,arrayUnion } from "firebase/firestore";
import { fs } from "../../Firebase";
import upload from "../../assets/upload.png";

export default function HandlesViewImage({name, user, dPost, dMonth, dPage, setSuccessfully, setImageUrls, setFiles}) {

 

    const handleImageChange = async (e) => {
     
 const selectedFiles = e.target.files || [];


const uploadPromises = selectedFiles.length? Array.from(selectedFiles).map(file => {
  const storageRef = ref(getStorage(), `products/${name}/${file.name}`);

  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setSuccessfully(`Uploading ${progress}%`)
      },
      error => {
        console.error("Upload Error:", error);
        reject(error);
      },
      async () => {
        // Upload completed successfully, now get the download URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve({ url: downloadURL, type: file.type, name: file.name});
      }
    );
  });
}): [];

// Wait for all uploads to complete

const uploadedFiles = await Promise.all(uploadPromises);
const docRef = doc(fs, "DesignerPage", dPost + dMonth + dPage);
    const docSnap = await getDoc(docRef);

    let existingFiles = docSnap.exists() ? docSnap.data().files : [];

    // Check total number of files (existing + new)
    if (existingFiles.length + selectedFiles.length > 4) {
      alert("You can only upload a maximum of 4 files");
      return;
    }

let newFiles;
if (Array.isArray(existingFiles)) {``
  // If existingFiles is an array, append new files to it
  newFiles = [...existingFiles, ...uploadedFiles];
} else if (typeof existingFiles === 'object') {
  // If existingFiles is an object, merge it with new files
  newFiles = {...existingFiles, ...uploadedFiles};
} else {
  // If existingFiles is neither an array nor an object, just use new files
  newFiles = uploadedFiles;
}

// Construct docData
const docData = {
DesignedUploadedBy: user,
files: arrayUnion(...uploadedFiles),
};

// Send docData to Firestore
await setDoc(docRef, docData, {
merge: true,
});
      

     
   

setTimeout(() => {
  setSuccessfully("");
  setImageUrls ('');
  setFiles('');
}, 5000);

    };

      return (
        <label> 
    <input type="file" accept="image/*" multiple onChange={handleImageChange} /> 
   <img src={upload} alt="upload" className="w-8 h-8 cursor-pointer hover:scale-[1.1]"  title='Upload files'/>
        </label>
        
        
      );
    

}



