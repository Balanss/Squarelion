import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import SendFromForm from '../../firebaseData/SendFromForm'
import Upload1 from '../../firebaseData/Upload1'
import Upload2 from '../../firebaseData/Upload2'
import Upload3 from '../../firebaseData/Upload3'
import view from '../../images/open.png'
import cross from '../../images/cross.png'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Box from '@mui/material/Box';
import WaitingApproval from '../../firebaseData/WaitingApproval'


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


export default function Designer({round,level,setObjectiveAnswer,setTypeAnswer,typeAnswer,objectiveAnswer,month,color,page,setShow,setStatusBar,show,statusBar,user,qty}) {

 

   

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

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);


  function handleSubmit(e) {
    e.preventDefault()
    setHide(false)
      }


      const handleEditorChange = (value) => {
        setObjectiveAnswer(value);
       };

return (<>


{round.map((x,i) => {  return <>
 { level === 8 && x.status === 'Designer' ? 
  <div className='mapped-div bg-blue-900 flex-col items-center min-h-[300px]  justify-evenly border-2 border-black mb-10 
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
{level === 8 ?  <WaitingApproval objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} qty={qty}/> : null}


  
  </div> : null}

   </div>:null
   

}
 


 
   
{show === i && <>
 <div className='xl:w-[1000px] m-auto border-2 border-black bg-slate-700 lg:w-[900px] mt-[10px]'  >
  <div className='holds-written-content '>


 <img src={x.designer} className='m-auto mt-[50px]' style={{maxWidth:'200px',maxHeight:'200px',cursor:'zoom-in'}}  onClick={() => handleOpenModal()}/>
 {!x.answer ? null :    <div  className='text-center break-all m-auto mt-[50px] p-8 bg-white
     lg:w-3/4' key={i}  style={{color:'black'}} dangerouslySetInnerHTML={{ __html: x.answer }} />} 

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
      <div className='w-[200px] m-auto'>
      {level === 8 ?  <WaitingApproval objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} qty={qty}/> : null}
      </div>
      

    

  <div className='flex flex-col items-center justify-evenly h-[200px] border-b-2 border-black mb-10' >



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




 <hr/>


 



 </>} 


 </>
 })}
</>)
    

  
}
