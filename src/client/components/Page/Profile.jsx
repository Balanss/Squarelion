/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from '../Nav'
import {useState, useEffect} from 'react'
import { auth, fs,db } from '../../Firebase'
import User from '../User'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import Button from './profileFunctions/Button'
import PrivateChat from './profileFunctions/PrivateChat'
import Footer from '../Home/Footer'
import bin from '../images/bin.png'
import time from '../images/time.png'
import mark from "../images/important.png"
import Links from './Links'
import WaitingForAdmin from './WaitingForAdmin'
import Title from '../../Title'
import ProfileFunctions from './profileFunctions/ProfileFunctions'
import Loading from '../Loading'
import TimeOff from './WFH/TimeOff'
import Survey from './Survey'
import Cal from './Calendar/Cal'
import ShowDate from './Calendar/ShowDate'
import Panel from './Panel/Panel'

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
const [pan,setPan] = useState(false)


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

const [ showWfh,setShowWfh] = useState('start')

const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 650);
  };

  handleResize(); // Call the function initially to set the initial state

  window.addEventListener('resize', handleResize); // Add event listener for window resize

  return () => {
    window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
  };
}, []);




  return (<>
  <ProfileFunctions privateChat={privateChat} setChat={setChat} setDesignerChat={setDesignerChat} setMessage={setMessage}/>
  <Title/>
  <User setUser={setUser} user={user} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel} />

  
{level === 0 && <>

<div className='min-h-[100vh] bg-slate-600'>
  <WaitingForAdmin/>
</div>
</>}



<button onClick={() => setPan(pan === true ? false : true)} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
  
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>
<div className='flex flex-col sm:flex-row min-h-[100vh] bg-slate-500' >


{pan === true && isMobile === true &&<>
  <Panel level={level} showWfh={showWfh} setShowWfh={setShowWfh} user={user} hideList={hideList}
 setHideList={setHideList} sum={sum} work={work} setSendTo={setSendTo} setDisplayTo={setDisplayTo} setPrivateChat={setPrivateChat} setTrueChat={setTrueChat}
 pan={pan} setPan={setPan}/> </>}

{ isMobile === false &&<>
  <Panel level={level} showWfh={showWfh} setShowWfh={setShowWfh} user={user} hideList={hideList}
 setHideList={setHideList} sum={sum} work={work} setSendTo={setSendTo} setDisplayTo={setDisplayTo} setPrivateChat={setPrivateChat} setTrueChat={setTrueChat}
 pan={pan} setPan={setPan}/> </>}


{level > 7 ?  <>  <div className='w-full sm:w-4/5 md:absolute right-0 max-h-[90vh] '>

  
{/* <div className='real-admin-links'> 

{level === 11?  <button onClick={() => setShowWfh('survey')}> Survey </button> : null}
  
  </div> */}

{showWfh === 'start' && (
  <div className='lg:w-5/5 lg:flex lg:flex-row lg:items-center' >
  <Cal/>
  <ShowDate/>
  </div>
)}



{showWfh === 'chat' && <>


<div className='bg-slate-100  min-h-[500px] max-h-[95vh]  '  >
<h2 onClick={() => setShowImportant(showImportant === true? false : true)}> {showImportant === false? 'Show Priority' : 'Show All'}  </h2>
<div className='min-h-[700px] max-h-[700px] overflow-x-scroll p-10'>
{privateChat  === 'group' && <>


{showImportant === true ? message.map((x,id) => {
return <div key={id} className='flex flex-col items-center' onClick={() => handleDelete(x.id)} > {x.imp > ""? <h2 className=''>  <img src={mark} style={{width:'40px',height:'40px'}}/> {x.text} - {x.sendBy} </h2>  :null }

{x.imp >""?  <img style={{width:'50px',height:'50px',cursor:'pointer'}} src={bin} onClick={(i) => handleDeleted(x.id)}/> :null} <hr /> </div> 
}) : 



message.map((x,i) => {
return  <div key={i} className='' onClick={() => handleDelete(x.id)} > 
<h2 className='md:max-w-[1000px] break-all' onClick={() => handleNoti(x.id)}>  {x.imp > ""? <img src={mark} style={{width:'40px',height:'40px'}}/> :null } {x.text} - {x.sendBy} </h2> 

<img style={{width:'50px',height:'50px',cursor:'pointer'}} src={bin} onClick={(i) => handleDeleted(x.id)}/> <hr /> </div> 
})  
}


</>  }

{privateChat === 'designer' && <>
{designerChat.map((x,i) => {
return <div key={i} className='flex flex-col items-center' onClick={() => handleDelete(x.id)} > 
<h2 className='break-all' onClick={() => handleNoti(x.id)}>  {x.imp > ""? <img src={mark} style={{width:'40px',height:'40px'}}/> :null } {x.text} - {x.sendBy} </h2> 
</div> 
})}
</>}



{privateChat !== 'group' && <>

{privateChat && <> 
{Object.entries(chat).map(([key, value]) => (
    <div key={key}  className='pb-10'>
      <h2  >  <img src={time} style={{width:'20px',height:'20px',marginRight:'10px'}} />  {key} </h2>
      <h2 className='break-all'>   {value} </h2>
     <hr style={{color:'black',width:'100px'}}/>
    </div>
  ))}

  
</>}
</>}
</div>



<form className='flex  justify-around flex-col md:justify-end border-t-2 border-black pt-[10px] pb-[10px] lg:fixed lg:bottom-0 lg:w-4/5 lg:bg-slate-800'  onSubmit={(e) => e.preventDefault()}>
<div className='flex flex-row items-center justify-around mb-10 lg:w-[300px] lg:pb-[20px] lg:m-auto'>

<textarea onChange={(e) => setText(e.target.value)} value={text} className='textarea' placeholder= {`Send message to ${displayTo} ${imp === true && displayTo === 'Group'? ' [Priority] ' : '' }`}> 

</textarea>
<img src={mark} onClick={() => {setImp(imp === false? true : false)}} className='img-imp' style={{width:'2rem'}}/> 
</div>

{sendTo === 'designer' ? <Button allUid={allUid}  user={user}  sendTo={sendTo} text={text} uuid={uuid} imp={imp} /> :null }
{sendTo === 'group' ? <Button allUid={allUid}setText={setText} user={user} sendTo={sendTo} text={text} uuid={uuid} imp={imp} />:null }
{sendTo !== 'designer' && sendTo !== 'group' ?  <PrivateChat user={user}  setText ={setText} sendTo={sendTo} text={text} trueChat={trueChat} /> :null }


</form>

</div>







{/* {hideList && level === 8 && <>
<div style={{backgroundColor:'white',width:'125px',padding:'10px',borderRadius:'10px',color:'black'}}>
<h2 onClick={() => {setSendTo('designer'),setDisplayTo('designer'),setPrivateChat('designer'), setHideList(false)}} style={{cursor:'pointer'}} className='h2-noti'> Chat  </h2>
{work.map((x,id) => {
 return <div key={id}>
    <h2 style={{cursor:'pointer'}} key={id} onClick={() => {setSendTo( 'chat'+ user + x.Name),setPrivateChat('chat'+ user + x.Name),setDisplayTo(x.Name), setHideList(false)}}> {x.Name} </h2>
 
 </div>

})}
</div>

</>} */}











</>}

{showWfh === 'wfh' && <>

<TimeOff/>
</>}



{showWfh === 'survey' && <>

<Survey/>
</>}




</div>  </> : null}
</div>
 
    {/* <div className='absolute bottom-0 '>
      <Footer/> 
    </div> */}




 {loading === false &&  <>
<Loading/>
      </>}
  
  </>

  )
}