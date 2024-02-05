import React from 'react'
import {
    collection,deleteDoc,doc,  addDoc,updateDoc,setDoc,deleteField, arrayUnion,FieldValue} from "firebase/firestore";
    import { getStorage, ref, uploadBytesResumable, getDownloadURL,} from "firebase/storage";
    import { motion,AnimatePresence } from "framer-motion";
import HandlesViewImage from './HandlesViewImage';
    

export default function HandleSubmitForm({newDesigner, db, id ,dPage, collection, doc,dMonth,  user ,dPost,setImageUrls, setFiles, setDPost, setDMonth, setDPage, setMessageUploading, setSuccessfully}) {


    function handleSub() {
        newDesigner.map((designer, index) => {
          if (id === index) {
            const file = imageUrl; // This should be a File object
            const storageRef = ref(getStorage(), `products/${file.name}`);
    
            // Upload the file to the bucket
            const uploadTask = uploadBytesResumable(storageRef, file);
    
            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on(
              "state_changed",
              snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setMessageUploading(`Uploading ${progress}%`)
              },
              error => {
                console.error(error);
              },
              async () => {
                // Upload completed successfully, now get the download URL
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
    
                // Save the download URL to Firestore
                const docRef = collection(db, "DesignerPage");
                const colRef = doc(docRef, designer.post + designer.month + designer.page);
    
                // Determine the field name based on the file type
                const fieldName = file
                console.log(file)
    
                const updateData = {};
                updateData[fieldName] = downloadURL;
    
                await updateDoc(colRef, updateData, { merge: true });
    
                console.log("success");
                setSuccessfully(
                  `${fieldName.toUpperCase()} has been uploaded. Click view button to view ${fieldName}!`
                );
    
                setTimeout(() => {
                  setSuccessfully("");
                }, 7000);
              }
            );
          } else {
            return console.log("error");
          }
        });
      }


      const forHandleViewImage = {
        name,
        user,
        dPost,
        dMonth,
        dPage,
        setSuccessfully,
        setImageUrls,
        setFiles
      };

      return (
        
          <form onSubmit={handleSub} className="designer-upload  mr-5 ml-4">
      <motion.label
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={() => {
          setDPost(designer.post);
          setDMonth(designer.month);
          setDPage(designer.page);
        }}
        className="custom-file-upload cursor-pointer text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 lg:w-[120px]"
      >
    <HandlesViewImage {...forHandleViewImage} />
      </motion.label>
    </form> 
      )
   
   

}
