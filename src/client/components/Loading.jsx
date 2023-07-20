import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export default function Loading() {
  return (
    <div className='bg-sky-100 absolute inset-0 float-right items-center justify-center flex flex-col'> <Stack className='' spacing={2} direction="row">
    <CircularProgress color="secondary" />
  </Stack>
  <h1 className='text-5xl mt-10 text-black' > Loading ... </h1></div>
  )
}
