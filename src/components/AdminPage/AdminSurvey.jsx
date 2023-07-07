import React from 'react'
import {useState,useEffect} from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/Firebase.jsx'
import User from '../User';
import AdminLogic from './AdminLogic';


export default function AdminSurvey() {

    const [userPermit, setUserPermit] = useState([]);
    const [user,setUser] = useState('')
    const [uuid,setUuid] = useState('')
    const [ isAccepted,setIsAccepted] = useState('')
    const [ level,setLevel] = useState('waiting')
    const [count,setCount] = useState(0)








    const [ values, setValues] = useState('')
    const [ toUser , setToUser] = useState('')
    const [ question0, setQuestion0] = useState('')
    const [ question1, setQuestion1] = useState('')
    const [ question2, setQuestion2] = useState('')
    const [ question3, setQuestion3] = useState('')
    const [ question4, setQuestion4] = useState('')
  
   

    function handleSendToDB(){

        const docRef = collection(db, 'survey'+toUser)
        const colRef = doc(docRef, values);

        setDoc(colRef,  {
            to: toUser,
            label: values,
            question0:question0,
            question1:question1,
            question2:question2,
            question3:question3,
            question4:question4,
            // question1:question1,
          },{merge:true})
      

    }



 

  


    
  

  return (
    <>
     <AdminLogic setUserPermit={setUserPermit}/>
<User setUser={setUser} user={user} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel} />
    
    <div className='main-surv-div'>
    <div className='survey-creator'>

< div >
  <h5>Survey Creator</h5>
  <p> STEP 1 : Enter the employee name below  </p>
  <input type='text'  placeholder='Enter user' onChange={(e) => setToUser(e.target.value)}/>
 
</div>
<hr className='step-1'/>
<div>
<h5> Enter the Topic of the Survey </h5>
<p> STEP 2 : Enter the topic </p>
<input type='text' placeholder='Enter type' onChange={(e) => setValues(e.target.value)}/>
</div>
<hr className='step-1'/>
<div>
  <h5> Each topic can have a maximum of 5 questions! </h5>
  <p> STEP 3 : Enter the questions below </p>
  <input type='text' placeholder='Enter question 1' onChange={(e) => setQuestion0(e.target.value)}/>
      <input type='text' placeholder='Enter question 2' onChange={(e) => setQuestion1(e.target.value)}/>
      <input type='text' placeholder='Enter question 3' onChange={(e) => setQuestion2(e.target.value)}/>
      <input type='text' placeholder='Enter question 4' onChange={(e) => setQuestion3(e.target.value)}/>
      <input type='text' placeholder='Enter question 5' onChange={(e) => setQuestion4(e.target.value)}/>
</div>
<hr className='step-1'/>
     <div>
      <h4> Submit Survey</h4>
     <button onClick={() => {handleSendToDB()}}>Save Survey</button> 
     </div>
 
   
    </div>


<div className='survey-creator preview'>

  <h3> PREVIEW</h3>

  <div>
  <h5> Survey About   </h5>
<p> {toUser} </p>
  </div>

<div>
  <h5> Topic About</h5>
  <p> {values} </p>
</div>

<div>
<h5> Questions Preview</h5>
<p>  Question 1 : {question0}  </p>
<p> Question 2 : {question1}  </p>
<p> Question 3 : {question2}  </p>
<p>  Question 4 : {question3}  </p>
<p>  Question 5 : {question4}  </p>

</div>

</div>


    </div>




    </>
  )
}
