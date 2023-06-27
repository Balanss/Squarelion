/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from '../Nav'
import { Link, Navigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { auth, fs,db } from '../../Firebase'
import { useNavigate } from 'react-router-dom'
import User from '../User'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import Button from '../firebaseData/Button'
import SendFromForm from '../firebaseData/SendFromForm'
import { useParams } from 'react-router-dom'
import Links from './Links'
import EmojiPicker from 'emoji-picker-react'
import AddReactionIcon from '@mui/icons-material/AddReaction';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import WaitingDesigner from '../firebaseData/WaitingDesigner'
import WaitingApproval from '../firebaseData/WaitingApproval'
import WaitingApproved from '../firebaseData/WaitingApproved'
import WaitingDelete from '../firebaseData/WaitingDelete'
import facebook from '../images/facebook.png'
import instagram from "../images/instagram.png"
import Upload1 from '../firebaseData/Upload1'
import Upload2 from '../firebaseData/Upload2'
import Upload3 from '../firebaseData/Upload3'
import cross from '../images/cross.png'
import tab from '../images/tap.png'
import mail from '../images/mailchimp.png'
import linked from '../images/linkedin.png'
import Solo from '../Txt/Solo'
import TxtAll from '../Txt/TxtAll'
import Group from '../GroupChat/Group'







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
};




export default function Page({goTo}) {

  const {id} = useParams()
  const [hide,setHide] = useState(false)
  const [color,setColor] = useState('orange')
  const [ placeHolder,setPlaceHolder] = useState('')
  const [user,setUser] = useState('')
  const [ uuid,setUuid] = useState('')
  const [ level,setLevel] = useState('')
  const [isAccepted,setIsAccepted] = useState('')
  const [ show,setShow] = useState('')
  const [ page,setPage] = useState('')
  const [ deletion,setDeletion] = useState('')
  const [ design,setDesign] = useState('')
  const navigate = useNavigate()


  //------------------------------------------ under lifts state to button for firebase
 const [ objective,setObjective] = useState('')
 const [type,setType] = useState('')
 const [ date,setDate] = useState('')
 const [ post,setPost] = useState('')
 const [month,setMonth] = useState('')
 const [ objectiveAnswer,setObjectiveAnswer] = useState('')
 const [ typeAnswer,setTypeAnswer] = useState('')
// 

//------------ pdf creation
const [ createPdf,setCreatePdf] = useState('')
const [ pdfCount,setPdfCount] = useState('')
const [ pdfObject,setPdfObject] = useState('')
const [ pdfChannels,setPdfChannels] = useState('')
const [ pdfDate,setPdfDate] = useState('')

  function handleSubmit(e) {
e.preventDefault()
setHide(false)
  }


  const [round, setRound] = useState([]);
 

  const getRound = async () => {
    setPage(localStorage.getItem('partner'));
    try {
      const unsubscribe = fs.collection(page)
        .onSnapshot((querySnapshot) => {
          const roundArray = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
  
          roundArray.sort((a, b) => {
            // Extract the numeric part from the IDs
            const idA = parseInt(a.id.split('-')[0]);
            const idB = parseInt(b.id.split('-')[0]);
  
            return idA - idB; // Sort the array based on the numeric IDs
          });
  
          setRound(roundArray);
        });
  
      return unsubscribe;
    } 
    catch (error) {
      null;
    }
  };
  
  
  useEffect(() => {
    const unsubscribe = getRound();
  
    // Cleanup the subscription
   
  }, [page]);
  


  function handleText(i ) {
    round.map((x,index) => {
      if (i === index){
        setShow(i)
        setTypeAnswer(x.count)
        setDeletion(x.count)
        setStatusBar(i)
      } 
    })
  }



  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.toISOString().slice(0, 7); // Format: YYYY-MM
    setMonth(currentMonth);
  }, []);


  const [ emojiShow,setEmojiShow] = useState(false)



  function handleAdminSubmit(e){
    e.preventDefault();
  }
 

  function handleDelete(i) {
    round.map((x,index) => {
      if (index === i){
        const docRef = collection(db,localStorage.getItem('partner'))
        const colRef=doc(docRef,deletion+month );
        deleteDoc(colRef);
      }
          })
  }
  
 
  const [ img , setImage ] = useState('')
  useEffect(() => {
    setImage(localStorage.getItem('image'))
  },[img])

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (level === 0 && uuid > ''){
      setIsLoading(true);
    navigate('/')
    } else {
       const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 500);
     return () => {
      clearTimeout(timeoutId);
    };
    }
   

   
  }, [level]);



  const [open, setOpen] = React.useState(false);
  const [ status, setStatus ] = React.useState(false);

  const handleClick = () => {
    setOpen(open === true? false : true);
  };


  function handleApprove(i){
round.map((x,index) => {
   if (statusBar === index)  {
    setStatusBar('')
  }
})
  }

