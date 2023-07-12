import React from 'react'
import Nav from '../Nav'
import { Link, Navigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { auth, fs,db } from '../../Firebase'
import { useNavigate } from 'react-router-dom'
import User from '../User'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import SendFromForm from '../firebaseData/SendFromForm'
import { useParams } from 'react-router-dom'
import Links from './Links'
import EmojiPicker from 'emoji-picker-react'
import AddReactionIcon from '@mui/icons-material/AddReaction';

import WaitingDesigner from '../firebaseData/WaitingDesigner'
import WaitingApproval from '../firebaseData/WaitingApproval'
import WaitingApproved from '../firebaseData/WaitingApproved'

import Upload1 from '../firebaseData/Upload1'
import Upload2 from '../firebaseData/Upload2'
import Upload3 from '../firebaseData/Upload3'
import cross from '../images/cross.png'

import Solo from '../Txt/Solo'
import TxtAll from '../Txt/TxtAll'
import Group from '../GroupChat/Group'
import Title from '../../Title'
import Designer from './PageFunctions/Designer'
import Loading from '../Loading'
import view from '../images/open.png'
// import Test from "./Test"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ButtonPress from '../firebaseData/ButtonPress'
import Inputs from './PageFunctions/Inputs'





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

let notification = [];
  const [ emojiShow,setEmojiShow] = useState(false)
   notification = (round.filter((x) => x.countNoti && x.statusText !== 'Approved' ));

   let qty 
  qty = (notification.length);






 
 

  function handleDelete(i) {
    round.map((x,index) => {
      if (index === i){
        const docRef = collection(db,localStorage.getItem('partner'))
        const colRef=doc(docRef,x.id );
        deleteDoc(colRef);
      }
          })

          fs.collection('partner').doc(page).set({
            status: qty - 1  ,
          },{merge:true})
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



  
  const [ status, setStatus ] = React.useState(false);




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
    const currentDate = new Date();
    const currentMonth = currentDate.toISOString().slice(0, 7); // Format: YYYY-MM
 
    setFilter(round.filter((x) => x.statusText === 'Approved' && x.month === month)); 
  

   

  },[round,month])


  const [openModal, setOpenModal] = React.useState(false);
const handleOpenModal = () => setOpenModal(true);
const handleClose = () => setOpenModal(false);
  



const handleEditorChange = (value) => {
 setObjectiveAnswer(value);
};






  return (<>


<div className='client-page' style={{color:'white'}}>

        
{isLoading === false &&<> 
  <User user={user} setUser={setUser} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel}/>
 <Title/>
<div className='nav-of-partners'> <Nav/> </div>  </>}


