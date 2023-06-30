/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from '../Nav'
import {useState, useEffect} from 'react'
import { auth, fs,db } from '../../Firebase'
import User from '../User'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { useParams } from 'react-router-dom'
import Button from './profileFunctions/Button'
import PrivateChat from './profileFunctions/PrivateChat'
import Footer from '../Home/Footer'
import bin from '../images/bin.png'
import meeting from '../images/meeting.png'
import time from '../images/time.png'
import mark from "../images/important.png"
import Links from './Links'
import WaitingForAdmin from './WaitingForAdmin'
import Title from '../../Title'
import ProfileFunctions from './profileFunctions/ProfileFunctions'
import Loading from '../Loading'

export default function Profile() {


    const {id} = useParams()
    const [user,setUser] = useState('')
const [uuid,setUuid] = useState('')
const [ isAccepted,setIsAccepted] = useState('')
const [ level,setLevel] = useState('waiting')
const [ sendTo,setSendTo] = useState('')
const [ text,setText] = useState('')
const [privateChat,setPrivateChat] = useState('waiting')




        const [work, setWork] = useState([]);

        const getWork = async () => {
          try {
            const unsubscribe = fs.collection('admin')
              .onSnapshot((querySnapshot) => {
                const workArray = querySnapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data()
                }));
        
                workArray.sort((a, b) => a.id - b.id); // Sort the array based on the numeric ID
        
                setWork(workArray);
              });
        
            return unsubscribe;
          } catch (error) {
            console.error('Error fetching work data:', error);
          }
        };
        
        useEffect(() => {
          const unsubscribe = getWork();
        
          // Cleanup the subscription
          
        }, []);
        


        
const [message, setMessage] = useState([]);
const [designerChat, setDesignerChat] = useState([]); 
const [chat, setChat] = useState('');
const [trueChat,setTrueChat] = useState()   
const [hideList,setHideList] = useState(false)
const [displayTo,setDisplayTo] = useState('')


    const allUid = (work.map(x => x.Name))
const handleDeleted = (id) => {
   
    const docRef = collection(db,privateChat);
    const colRef = doc(docRef, id);
    deleteDoc(colRef)
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document:', error);
      });


    };



function handleNoti(id){
 
  const docRef = collection(db,'group');
  const colRef = doc(docRef, id);
  updateDoc(colRef,{[user]:0 },{merge: true})
 }


const handleDelete = (id) => {
    const docRef = doc(db, 'group', id);
    const fieldToUpdate = { new:'Read' };

    updateDoc(docRef, fieldToUpdate)
      .then(() => {
        console.log('Field successfully updated');
      })
      .catch((error) => {
        null
      });
  };

const [loading,setLoading] = useState(false)
const [ imp,setImp] = useState(false)
const [showImportant,setShowImportant] = useState(false)

useEffect(() => {
  setTimeout(() => {
    setLoading(true)
  },1000)
},[])
  

