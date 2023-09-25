import React from 'react'

export default function DesignerHeader() {

    

  return (
    <div className='border-yellow-500 border-t-2 mt-3'>
        <h1 className='mt-5 mb-5 ml-2'>
Squarelion Designer Page 

        </h1>
        <h6 className='fixed bottom-1 left-2 text-[10px]'>V 0.1</h6>

<div className='flex flex-row items-center gap-4 ml-2'>
<li>
          Step 1 : Click choose file to upload image
        </li>

<li>
  Step 2 : Click finish to complete 
</li>
</div>

<section className='mt-5 ml-2'>
  <h1 className='mb-2'> Note to view the content click on view </h1>
  <h1> Note for now you can only upload 1 image at a time</h1>
</section>

    </div>
  )
}
