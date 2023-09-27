import React from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
import {useState, useEffect} from 'react'
import logo from '../images/logo.png'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export default function Stories({name, user, type, objectiveAnswer, subject, typeAnswer, month, color, page, level, setObjectiveAnswer}) {

    const [imageUrls, setImageUrls] = useState([]);
    const [files, setFiles] = useState([]);

    const [uploading, setUploading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Images');

    const handleUploadImages = async (event) => {
      const selectedFiles = event.target.files;
      if (!selectedFiles) {
        return;
      }

      if (selectedFiles.length > 4) {
        alert('You can only upload a maximum of 4 images at once.');
        return;
      }

      setUploading(true);

      const storageRefs = [];
      const uploadTasks = [];
      const downloadURLs = [];

      // Upload each file to the bucket
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const storageRef = ref(getStorage(), `products/${name}/${file.name}`);
        storageRefs.push(storageRef);

        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTasks.push(uploadTask);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // Update progress if needed
          },
          (error) => {
            console.error("Upload Error:", error);
            // Handle the error appropriately
            setUploading(false);
          },
          async () => {
            // Upload completed successfully, now get the download URL
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            downloadURLs.push(downloadURL);

            if (downloadURLs.length === selectedFiles.length) {
              // All uploads completed successfully, now update Firestore
              await fs.collection(page).doc(typeAnswer + month).set(
                {
                  designer: downloadURLs[0],
                  designer1: downloadURLs[1] || '',
                  designer2: downloadURLs[2] || '',
                  designer3: downloadURLs[3] || '',
                },
                { merge: true }
              );

              setImageUrls(downloadURLs);
              setFiles(selectedFiles);
              setUploadButtonText('Upload Complete');
              setUploading(false);
            }
          }
        );
      }
    };

    return (
      <div>
        {uploading ? (
          <p>Uploading...</p>
        ) : (
          <>
            <label className='custom-file-upload cursor-pointer text-white bg-gray-800  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 lg:w-[120px]'>
              <input type="file" accept="image/*" multiple onChange={handleUploadImages} />
              {uploadButtonText}
            </label>

          </>
        )}
      </div>
    );

}
