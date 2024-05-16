/* eslint-disable no-unused-vars */
import React from 'react'
import {useState,useEffect,useContext} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import {UserContext} from '../context/UserContext'
import sql from '../images/Logo.png'
import PartnerLogic from '../AdminPage/PartnerLogic';


export default function Contracts() {
    const [partner, setPartner] = useState([]);
    const navigate = useNavigate()
 
    const {user,uuid,level} = useContext(UserContext);


 


  function handleGo(index){

    partner.map((x,i) => { 
      if (i === index){
        localStorage.setItem('partner',x.name)
        localStorage.setItem('image',x.imageUrl)
        localStorage.setItem("preset", x.Preset || "No preset available"); // check if preset is undefined and set it to "No preset available" in that case

        setTimeout(() =>{
          navigate(`/profile/contracts`)
          window.location.reload()
        },500)
      }
    })

  }

  function handleGoLink(index){

    partner.map((x,i) => { 
        if (i === index){

            localStorage.setItem('partner',x.name)
            localStorage.setItem('image',x.imageUrl)   
            localStorage.setItem("preset", x.Preset || "No preset available");
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
      <List className='min-h-[700px] flex flex-col justify-around '>
      {partner.map((partner, index) => {
        if (level !== 11 && partner.name === 'Test') {
          return null;
        }

        return (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => {  handleGo(index); }}
              className={`${ level !== 11 && partner.name === 'Test' ? 'opacity-20' : 'opacity-100' } hover:bg-blue-700 p-2 rounded-e-md hover:text-white`} // Add the hover:bg-blue-500 class for the hover effect
              disabled={level !== 11 && partner.name === 'Test' ? true : false}
              key={index}
            >
              <Link key={index} to={`/profile/${partner.name}`} onContextMenu={() => { handleGoLink(index)}} style={{ cursor: 'pointer', marginLeft: '20px' }}>
                {partner.name}
              </Link>
              {/* <p style={{ color: 'red', marginLeft: '10px' }}>
                {partner.status !== 0 ? partner.status : null}
              </p> */}
            </button>
          </div>
        );
      })}

      </List>
      <Divider />
      <img src={sql} className='logo' />
      
    </Box>
  );


  return (<> 
  <PartnerLogic setPartner={setPartner}/>
    <div className='text-white '>

{['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <p className=' !text-white md:!text-xs lg:!text-md' onClick={toggleDrawer(anchor, true)}>Contracts</p>
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
