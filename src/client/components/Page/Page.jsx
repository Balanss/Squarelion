import React from 'react'
import Nav from '../Nav'
import {useState, useEffect} from 'react'
import { auth, fs,db } from '../../Firebase'
import { useNavigate } from 'react-router-dom'
import User from '../User'
import {collection,deleteDoc,doc} from "firebase/firestore";
import SendFromForm from '../firebaseData/SendFromForm'
import { useParams } from 'react-router-dom'
import Links from './Links'
import EmojiPicker from 'emoji-picker-react'
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
import view from '../images/open.png'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Inputs from './PageFunctions/Inputs'






const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
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
const [isChecked, setIsChecked] = useState(false);


  function handleSubmit(e) {
e.preventDefault()
setHide(false)
  }

  const [round, setRound] = useState([]);
 

const getRound = async () => {
  setPage(localStorage.getItem('partner'));
  try {
    const unsubscribe = fs.collection(page)
      .onSnapshot(async (querySnapshot) => {
        const roundArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        roundArray.sort((a, b) => {
          const idA = parseInt(a.id.split('-')[0]);
          const idB = parseInt(b.id.split('-')[0]);

          return idA - idB;
        });

        setRound(roundArray);
      });

    return unsubscribe;
  } 
  catch (error) {
    console.error(error);
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



const [filter,setFilter] = useState('');
const [ statusBar,setStatusBar] = useState('');
  useEffect(() => {
    // const currentDate = new Date();
    // const currentMonth = currentDate.toISOString().slice(0, 7); // Format: YYYY-MM
    setFilter(round.filter((x) => x.statusText === 'Approved' && x.month === month)); 
  },[round,month])


  const [openModal, setOpenModal] = React.useState(false);
const handleOpenModal = () => setOpenModal(true);
const handleClose = () => setOpenModal(false);
  



const handleEditorChange = (value) => {
 setObjectiveAnswer(value);
};

  return (<>


<div className='client-page min-h-[100vh] bg-slate-600' style={{color:'white'}}>

        
{isLoading === false &&<> 
  <User user={user} setUser={setUser} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel}/>
 <Title/>
<div className='border-b-2 border-yellow-500 pt-10 bg-slate-800'> <Nav/> </div>  </>}


{level > 7 && uuid !== null && <>



{level === 8 && <>
<div className='admin-links-only-designer text-center mt-10'> <Links/>
<img src={img}  className='client-pic flex items-center m-auto' style={{backgroundColor:'white',marginBottom:'40px',marginTop:'20px'}}/>  </div>
</>
}

{level > 8 && <>
  <div className='flex flex-row justify-around items-center bg-slate-300 '> 
  <div className='bg-slate-700'><Links/>  </div>
  <img src={img}  className='w-20' style={{backgroundColor:'white',marginBottom:'20px',marginTop:'20px'}}/>
  <div style={{zIndex:1}} >
  <TxtAll className='txt' filter={filter} />    
</div>
   </div>
</>}

<Group />
<div className="content-div bg-slate-600 
{{level === 8? 'h-80px' 'w-[90px]' p-10 }}" >
  <Inputs user={user} level={level} setObjectiveAnswer={setObjectiveAnswer}setTypeAnswer={setTypeAnswer} type={type} setPost={setPost} month={month} setMonth={setMonth}
  setObjective={setObjective} setType={setType} setDate={setDate} qty={qty} objective={objective} post={post} page={page} date={date} />
 

 
  
  {/* designer sees only his tabs and not the whole page */}
{level === 8 && <>

<Designer show={show} round={round} level={level} setObjectiveAnswer={setObjectiveAnswer}setTypeAnswer={setTypeAnswer}typeAnswer={typeAnswer}
                objectiveAnswer={typeAnswer}month={month}color={color}page={page}setShow={setShow}setStatusBar={setStatusBar} user={user} qty={qty}/>
                 

</>}


{/* level 9 and above sees all tabs */}
{round.map((x,i) => {  return <>
 { level > 8? 
  <div className='mapped-div bg-blue-900 flex-col items-center min-h-[300px] justify-evenly border-2 border-black mb-10 
  md:flex-row md:min-h-[100px]  md:m-auto md:justify-center md:hover:scale-105 md:transition-transform md:duration-300
  xl:w-[1000px] ' 
   key={i} style={x.month === month ? {display:'flex'} :{display:'none'}}> 
<div className='lg:flex lg:flex-row  lg:mr-10'>
<button className='x-button mr-[30px] transition-transform transform-gpu hover:scale-110 hover:border-white hover:border-2 hover:rounded-xl ' onClick={() => handleText(i)} >  <img src={view} alt={view} style={{width:'40px'}} className='icon-do'/> </button>
  <button className='x-button transition-transform transform-gpu hover:scale-110 hover:bg-white hover:rounded-3xl' onClick={() => {setShow(''),setObjectiveAnswer(''),setStatusBar('')}} >  <img src={cross} alt={cross} style={{width:'40px'}} className='icon-do'/> </button>
</div>

  <p  onClick={() => {setPost(x.count),setDate(x.date),setType(x.type)}} 
  className='bg-white text-black  text-[20px] min-w-[200px] text-center border-2 border-black rounded-sm mt-5 mb-5
  md:min-w-[100px] md:h-[50px] md:p-[10px]  '> 
  {x.count}  </p>

 <p className='bg-white text-black break-all text-[20px] min-w-[200px] text-center border-2 border-black rounded-sm mt-5 mb-5
 md:min-w-[200px] md:max-w-[300px] md:break-all  md:p-[10px]   md:h-[50px] md:text-sm md:overflow-x-hidden'> {x.objective}  </p>
 
  <p className='bg-white text-black text-[20px] border-2 border-black min-w-[200px] text-center rounded-sm mt-5 mb-5
  md:min-w-[120px] md:p-[10px]  md:h-[50px]' > {x.type} </p>

  <p className='bg-white text-black text-[20px] border-2 border-black min-w-[200px] text-center rounded-sm mt-5 mb-5
  md:min-w-[120px] md:p-[10px] md:h-[50px]'>  {month}-{x.date}  </p>

  <p className=' text-black text-[20px] border-2 border-black min-w-[200px] text-center rounded-sm mt-5 mb-5 
  md:min-w-[110px] md:p-[10px] md:h-[50px]' style={{backgroundColor:x.color}}> {x.status}  </p>





{statusBar === i? <div style={{color:'black'}} className='status-div ml-[10px]'> 

{level > 8 && <>
  <WaitingDesigner objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} qty={qty}  />
  <WaitingApproval objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page}qty={qty}  />
<WaitingApproved objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} qty={qty} />
{/* <WaitingDelete objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} /> */}
</>}

  
  </div> : null}

   </div>:null

}
 


 
   
{show === i && level > 8 && <>
 <div className='lg:w-[1000px] m-auto border-2 border-black bg-slate-700'>
  <div className='holds-written-content '>


 <img src={x.designer} className='m-auto mt-[50px]' style={{maxWidth:'200px',maxHeight:'200px',cursor:'zoom-in'}}  onClick={() => handleOpenModal()}/>

 <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='max-w-[80vw] max-h-[80vw]  '
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center'}} >
                   
          <img src={x.designer}   onClick={() => handleOpenModal()}   style={{maxWidth:'80vw',maxHeight:'80vh',margin:'auto'}}/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {/* {!x.answer ? null :<h6 key={i} onClick={() => setObjectiveAnswer(x.answer) } style={{color:'black'}}> {x.answer} </h6>}  */}
          </Typography>
        </Box>
      </Modal>


     {!x.answer ? null :    <div  className='text-center break-all m-auto mt-[50px] p-8 bg-white
     lg:w-3/4' key={i} onClick={() => setObjectiveAnswer(x.answer) } style={{color:'black'}} dangerouslySetInnerHTML={{ __html: x.answer }} />} 
  <div className='flex flex-col items-center justify-evenly h-[400px] border-b-2 border-black ' >

<div className='above-div-send 
lg:flex lg:items-center lg:justify-around lg:bg-slate-500 p-4 rounded-sm' >
<SendFromForm user={user} objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level} setObjectiveAnswer={setObjectiveAnswer}/>

<button onClick={() => {handleDelete(i),setShow(''),setStatusBar('')}}  className=" ml-5 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete Post</button>


{level  > 8 ?  emojiShow? <>
<h3 className='"text-gray-900 text-black bg-gradient-to-r  from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"' onClick={() => setEmojiShow(emojiShow === true?false:true)}> Emoji </h3>
<div className='absolute left-0'>
<EmojiPicker  

width='300px'
    setPlaceHolder='ara'
    emojiSize={30} 
    emojiStyle='google'
    theme='dark'
    onEmojiClick={(e) => setObjectiveAnswer((prevAnswer) => prevAnswer + e.emoji)}
    /> 
</div>
</>: <button  onClick={() => setEmojiShow(emojiShow === true?false:true)} style={{marginLeft:'40px'}}  className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Emoji </button> : null}
</div>

   
  <form className='' onSubmit={handleSubmit}>
    




<ReactQuill
     value={objectiveAnswer}
      onChange={handleEditorChange}
      style={{color:'black',backgroundColor:'white'}}
      placeholder='Text here...'
      className='max-w-[90vw] max-h-[200px] overflow-scroll'
    />

      


</form>

<div className='flex items-baseline'>
<input type='checkbox'  checked={isChecked} onClick ={() =>  { setIsChecked((prevChecked) => !prevChecked), setCreatePdf(x.answer)}} className='mr-2' />
<Solo createPdf={createPdf} pdfCount={pdfCount} pdfDate={pdfDate} pdfObject={pdfObject} pdfChannels={pdfChannels}  isChecked={isChecked} />
</div>


  </div>
  </div>
<div className='example-flex'>
   <div className='border-edit flex flex-col  min-h-[400px] border-2 pt-5  items-center text-white
   lg:flex-row-reverse lg:justify-evenly lg:min-h-[100px]'>
  <img src={x.exampleOne} style={{maxWidth:'200px',maxHeight:'200px'}} />
{x.textEx === ''? null:  <h2 className='same' style={{color:'white',width:'200px',wordBreak:'break-all'}}> {x.textEx}  </h2>}
  <Upload1  objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>
  </div>


 {x.textEx > ""?  <div className='border-edit flex flex-col items-center h-[400px] border-2 pt-5
  lg:flex-row-reverse lg:justify-evenly lg:min-h-[100px]'>
  
  <img src={x.exampleTwo} style={{maxWidth:'200px',maxHeight:'200px'}} />


  <h2  className='same text-white'style={{width:'200px',wordBreak:'break-all'}}> {x.textEx1} </h2>
  <Upload2 objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>
  </div>
  :null} 

{x.textEx1 > "" ?   <div className='border-edit flex flex-col items-center h-[400px] border-2 pt-5
 lg:flex-row-reverse lg:justify-evenly lg:min-h-[100px]'>
  <img src={x.exampleThree} style={{maxWidth:'200px',maxHeight:'200px'}} />
  <h2 className='same' style={{width:'200px',wordBreak:'break-all'}}> {x.textEx2} </h2>
  <Upload3 objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>
  </div> :null}
</div>


 </div>







 



 </>} 


 </>
 })}



    
      </div>
</>}
    </div>
  
    </>
  )

}