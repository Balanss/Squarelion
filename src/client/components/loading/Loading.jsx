import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import block from "../images/loading-blocks.gif";

export default function Loading() {
  return (
    <div className=" flex-col  fixed top-0 w-[100vw] bg-primary left-0 z-[100] flex items-center justify-center h-[100vh]">
    <img src={block} className="w-[100px] h-[100px]" />
   
    <p className="text-white text-2xl animate-bounce">Loading...</p>
  
  </div>
  )
}
