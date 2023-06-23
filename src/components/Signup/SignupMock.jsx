import React,{useEffect,useState} from 'react'

export default function SignupMock({setCode,code}) {



  return (<>
  <div className='code-div' style={{padding:'100px'}}>
  <div className='test'> </div>
    <div className='signup-div-code' >
     
       <div className='signup-form'>
           <h2> Enter Code </h2>
        <input type="number" onChange={(e) => setCode(e.target.value)} />
        <button onClick={() => setCode(code)}> Enter</button>
       </div>
     
    </div>
  </div>
 
    </>)
}
