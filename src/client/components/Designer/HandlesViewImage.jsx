import React from 'react'
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { fs } from "../../Firebase";


export default function HandlesViewImage({name, user, dPost, dMonth, dPage, setSuccessfully, setImageUrls, setFiles}) {

    const handleImageChange = async e => {
        const selectedFiles = e.target.files;
        if (!selectedFiles || selectedFiles.length > 4) {
          alert("You can only upload a maximum of 4 files at once.");
          return;
        }
    
        const uploadPromises = Array.from(selectedFiles).map(file => {
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
                resolve({ url: downloadURL, type: file.type });
              }
            );
          });
        });
    
        try {
          const files = await Promise.all(uploadPromises);
    
          
          const pdfs = files.filter(file => file.type === 'application/pdf').map(file => file.url);
    
           const images = files.filter(file => file.type.startsWith('image/')).map(file => file.url);
         
    
         
    
          const imageData = {
            designer: images[0] || "",
            designer1: images[1] || "",
            designer2: images[2] || "",
            designer3: images[3] || "",
          };
    
          const pdfData = {
            pdf: pdfs[0] || "",
          };
    
          if (images[0]) {
            const docData = {
              ...imageData,
              DesignedUploadedBy: user,
            };
            await setDoc(doc(fs, "DesignerPage", dPost + dMonth + dPage), docData, {
              merge: true,
            });
          } else if (pdfs[0]) {
            const docData = {
              ...pdfData,
              DesignedUploadedBy: user,
            };
            await setDoc(doc(fs, "DesignerPage", dPost + dMonth + dPage), docData, {
              merge: true,
            });
          }
    
          setImageUrls(images);
          setFiles(selectedFiles);
          setSuccessfully(
          
            "Files have been uploaded. Click view button to view them!"
          );
    
          setTimeout(() => {
            setSuccessfully("");
          }, 7000);
        } catch (error) {
          console.error("Error updating Firestore:", error);
          // Handle the error appropriately
        }
      };

      return (
        <label>
        <input type="file" accept="image/*" multiple onChange={handleImageChange} /> Upload
        </label>
      );
    

}

