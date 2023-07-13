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


export default function Designer({round,level,setObjectiveAnswer,setTypeAnswer,typeAnswer,objectiveAnswer,month,color,page,setShow,setStatusBar,show,statusBar}) {

 

   

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


return (<>


{round.map((x,i) => {  return <>
        { level === 8 && x.statusText !== 'pending' && x.statusText !== 'Aprroved'? 
         <div className='mapped-div' key={i} style={x.month === month ? {display:'flex'} :{display:'none'}}> 
         
         <div>
<button className='x-button' onClick={() => handleText(i)} >  <img src={view} alt={view} style={{width:'30px'}} className='icon-do'/> </button>
  <button className='x-button ' onClick={() => {setShow(''),setObjectiveAnswer(''),setStatusBar('')}} >  <img src={cross} alt={cross} style={{width:'30px'}} className='icon-do'/> </button>
</div>

         <p  className='same-map-text extra-styles'> {x.count}  </p>
       
       
        
         <div className='hidden-form-div'>
        <p className='same-map-text  extra extra-styles'  > {x.objective}  </p>
       
        
       
        
          
        
        
          
        {show === i && <>
        <div className='holds-content'>
         <div className='main-text-side-designer' >
            <img src={x.designer} style={{maxWidth:'500px',maxHeight:'500px'}} />
           {!x.answer  ? null : <h2 className='answer-text' key={i} onClick={() => setObjectiveAnswer(x.answer) } style={{color:'black'}}> {x.answer} </h2>}
           <SendFromForm objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level} setTypeAnswer={setTypeAnswer}/>
         </div>
       
       
       
       
         <div className='example-flex'>
       
         <div className='border-edit bed'>
         
         <img src={x.exampleOne} style={{maxWidth:'200px',maxHeight:'200px'}} />
         <Upload1 objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>
       
        {x.textEx > '' ?  <h2 className='same' style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx} </h2> : null}
         </div>
       
         {x.textEx > "" ? <div className='border-edit'>
       
         <img src={x.exampleOne} style={{maxWidth:'200px',maxHeight:'200px'}} />
         <Upload2 objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>
       
         <h2 style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx1} </h2>
         </div>:null}
       
       
       {x.textEx1 > ""?   <div className='border-edit'>
          
         <img src={x.exampleTwo} style={{maxWidth:'200px',maxHeight:'200px'}} />
         <Upload3  objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>
       
         <h2 className='same' style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx2} </h2>
         </div> :null}
    
       </div>
       
        </div>
       
       
       
        <hr/>
       
       
        
       
{/*        
         <form className='' onSubmit={handleSubmit}>
       
       <div>
       <div className='confirm-text'>
        <button className='x-button' onClick={() => {setShow(''),setObjectiveAnswer(''),setStatusBar('')}} >  <img src={cross} alt={cross} style={{width:'30px'}}/> </button>
       
       
       </div>
       </div>
       
       
       
       </form> */}
        </>} 
       
         
         </div>
        
         <p className='same-map-text extra-styles' > {x.type} </p>
         <p className='same-map-text extra-styles'> {month}-{x.date} </p>
         {/* <p className=' status-awaiting' style={{backgroundColor:x.color,cursor:'pointer',color:'black'}} onClick={() => handleApprove(i)}> {x.status} </p> */}
         <p className='same-map-text extra-styles' style={{backgroundColor:x.color}}> {x.status} </p>
       
       {statusBar === i? <div style={{color:'black'}} className='status-div'> 
       {level === 8 ?  <WaitingApproval objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} /> : null}
       {level === 8 && <>
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
</>)
    

  
}
