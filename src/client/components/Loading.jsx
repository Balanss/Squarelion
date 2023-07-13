import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export default function Loading() {
  return (
    <div className='loading-screen'> <Stack sx={{ color: 'gold' }} spacing={2} direction="row">
    <CircularProgress color="secondary" />
  </Stack>
  <h1> Loading ... </h1></div>
  )
}
