import React from 'react'
import doc1 from '../images/docs/doc-1.png';
import doc2 from '../images/docs/doc-2.png';

export default function Docs() {
  return (
   <>
   <div className='text-center text-black md:w-4/5 md:absolute md:right-0 font-extrabold bg-slate-400 p-2 ' >
   <div className='lg:flex xl:w-[1000px] xl:m-auto lg:items-center '>
    <ul>
        <li className='mb-4 text-3xl'>
            1. Introduction
        </li>
        <li className='mb-4 text-xl '>
        2. Overview of Squarelion Agency Planning Tool.
        </li>
        <li className='mb-4 text-xl '>
        3. Admin Page Functionality
        <ol  className='lg:flex mb-2 lg:items-center lg:mt-5'>
        <li className='mb-3 mt-2 text-lg lg:mt-auto'>3.1 Accessing the Admin Page </li>
        <li className='mb-3  text-lg'>3.2 Overview of SQL Clients</li>
        <li className='text-lg mb-3'>3.3 Client Source Hub</li>
        <li className='mb-2 text-lg'>3.4 Employee Tab and Access Rights Management</li>
        </ol>
        </li>
    </ul>
   </div>

   <div className='mt-10 xl:w-[1200px] xl:m-auto xl:mt-10'>
    <h1 className='text-3xl'>
    1. Introduction
    </h1>

    <h2 className='mt-5 indent-5 font-bold  lg:w-3/4 lg:m-auto lg:mt-2'>
    The Squarelion Agency Planning Tool is a comprehensive platform designed to enhance efficiency and streamline operations. This report provides an overview of the tool's e - the Admin Page. The Admin Page serves as the central hub that aggregates and displays essential links to all SQL clients.
    </h2>

<h1 className='text-3xl mt-5' > 2. Overview of Squarelion Agency Planning Tool </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 '>
    The Squarelion Agency Planning Tool is an innovative solution crafted to optimize workflow and productivity.
     The tool centralizes all client-related data, making it easier for our team to manage projects, monitor progress,
      and collaborate effectively. With its intuitive interface and powerful features,
       the planning tool simplifies complex tasks and empowers our agency to deliver exceptional services to clients.
    </h2>


    <h1 className='text-3xl mt-5' > 3. Admin Page Functionality </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 '>
    The Admin Page is a critical component of the Squarelion Agency Planning Tool,
     providing a bird's-eye view of all SQL clients in one centralized location.
      This section outlines the key functionalities of the Admin Page.
    </h2>


    <h1 className='text-3xl mt-5' > 3.1 Accessing the Admin Page </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 '>
    To access the Admin Page, users must log in using their unique credentials. Upon successful login, users, depending on their assigned roles and permissions,
     are directed to the dashboard with various navigation options. 
     The Admin Page is accessible to authorized personnel only, ensuring data security and confidentiality.
    </h2>
    <img src={doc1}  alt={doc1} className='mt-10 lg:w-[400px] lg:m-auto lg:mt-10'/>


    <h1 className='text-3xl mt-5' > 3.2 Overview of SQL Clients </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed lg:w-3/4 lg:m-auto lg:mt-2 '>
    Upon reaching the Admin Page, users are presented with an overview of all SQL clients associated with Squarelion Agency. 
    The page is organized in a user-friendly manner, allowing quick access to essential client pages. 
    Simply click on the client image to view their content.
    </h2>



    <h1 className='text-3xl mt-5' > 3.4 Employee Tab and Access Rights Management </h1>
    <h2 className='mt-5 indent-5 font-bold leading-relaxed  lg:w-3/4 lg:m-auto lg:mt-5'>
    In addition to the Client Source Hub, the Admin Page also incorporates an Employee Tab that allows high-ranking admins to manage employee access rights efficiently. 
    This feature ensures that the appropriate levels of access are granted to each employee,
     ranging from Level 0 (lowest) to Level 10 (highest).
      High-ranking admins have exclusive rights to view the current employee levels and modify them as necessary.
    </h2>

    <h3 className='mt-5 indent-5 font-bold text-2xl '>
    Access Rights Management
    <ol>
        <li className='mb-2 mt-3 text-sm md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2'> View Employee Levels: <br/> High-ranking admins can access a list of all employees along with their current access levels. 
            This clear and organized display allows for quick identification and monitoring of employees' access rights. </li>
           
            <li className='mb-2 text-sm  md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2'>
            Modify Employee Levels: <br/> High-ranking admins have the authority to adjust employees' access levels according to their job roles and responsibilities.
             They can either restrict access by reducing the level or grant higher privileges by increasing the level,
              thus customizing access rights to fit individual needs.
            </li>
            <li className='mb-2 text-sm  md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2'>
            New User Approval:  <br/> When a new employee joins the agency, high-ranking admins can approve their access by accessing the "Switch Tab." Here, 
            they can review pending users and assign them the appropriate access level. 
            The switch tab provides an easy-to-use interface to grant the required rights to newcomers promptly.
            <img src={doc2}/>
            </li>
            <li className='mb-2 text-sm  md:text-lg lg:w-3/4 lg:m-auto lg:mt-3 lg:mb-2'>
            Blocking and Restricting Access:  <br/> In cases where an employee changes roles or leaves the agency, 
            high-ranking admins can block or restrict their access as needed. 
            This ensures data security and confidentiality by revoking access for former employees. 
            </li>
    </ol>
    </h3>



   </div>
   </div>

   
   </>
  )
}
