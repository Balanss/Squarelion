import React,{Suspense} from 'react'
import Nav from '../Nav'
import {useState, useEffect} from 'react'
import { auth, fs,db } from '../../Firebase'
import { useNavigate } from 'react-router-dom'
import User from '../User'
import {collection,deleteDoc,doc,updateDoc,setDoc,addDoc} from "firebase/firestore";
import SendFromForm from '../firebaseData/SendFromForm'
import { useParams } from 'react-router-dom'
import Links from './Links'
import WaitingDesigner from '../firebaseData/WaitingDesigner'
import WaitingApproval from '../firebaseData/WaitingApproval'
import WaitingApproved from '../firebaseData/WaitingApproved'
import cross from '../images/cross.png'
import Solo from '../Txt/Solo'
import TxtAll from '../Txt/TxtAll'
import Title from '../../Title'
import Designer from './PageFunctions/Designer'
import view from '../images/open.png'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Inputs from './PageFunctions/Inputs'
import Loading from '../Loading'
import Memo from './Memo/Memo'
import '/src/client/index.css'
// import Bot from './Bot/Bot'
import Demo from './Demo/Demo'
import Sure from '../firebaseData/Sure'
import { ShowChart } from '@mui/icons-material'
import Version from '../../Version/Version'
import Stories from './Stories'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';








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

const styleNew = {
  position: 'absolute',
  top: '50%',
  bottom:'0',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const styleBar = {
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  

};



export default function Page() {

  const {id} = useParams()
  const [hide,setHide] = useState(false)
  const [color,setColor] = useState('orange')
  const [user,setUser] = useState('')
  const [ uuid,setUuid] = useState('')
  const [ level,setLevel] = useState('')
  const [isAccepted,setIsAccepted] = useState('')
  const [ show,setShow] = useState('')
  const [ page,setPage] = useState('')
  const [ deletion,setDeletion] = useState('')
  const [round, setRound] = useState([]);
  const navigate = useNavigate()


  //------------------------------------------ under lifts state to button for firebase
 const [ objective,setObjective] = useState('')
 const [ uniqueId,setUniqueId] = useState('')
 const [type,setType] = useState('')
 const [ date,setDate] = useState('')
 const [ post,setPost] = useState('')
 const [month,setMonth] = useState('')
 const [ objectiveAnswer,setObjectiveAnswer] = useState('')
 const [ typeAnswer,setTypeAnswer] = useState('')
 const[subject,setSubject] = useState('')
 const [editMonth,setEditMonth] = useState('waiting')
 const [editUid,setEditUid] = useState('waiting')
 const [editDetails,setEditDetails] = useState('')
 const [ forPost,setForPost] = useState('')
 const [imageUrl,setImageUrl] = useState('')
 const [image1Url,setImage1Url] = useState('')
  const [image2Url,setImage2Url] = useState('')
  const [image3Url,setImage3Url] = useState('')

 const [ boosting,setBoosting] = useState('')
 const [title,setTitle] = useState('')
 
const [showRound,setShowRound] = useState()
// 

//------------ pdf creation
const [ createPdf,setCreatePdf] = useState('')
const [ pdfCount,setPdfCount] = useState('')
const [ pdfObject,setPdfObject] = useState('')
const [ pdfChannels,setPdfChannels] = useState('')
const [ pdfDate,setPdfDate] = useState('')
const [isChecked, setIsChecked] = useState(false);
const [orderPost,setOrderPost] = useState('')

const [replyAi,setReplyAi] = useState('')
const [ whatDoUWant,setWhatDoUWant] = useState('')



  function handleSubmit(e) {
e.preventDefault()
setHide(false)
  }

  const [data, setData] = useState([]);
  const [statusMap, setStatusMap] = useState({});
 



  const [viewer,setViewer] = useState('all')

const getRound = async () => {
  setPage(localStorage.getItem('partner'));
  try {
    const unsubscribe = fs.collection(page)
      .onSnapshot(async (querySnapshot) => {
        const roundArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        roundArray.sort((a, b) => a.order - b.order);
     

        const halfLength = Math.ceil(roundArray.length / 2);
        const firstSlice = roundArray.slice(0, halfLength);
        const secondSlice = roundArray.slice(halfLength);
      
        if (viewer === '10' ) {
          setRound(firstSlice);
        } else if (viewer === '20') {
          setRound(secondSlice);
        } else if (viewer === 'all') {
          setRound(roundArray);
        }
      }
      );

    return unsubscribe;
  } 
  catch (error) {
    console.error(error);
  }
};
  

  
  useEffect(() => {
    const unsubscribe = getRound();
  }, [page,showRound,viewer]);


  const [pri,setPri] = useState('')

  function handleText(i ) {
 
if(show !== ''){
  round.map((x,index) => {
    if (i === index){
      setShow('')
      setTypeAnswer('')
      setDeletion('')
      setStatusBar('')
      setPri('')
      
    } 
  })
}else {
  round.map((x,index) => {
    if (i === index){
      setShow(i)
      setTypeAnswer(x.count)
      setDeletion(x.count)
      setStatusBar(i)
      setSubject(x.objective)
      setPost(x.count)
      setUniqueId(x.unid)
      setDate(x.date)
      setObjectiveAnswer(x.answer)
    setType(x.type)
    setBoosting(x.boosting)
    setPri(x.priority)
    setOrderPost(x.order)
    } 
  })
}
  }





  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.toISOString().slice(0, 7); // Format: YYYY-MM
    setMonth(currentMonth);


  
  },[] );



