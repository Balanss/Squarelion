/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from '../Nav'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { auth, fs,db } from '../../Firebase'
import { useNavigate } from 'react-router-dom'
import User from '../User'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { useParams } from 'react-router-dom'
import Button from '../Page/profileFunctions/Button'
import PrivateChat from '../Page/profileFunctions/PrivateChat'
import Footer from '../Home/Footer'
import bin from '../images/bin.png'
import meeting from '../images/meeting.png'
import time from '../images/time.png'
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import mark from "../images/important.png"


export default function Group() {
    const {id} = useParams()
    const [ name,setName] = useState('')
    const [user,setUser] = useState('')
const [uuid,setUuid] = useState('')
const [ isAccepted,setIsAccepted] = useState('')
const [ level,setLevel] = useState('waiting')
const [ sendTo,setSendTo] = useState('')
const [ text,setText] = useState('')
const [privateChat,setPrivateChat] = useState('waiting')
const [trueChat,setTrueChat] = useState()

        const navigate = useNavigate()


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
        

        // function handleName(){

        // }

      


   

        
        const [message, setMessage] = useState([]);
        const getMessage = async () => {
            try {
              const unsubscribe = fs
                .collection('group')
                .orderBy('timestamp', 'desc')
                .onSnapshot((querySnapshot) => {
                  const messageArray = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                  }));
          
                  setMessage(messageArray);
                });
          
              return unsubscribe;
            } catch (error) {
              console.error('Error fetching message data:', error);
            }
          };
          
          useEffect(() => {
            const unsubscribe = getMessage();
          
            // Cleanup the subscription
           
          }, []); 


          const [designerChat, setDesignerChat] = useState([]); 

const getDesignerChat = async () => { 
  try {
    const unsubscribe = fs // Assuming 'fs' is Firestore
      .collection('designer')
      .orderBy('timestamp', 'desc')
      .onSnapshot((querySnapshot) => {
        const chatArray = querySnapshot.docs.map((doc) => ({ 
          id: doc.id,
          ...doc.data()
        }));

        setDesignerChat(chatArray); 
      });

    return unsubscribe;
  } catch (error) {
    console.error('Error fetching designer chat data:', error); 
  }
};

useEffect(() => {
  const unsubscribe = getDesignerChat(); 

  // Cleanup the subscription

}, []);


         
const [chat, setChat] = useState('');

const getChatData = async () => {
  try {
    const chatDocRef = fs.collection('chat').doc(privateChat);

    chatDocRef.onSnapshot((chatDocSnapshot) => {
      if (chatDocSnapshot.exists) {
        const chatData = chatDocSnapshot.data();

        // Sort the chat messages based on time in descending order
        const sortedChat = Object.entries(chatData)
          .filter(([key]) => key !== 'timestamp') // Exclude the 'timestamp' field from sorting
          .sort((a, b) => new Date(b[0]) - new Date(a[0])) // Sort by date in descending order
          .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}); // Convert back to object

        setChat(sortedChat);
      } else {
        console.log('privateChat document does not exist');
        setChat(''); // Reset the chat data if the document doesn't exist
      }
    });
  } catch (error) {
    console.error('Error fetching chat data:', error);
  }
};

useEffect(() => {
  getChatData();
}, [privateChat]); // Re-fetch chat data whenever privateChat changes
        
    
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
       

let sum = 0  ;



function handleSum(id){
  message.map((x,id) => {
    const docRef = collection(db,'group');
    const colRef = doc(docRef, x.id);
    updateDoc(colRef,{[user]:0 },{merge: true})

  })

  
}




const handleDelete = (id) => {
    const docRef = doc(db, 'group', id);
    const fieldToUpdate = { new:'Read' };

    updateDoc(docRef, fieldToUpdate)
      .then(() => {
        console.log('Field successfully updated');
      })
      .catch((error) => {
        console.error('Error deleting field:', error);
      });
  };


