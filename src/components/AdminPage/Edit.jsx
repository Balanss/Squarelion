import React from 'react'
import {useState,useEffect} from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/Firebase.jsx'
import userPfp from "../images/user.png"
import AdminLogic from './AdminLogic.jsx'


export default function Edit() {


    const [userPermit, setUserPermit] = useState([]);


    
   

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




  return (


<>  
<AdminLogic setUserPermit={setUserPermit}/>

    <div className='user-settings-admin'>
    
 
    <div className='user-levels'>
    <h2>  Users that have been registered to the system </h2>
    <div className='inside-user-levels'>
        {userPermit.map((x,i) => {
if (x.level > 0){
  return (<div key={i} className='user-level-div'>
  <img src={userPfp} style={{width:'30px'}}/>
<h4>{x.Name}</h4>
<h4>User Level: {x.level}</h4>
<form onSubmit={(e) => {handleUser(i,e)}}>
    {x.level !== 11 ?   <input  placeholder='EDIT USER' onChange={(e) => setValue(e.target.value)}/> : null}
</form>

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
<h1>{x.Name}</h1>
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