const sum = message.map(x => x[user]).reduce((accumulator, currentValue) => accumulator + currentValue, null);



  return (<>
  <ProfileFunctions privateChat={privateChat} setChat={setChat} setDesignerChat={setDesignerChat} setMessage={setMessage}/>
  <Title/>
  <User setUser={setUser} user={user} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel} />

  
{level === 0 && <>

<div>
  <WaitingForAdmin/>
</div>
</>}

    {level > 7 ?  <>  <div className='profile'>
    <div style={{margin:'auto',backgroundColor:'white',borderBottom:'2px solid gold'}}> <Nav/> </div>
     <div className='real-admin-links'><Links/> </div>
    <div className='group-text'>

<h2 onClick={() => setShowImportant(showImportant === true? false : true)}> {showImportant === false? 'Show Priority' : 'Show All'} </h2>

  {privateChat  === 'group' && <>
   
   
  {showImportant === true ? message.map((x,id) => {

 
   
  return <div key={id} className='indi-group-text' onClick={() => handleDelete(x.id)} > {x.imp > ""? <h2 className='style-this-h2'>  <img src={mark} style={{width:'40px',height:'40px'}}/> {x.text} - {x.sendBy} </h2>  :null }

 {x.imp >""?  <img style={{width:'50px',height:'50px',cursor:'pointer'}} src={bin} onClick={(i) => handleDeleted(x.id)}/> :null} <hr /> </div> 
   
  
   }) : 



   message.map((x,i) => {
  return  <div key={i} className='indi-group-text' onClick={() => handleDelete(x.id)} > 
  <h2 className='style-this-h2' onClick={() => handleNoti(x.id)}>  {x.imp > ""? <img src={mark} style={{width:'40px',height:'40px'}}/> :null } {x.text} - {x.sendBy} </h2> 

  <img style={{width:'50px',height:'50px',cursor:'pointer'}} src={bin} onClick={(i) => handleDeleted(x.id)}/> <hr /> </div> 
 })  
 }


  </>  }

{privateChat === 'designer' && <>
 {designerChat.map((x,i) => {
return <div key={i} className='indi-group-text' onClick={() => handleDelete(x.id)} > 
<h2 className='style-this-h2' onClick={() => handleNoti(x.id)}>  {x.imp > ""? <img src={mark} style={{width:'40px',height:'40px'}}/> :null } {x.text} - {x.sendBy} </h2> 
 </div> 
})}
</>}

 

 {privateChat !== 'group' && <>
 
 {privateChat && <> 
{Object.entries(chat).map(([key, value]) => (
        <div key={key} style={{display:'flex',alignItems:'center',justifyContent:'center'}} className='style-private-chat'>
          <h2 className='indi-group-text' >  <img src={time} style={{width:'20px',height:'20px',marginRight:'10px'}} />  {key} </h2>
          <h2>   {value} </h2>
         <hr style={{color:'black',width:'100px'}}/>
        </div>
      ))}

      
</>}
 </>}



</div>


<form className='form-private' onSubmit={(e) => e.preventDefault()}>
    <label > {`Send message to ${displayTo} ${imp === true && displayTo === 'Group'? ' [Priority] ' : '' }`} </label>

    <div>
    <textarea onChange={(e) => setText(e.target.value)} value={text} className='textarea' placeholder='Enter' > 

</textarea>
<img src={mark} onClick={() => {setImp(imp === false? true : false)}} className='img-imp' style={{width:'2rem'}}/> 
    </div>

{sendTo === 'designer' ? <Button allUid={allUid}  user={user}  sendTo={sendTo} text={text} uuid={uuid} imp={imp} /> :null }
{sendTo === 'group' ? <Button allUid={allUid}setText={setText} user={user} sendTo={sendTo} text={text} uuid={uuid} imp={imp} />:null }
{sendTo !== 'designer' && sendTo !== 'group' ?  <PrivateChat user={user}  setText ={setText} sendTo={sendTo} text={text} trueChat={trueChat} /> :null }
  
   
</form>

 <div className='list'  > 
 
 {hideList && level > 8 && <>
 <div style={{backgroundColor:'white',padding:'10px',borderRadius:'10px',color:'black'}}>
    <h2 onClick={() => {setSendTo('group'),setDisplayTo('Group'),setPrivateChat('group'), setHideList(false)}} style={{cursor:'pointer'}} className='h2-noti'> Group  <p style={{fontSize:'14px',color:'red'}}> {sum > 0? sum : ''} </p></h2>
    <h2 onClick={() => {setSendTo('designer'),setDisplayTo('designer'),setPrivateChat('designer'), setHideList(false)}} style={{cursor:'pointer'}} className='h2-noti'> Designer  </h2>
    
    {work.map((x,id) => {
     return <div key={id}>
        <h2 style={{cursor:'pointer'}} key={id} onClick={() => {setSendTo( 'chat'+ user + x.Name),setPrivateChat('chat'+ user + x.Name),setTrueChat('chat'+ x.Name + user),setDisplayTo(x.Name), setHideList(false)}}> {x.Name} </h2>
     
     </div>
   
 })}
 </div>
  
 </>}

{hideList && level === 8 && <>
<div style={{backgroundColor:'white',width:'125px',padding:'10px',borderRadius:'10px',color:'black'}}>
<h2 onClick={() => {setSendTo('designer'),setDisplayTo('designer'),setPrivateChat('designer'), setHideList(false)}} style={{cursor:'pointer'}} className='h2-noti'> Chat  </h2>
{work.map((x,id) => {
     return <div key={id}>
        <h2 style={{cursor:'pointer'}} key={id} onClick={() => {setSendTo( 'chat'+ user + x.Name),setPrivateChat('chat'+ user + x.Name),setDisplayTo(x.Name), setHideList(false)}}> {x.Name} </h2>
     
     </div>
   
 })}
</div>

</>}

<img className='style-meeting' src={meeting} style={{cursor:'pointer',width:'50px',height:'50px'}} onClick={() => hideList === true? setHideList(false) : setHideList(true)}/>



 </div>




 <div>



 </div>


    </div>  <Footer/> </> : null}
    


 {loading === false &&  <>
<Loading/>
      </>}
  
  </>

  )
}
