/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
import User from './User'
import { auth, fs,db } from '/src/Firebase.jsx'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom'

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



    
  return (<> 

    <div className='navbar'>
      <User setUser={setUser} user={user} level={level} setLevel={setLevel} setUuid={setUuid} uuid={uuid}/>

<div style={{marginLeft:'20px'}}> 

<Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='menu-icon'
      >
     <MenuIcon  className='menu-icon'/>
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
        <MenuItem onClick={handleClose}><Link to='/partnerprogram'> Partner-Program </Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link to='/recruitment'> Join us </Link></MenuItem>
        
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>

       {uuid && <>
<div className='style-nav'>
{level === 10?  <Link to='/admindashboard' className='same-type'>admin</Link> :null} 
        <br />
  <button className='outline' onClick={handleLogout} style ={{backgroundColor:'white',color:'black'}}>Sign out</button>
        <br />
        <h2 className='same-type'onClick={handleGo} >{userOkay}</h2>
</div>
  
       </>}

       {!uuid && <> 
       <div className='nav-notsigned'>
            <Link to ='/login'> Login </Link>
      <Link to ='/signup'> Signup </Link>
       </div>
    
       
       </>}
    </div>
    </>)
}
