import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


export default function Designer({round,level,setObjectiveAnswer,setTypeAnswer,typeAnswer,objectiveAnswer,month,color,page,setShow,setStatusBar}) {

 
   

{round.map((x,i) => {  return <>
        { level === 8 && x.statusText !== 'pending'? 
         <div className='mapped-div' key={i} style={x.month === month ? {display:'flex'} :{display:'none'}}> 
         
         <p  className='same-map-text extra-styles'> {x.count}  </p>
       
       
        
         <div className='hidden-form-div'>
        <p className='same-map-text  extra extra-styles' onClick={() => handleText(i)} style={{cursor:'pointer'}} > {x.objective}   <img className='tab-img' src={tab}/> </p>
       
        
       
        
          
        
        
          
        {show === i && <>
        <div className='holds-content'>
         <div className='main-text-side' >
            <img src={x.designer} style={{maxWidth:'200px',maxHeight:'200px'}} />
           {!x.answer  ? null : <h2 className='answer-text' key={i} onClick={() => setObjectiveAnswer(x.answer) } style={{color:'black'}}> {x.answer} </h2>}
           <SendFromForm objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level} setTypeAnswer={setTypeAnswer}/>
         </div>
       
       
       
       
         <div className='example-flex'>
       
         <div className='border-edit'>
           <h2 style={{color:'black'}}className='example-style'> Example </h2>
         <img src={x.exampleOne} style={{maxWidth:'200px',maxHeight:'200px'}} />
         <Upload1 objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>
       
         <h2 className='same' style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx} </h2>
         </div>
       
         {x.textEx > "" ? <div className='border-edit'>
           <h2 style={{color:'black'}} className='example-style'> Example </h2>
         <img src={x.exampleOne} style={{maxWidth:'200px',maxHeight:'200px'}} />
         <Upload2 objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>
       
         <h2 style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx1} </h2>
         </div>:null}
       
       
       {x.textEx1 > ""?   <div className='border-edit'>
           <h2 style={{color:'black'}} className='example-style'> Example </h2>
         <img src={x.exampleTwo} style={{maxWidth:'200px',maxHeight:'200px'}} />
         <Upload3  objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} month={month} color={color} page={page} level={level}/>
       
         <h2 className='same' style={{color:'black',width:'200px',wordBreak:'break-all'}}> {x.textEx2} </h2>
         </div> :null}
    
       </div>
       
        </div>
       
       
       
        <hr/>
       
       
        
       
       
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
         <p className='same-map-text extra-styles'> {month}-{x.date} </p>
         <img src={x.status} className=' status-awaiting' style={{backgroundColor:x.color,cursor:'pointer',color:'black'}} onClick={() => handleApprove(i)}/> 
       
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


    

  
}
