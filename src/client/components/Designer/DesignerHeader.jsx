import React from 'react'

export default function DesignerHeader() {

    

  return (<>
     <div className='border-yellow-500 border-t-2 mt-3 bg-slate-700'>
         <h1 className='text-4xl font-sans font-bold text-slate-200 text-center mt-2'>
 Squarelion Designer Page 
         </h1>
       <h6 className='fixed bottom-1 left-2 text-[10px] text-white'>V 0.1</h6>

     </div>

<div>
  <article className="flex flex-row items-stretch justify-around w-full h-full p-10 bg-gray-100  dark:bg-slate-700">

<div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Click upload image</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Step 1</p>
</div>

<div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Click finish to complete</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Step 2 :</p>
</div>


<div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">To see the instructions click on the view button</h5>
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">For now you can only upload 1 image at a time</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Note</p>
    
</div>

</article>
</div>



  </>)
}
