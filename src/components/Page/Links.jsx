/* eslint-disable no-unused-vars */
import React from 'react'
import {useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import sql from '../images/Logo.png'
import Button from '@mui/material/Button';
import PartnerLogic from '../AdminPage/PartnerLogic';

export default function Links() {
    const [partner, setPartner] = useState([]);
    const navigate = useNavigate()




 


  function handleGo(index){

    partner.map((x,i) => { 
        if (i === index){

            localStorage.setItem('partner',x.name)
            localStorage.setItem('image',x.imageUrl)

            setTimeout(() =>{
                navigate(`/profile/${x.name}`)
                window.location.reload()
            },2000)

         
           
        }
    })

  }



  const [state, setState] = React.useState({
    left: false,
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
      {partner.map((partner,index) => (<div key={index} style={{display:'flex',alignItems:'center'}}>

<h2 key={index} onClick={() => { handleGo(index)}} style={{cursor:'pointer',marginLeft:'20px'}} > {partner.name}  </h2> 
<p style={{color:'red',marginLeft:'10px'}}> {partner.status !== 0 ? partner.status:null}</p>


      </div>

))}
      </List>
      <Divider />
      <img src={sql} className='logo' />
      
    </Box>
  );


  return (<> 
  <PartnerLogic setPartner={setPartner}/>
    <div className=''>

{['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className='button-links' onClick={toggleDrawer(anchor, true)}>Partner</Button>
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
 </> )
}
