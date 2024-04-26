import React, { useState ,useEffect} from 'react'
import IN from '../../images/in.png';
import homeBtn from '../../images/home-button.png';
import client from '../../images/client.png';
import dashboard from '../../images/dashboard.png';
import admin from '../../images/admin.png';
import userPfp from "../../images/user.png"
import off from '../../images/off.png';
import Bugs from '../../images/bug.png';
import schedule from '../../images/schedule.png'
import team from '../../images/team.png'
import { Link, useNavigate } from 'react-router-dom'
import Links from '../Links';
import { auth } from '../../../Firebase';
import design from "../../images/Designer.jpg"
import DesignerFunctions from '../../Designer/DesignerFunctions';
import { motion } from 'framer-motion'

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


  
   const arr = [
      { name: 'home', title: 'home', img: homeBtn },
      { name: 'Dashboard', title: 'Dashboard', img: dashboard },
      { name: 'Calendar', title: 'Calendar', img: schedule },
      { name: 'Designer', title: 'Designer', img: design },
      level > 6 && { name: 'Client',  img: client, component: <Links/> },
      { name: 'Timeoff', title: 'Timeoff', img: off },
      { name: 'Bugs', title: 'Bugs & Feedback', img: Bugs },
      { name: formattedUser, title: formattedUser, img: userPfp },
      { name: 'Signout', title: 'Signout', img: IN }
   ];

   if (level > 9) {
      arr.push(
         { name: 'Admin', title: 'Client Upload', img: admin, status: 'Management' },
         { name: 'Users', title: 'Sql Users', img: team }
        
      );
   }



   

    const handleGoTo = (i) => {
      arr.map((x, index) => {
         if (x && i === index) {
            switch (x.name) {
               case 'home':
               navigate('/')
               break;

               case 'Dashboard':
               setShowPfp('dashboard')
               break;

                case 'Calendar':
                setShowPfp('Calendar')
                break;
               

               case 'user':
               navigate(`/user/${user}`)
               break;

               case 'Designer':
                  navigate('/designer')
                  break;

               case 'Bugs':
               setShowPfp('Bugs')
               break;

               case 'Timeoff':
               setShowPfp('Timeoff')
               break;

               case 'Signout':
               handleLogout()
               break;

               case 'Admin':
               setShowPfp('Admin')
               break;

               case 'Users':
               setShowPfp('Users')
               break;

               case 'feedback':
               navigate('/feedback')
               break;
               default:
               break;
            }
         }
      })
    }
   
    

   return (
   
     <div className=" px-3 py-4 overflow-y-auto  h-auto bg-[#111d39] w-[20vw]  border-r-2 ">
      <DesignerFunctions user={user} setNoti={setNoti} setDesignerData={setDesignerData} designerData={designerData}/>
        <motion.ul className="space-y-2 font-medium fixed phones:z-10 phones:bg-slate-500 phones:rounded phones:p-2 phones:left-0 flex flex-col items-start gap-4  phones:overflow-y-scroll phones:overflow-x-hidden phones:h-[500px]" >
      {arr.filter(x => x !== null).map((x, i) => {
         if (!x) {
            return null;
         }

         return (
            <motion.li  key={i} className={`flex items-center justify-center cursor-pointer ${x.status === 'Management'? 'border-t-2 pt-2 border-white ' : ""}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay:  i*0.1 }}
            onClick={() => {
               handleGoTo(i)
            }}>

               <motion.div className='flex items-center justify-center hover:bg-[#201b4bb0] px-2 py-1 rounded-lg'  whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <img className='w-[25px]' src={x.img} />
                  <span className="ml-3 text-white md:text-xs lg:text-md cursor-pointer" >{x.title}</span>
                  {x.component? <span className='cursor-pointer'>{x.component}</span>:null}
               </motion.div>
             
            </motion.li>
         );
      })}
          </motion.ul>
          
     </div>
 
  )
}     
