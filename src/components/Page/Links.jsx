/* eslint-disable no-unused-vars */
import React from 'react'
import {useState,useEffect} from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/Firebase.jsx'
import { Link ,useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import sql from '../images/Logo.png'
import Button from '@mui/material/Button';

export default function Links() {
    const [partner, setPartner] = useState([]);
    const navigate = useNavigate()



  const getPartner = async () => {
    try {
      const unsubscribe = fs.collection('partner')
        .onSnapshot((querySnapshot) => {
          const partnerArray = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
  
          partnerArray.sort((a, b) => a.id - b.id); // Sort the array based on the numeric ID
  
          setPartner(partnerArray);
        });
  
      return unsubscribe;
    } catch (error) {
      // console.error('Error fetching partner data:', error);
      null
    }
  };
  
  useEffect(() => {
    const unsubscribe = getPartner();
  
    // Cleanup the subscription
   
  }, []);
 


  function handleGo(index){

    partner.map((x,i) => { 
        if (i === index){

            localStorage.setItem('partner',x.name)
            localStorage.setItem('image',x.imageUrl)

            setTimeout(() =>{
                navigate(`/profile/${x.name}`)
                window.location.reload()
            },2000)

            console.log(x.name)
           
        }
    })

  }



  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      {partner.map((partner,index) => (<div style={{display:'flex',alignItems:'center'}}>

<h2 key={index} onClick={() => { handleGo(index)}} style={{cursor:'pointer',marginLeft:'20px'}} > {partner.name}  </h2> 
<p style={{color:'red',marginLeft:'10px'}}> {partner.status !== 0 ? partner.status:null}</p>


      </div>

))}
      </List>
      <Divider />
      <img src={sql} className='logo' />
      
    </Box>
  );


  return (
    <div className=''>

{['Partners'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className='button-links' onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        
        </React.Fragment>
      ))}







    </div>
  )
}
