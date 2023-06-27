import React,{useEffect,useState} from 'react'

export default function SignupMock({setCode,code}) {



  return (<>
  <div className='code-div'>
  <div className='test'> </div>
    <div className='signup-div-code' >
     
       <div className=''>
           <h2> Enter Code </h2>
        <input type="number" onChange={(e) => setCode(e.target.value)} />
        <br />
        <button onClick={() => setCode(code)} style={{marginTop:'15px'}}> Enter</button>
       </div>
     
    </div>
  </div>
 
    </>)
}
