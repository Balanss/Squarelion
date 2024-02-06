import React from 'react'
import {
    collection,deleteDoc,doc,  addDoc,updateDoc,setDoc,deleteField, arrayUnion,FieldValue} from "firebase/firestore";
  import DesignerFunctions from "./DesignerFunctions";
  import { getStorage, ref, uploadBytesResumable, getDownloadURL,} from "firebase/storage";
  import { db, auth, fs } from "../../Firebase";



export default function HandleSend({newDesigner, db, id,collection, doc, setDoc, user, setImageUrl}) {


   
  
const HandleSend = async() => {
    newDesigner.map((designer, index) => {
        if (id === index) {
          console.log("success", designer.post);
          if (designer.month.includes("2023")) {
            const docRef = collection(db, designer.page);
            const colRef = doc(docRef, designer.post + designer.month);
            setDoc(
              colRef,
              {
                designer: designer.designer || "",
                designer1: designer.designer1 || "",
                designer2: designer.designer2 || "",
                designer3: designer.designer3 || "",
                pdf: designer.pdf ||"",

                hide: true,
                color: "#00eaff",
                status: "Design Done",
                StatusText: "Design Done",
                DesignUploadedBy: user,
              },
              { merge: true }
            );
          } else {
            const docRef = collection(db, designer.page);
            const colRef = doc(docRef, designer.month);
            setDoc(
              colRef,
              {
               [designer.post + designer.month]: {
                designer: designer.designer || "",
                designer1: designer.designer1 || "",
                designer2: designer.designer2 || "",
                designer3: designer.designer3 || "",
                pdf: designer.pdf || "",
                hide: true,
                color: "#00eaff",
                status: "Design Done",
                StatusText: "Design Done",
                DesignUploadedBy: user,
                Time: new Date().toLocaleString(),
               }
              },
              { merge: true }
            );
          }
  
          const docR = collection(db, "DesignerPage");
          const colR = doc(docR, designer.post + designer.month + designer.page);
          deleteDoc(colR);
          setImageUrl("");
        
        } 
      });
}

return (
    <button className='bg-slate-800 text-white p-2 rounded-md hover:bg-gray-900 cursor-pointer' onClick={HandleSend}>Send</button>
)

}
