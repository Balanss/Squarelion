import React from "react";
import { auth, fs, db } from "/src/client/Firebase.jsx";
import { useState, useEffect } from "react";
import upload from "../../assets/upload.png";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function Stories({ name, user, type,post, objectiveAnswer, subject, typeAnswer, month, color, page, level, setObjectiveAnswer, orderPost, uniqueId }) {
  const [imageUrls, setImageUrls] = useState([]);
  const [files, setFiles] = useState([]);

  const [uploading, setUploading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Images");

  const handleUploadImages = async event => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) {
      return;
    }

    if (selectedFiles.length > 4) {
      alert("You can only upload a maximum of 4 images at once.");
      return;
    }

    setUploading(true);

    const storageRefs = [];
    const uploadTasks = [];
    const downloadURLs = [];

    // Upload each file to the bucket
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const storageRef = ref(
        getStorage(),
        `products/${name}/${file.name}+${uniqueId}.${orderPost}`
      );
      storageRefs.push(storageRef);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTasks.push(uploadTask);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // Update progress if needed
        },
        error => {
          console.error("Upload Error:", error);
          // Handle the error appropriately
          setUploading(false);
        },
        async () => {
          // Upload completed successfully, now get the download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          downloadURLs.push(downloadURL);

          if (downloadURLs.length === selectedFiles.length) {
            // All uploads completed successfully, now update 
        
            const data = {
              [post + month]: {
                designer: downloadURLs[0],
                designer1: downloadURLs[1] || "",
                designer2: downloadURLs[2] || "",
                designer3: downloadURLs[3] || "",
                DesignedBy: user,
              }
            };

            await fs
  .collection(page)
  .doc(month)
  .set(data, { merge: true });

          
            setImageUrls(downloadURLs);
            setFiles(selectedFiles);
            setUploadButtonText("Upload Complete");
            setUploading(false);

            setTimeout(() => {
              setUploadButtonText("Upload Images");
            }, 3000);
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
          <label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleUploadImages}
            />
            <img src={upload} alt="Delete" className=" pointer-cursor  hover:scale-[1.1]  cursor-pointer w-12 h-12"  title="Upload "/> 
          </label>
        </>
      )}
    </div>
  );
}
