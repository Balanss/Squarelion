import React,{useState} from "react";

export default function DesignerHeader() {
const [open, setOpen] = useState(false);



  return (
    <>


   
     <div className="border-yellow-500 border-t-2 mt-3 bg-slate-700 flex items-center w-full justify-center gap-10 p-5">
        <h1 className="text-4xl font-sans font-bold text-slate-200 text-center ">
          Squarelion Designer Page
        </h1>

        <div className="text-center bg-slate-700 ">
  <button 
    onClick={() => setOpen(!open)}
    style={{
      backgroundColor: '#f8f9fa',
      color: '#333',
      border: '1px solid #ced4da',
      borderRadius: '4px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e9ecef'}
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
  >
    {open ? 'Close tooltip' : 'Open tooltip'}
  </button>
</div>
        <h6 className="fixed bottom-1 left-2 text-[10px] text-white">V 0.4</h6>
      </div>

      <div>



     {open &&    <article className="flex flex-row items-stretch justify-around w-full h-full p-10 bg-gray-100  dark:bg-slate-700">
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Click upload image
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Step 1
            </p>
          </div>

          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Click finish to complete
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Step 2
            </p>
          </div>

          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              To see the instructions click on the view button
            </h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              For now you can only upload 4 image at a time and 1 pdf file
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Note</p>
          </div>
        </article>}
      </div>
 
    </>
  );
}
