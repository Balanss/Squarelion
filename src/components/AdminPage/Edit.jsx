import React from 'react'
import {useState,useEffect} from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/Firebase.jsx'
import userPfp from "../images/user.png"
import AdminLogic from './AdminLogic.jsx'
import {Link,useNavigate} from 'react-router-dom'
import User from '../User';
import thumbup from '../images/thumbup.png'
import thumbdown from '../images/thumbdown.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';





const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color:'black'
  };



  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function Edit() {


    const [userPermit, setUserPermit] = useState([]);
    const [user,setUser] = useState('')
    const [uuid,setUuid] = useState('')
    const [ isAccepted,setIsAccepted] = useState('')
    const [ level,setLevel] = useState('waiting')
    const navigate = useNavigate()


    
   

    const[value,setValue] = useState('')
function handleUser(i,e){
    e.preventDefault()
    userPermit.map((x,index) => {
      
        if (index === i) {
        
            const docRef = collection(db,'admin')
            const colRef=doc(docRef,x.id );
            const numericValue = parseInt(value);
            updateDoc(colRef,{level:  numericValue});
        }
    })
}




function handleGoToProfile(i){

userPermit.map((x,index) =>{

if(index === i){

const docRef = collection(db,'admin')
const colRef = doc(docRef,x.id)

updateDoc(colRef,{
    request:'Accepted',
},{merge:true})



const dcRef = collection(db,'notInOffice')
const clRef = doc(dcRef,x.Name)
setDoc(clRef,{[x.time]:{
    request:'Accepted',
}},{merge:true})



}
})

}



function handleGoToProfileDeny(i){

    userPermit.map((x,index) =>{
    if(index === i){
    const docRef = collection(db,'admin')
    const colRef = doc(docRef,x.id)
    updateDoc(colRef,{
        request:'Denied',
    },{merge:true})
    
    
    const dcRef = collection(db,'notInOffice')
    const clRef = doc(dcRef,x.Name)
    setDoc(clRef,{[x.time]:{
        request:'Denied',
    }},{merge:true})  
    }
    })
    
    }

    function handleGoToProfileClear(i){

      userPermit.map((x,index) =>{
      if(index === i){
      const docRef = collection(db,'admin')
      const colRef = doc(docRef,x.id)
      updateDoc(colRef,{
          request:'',
      },{merge:true})
      
      
      const dcRef = collection(db,'notInOffice')
      const clRef = doc(dcRef,x.Name)
      setDoc(clRef,{[x.time]:{
          request:'',
      }},{merge:true})  
      }
      })
      
      }


    const [ wfhOffice,setWfhOffice ] = useState([]);

    const getWfhOffice = async () => {
        try {
          const unsubscribe = fs.collection('notInOffice')
            .onSnapshot((querySnapshot) => {
              const wfhOfficeArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
              }));
      
              wfhOfficeArray.sort((a, b) => a.id - b.id); // Sort the array based on the numeric ID
      
              setWfhOffice(wfhOfficeArray);
            });
      
          return unsubscribe;
        } catch (error) {
          console.error('Error fetching WFH/Office data:', error);
        }
      };
      
      useEffect(() => {
        const unsubscribe = getWfhOffice();
      
        // Cleanup the subscription
      
      }, []);
      

 
      



function handleGoToProfilePage(i){

// userPermit.map((x,index) =>{

//     if(index === i){
//           navigate(`/user/TimeOff/${x.Name}`)
//         localStorage.setItem('AdminCheck',x.Name) 
//     } 
    
// })

   
}


const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const [selectedUser, setSelectedUser] = useState(null);


const handleClick = (user) => {
    setSelectedUser(user);
  };


  const[swap, setSwap] = useState(false)

  return (


<> 
 <AdminLogic setUserPermit={setUserPermit}/>
<User setUser={setUser} user={user} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel} />
{level > 9 && <>



  <div className='user-settings-admin'>

  <FormGroup>
      <FormControlLabel onClick={() => setSwap(swap === false?true:false)} control={<Switch defaultChecked />} style={{color:'black'}} label={swap === false? 'Approved users':'Un-Approved users' }/>
    </FormGroup>
 
    <div className='user-levels'>
    
 {swap === false?    <div className='inside-user-levels'>
        {userPermit.map((x,i) => {
if (x.level > 0){
  return (<div key={i} className='user-level-div'>
  <img className='user-pfp' src={userPfp} style={{width:'30px'}}/>
<h4 onClick={() => {handleGoToProfilePage(i),handleOpen()}}className='user-name-edit'>{x.Name}</h4>

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
          {wfhOffice.map((user) => (
               <button style={{marginLeft:'10px'}}  key={user.id} onClick={() => handleClick(user)}>
          {user.id}
        </button>   
        
      
      ))}
  
      {selectedUser && (
        <div>
          <h2>Selected User: {selectedUser.id}</h2>
          {Object.entries(selectedUser).map(([date, userInfo]) => {
            if (date !== 'id') {
              const { reason, time, user } = userInfo;

              return (
                <div key={date}>
                  <p>Reason: {reason}</p>
                  <p>Time: {time}</p>
                  <hr />
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           
          </Typography>
        </Box>
      </Modal>
<h4 className='user-level'>User Level: {x.level}</h4>

<form onSubmit={(e) => {handleUser(i,e)}}>
    {x.level !== 11 ?   <input  className='user-input' placeholder='EDIT USER' onChange={(e) => setValue(e.target.value)}/> 
    : null}

</form>
{x.request > '' ?
<>
<div className='div-request-approval'>
{x.request !== 'Waiting Request' ?<h3 className='request-approval' onClick={() => handleGoToProfileClear(i)}> Clear  </h3> :null}
<h3 className='request-approval' > {x.request}  </h3>
<div> 
<img src={thumbup} onClick={() => handleGoToProfile(i)}  style={{width:'40px',cursor:'pointer'}}/>
<img src={thumbdown} onClick={() => handleGoToProfileDeny(i)}  style={{width:'40px',cursor:'pointer'}}/>
 </div>
</div>

</>
:null}


</div>)
}
})} 
  
    </div>:
    

    <div className='user-levels-await'>
  <div>
   {userPermit.map((x,i) => {
if (x.level === 0){
  return (<div key={i} className='user-level-div'>
  <img src={userPfp} style={{width:'30px'}}/>
<h1 >{x.Name}</h1>
<h1> User Level: {x.level}</h1>
<form onSubmit={(e) => {handleUser(i,e)}}>
      <input  placeholder='EDIT USER' onChange={(e) => setValue(e.target.value)}/>
</form>

</div>)
} 
})}  
  </div>

</div>
    
    }




    </div> 





    </div>
</>}



 </>)
}