let notification = [];
  
   notification = (round.filter((x) => x.countNoti && x.statusText !== 'Approved' ));

   let qty 
  qty = (notification.length);






   const sendToZapier = async (payload) => {
    const zapierURL = import.meta.env.VITE_ZAP_DELETE;
    try {
      const response = await fetch(zapierURL, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(payload),
      });
      const resp = await response.json();
     
    } catch (e) {
      console.log(e);
    }
  };

 
 
  const [deleteDPage,setDeleteDPage] = useState('')

  function handleDelete(i) {
    round.map((x,index) => {
      if (index === i){
        const docRef = collection(db,localStorage.getItem('partner'))
        const colRef=doc(docRef,x.id );
        deleteDoc(colRef);

        const dcRef = collection(db,'DesignerPage')
        const clRef=doc(dcRef,x.id+x.client );
        deleteDoc(clRef);


const leadData = {
    answer:x.answer,
    uniqueId:x.unid,
    date:x.date,
    id:x.id,
    objective:x.objective,
    client:page
   };

   try {
     sendToZapier(leadData);
     // Additional code to execute after sending data to Zapier, if needed
   } catch (error) {
     console.log(error);
   }



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
      setIsLoading(true);    navigate('/')
    } 
  }, [level]);



const [filter,setFilter] = useState('');
const [ statusBar,setStatusBar] = useState('');
  useEffect(() => {
    setFilter(round.filter((x) => x.statusText === 'Approved' && x.month === month)); 
  },[round,month])


  const [openModal, setOpenModal] = React.useState(false);
const handleOpenModal = () => setOpenModal(true);
const handleClose = () => setOpenModal(false);
  
const [openModalBar, setOpenModalBar] = React.useState(false);
const handleOpenModalBar = () => setOpenModalBar(true);
const handleCloseBar = () => setOpenModalBar(false);



const handleEditorChange = (value) => {
 setObjectiveAnswer(value);
};


const [isVisible, setIsVisible] = useState(true);
const [zIndex, setZIndex] = useState(0);

useEffect(() => {
  // Set the highest z-index value when the component is mounted
  setZIndex(9999);

  // After 500ms, set the visibility to false (display none)
  const timeout = setTimeout(() => {
    setIsVisible(false);
  }, 900);

  // Clean up the timeout when the component is unmounted
  return () => clearTimeout(timeout);
}, []);

function handleEditted(i) {

  if(title === 'count'){

    const docRef = collection(db,page)
    const colRef=doc(docRef,editDetails+month );

    setDoc(colRef,{
      client:page,
      color:'orange',
      count:editDetails,
      date:date,
      month:month,
      objective:objective,
      priority:'No',
      status:'pending',
      type:type,
      unid:uniqueId,
      boosting:boosting,
    },{merge:true});


    const docR = collection(db,page)
    const colR = doc(docR,post+month)
    deleteDoc(colR);

  } else {
  const docRef = collection(db,page)
  const colRef=doc(docRef,post+month );
  updateDoc(colRef,{[title]: editDetails },{merge:true});
  }

handleCloseBar()

}


const handleDragEnd = (result) => {
  if (!result.destination) return;
  const items = Array.from(round);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem);
  setRound(items);
  items.forEach((item, index) => {
    fs.collection(page).doc(item.id).update({ order: index }, { merge: true });
  });
};



  return (<>


<div className='client-page min-h-[100vh] bg-slate-600 overflow-auto' style={{color:'white'}}>
  <User user={user} setUser={setUser} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel}/>
  <Version/>
 <Title/>
