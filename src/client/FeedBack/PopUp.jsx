// import React from 'react'
// import { useEffect,useState } from 'react';

// export default function PopUp({user}) {

//     const currentDate = new Date();
//     const startDate = new Date('2023-12-01');
//     const endDate = new Date('2023-12-07');

//     const [show, setShow] = useState(true);

// const handleStorage = () => {
//     localStorage.setItem('popup', 'false')
// }

// useEffect(() => {
//     if(localStorage.getItem('popup') === 'false'){
//         setShow(false)
//     } else {
//         setShow(true)
//     }
// }
// , [])

// return (
//     <>
//         {currentDate < startDate || currentDate > endDate ?
//      null    :

//      show &&  <div className="text-center text-white phones:w-[80vw] w-[40vw] h-[100vh] flex flex-col items-center justify-start pt-10 gap-2 md:w-[75vw] md:h-[20vh] bg-slate-900 absolute bottom-0">
//      <p className='mb-10 text-lg p-7 font-bold md:w-[75vw] md:h-[20vh] bg-slate-900 absolute bottom-0 '>Hello {user}, There is a feedback panel open on the left side of your screen. Please take your time to add suggestions or feedback to improve Media Pilot. Thank you.</p>
//      <button className='bg-slate-700 mt-8 text-white rounded-lg p-2 absolute ' onClick={handleStorage}>close</button>
//  </div>

//         }
//     </>
// );

// }
