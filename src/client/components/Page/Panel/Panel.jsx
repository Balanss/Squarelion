import React, { useState ,useEffect} from 'react'
import IN from '../../images/in.png';
import homeBtn from '../../images/home-button.png';
import client from '../../images/client.png';
import survey from '../../images/survey.png';
import admin from '../../images/admin.png';
import wfh from '../../images/wfh.png';
import userPfp from "../../images/user.png"
import Bugs from '../../images/bug.png';
import schedule from '../../images/schedule.png'
import meeting from '../../images/meeting.png'
import { Link, useNavigate } from 'react-router-dom'
import Links from '../Links';
import { auth } from '../../../firebase';
import Designer from '../../Designer/Designer';
import design from "../../images/Designer.jpg"
import SignoutInfo from '../../AdminPage/LogsInfo/SignoutInfo';
import timer from "../../images/time.png"
import DesignerFunctions from '../../Designer/DesignerFunctions';

export default function Panel({level,showWfh,setShowPfp,setShowWfh,user,hideList,setHideList,sum,work,setSendTo,setDisplayTo,setPrivateChat,setTrueChat,setPan,pan}) {

    const [ panel,setPanel] = useState(false)
    const [clicked,setClicked] = useState(true)
    const navigate = useNavigate()

    const handleLogout = () => {
      auth.signOut().then(() => {
        navigate('/')
        window.location.reload()
      })
    };

    const [designerData, setDesignerData] = useState([]);
    const [noti, setNoti] = useState();
    

    const formattedUser = user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();


   const filteredDesignerData = designerData.filter(x => x.SendTo === user);
   const filteredDesignerDataLength = filteredDesignerData.length;

  return (
   
     <div className="h-full px-3 py-4 overflow-y-auto bg-slate-800 dark:bg-slate-800 w-[20vw]  ">
      <DesignerFunctions user={user} setNoti={setNoti} setDesignerData={setDesignerData} designerData={designerData}/>
        <ul className="space-y-2 font-medium fixed phones:bg-slate-500 phones:left-0 ">
           <li>
              <Link to='/' 
              className=" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group">
                 <img className='w-[25px]' src={homeBtn} />
                 <span className="ml-3 md:text-xs lg:text-md">Home</span>
              </Link>
           </li>
  
           <li>
              <a onClick={() => {setShowPfp('start'),setPan(pan === false?true:false)}} 
              className=" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group">
                 <img className='w-[25px]' src={schedule} />
                 <span className="ml-3 md:text-xs lg:text-md">Calendar</span>
              </a>
           </li>
  
           <li>
             {level > 9 ?  <Link to='/admindashboard'  className="  transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group" >
                 <img className='w-[25px]' src={admin} />
                 <span className="flex-1 ml-3 whitespace-nowrap  rounded-lg  dark:text-white md:text-xs lg:text-md" >Admin</span>
              </Link> : null}
           </li>
  
           <li  >
              <a  
               className="transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white  rounded-lg dark:text-white  dark:hover:bg-gray-700 group"  >
                <img className='w-[25px]' src={client} />  
                 <span className="flex-1 ml-2 whitespace-nowrap   dark:text-white md:!text-xs lg:!text-md">  <Links/> </span>
              </a>
           </li>

           <li>
           <Link to ='/designer' 
               className="transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white  rounded-lg dark:text-white  dark:hover:bg-gray-700 group" >
                <img className='w-[25px] rounded-xl' src={design} />  
                 <span className="flex-1 ml-3 whitespace-nowrap   dark:text-white md:text-xs lg:text-md ">  Designer  </span>
               {filteredDesignerDataLength > 0 ? <p className='bg-red-500 rounded-full w-[20px] h-[20px] text-center text-white text-xs ml-2'>{filteredDesignerDataLength}</p> : null}
              </Link>
           </li>  

           <li>
              <a  className="transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group">
              <img className='w-[25px]' src={userPfp} />
                 <span className="flex-1 ml-3 whitespace-nowrap text-white md:text-xs lg:text-md ">{formattedUser}</span>
              </a>
           </li>

           <li>
            <a className="transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group" onClick={() => {setShowPfp('Bugs'),setPan(pan === false?true:false)}}>
            <img className='w-[25px]' src={Bugs} />
                 <span className="flex-1 ml-3 whitespace-nowrap text-white md:text-xs lg:text-md ">Bug Report</span>
            </a>
           </li>

           <li>
               <a className="transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group" onClick={() => {setShowPfp('feedback'),setPan(pan === false?true:false)}}>
               <img className='w-[25px]' src={wfh} />
                   <span className="flex-1 ml-3 whitespace-nowrap text-white md:text-xs lg:text-md ">FeedBack</span>
               </a>
           </li>
  
           <li>
              <a className=" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white  dark:hover:bg-gray-700 group" onClick={handleLogout} >
                 <img className='w-[25px]' src={IN} />
                 <span className="flex-1 ml-3 md:text-xs lg:text-md whitespace-nowrap text-white" >Sign Out</span>
              </a>
           </li>


  {/* <li>
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
  </li> */}


  <li className='fixed bottom-10 phones:top-0 phones:right-0'>
  <a  className="transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  rounded-lg text-white dark:text-white  dark:hover:bg-gray-700 group">
              <img className='w-[25px]' src={timer} />
                 <span className="flex-1 ml-2 whitespace-nowrap text-white md:text-xs lg:text-md"><SignoutInfo /> </span>
              </a>
   </li>
        </ul>
  
     </div>
 
  )
}