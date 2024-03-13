import React from 'react'
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function DesignerReset({setFiles, setSureToReset, designerPostReset, designerMonthReset, designerPageReset}) {

    return (
 
        <>
            <ToastContainer />
          <div className='fixed top-0 z-[1000] left-0 w-full h-full bg-slate-400/20 gap-4  flex justify-center items-center'>
            <div className="flex gap-3 flex-col bg-white p-5 rounded-md">
            <p className='text-black font-semibold text-xl'>Are you sure you want to reset this?</p>
            <button onClick={() => {
              
              const docRef = collection(db, "DesignerPage");
              const colRef = doc(
                docRef,
                designerPostReset + designerMonthReset + designerPageReset
              );
              updateDoc(colRef, {
                files: '',
              }, { merge: true });
              toast.success("Reset successful");
              setTimeout(() => {
                setSureToReset(false);
                setFiles([]);  
              }, 1000);
            }} className="bg-red-700 text-white p-2 rounded-md hover:bg-red-800 cursor-pointer">Yes</button>
            <button onClick={() => setSureToReset(false)} className="bg-green-700 text-white p-2 rounded-md hover:bg-green-800 cursor-pointer">No</button>
            </div>
           
          </div>
        </>
 )
}
