import React from 'react'
import { useParams } from 'react-router-dom'
import { auth, fs,db } from '../../../Firebase'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import User from '../../User'
import Nav from '../../Nav'
import Title from '../../../Title'
import './wfh.css'
import TimeOffLogic from './TimeOffLogic';
import Footer from '../../Home/Footer'

export default function TimeOff() {
    const {id} = useParams()
    const [user,setUser] = useState('')
    const [ uuid,setUuid] = useState('')
    const [ level,setLevel] = useState('')
    const [isAccepted,setIsAccepted] = useState('')
    const navigate = useNavigate()

    const [start,setStart] = useState('')
    const [ returnBack,setReturnBack] = useState('')
    const [ reason  ,setReason] = useState('')
    const [ wfhText,setWfhText] = useState('')
    const [findIt,setFindIt] = useState('')
    const [wfh,setWfh] = useState([])

    



function handleSubmit(e){
    e.preventDefault()

const docRef = collection(db,'admin')
const colRef = doc(docRef,uuid)

updateDoc(colRef,{
    notOffice: `${start} - ${returnBack}`,
    reason: reason,
    typeOfLeave:wfhText,
    request:'Waiting Request',
    time:start,
   
},{merge:true})


const dcRef = collection(db,'notInOffice')
const clRef = doc(dcRef,user)
setDoc(clRef,{[start]:{
    notOffice: `${start} - ${returnBack}`,
    reason: reason,
    typeOfLeave:wfhText,
    request:'Waiting Request',
    user:user,
    time:start
}},{merge:true})

}




const [waitingRequest,setWaitingRequest] = useState()
 function GetCurrentUser(){

    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){ 
              fs.collection('admin').doc(user.uid).get().then(snapshot => {
                setWaitingRequest(snapshot.data().request);
                
                
                
              })
            }
            else{
                setUser(null);
            }
        })
    },[user])
    return user;
}

const admin = GetCurrentUser();




function handleRequest(){


}

const userPro = wfh.filter(x => x.id === user)




  return (
    <>
    <User user={user} setUser={setUser} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel}/>
    <Title/>
    <TimeOffLogic setWfh={setWfh}/>
    <div className=''>
  
   
       <div className='info-div-of-users'>
<div className='wfh-request'>
<form onSubmit={handleSubmit} className='wfh-text'>
<div className='wfh-which'>
<h3 onClick={() => setWfhText('WFH')}> WFH </h3>
<h3 onClick={() => setWfhText('TimeOff')}> TimeOff </h3>

</div>
<p> {wfhText} </p>
<div className='share-wfh-input'>
<label> Start Date : </label>
<input type="date" name="start"  onChange={(e) => setStart(e.target.value)}/>
</div>
<div className='share-wfh-input'>
<label> Return Date : </label>
<input type="date" name="end" onChange={(e) => setReturnBack(e.target.value)} />
</div>
<textarea  placeholder='reason of WFH' onChange={(e) => setReason(e.target.value)}/> 
<button>Request </button>




</form>

<div>
<button onClick={handleRequest}> {waitingRequest} </button>
</div>



</div>  

<div className='history' style={userPro.length > 0 ? {display:'block'} : {display:'none'}}>
  <div className='history-inside' > 
{userPro.map((user) => {
        return Object.entries(user).map(([date, userInfo]) => {
          const { reason, user,time} = userInfo; // Extract the user name and request

          return (
            <div key={date}>
              <p> {user} </p>
              <p> {reason}</p>
              <p> {time}</p>
              ------------
            </div>
          );
        });
      })}

  </div>



</div>
</div>



    </div>


    
    </>
  )
}
