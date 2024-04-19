import React from 'react'
import {collection,deleteDoc,doc,  addDoc,updateDoc,setDoc,deleteField, arrayUnion,FieldValue} from "firebase/firestore";
  import send from "../../assets/send.png";
  import toast,{Toaster} from 'react-hot-toast'


  



export default function HandleSend({newDesigner, db, id,collection, doc, setDoc, user, setImageUrl}) {


   
  
const HandleSend = async () => {
   await newDesigner.map((designer, index) => {
        if (id === index && designer.files.length > 0) {
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
          } 
          else {
            toast.success('Design send successfully');
            const docRef = collection(db, designer.page);
            const colRef = doc(docRef, designer.month);
            try{
              setDoc(
              colRef,
              {
               [designer.post + designer.month]: {
                 designer: designer.files[0] ? designer.files[0].url : "",
                 designer1: designer.files[1] ? designer.files[1].url : "",
                 designer2: designer.files[2] ? designer.files[2].url : "",
                 designer3: designer.files[3] ? designer.files[3].url : "",
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
         
            } catch (error) {
              toast.error('Issue with completing the design');
            }
           

         
          }
  
          const docR = collection(db, "DesignerPage");
          const colR = doc(docR, designer.post + designer.month + designer.page);
          deleteDoc(colR);
          setImageUrl("");
        } 
      });
}

return (<> 
<Toaster />
    <img src={send} className={`w-8 h-8 cursor-pointer hover:scale-[1.1] }`} onClick={HandleSend} title='Send'/>
    </>
)

}
