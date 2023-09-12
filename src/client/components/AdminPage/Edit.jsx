import React from 'react'
import {useState,useEffect} from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/client/Firebase.jsx'
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
import AdminSurvey from './AdminSurvey';





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




  const[swap, setSwap] = useState(false)




  return (


<> 
 <AdminLogic setUserPermit={setUserPermit}/>
<User setUser={setUser} user={user} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel} />



    <div className="relative  m-auto ml-[7%] mt-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                     Name
                </th>
                <th scope="col" className="px-6 py-3">
                   Level
                </th>
                <th scope="col" className="px-6 py-3">
                    INPUT HERE
                </th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            {userPermit.map((x,i) => {
                
                return <tr key={i}>
                    
                    <td className="px-6 py-4">
                       
                        <div className="flex items-center space-x-3">

                            <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"></div>
                            <span>{x.Name}</span>
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        <div className="text-gray-500 dark:text-gray-400">{x.level}</div>
                    </td>
                    <td className="px-6 py-4">
                    <form   onSubmit={(e) => {handleUser(i,e)}}>
            {x.level !== 11 ?   <input  className='text-black' placeholder='EDIT USER' onChange={(e) => setValue(e.target.value)}/> 
    : null}</form>
                    </td>
                </tr>
            })}
        </tbody>
        </table>
        </div>

        <FormGroup>
      <FormControlLabel onClick={() => setSwap(swap === false?true:false)} className='w-[300px]' control={<Switch defaultChecked />} style={{color:'black'}} label={swap === false? 'Approved users':'Un-Approved users' }/>
    </FormGroup>



 </>)
}
