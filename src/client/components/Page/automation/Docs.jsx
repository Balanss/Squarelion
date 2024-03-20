import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import txt from "../../images/txt-file.png"
import {useState,useContext} from 'react'
import {UserContext} from '../../context/UserContext'
import DocErrorHandler from "./DocErrorHandler";

export default function Docs({selectDoc,page,month}) {


    const {user,uuid,level,email} = useContext(UserContext);
   

    const handleDownload = async () => {

                    let uuid;
                    if (selectDoc[0] && selectDoc[0].unid) {
                        uuid = selectDoc[0].unid.slice(0, -2);
                    }

               

        try{
            const data = {
                doc: selectDoc[0],
                doc2: selectDoc[1],
                doc3: selectDoc[2],
                doc4: selectDoc[3],
                doc5: selectDoc[4],
                doc6: selectDoc[5],
                doc7: selectDoc[6],
                doc8: selectDoc[7],
                doc9: selectDoc[8],
                doc10: selectDoc[9],
                doc11: selectDoc[10],
                doc12: selectDoc[11],
                doc13: selectDoc[12],
                doc14: selectDoc[13],
                doc15: selectDoc[14],
                doc16: selectDoc[15],
                doc17: selectDoc[16],
                doc18: selectDoc[17],
                doc19: selectDoc[18],
                doc20: selectDoc[19],
                doc21: selectDoc[20],
                doc22: selectDoc[21],
                doc23: selectDoc[22],
                doc24: selectDoc[23],
                doc25: selectDoc[24],
                doc26: selectDoc[25],
                doc27: selectDoc[26],
                doc28: selectDoc[27],
                doc29: selectDoc[28],
                doc30: selectDoc[29],
                doc31: selectDoc[30],
                length: selectDoc.length,
                page: page,
                email:email,
                uuid:uuid,
                
            }

            const response = await fetch(import.meta.env.VITE_ALL_DOCS, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data),

    });
    const text = await response.text();
    console.log(text);
        toast('Send to Google Docs complete!!')
        }
        catch (error) {
            console.log(error);
            toast.error('Error sending to Google Docs')
    }

};



  return (
    <div>
        <ToastContainer />
        <DocErrorHandler page={page} month={month} />
    <img src={txt} alt={txt} onClick={() => {selectDoc.length > 0 ? handleDownload(): alert('Please select atleast 1 post')}} title="Send to Doc" className={`w-10 hover:scale-[1.1] ${selectDoc.length !== 0? '' : 'opacity-30'}`} style={{ cursor: "pointer"}}/>
  </div>
  )
}