<div className='border-b-2 border-yellow-500 pt-10 bg-slate-800'> <Nav/> </div>  

<div
      className={`absolute inset-0 ${isVisible ? 'block' : 'hidden'}`}
      style={{ zIndex, backgroundColor: 'white' }}
    >
    <Loading/>
    </div>


{level > 7 && uuid !== null && <>



{level === 8 && <>
<div className='admin-links-only-designer text-center mt-10'> <Links/>
<img src={img}  className='client-pic flex items-center m-auto w-40' style={{backgroundColor:'white',marginBottom:'40px',marginTop:'20px'}}/>  </div>


</>
}

{level > 8 && <>
  <div className='flex flex-row justify-around items-center bg-slate-300 '> 
  <div className='bg-slate-700'><Links/>  </div>
  {/* <Demo round={round} page={page}/> */}
  <img src={img}  className='w-20' style={{backgroundColor:'white',marginBottom:'20px',marginTop:'20px'}}/>
  <div style={{zIndex:1}} >
  <TxtAll className='txt' filter={filter}  createPdf={createPdf} subject={subject} round={round} post={post} page={page} uniqueId={uniqueId} boosting={boosting} month={month} date={date} type={type} imageUrl={imageUrl}   isChecked={isChecked} />    
</div>
   </div>

   <div className='fixed bottom-0 items-end flex z-50 '>

<Memo page={page} round={round}/>

</div>

</>}



<div className="content-div bg-slate-600 pb-10 "  >
  <Inputs user={user} boosting={boosting} setBootsing={setBoosting} setUniqueId={setUniqueId} uniqueId={uniqueId} level={level} setObjectiveAnswer={setObjectiveAnswer}setTypeAnswer={setTypeAnswer} type={type} setPost={setPost} month={month} setMonth={setMonth}
  setObjective={setObjective} setType={setType} setDate={setDate} qty={qty} objective={objective} post={post} page={page} date={date} />
 
<section className='mb-5'>
  <button onClick={() => setViewer('all')} className='bg-sky-500 text-white px-3 py-2 rounded-md ml-3'> View All</button>
  <button onClick={() => {setViewer('10')}} className='bg-sky-500 text-white px-3 py-2 rounded-md ml-3' >First Half </button>
  <button onClick={() => {setViewer('20')}} className='bg-sky-500 text-white px-3 py-2 rounded-md ml-3' > Second Half </button>

</section>

<Suspense fallback={<div>Loading...</div>}>
<DragDropContext  onDragEnd={handleDragEnd}>
      <table className='m-auto w-full text-center'>
        <thead>
          <tr className='bg-slate-800'>
          <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Unique Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Post
                </th>
                <th scope="col" className="px-6 py-3">
                   Subject
                </th>
                <th scope="col" className="px-6 py-3">
                    Channel
                </th>
                <th scope="col" className="px-6 py-3">
                    Day
                </th>
     
                <th scope="col" className="px-6 py-3">
                   Prio
                </th>
                <th scope="col" className="px-6 py-3">
                    View
                </th>
          </tr>
        </thead>
        <Droppable droppableId="table">
          {(provided) => (
            <tbody {...provided.droppableProps} ref={provided.innerRef}>
              {round.map((x, i) => (
            x.month === month && <>
              <Draggable  key={x.count.toString()} draggableId={x.count.toString()} index={i}>
              {(provided) => (
                <tr
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-800"
                >
                  <td
                    className="text-black text-center rounded-sm font-medium"
                    style={{ backgroundColor: x.color }}
                  >
                    {x.status}
                  </td>
                  <td
                    className="px-6 cursor-pointer whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-400"
                    onClick={() => {
                      setForPost(x.unid),
                        handleOpenModalBar(),
                        setPost(x.count),
                        setTitle('unid');
                    }}
                  >
                    {x.unid}
                  </td>
                  <td
                    className="px-6 cursor-pointer whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
                    // onClick={() => {
                    //   setUniqueId(x.unid),
                    //     setForPost(x.count),
                    //     handleOpenModalBar(),
                    //     setPost(x.count),
                    //     setTitle('count'),
                    //     setDate(x.date),
                    //     setObjective(x.objective),
                    //     setType(x.type);
                    // }}
                  >
{x.order +1}
                  </td>
                  <td
                    className="px-6 cursor-pointer whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
                    onClick={() => {
                      setForPost(x.objective),
                        handleOpenModalBar(),
                        setPost(x.count),
                        setTitle('objective');
                    }}
                  >
                    {x.objective.length > 50
                      ? x.objective.slice(0, 50) + '...'
                      : x.objective}
                  </td>
                  <td
                    className="px-6 cursor-pointer whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
                    onClick={() => {
                      setForPost(x.type),
                        handleOpenModalBar(),
                        setPost(x.count),
                        setTitle('type');
                    }}
                  >
                    {x.type}
                  </td>
                  <td
                    className="px-6 cursor-pointer whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
                    onClick={() => {
                      setForPost(x.date),
                        handleOpenModalBar(),
                        setPost(x.count),
                        setTitle('date');
                    }}
                  >
                    {month}-{x.date}
                  </td>
                  <td  className={` px-6   ${ x.priority === 'Prio' ? 'bg-red-600 text-white ' : 'text-gray-500 dark:text-gray-400'}`} > 
           <button onClick={() => {
const docRef = collection(db,page)
const colRef=doc(docRef,x.count+x.month );
updateDoc(colRef,{priority: x.priority === 'Prio'? 'No': 'Prio' },{merge:true});
}} 
>{x.priority}</button> 
        </td>
        <td className="px-6  whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
            <button className='x-button lg:mr-3 mt-2 mb-4  transition-transform transform-gpu hover:scale-[0.90]  hover:border-2 hover:rounded-xl ' onClick={() => handleText(i)} >  <img src={statusBar === i ? cross : view} alt={view} style={{width:'40px'}} className='icon-do'/> </button>
        </td>

                  <Modal  open={show === i} 
onClose={() => handleText(i)}  
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"className='overflow-auto'>
<Box sx={styleNew} className='lg:!top-[50%] 0' >
  <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center'}}  className='flex flex-col gap-5' >
  {show === i && level > 7 && <>
<div className='lg:w-[800px] m-auto border-2 border-black bg-slate-700'>
<div className='holds-written-content '>
{x.designer > "" &&
<><span className='flex items-center justify-around '>
<img src={x.designer} className='m-auto mt-[50px]' style={{maxWidth:'200px',maxHeight:'200px',cursor:'zoom-in'}}  onClick={() => handleOpenModal()}/>

<button className='absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%]' onClick={() => {
//make a upadate doc here that updates the designer to null
const docRef = collection(db,page)
const colRef=doc(docRef,x.id );
updateDoc(colRef,{designer: '' },{merge:true});
}}  > X </button>
</span></>}



{type === 'Stories' && <>
<span className='flex items-center justify-around'> 
<img src={x.designer1}  style={{maxWidth:'20vw',maxHeight:'20vh',margin:'auto'}}/>
{x.designer1 > '' && (<button className='absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%]' onClick={() => {
//make a upadate doc here that updates the designer1 to null
const docRef = collection(db,page)
const colRef=doc(docRef,x.id );
updateDoc(colRef,{designer1: '' },{merge:true});
}}  > X </button>)}
</span>


<span className='flex items-center justify-around'>
<img src={x.designer2}  style={{maxWidth:'20vw',maxHeight:'20vh',margin:'auto'}}/>
{x.designer2 > '' && (<button className='absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%]' onClick={() => {
//make a upadate doc here that updates the designer2 to null
const docRef = collection(db,page)
const colRef=doc(docRef,x.id );
updateDoc(colRef,{designer2: '' },{merge:true});
}}  > X </button>)}


</span>



<span className='flex'>
<img src={x.designer3}  style={{maxWidth:'20vw',maxHeight:'20vh',margin:'auto'}}/>
{x.designer3 > '' && (<button className='absolute z-[1] bg-slate-600 text-white rounded-full p-2 border border-black ml-[30%]' onClick={() => {
//make a upadate doc here that updates the designer3 to null
const docRef = collection(db,page)
const colRef=doc(docRef,x.id );
updateDoc(colRef,{designer3: '' },{merge:true});
}}  > X </button>)}

</span>


</> }

{/* this views content img */}
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
</Box>
</Modal>


{!x.answer ? null :    <div  className='text-center break-all m-auto mt-[50px] p-8 bg-white
lg:w-3/4' key={i} onClick={() => setObjectiveAnswer(x.answer) } style={{color:'black'}} dangerouslySetInnerHTML={{ __html: x.answer }} />} 
<div className='flex flex-col items-center justify-evenly  border-b-2 border-black ' >

<section className='text-center mt-20'>
<h1 className='lg:mt-3 lg:mb-3 lg:text-3xl text-white'> Choose an option </h1>
{level > 8 ?   <button onClick={() => setWhatDoUWant('AI')} className='lg:mr-5 cursor-pointer lg:mt-2 text-white  bg-sky-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>  AI Content </button> : null}
<button onClick={() => setWhatDoUWant('YOU')} className='cursor-pointer  lg:mt-2 text-white  bg-sky-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' > Write Content </button>
</section>

{whatDoUWant > '' && <>

<div className='above-div-send flex flex-col items-center
lg:flex lg:items-center lg:justify-around lg:bg-slate-500 p-4 rounded-sm mt-10 mb-5 lg:flex-row lg:gap-10' >

{whatDoUWant === 'AI'  && <>
<Sure setReplyAi={setReplyAi} setObjectiveAnswer={setObjectiveAnswer} objectiveAnswer={objectiveAnswer} subject={subject} page={page}  user={user} typeAnswer={typeAnswer} month={month}/>
</>}

{whatDoUWant === 'YOU' && <>

<SendFromForm user={user} post={post} type={type} objectiveAnswer={objectiveAnswer} subject={subject} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level} setObjectiveAnswer={setObjectiveAnswer}/>

{level > 9 ?<button onClick={() => {handleDelete(i),setShow(''),setStatusBar('')}}  className=" lg:mt-2 text-white  bg-red-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete </button> :null}


</>}

</div>

</>}


{whatDoUWant > '' && level > 8 && <>

<form className='' onSubmit={handleSubmit}>
<ReactQuill
value={objectiveAnswer}
onChange={handleEditorChange}
style={{color:'black',backgroundColor:'white'}}
placeholder='Text here...'
className='max-w-[90vw] lg:max-w-[500px]  overflow-scroll'
/>
</form>

</>}


{level > 8 ? 
<div className='flex items-baseline'>
<input type='checkbox' readOnly checked={isChecked} onClick ={() =>  { setIsChecked((prevChecked) => !prevChecked), setImageUrl(x.designer),setImage1Url(x.designer1),setImage2Url(x.designer2),setImage3Url(x.designer3), setBoosting(x.boosting), setCreatePdf(x.answer)}} className='mr-2 cursor-pointer' />
<Solo createPdf={createPdf} orderPost={orderPost}  image1Url={image1Url} image2Url={image2Url} image3Url={image3Url} setIsChecked={setIsChecked} subject={subject} round={round} post={post} page={page} uniqueId={uniqueId} boosting={boosting} month={month} date={date} type={type} imageUrl={imageUrl}   isChecked={isChecked} />
</div> : null}

{level > 8 ? <h1 className='text-2xl mb-5 text-white' > Boosting : {x.boosting}</h1> : null}
</div>
</div>
<div className='text-black'>
<WaitingDesigner pri={pri} date={date} objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} img={img} month={month} color={color} page={page} post={post} boosting={boosting} uniqueId={uniqueId} user={user} type={type} subject={subject} />
<WaitingApproval objectiveAnswer={objectiveAnswer}  objective={objective} typeAnswer={typeAnswer} month={month} color={color} page={page}qty={qty}  setShow={setShow} />
{level > 8 ?  <WaitingApproved objectiveAnswer={objectiveAnswer} type={type} boosting={boosting} date={date} post={post} objective={objective} uniqueId={uniqueId} subject={subject} user={user} typeAnswer={typeAnswer} month={month} color={color} page={page} qty={qty} />
: null} 
</div>
</div>
</>} 
    
  </Typography>
</Box>
</Modal>
                </tr>





              
              
              )}
            </Draggable>  </> 
             ))}

              {provided.placeholder}
            </tbody>
          )}

        </Droppable>
      </table>




    </DragDropContext>
    </Suspense>
   





<Modal
        open={openModalBar}
        onClose={handleCloseBar}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='max-w-[80vw] max-h-[80vw]  '
      >
        <Box sx={styleBar} className='lg:!top-[50%] 0' >
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center'}}  className='flex flex-col gap-5' >
          <p className='cursor-pointer'> Edit {title} : {forPost} </p>
         <input type="text" className='border-2 border-black  ' placeholder={`Editing ${forPost}`} onChange={(e) => setEditDetails(e.target.value)} />
         <button  className='bg-blue-700 text-white px-3 py-2 rounded-md ml-3'  onClick={() => {handleEditted()}}> Submit </button>
 </Typography>
        </Box>
      </Modal>


    
      </div>
</>}
    </div>
  
    </>
  )

}