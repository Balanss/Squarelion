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



function handleGoToProfilePage(i){

// userPermit.map((x,index) =>{

//     if(index === i){
//           navigate(`/user/TimeOff/${x.Name}`)
//         localStorage.setItem('AdminCheck',x.Name) 
//     } 
    
// })

   
}


// const [isHovered, setIsHovered] = useState(false);

// const handleMouseEnter = () => {
//   setIsHovered(true);
// };

// const handleMouseLeave = () => {
//   setIsHovered(false);
// };


  return (


<>  
<AdminLogic setUserPermit={setUserPermit}/>
<User setUser={setUser} user={user} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel} />


    <div className='user-settings-admin'>
    
 
    <div className='user-levels'>
    <h2>  Users that have been registered to the system </h2>
    <div className='inside-user-levels'>
        {userPermit.map((x,i) => {
if (x.level > 0){
  return (<div key={i} className='user-level-div'>
  <img src={userPfp} style={{width:'30px'}}/>
<h4 onClick={() => handleGoToProfilePage(i)}
// onMouseEnter={handleMouseEnter}
// onMouseLeave={handleMouseLeave}
className='user-name-edit'>{x.Name}</h4>

<h4>User Level: {x.level}</h4>

<form onSubmit={(e) => {handleUser(i,e)}}>
    {x.level !== 11 ?   <input  placeholder='EDIT USER' onChange={(e) => setValue(e.target.value)}/> 
    : null}

</form>
{x.request > '' ?
<>
<div className='div-request-approval'>
<h3 className='request-approval'> {x.request} </h3>
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
  
    </div>


<hr className='hr'/>

    </div> 

<div className='user-levels-await'>
  <h2> Users awaiting approval</h2>
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

    </div> </>)
}
