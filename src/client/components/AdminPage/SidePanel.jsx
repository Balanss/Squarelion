import React,{useEffect,useState} from 'react'
import usersPic from '../images/new-arrival.png';
import IN from '../images/in.png';
import homeBtn from '../images/home-button.png';
import client from '../images/client.png';
import survey from '../images/survey.png';
import AdminSurvey from './AdminSurvey';
import rightArrow from '../images/arrow-right.png';
import userPfp from "../images/user.png"
import { useNavigate,Link} from 'react-router-dom';
import { auth, fs,db } from '/src/client/Firebase.jsx'

export default function SidePanel({level,user,switching,setSwitching}) {
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.signOut().then(() => {
          navigate('/')
          window.location.reload()
        })
      };
      
      function handleGoPfP(){
              localStorage.setItem('user',user)
              setTimeout(() =>{
                  navigate(`/user/${user}`)
              },1000)
      }



      const [isHovered, setIsHovered] = useState(false);  
      const [hiding,setHiding] = useState(true);




      

  return (
    <aside id="cta-button-sidebar" 
    className="fixed top-0 left-0 z-40 w-1/5 h-screen transition-transform -translate-x-full sm:translate-x-0"
     aria-label="Sidebar">
       <div className="h-full px-3 py-4 overflow-y-auto  bg-gray-800 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
             <li>
                <a  className="flex items-center p-2  text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group">
                  
                   <span className="ml-3">Dashboard</span>
                </a>
             </li>
             <li>
                <Link to='/'
                 className=" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group">
                   <img src={homeBtn} className='w-[40px] flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                   <span className="ml-3 text-gray-900 rounded-lg dark:text-white">Home</span>
                </Link>
             </li>
             <li>
                <a 
                 className=" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2  rounded-lg dark:text-white  dark:hover:bg-gray-700 group" 
                 onClick={( ) => setSwitching('Client')}>
                <img className='w-[40px]' src={client} />  
                   <span className="flex-1 ml-3 whitespace-nowrap text-gray-900 rounded-lg dark:text-white">  CLIENTS  </span>
                </a>
             </li>
 {level > 9 ?             <li>
                <a className=" transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group" onClick={( ) => {setSwitching('Users'),
            setHiding(false),setTimeout(() => setHiding(true),1000)
               }}>
                <img src={usersPic} className='w-[40px]' />
                   <span className="flex-1 ml-3 whitespace-nowrap text-gray-900 rounded-lg dark:text-white">
                    USERS
                   </span>
                  
                </a>
             </li> : null}
             <li className='transform transition-transform ease-in hover:scale-105 cursor-pointer'>
               {level === 11 ? <> <a onClick={( ) => setSwitching('Survey')}  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group">
                  <img src={survey} className='w-[40px]' /> 
                  <span className="flex-1 ml-3 whitespace-nowrap text-gray-900 rounded-lg dark:text-white">SURVEY</span>
                </a>  </> : null}
             </li>
             <li>
                <a onClick={handleGoPfP}  className="
                transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group">
                  <img src={userPfp} className='w-[40px]' />
                   <span className="flex-1 ml-3 whitespace-nowrap">{user}</span>
                </a>
             </li>
             <li>
                <a className="transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group" onClick={handleLogout}>
                <img src={IN} className='w-[40px] flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
    
                   <span className="flex-1 ml-3 whitespace-nowrap" >Sign Out</span>
                   
                </a>
             </li>
    
          </ul>
    
       </div>
    </aside>
  )
}
