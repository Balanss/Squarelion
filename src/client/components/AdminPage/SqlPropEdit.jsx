import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { auth, fs,db } from '../../Firebase'
import { collection,doc,setDoc,query,where,onSnapshot } from "firebase/firestore";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export default function SqlPropEdit({data,name,setName,email,setEmail,ammount,setAmmount,domeinName,setDomeinName,expireDate,setExpireDate,renewDate,setRenewDate,info,setInfo}) {


   
   




 

  



  return (
    <div>

      


   

    </div>
  )
}