{level > 7 && uuid !== null && <>

{/* <Test/> */}

{level === 8 && <>
<div className='admin-links-only-designer'> <Links/>
<img src={img}  className='client-pic' style={{backgroundColor:'white',marginBottom:'40px',marginTop:'20px'}}/>  </div>
</>
}

{level > 8 && <>
  <div className='admin-links-only'> <Links/> 
  <img src={img}  className='client-pic' style={{backgroundColor:'white',marginBottom:'20px',marginTop:'20px'}}/>
  <div style={{zIndex:1}} >
  <TxtAll className='txt' filter={filter} />    
</div>
   </div>
</>}

<Group />
<div className='content-div' >
  <Inputs user={user} level={level} setObjectiveAnswer={setObjectiveAnswer}setTypeAnswer={setTypeAnswer} type={type} setPost={setPost} month={month} setMonth={setMonth}
  setObjective={setObjective} setType={setType} setDate={setDate} qty={qty} objective={objective} post={post} page={page} date={date} />
 

 
  
  {/* designer sees only his tabs and not the whole page */}
{level === 8 && <>

<Designer show={show} round={round} level={level} setObjectiveAnswer={setObjectiveAnswer}setTypeAnswer={setTypeAnswer}typeAnswer={typeAnswer}
                objectiveAnswer={typeAnswer}month={month}color={color}page={page}setShow={setShow}setStatusBar={setStatusBar}/>

</>}


{/* level 9 and above sees all tabs */}
{round.map((x,i) => {  return <>
 { level > 8? 
  <div className='mapped-div' key={i} style={x.month === month ? {display:'flex'} :{display:'none'}}> 
<div>
<button className='x-button' onClick={() => handleText(i)} >  <img src={view} alt={view} style={{width:'30px'}} className='icon-do'/> </button>
  <button className='x-button ' onClick={() => {setShow(''),setObjectiveAnswer(''),setStatusBar('')}} >  <img src={cross} alt={cross} style={{width:'30px'}} className='icon-do'/> </button>
</div>
  <p  onClick={() => {setPost(x.count),setDate(x.date),setType(x.type)}} className='same-map-text extra-styles'> {x.count}  </p>
  <div className='hidden-form-div'>
 <p className='same-map-text  extra extra-styles'> {x.objective}  </p>
 

 
   
 {show === i && <>
 <div className={show === i?'holds-content':'no-content'}>
  <div className='holds-written-content'>


 <img src={x.designer} style={{maxWidth:'200px',maxHeight:'200px',cursor:'zoom-in'}}  onClick={() => handleOpenModal()}/>

 <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center'}}>
                   
          <img src={x.designer}   onClick={() => handleOpenModal()}   style={{maxWidth:'80vw',maxHeight:'80vh'}}/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {/* {!x.answer ? null :<h6 key={i} onClick={() => setObjectiveAnswer(x.answer) } style={{color:'black'}}> {x.answer} </h6>}  */}
          </Typography>
        </Box>
      </Modal>









     {!x.answer ? null :    <div  className='answer-text' key={i} onClick={() => setObjectiveAnswer(x.answer) } style={{color:'black'}} dangerouslySetInnerHTML={{ __html: x.answer }} />} 
  <div className='main-text-side' >

<div className='above-div-send' >
<SendFromForm user={user} objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level} setObjectiveAnswer={setObjectiveAnswer}/>
<button onClick={() => {handleDelete(i),setShow(''),setStatusBar('')}} className='button-24' >  delete </button>


{level  > 8 ?  emojiShow? <>
<h3 onClick={() => setEmojiShow(emojiShow === true?false:true)}> <AddReactionIcon  className='emojiset' /> </h3>
<EmojiPicker  
    setPlaceHolder='ara'
    emojiSize={30} 
    emojiStyle='google'
    theme='dark'
    onEmojiClick={(e) => setObjectiveAnswer((prevAnswer) => prevAnswer + e.emoji)}
    /> </>: <button onClick={() => setEmojiShow(emojiShow === true?false:true)} style={{marginLeft:'10px'}} >Add Emoji </button> : null}
</div>

   
  <form className='' onSubmit={handleSubmit}>
    




<ReactQuill
     value={objectiveAnswer}
      onChange={handleEditorChange}
      style={{color:'black',backgroundColor:'white'}}
      placeholder='Text here...'
      className='Quill'
    
    
    />

      

</form>
  </div>
  </div>
<div className='example-flex'>
   <div className='border-edit'>
  <img src={x.exampleOne} style={{maxWidth:'200px',maxHeight:'200px'}} />
{x.textEx !== ''? null:  <h2 className='same' style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx}  </h2>}
  <Upload1 objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>
  </div>


 {x.textEx > ""?  <div className='border-edit'>
  
  <img src={x.exampleTwo} style={{maxWidth:'200px',maxHeight:'200px'}} />


  <h2  className='same'style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx1} </h2>
  <Upload2 objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>
  </div>
  :null} 

{x.textEx1 > "" ?   <div className='border-edit'>
  <img src={x.exampleThree} style={{maxWidth:'200px',maxHeight:'200px'}} />
  <h2 className='same' style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx2} </h2>
  <Upload3 objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>
  </div> :null}
</div>


 </div>




 <hr/>


 



 </>} 

  
  </div>
 
  <p className='same-map-text extra-styles' > {x.type} </p>
  <p className='same-map-text extra-styles'>  {month}-{x.date}  </p>
  <p className='same-map-text extra-styles' style={{backgroundColor:x.color}}> {x.status} </p>


{statusBar === i? <div style={{color:'black'}} className='status-div'> 
{level === 8 ?  <WaitingApproval objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} qty={qty}/> : null}
{level > 8 && <>
  <WaitingDesigner objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} qty={qty} />
  <WaitingApproval objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page}qty={qty}  />
<WaitingApproved objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} qty={qty} />
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
<Loading />
      </>}




    </div>
  
    </>
  )

}