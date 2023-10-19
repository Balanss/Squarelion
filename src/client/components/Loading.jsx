import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import block from "./images/loading-blocks.gif";

export default function Loading() {
  return (
    <div className=" flex-col  fixed top-0 w-[100vw] bg-slate-600 left-0 z-[100] flex items-center justify-center h-[100vh]">
    <img src={block} className="w-[300px] h-[200px]" />
   
    <p className="text-white text-2xl animate-bounce">Loading...</p>
  
  </div>
  )
}
