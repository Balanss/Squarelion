/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
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
const [user,setUser] = useState('')
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
  const unsubscribe = getRound();

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
    
return (<> 
  <AdminLogic setUserPermit={setUserPermit}/>
  
   <User setUser={setUser} user={user} level={level} setLevel={setLevel} setUuid={setUuid} uuid={uuid}/>
  
        {uuid && <>
  <div className='flex font-mono items-center justify-center  '>
  {level > 8 && isMobile === false?  <Link to='/admindashboard' className='mr-5 ' >admin { alertNumber > 0 && level > 9 ? `(${alertNumber})`:null} </Link> :null} 
          <br />
    <button className='mr-5' onClick={handleLogout} >Sign out</button>
          <br />
          <button className=''onClick={handleGo} >{userOkay}</button>
        
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
         <div className=''>
              <Link to ='/login' className=''> Login </Link>
        <Link to ='/signup' className=''> Signup </Link>
      
         </div>
      
         
         </>}
   
      </>)
  
}
