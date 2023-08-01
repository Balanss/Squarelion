import React from 'react'
import DocsClient from './Docs/Docs';
import doc2 from '../images/docs/doc-2.png';
import doc3 from '../images/docs/doc-3.png';
import doc4 from '../images/docs/doc-4.png';
import doc5 from '../images/docs/doc-5.png';

export default function Docs() {
  return (
   <>
   <div className='text-center text-black md:w-full md:absolute md:right-0 font-extrabold bg-slate-400 p-2 lg:w-4/5 lg:m-auto ' >
   {/* <div className='lg:flex xl:w-[1000px] xl:m-auto  lg:justify-center  '>
    <ul>
        <li className='mb-4 text-3xl'>
            1. Introduction
        </li>
        <li className='mb-4 text-xl '>
        2. Accessing the Calendar
        </li>
        <li className='mb-4 text-xl '>
        3. Adding a New Note
        </li>
        <li className='mb-4 text-xl '>
        4. Marking Tasks as Completed 
        </li>
        <li className='mb-4 text-xl '>
        5. Deleting Notes
        </li>
        <li className='mb-4 text-xl '>
        6. Automatic Removal of Expired Notes
        </li>
        <li className='mb-4 text-xl '>
        7. Accessing the Clients Tab
        </li>
    </ul>
   </div> */}

   <div className='mt-10 xl:w-[1200px] xl:m-auto xl:mt-10'>
    <h1 className='text-3xl'>
    1. Introduction
    </h1>

    <h2 className='mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2'> 
        Welcome to the User Profile Guide for SQL Client Planning Tool. 
        In this guide, we will walk you through the functionalities of the tool on your user profile page
    </h2>

<h1 className='text-3xl mt-5' > 2. Accessing the Calendar </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 '>
    Upon loading your user profile page, you will be presented with a calendar view that displays all your tasks and notes. The calendar will be the central hub for organizing your to-do list.
    </h2>


    <h1 className='text-3xl mt-5' > 3. Adding a New Note </h1>
<p className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word'>1. To add a new note, simply click on the desired date on the calendar. A note editor will appear, allowing you to input your task details and notes.</p>
<img src={doc3} className='mt-10 pb-5'/>
<p className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word'> 2. Type your task or note into the input field provided. You can include any relevant information, such as priority, or additional details.</p>
<p className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word'> 3. After completing the note, click on the "+" icon to save it. The new note will be added to the calendar, appearing alongside any existing notes for that date. </p>
<img src={doc4}  className='mt-10 pb-5'/>



    <h1 className='text-3xl mt-5' > 4. Marking Tasks as Completed </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 '>
    When you have finished a task, click on the small circle associated with the note on the calendar. The card will turn green, indicating that the task has been completed.
    </h2>
    <img src={doc5}  alt={doc5} className='mt-10   md:mt-10 '/>


    <h1 className='text-3xl mt-5' > 5. Deleting Notes </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 '>
    To remove a note entirely, click on the "Delete" option associated with the note on the calendar.
    </h2>



    <h1 className='text-3xl mt-5' > 6. Automatic Removal of Expired Notes </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5'>
    When the due date of a note has passed, the system will automatically remove the note from inside the card.
    </h2>

    <h1 className='text-3xl mt-5' > 7. Accessing the Clients Tab </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5'>  To access the Clients Tab, look for the "Clients" option on the side panel of your user profile page. Click on it to open a small window that displays all your SQL clients. </h2>
    

   <DocsClient />


   </div>
   </div>

   
   </>
  )
}