const [ imp,setImp] = useState(false)
const [showImportant,setShowImportant] = useState(false)

 
const important = message.filter(work => work.imp === imp)
 sum = message.map(x => x[user]).reduce((accumulator, currentValue) => accumulator + currentValue, null);




  return (<>
  
  <User setUser={setUser} user={user} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel} />
 
  
    {level > 7 ?  <> 

     <div className='fixed bottom-10 left-1 z-10 '>



 <div className='list-pages  '  > 

<div className={hideList === true ? 'hidden-chat' : 'hidden-zero'}>
    {hideList && level > 7 && <>
 
 <div  className='inside-hidden hidden lg:block lg:flex '>

 <div className='  bg-slate-800 p2 max-h-[50vh] overflow-y-scroll  md:flex flex-col-reverse
 lg:w-[430px]'>

  <h2 onClick={() => setShowImportant(showImportant === true? false : true)}> {showImportant === false? 'show Important' : 'Show All'} </h2>

  <div className='flex justify-around pt-10 bg-slate-800 pb-10 '>
    <textarea  className='text-black' onChange={(e) => setText(e.target.value)}  placeholder={`Send Message To ${displayTo}`} value={text} />
 
    {sendTo === 'designer' ? <Button allUid={allUid} user={user} setText={setText}  sendTo={sendTo} text={text} uuid={uuid} imp={imp} /> :null }
{sendTo === 'group' ? <Button allUid={allUid} user={user} sendTo={sendTo} setText={setText}  text={text} uuid={uuid} imp={imp} />:null }
{sendTo !== 'designer' && sendTo !== 'group' ?  <PrivateChat user={user} setText={setText}  sendTo={sendTo} text={text} trueChat={trueChat} />  :null }
<img src={mark} onClick={() => {setImp(imp === false? true : false)}}   className='img-imp' style={imp === false ?{width:'40px',backgroundColor:'white'}:{width:'40px',backgroundColor:'yellow'}} /> 
    </div>


    {privateChat  === 'group' && <>
     
     
    {showImportant === true ? important.map((x,id) => {
    return  <div key={id} className='' onClick={() => handleDelete(x.id)} > <h2 className='break-all'>  <img src={mark} style={{width:'40px',height:'40px'}}/>  {x.text} - {x.sendBy} </h2> 
    <img style={{width:'50px',height:'50px',cursor:'pointer'}} src={bin} onClick={(i) => handleDeleted(x.id)}/> </div> 
     }) : 
     



     message.map((x,i) => {
    return <>  <div key={i} className='style-this-h2-smaller' onClick={() => handleDelete(x.id)} > 
   {/* {sum > 0  ?  <img src={x.mail} alt={x.mail} style={{width:'40px',height:'40px'}} onClick={() => handleNoti(x.id)}/> :null } */}
    <h2 className='break-all w-3/4' onClick={() => handleNoti(x.id)}>  {x.imp > ""? <img src={mark} style={{width:'40px',height:'40px'}}/> :null } {x.text} - {x.sendBy} </h2> 
    <img style={{width:'50px',height:'50px',cursor:'pointer'}} src={bin} onClick={(i) => handleDeleted(x.id)}/>
     </div> 
     <hr style={{color:'black',width:'200px'}}/>
    </> })}


    </>  }

{privateChat === 'designer' && <>
   {designerChat.map((x,i) => {
  return <div key={i} className='style-this-h2-smaller' onClick={() => handleDelete(x.id)} > 
  
  <h2 className=' break-all  w-3/4' onClick={() => handleNoti(x.id)}>  {x.imp > ""? <img src={mark} style={{width:'40px',height:'40px'}}/> :null } {x.text} - {x.sendBy} </h2> 
  
  <img style={{width:'50px',height:'50px',cursor:'pointer'}} src={bin} onClick={(i) => handleDeleted(x.id)}/> </div> 
})}
</>}
 
   

   {privateChat !== 'group' && <>
   
   {privateChat && <> 
 {Object.entries(chat).map(([key, value]) => (
          <div key={key} className='pl-[5px]'>
            <h2 className='style-this-h2-smaller' >  <img src={time} style={{width:'20px',height:'20px',marginRight:'10px'}} />  {key} </h2>
            <h2 className='break-all  w-4/5 '>    {value} </h2>
           <hr style={{color:'black',width:'200px'}}/>
          </div>
        ))}

        
</>}
   </>}


  


 </div>


<div className='group-list relative z-10 bg-slate-700 pb-10 pt-4 pl-2 border-l-black border-2'>
     {level > 8 ?  <h2  onClick={() => {setSendTo('group'),setDisplayTo('Group'),setPrivateChat('group')}} style={{cursor:'pointer'}} className='mt-2 mb-2' onDoubleClick={handleSum}> Group  <p style={{fontSize:'14px',color:'red'}}> {sum > 0? sum : ''} </p></h2> : null}
    <h2 onClick={() => {setSendTo('designer'),setDisplayTo('designer'),setPrivateChat('designer')}} style={{cursor:'pointer'}} className='mt-2 mb-2 elementwrapper'> Designer  </h2>
    {work.map((x,id) => {
     return <div key={id} className='elementwrapper'>
        <h2 className='mt-2 mb-2' style={{cursor:'pointer'}} key={id} onClick={() => {setSendTo( 'chat'+ user + x.Name),setPrivateChat('chat'+ user + x.Name),setDisplayTo(x.Name),setTrueChat('chat'+ x.Name + user)}}> {x.Name} </h2>
  
     </div>
   
 })}
</div>






 </div>
  
 </>} 





</div>





<img className='meeting-bg  hidden lg:block
transition-transform transform-gpu hover:scale-110 hover:bg-slate-50 hover:rounded-lg' src={meeting} style={{cursor:'pointer',width:'50px',height:'50px'}} onClick={() => hideList === true? setHideList(false) : setHideList(true)}/>

 </div>

 <div>



 </div>


    </div>   </> : null}
    

  </>

  )
}
