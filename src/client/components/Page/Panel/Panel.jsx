import React, { useState ,useEffect} from 'react'
import IN from '../../images/in.png';
import homeBtn from '../../images/home-button.png';
import client from '../../images/client.png';
import survey from '../../images/survey.png';
import admin from '../../images/admin.png';
import wfh from '../../images/wfh.png';
import userPfp from "../../images/user.png"
import schedule from '../../images/schedule.png'
import meeting from '../../images/meeting.png'
import { Link, useNavigate } from 'react-router-dom'
import Links from '../Links';
import { auth, fs,db } from '../../../Firebase'

export default function Panel({level,showWfh,setShowWfh,user,hideList,setHideList,sum,work,setSendTo,setDisplayTo,setPrivateChat,setTrueChat,setPan,pan}) {

    const [ panel,setPanel] = useState(false)
    const navigate = useNavigate()

    const handleLogout = () => {
      auth.signOut().then(() => {
        navigate('/')
        window.location.reload()
      })
    };
    


  return (
    <aside id="cta-button-sidebar" className={panel ? " bg-blue-700 w-full sm:w-1/5 fixed top-0 left-0 z-40  h-screen transition-transform -translate-x-full sm:translate-x-0" :
    "fixed top-0 left-0 z-40 w-64 h-screen transition-transform  sm:translate-x-0"  } aria-label="Sidebar">
     <div className="h-full px-3 py-4 overflow-y-auto dark:text-yellow-800 dark:bg-blue-900">
        <ul className="space-y-2 font-medium">
  
           <li>
              <Link to='/' 
              className=" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <img className='w-[40px]' src={homeBtn} />
                 <span className="ml-3">Home</span>
              </Link>
           </li>
  
           <li>
              <a onClick={() => {setShowWfh('start'),setPan(pan === false?true:false)}} 
              className=" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <img className='w-[40px]' src={schedule} />
                 <span className="ml-3">CALENDAR</span>
              </a>
           </li>
  
           <li>
             {level > 8 ?  <Link to='/admindashboard'  className="  transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" >
                 <img className='w-[40px]' src={admin} />
                 <span className="flex-1 ml-3 whitespace-nowrap text-gray-900 rounded-lg  dark:text-white" >ADMIN</span>
              </Link> : null}
           </li>
  
           <li>
              <a  
               className="transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" >
                <img className='w-[40px]' src={client} />  
                 <span className="flex-1 ml-3 whitespace-nowrap text-black  dark:text-white ">  <Links/> </span>
              </a>
           </li>
  
           <li>
              <a 
              className=" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" 
              onClick={() =>  {
             hideList === true? setHideList(false) : setHideList(true),
             setShowWfh('chat'),setPanel('false')
    } }>
              <img className='style-meeting' src={meeting} style={{cursor:'pointer',width:'40px'}} />  
                 <span className="flex-1 ml-3 whitespace-nowrap text-white">
                  Chat
                 </span>   
              </a>
           </li>
  
           <li>
              <a className=" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={() => {setShowWfh('wfh'),setPanel(true)}} >
                <img className='w-[40px]' src={wfh} />
                 <span className="flex-1 ml-3 whitespace-nowrap">
                  WFH request
                 </span>   
              </a>
           </li>
  
           <li>
              <a  className="transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img className='w-[40px]' src={userPfp} />
                 <span className="flex-1 ml-3 whitespace-nowrap">{user}</span>
              </a>
           </li>
  
           <li>
              <a className=" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={handleLogout} >
                 <img className='w-[40px]' src={IN} />
                 <span className="flex-1 ml-3 whitespace-nowrap" >Sign Out</span>
              </a>
           </li>
  <l1>
    
  
  
  
  
  {level > 7 && showWfh ==='chat' && <>
  
  <div className= 'pt-200px'>
{level > 8 ?   <h2 onClick={() => {setSendTo('group'),setDisplayTo('Group'),setPrivateChat('group') ,setPanel(true), setHideList(hideList === true? false : true)}} style={{cursor:'pointer'}}
   className='bg-slate-400 mt-2 p-2 mr-2 rounded-sm xl lg:w-[180px] transform transition-transform ease-in hover:scale-105 cursor-pointer '>
     Group  <p style={{fontSize:'14px',color:'red'}}> {sum > 0? sum : ''} </p></h2> : null }
  <h2 onClick={() => {setSendTo('designer'),setDisplayTo('designer'),setPrivateChat('designer'),setPanel(true),  setHideList(hideList === true? false : true)}} style={{cursor:'pointer'}}
    className='bg-slate-400 p-2 mt-2 mr-2 rounded-sm lg:w-[180px] transform transition-transform ease-in hover:scale-105 cursor-pointer' > Designer  </h2>
  
  {work.map((x,id) => {
   return <div key={id} className='pt-2'>
      <p  className='bg-slate-400 p-2 mr-2 rounded-sm lg:w-[180px] transform transition-transform ease-in hover:scale-105 cursor-pointer '
      style={{cursor:'pointer'}} key={id} onClick={() =>
       {setSendTo( 'chat'+ user + x.Name),setPrivateChat('chat'+ user + x.Name),setPanel(true),
       setTrueChat('chat'+ x.Name + user),setDisplayTo(x.Name),setHideList(hideList === true? false : true)}}> {x.Name} </p>
   </div>
  
  })}
  </div>
  
  </>}
  </l1>
        </ul>
  
     </div>
  </aside>
  )
}