const [filter,setFilter] = useState('');
const [ statusBar,setStatusBar] = useState('');
  useEffect(() => {
   setFilter(round.filter((x) => x.status === 'Approved')) 

  },[round])


  return (<>


<div className='client-page' style={{color:'white'}}>

        
{isLoading === false &&<> 
  <User user={user} setUser={setUser} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel}/>
<div className='nav-of-partners'> <Nav/> </div>  </>}


{level > 7 && uuid !== null && <>
<div className='admin-links-only'> <Links/> </div>
<Group />
<div className='content-div' >

<div style={{zIndex:1}} className='text-icon'>
  {level > 8 ?<TxtAll className='txt' filter={filter} /> :null} 

{/* <PDFDownloadLink  className='pdf-content' document={  <WholePage  filter={filter}/>} fileName={`${page}.pdf`} style={{position:'absolute',zIndex:1,width:'100px',height:'100px'}} >  {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        } </PDFDownloadLink> */}


     
</div>


 <div>

   <img src={img}   style={{backgroundColor:'white',marginBottom:'40px',width:'200px',marginTop:'20px'}}/> 
 
 </div>

    
 
 {level > 8 ? <form onSubmit={handleAdminSubmit} className='fill-in-form'>
  <Button  objective={objective} type={type} date={date} post={post} page={page} month={month} setObjective={setObjective} className='input-admindb'/>
  <input type="text" placeholder='Post number' onChange={(e) => setPost(e.target.value)} required className='input-admindb'/>  
  <input type="text" placeholder='Subject' value={objective} onChange={(e) => setObjective(e.target.value)} required  className='input-admindb'/>  

  {/* <input type=" text" placeholder='type of post' onChange={(e) => setType(e.target.value)}   className='input-admindb'/> */}
  <h3 onClick={handleClick} className='channel-text' > {type === ''? 'Type of channel' : type}</h3>
  {open === true?<div className='div-of-channel'> <img onClick={() => setType('Facebook')} style={{cursor:'pointer',width:'30px'}}  src={facebook} alt={facebook} />
  <img onClick={() => setType('Instagram')} style={{cursor:'pointer',width:'30px'}}  src={instagram} alt={instagram} />
<img  onClick={() => setType('MailChimp')}  style={{cursor:'pointer',width:'30px'}} src={mail} alt={mail} />
<img onClick={() => setType('LinkedIn')} style={{cursor:'pointer',width:'30px'}} src={linked} alt={linked} />
<p onClick={() => setType('Stories')} style={{cursor:'pointer'}}> Stories </p>  
<input type=" text" placeholder='Other' onChange={(e) => setType(e.target.value)}    className='input-admindb'/>  </div> :null }

  <input type="text" placeholder='date'  onChange={(e) => setDate(e.target.value)}  required className='input-admindb'/>
  <input type="month" placeholder='month' value={month} onChange={(e) => setMonth(e.target.value)}  className='input-admindb' /> 
 </form> :null}


  
 

 
  
  {/* designer sees only his tabs and not the whole page */}
  {round.map((x,i) => {  return <>
 { level === 8 && x.status !== 'pending'? 
  <div className='mapped-div' key={i} style={x.month === month ? {display:'flex'} :{display:'none'}}> 
  
  <p  className='same-map-text extra-styles'> {x.count}  </p>


 
  <div className='hidden-form-div'>
 <p className='same-map-text  extra extra-styles' onClick={() => handleText(i)} style={{cursor:'pointer'}} > {x.objective}  </p>

 

 
   
 
 
   
 {show === i && <>
 <div className='holds-content'>
  <div className='main-text-side' >
     <img src={x.designer} style={{maxWidth:'200px',maxHeight:'200px'}} />
     <h2 className='answer-text' key={i} onClick={() => setObjectiveAnswer(x.answer) } style={{color:'black'}}> {x.answer} </h2>

  </div>

  <div className='border-edit'>
    <h2 style={{color:'black'}}> Example </h2>
  <img src={x.exampleOne} style={{maxWidth:'200px',maxHeight:'200px'}} />
  <Upload1 objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>

  <h2 className='same' style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx} </h2>
  </div>


  <div className='example-flex'>
  {x.textEx > "" ? <div className='border-edit'>
    <h2 style={{color:'black'}}> Example </h2>
  <img src={x.exampleOne} style={{maxWidth:'200px',maxHeight:'200px'}} />
  <Upload2 objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>

  <h2 style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx1} </h2>
  </div>:null}


{x.textEx1 > ""?   <div className='border-edit'>
    <h2 style={{color:'black'}}> Example </h2>
  <img src={x.exampleTwo} style={{maxWidth:'200px',maxHeight:'200px'}} />
  <Upload3  objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>

  <h2 className='same' style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx2} </h2>
  </div> :null}

  {/* <div className='border-edit'>
    <h2 style={{color:'black'}}> Example </h2>
  <img src={x.exampleThree} style={{maxWidth:'200px',maxHeight:'200px'}} />
  <Upload3 objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>

  <h2 className='same' style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx2} </h2>
  </div>  */}
</div>

 </div>



 <hr/>


 

 <SendFromForm objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level} setTypeAnswer={setTypeAnswer}/>
  <form className='' onSubmit={handleSubmit}>

<div>
<div className='confirm-text'>
 <button className='x-button' onClick={() => {setShow(''),setObjectiveAnswer(''),setStatusBar('')}} >  <img src={cross} alt={cross} style={{width:'30px'}}/> </button>


</div>
</div>



</form>
 </>} 

  
  </div>
 
  <p className='same-map-text extra-styles' > {x.type} </p>
  <p className='same-map-text extra-styles'> {x.date} </p>
<p className='same-map-text' style={{backgroundColor:x.color,cursor:'pointer',color:'black'}} onClick={() => handleApprove(i)}> {x.status} </p>

{statusBar === i? <div style={{color:'black'}} className='status-div'> 
{level === 8 ?  <WaitingApproval objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} /> : null}
{level > 8 && <>
  <WaitingDesigner objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} />
  <WaitingApproval objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} />
