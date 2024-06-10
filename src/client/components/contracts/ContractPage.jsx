import React, { useContext, useState,useEffect } from 'react'


import ContractInputs from './ContractInputs';
import ContractsFunction from './ContractsFunction';
import Links from '../Page/Links';
import Nav from '../navbar/Nav';


export default function ContractPage() {


           const [img, setImage] = useState("");
           useEffect(() => {
             setImage(localStorage.getItem("image"));
           }, [img]); // sets the image for the current client


         

  return (
    <div className="client-page  h-screen overflow-auto bg-primary" style={{ color: "white" }} >
<div className=" pt-4 mb-[25px] bg-primary">  <Nav /></div>
         <div className="flex flex-row justify-around py-2 items-center bg-slate-300 border-t-2 border-yellow-500 ">
                  <div className="bg-slate-700 p-4  cursor-pointer">
                   <Links />
                  </div>
                  </div>

                <ContractInputs />
           
           <div className='desktopX:w-[75vw] mx-auto py-2 px-2 bg-secondary rounded-lg border-2 mt-2'>
           <ContractsFunction />
           </div>

        </div>
  )
}
