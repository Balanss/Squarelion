import React from 'react'

import doc6 from '/src/client/components/images/docs/doc-6.png';
import doc7 from '/src/client/components/images/docs/doc-7.png';
import doc8 from '/src/client/components/images/docs/doc-8.png';
import doc9 from '/src/client/components/images/docs/doc-9.png';


export default function DocsClient() {
  return (
   <>

   <div className='mt-10 xl:w-[1200px] xl:m-auto xl:mt-10'>
    <h1 className='text-3xl'>
    8. Adding Content Details
    </h1>

    <h2 className='mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2'> The Content Planner is responsible for adding essential content information for each client. </h2>
    <h2 className='mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2'> On the client's page, you will find fields to fill in:

<p>1. Post Count: Specify the number of posts required for the client's content. </p>
<p>2. Social Media Channel: Indicate the platform(s) where the content will be published.</p>
<p>3. Date of Delivery: Set the deadline for when the content should be completed.</p>
<p>4. Post Subject: Provide a brief description of the content subject..</p>
<img src={doc6} className='mt-5'/>
 </h2>

<h1 className='text-3xl mt-5' > 9. Tracking Content Progress </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 '> To identify pending content creation, the Content Editor can look for posts marked in orange with a "Pending" status. </h2>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 '> Click on the "Open" button next to a pending post to access its content creation workspace. </h2>
    <img src={doc7} className='mt-5 m-auto mb-10' />

    <h1 className='text-3xl mt-5' >10. Content Creation Workspace </h1>

    <h2 className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 '>Inside the content creation workspace, the Content Editor can:</h2>
<p className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word'>1. Write the text for the post.</p>

<p className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word'> 2. Add emojis to enhance the content.</p>
<p className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word'> 3.Delete the entire post if necessary.. </p>
<p className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 break-word'> 4. Add designs or media to complement the content.</p>




    <h1 className='text-3xl mt-5' > 11. Designer Content Upload </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 '> The designer has the option to upload the final design for each post on the client's page </h2>
    <img src={doc8} className='m-auto mb-10 mt-5'/>



    <h1 className='text-3xl mt-5' > 12. Example Tab for Sending Instructions </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 '>Below the Designer Content Upload section, you will find the "Example Tab".</h2>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 '>The Example Tab allows the Content Planner to provide instructions to the designer. It includes fields to add images and text as references.</h2>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 '>The Content Planner can open up to a maximum of three Example Tabs for different instructions.</h2>



    <h1 className='text-3xl mt-5' > 13. Changing Post Status to "Waiting"s </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5'>After the Content writers have written the content for a post, they can change the post status to "Waiting" by clicking on the "Waiting" button. </h2>

    <h1 className='text-3xl mt-5' > 14. Approving the Post </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5'>  Once the Content Planner has reviewed and approved the content, they can click on the "Approved" tab. </h2>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5' >The "Approved" tab will change the status of the post to "Green," signifying its approval.</h2>

    <h1 className='text-3xl mt-5' > 15. Downloading Text File or Entire Page </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5'>  The person in charge of content can download a single text file for a specific post. </h2>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5' >By checking the box next to "Download Text File," they can download the text content in a convenient file format.</h2>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5' >Alternatively, they can choose to download the entire page, which includes all content and designs related to the client if they are approved.</h2>
    <img src={doc9} className='mt-5 m-auto mb-10' />

    <h1 className='text-3xl mt-5' > 16. Closing the Post </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5'>  To close a post, the user can click on the button with an "X" next to "Open." </h2>
 

    <h1 className='text-3xl mt-5' > 17. Chat and Memo Functionalities  </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5'>  The Chat functionality on the client's page works similarly to the one on the user profile page, enabling smooth communication between team members. </h2>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5' >The Memo button allows users, typically Content Planners, to create or delete memos as reminders or notes related to content management tasks.</h2>
   

   


   </div>


   
   </>
  )
}