<WaitingApproved objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} />
<WaitingDelete objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} />
</>}

  
  </div> : null}

   </div>:null

}
 




 </>






 })}


{/* level 9 and above sees all tabs */}
{round.map((x,i) => {  return <>
 { level > 8? 
  <div className='mapped-div' key={i} style={x.month === month ? {display:'flex'} :{display:'none'}}> 
  
  <p  className='same-map-text extra-styles'> {x.count}  </p>


 
  <div className='hidden-form-div'>
 <p className='same-map-text  extra extra-styles' onClick={() => handleText(i)} style={{cursor:'pointer'}} > {x.objective}  <img className='tab-img' src={tab}/> </p>
 
 {level > 8 ? <> <Solo  createPdf={createPdf} pdfChannels={pdfChannels} pdfCount={pdfCount} pdfObject={pdfObject} pdfDate={pdfDate}/>
 <input type='checkbox' onClick={() => {setCreatePdf(x.answer),setPdfCount(x.count),setPdfObject(x.objective),setPdfDate(x.date),setPdfChannels(x.type)}}/> 
      <hr />
 </> :null}
 
   
 {show === i && <>
 <div className='holds-content'>
  <div className='main-text-side' >
     <img src={x.designer} style={{maxWidth:'200px',maxHeight:'200px'}} />
     {!x.answer ? null :<h2 className='answer-text' key={i} onClick={() => setObjectiveAnswer(x.answer) } style={{color:'black'}}> {x.answer} </h2>} 
     <SendFromForm objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level} setObjectiveAnswer={setObjectiveAnswer}/>
  <form className='' onSubmit={handleSubmit}>
    
<div>
<textarea type="text" placeholder='enter text here'  className='text-area' value={objectiveAnswer} onChange={(e) => setObjectiveAnswer(e.target.value)}   /> 
<div className='confirm-text'>

 <button className='x-button' onClick={() => {setShow(''),setObjectiveAnswer(''),setStatusBar('')}} >  <img src={cross} alt={cross} style={{width:'30px'}}/> </button>
 <button onClick={() => {handleDelete(i),setShow(''),setStatusBar('')}} className='button-24' >  delete </button>
 
 {level  > 8 ?  emojiShow? <>
  <h3 onClick={() => setEmojiShow(emojiShow === true?false:true)}> <AddReactionIcon  className='emojiset' /> </h3>
<EmojiPicker  
      setPlaceHolder='ara'
      emojiSize={30} 
      emojiStyle='google'
      theme='dark'
     
      onEmojiClick={(e) => setObjectiveAnswer((prevAnswer) => prevAnswer + e.emoji)}
      /> </>: <h3 onClick={() => setEmojiShow(emojiShow === true?false:true)} > <AddReactionIcon className='emojiset'/> </h3> : null}
</div>



</div>



</form>

  </div>
<div className='example-flex'>
   <div className='border-edit'>
    <h2 style={{color:'black'}}> Example </h2>
  <img src={x.exampleOne} style={{maxWidth:'200px',maxHeight:'200px'}} />
  <Upload1 objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>

  <h2 className='same' style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx} </h2>
  </div>


 {x.textEx > ""?  <div className='border-edit'>
    <h2 style={{color:'black'}}> Example </h2>
  <img src={x.exampleTwo} style={{maxWidth:'200px',maxHeight:'200px'}} />
  <Upload2 objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>

  <h2  className='same'style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx1} </h2>
  </div>:null} 

{x.textEx1 > "" ?   <div className='border-edit'>
    <h2 style={{color:'black'}}> Example </h2>
  <img src={x.exampleThree} style={{maxWidth:'200px',maxHeight:'200px'}} />
  <Upload3 objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>

  <h2 className='same' style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx2} </h2>
  </div> :null}
</div>


 </div>




 <hr/>


 



 </>} 

  
  </div>
 
  <p className='same-map-text extra-styles' > {x.type} </p>
  <p className='same-map-text extra-styles'> {x.date} </p>
<img src={x.status} className=' status-awaiting' style={{backgroundColor:x.color,cursor:'pointer',color:'black'}} onClick={() => handleApprove(i)}/> 

{statusBar === i? <div style={{color:'black'}} className='status-div'> 
{level === 8 ?  <WaitingApproval objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} /> : null}
{level > 8 && <>
  <WaitingDesigner objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} />
  <WaitingApproval objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} />
<WaitingApproved objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} />
{/* <WaitingDelete objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} /> */}
</>}

  
  </div> : null}

   </div>:null

}
 




 </>






 })}


    
      </div>
</>}

{isLoading === true &&  <>
        <div className='loading-screen'> <Stack sx={{ color: 'gold' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
    </Stack>
    <h1> Loading ... </h1></div>
      </>}




    </div>
  
    </>
  )

}
