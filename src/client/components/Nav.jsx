/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect,useMemo} from 'react'
import {Link } from 'react-router-dom'
import User from './User'
import { auth, fs,db } from '/src/client/Firebase.jsx'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom'
import AdminLogic from './AdminPage/AdminLogic'

export default function Nav() {
const [user,setUser] = useState(0)
const [ level,setLevel] = useState('')
const [uuid,setUuid] = useState('')
const [ userOkay,setUserOkay] = useState('')
const navigate= useNavigate()



const handleLogout = () => {
  auth.signOut().then(() => {
    navigate('/')
    window.location.reload()
  })
};

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

 
useEffect(() => {
  setUserOkay(localStorage.getItem('user')) 
},[userOkay])



const [round, setRound] = useState([]);
 

const getRound = async () => {
  try {
    const unsubscribe = fs.collection('admin')
      .onSnapshot((querySnapshot) => {
        const roundArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        roundArray.sort((a, b) => {
          // Extract the numeric part from the IDs
          const idA = parseInt(a.id.split('-')[0]);
          const idB = parseInt(b.id.split('-')[0]);

          return idA - idB; // Sort the array based on the numeric IDs
        });

        setRound(roundArray);
      });

    return unsubscribe;
  } 
  catch (error) {
    null;
  }
};


useEffect(() => {
getRound();
  // Cleanup the subscription
 
}, []);

function handleGo(){
  
  round.map((x,i) => { 
  
        localStorage.setItem('user',userOkay)
        setTimeout(() =>{
            navigate(`/user/${userOkay}`)
        },1000)
       
})
}

const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize(); // Call the function initially to set the initial state

  window.addEventListener('resize', handleResize); // Add event listener for window resize

  return () => {
    window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
  };
}, []);


const [userPermit,setUserPermit] = useState([]); //
const alert = userPermit.filter(x => x.request >= 'Awaiting Request')
const alertNumber = (alert.length > 0?alert.length:0)


const memoizedLevel = useMemo(() => level, [level]);



    
return (<> 
  <AdminLogic setUserPermit={setUserPermit}/>
  
   <User setUser={setUser} user={user} level={level} setLevel={setLevel} setUuid={setUuid} uuid={uuid}/>
   
  
        {uuid && <>
  <div className='flex font-mono items-center justify-center sm:w-[400px]  sm:items-center sm:m-auto sm:justify-around '>

  <span className=" mr-5 relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
<span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-yellow-600 group-hover:w-full ease"></span>
<span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-yellow-600 group-hover:w-full ease"></span>
<span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-sky-900 opacity-0 group-hover:opacity-100"></span>
<span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">     <button className='text-center text-sm cursor-pointer w-[70px] '  onClick={handleLogout} >Sign out</button>   </span>
</span>

<br/>

{level > 8 && isMobile === false ?   <span className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
<span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-yellow-600 group-hover:w-full ease"></span>
<span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-yellow-600 group-hover:w-full ease"></span>
<span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-sky-900 opacity-0 group-hover:opacity-100"></span>
<span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">    <Link to='/admindashboard' className=' text-center text-sm cursor-pointer flex' > ADMIN { alertNumber > 0 && memoizedLevel  > 9 ? `(${alertNumber})`:null} </Link>  </span>
</span>: null}

<br/>



<span className="relative ml-5 px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
<span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-yellow-600 group-hover:w-full ease"></span>
<span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-yellow-600 group-hover:w-full ease"></span>
<span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-sky-900 opacity-0 group-hover:opacity-100"></span>
<span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">   
          <button className='text-center text-sm 'onClick={handleGo} >{userOkay.slice(0,10)}..</button>  </span>
</span>
      
 
       
        
  </div>
    
         </>}
  
  
  
  
  
  <div className='flex items-center justify-center ml-2'> 
  <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className=''
        >
       <MenuIcon  className=''/>
        </Button>
  </div>
     
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}> <Link to='/'> Home </Link></MenuItem>
          {isMobile && level > 8? <MenuItem onClick={handleClose}><Link to='/admindashboard'> admin </Link></MenuItem>:null}
         
          
          {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
  
  
  
         {!uuid && <> 
         <div className='flex font-mono items-center justify-center sm:w-[300px]  sm:items-center sm:m-auto sm:justify-around'>
         <button type="button" className="w-[80px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> <Link to ='/login' className='mr-10'> Login </Link></button>
         <button type="button" className="w-[80px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">   <Link to ='/signup' className=''> Signup </Link></button>
      
      
         </div>
      
         
         </>}
   
      </>)
  
}
