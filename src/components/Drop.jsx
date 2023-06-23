import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { auth, fs,db } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import User from './User'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import Button from './firebaseData/Button'
import SendFromForm from './firebaseData/SendFromForm'


export default function Drop() {

  const [hide,setHide] = useState(false)
  const [color,setColor] = useState('red')
  const [ placeHolder,setPlaceHolder] = useState('')
  const [user,setUser] = useState()
  const [ uuid,setUuid] = useState('')
  const [isAccepted,setIsAccepted] = useState()
  const [ show,setShow] = useState('')

  //------------------------------------------ under lifts state to button for firebase
 const [ objective,setObjective] = useState()
 const [type,setType] = useState()
 const [ date,setDate] = useState()
 const [ post,setPost] = useState()
 const [ objectiveAnswer,setObjectiveAnswer] = useState()
 const [ typeAnswer,setTypeAnswer] = useState()
// 



  function handleSubmit(e) {
e.preventDefault()
setHide(false)
  }


  const [round, setRound] = useState([]);

  const getRound = async () => {
    try {
      const unsubscribe = fs.collection('round')
        .onSnapshot((querySnapshot) => {
          const roundArray = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
  
          roundArray.sort((a, b) => a.id - b.id); // Sort the array based on the numeric ID
  
          setRound(roundArray);
        });
  
      return unsubscribe;
    } catch (error) {
      console.error('Error fetching round data:', error);
    }
  };
  
  useEffect(() => {
    const unsubscribe = getRound();
  
    // Cleanup the subscription
   
  }, [round]);
  

 

  function handleText(i ) {
    round.map((x,index) => {
      if (i === index){
        setShow(i)
        setTypeAnswer(x.count)
      } 
    })
  }
 


  return (

  
    <div className='table-page'>
      
      <User user={user} setUser={setUser} setUuid={setUuid} setIsAccepted={setIsAccepted}/>
<Nav/>

{isAccepted === 'yes' && uuid !== null && <>

<div >
  <tr>
  <th> <Button  objective={objective} type={type} date={date} post={post}  /></th>
  <th><input type="number" placeholder='post' onChange={(e) => setPost(e.target.value)} />  </th>
    <th><input type="text" placeholder='objective' onChange={(e) => setObjective(e.target.value)} />  </th>
    <th><input type=" text" placeholder='type of post' onChange={(e) => setType(e.target.value)} /></th>
    <th><input type="text" placeholder='date'  onChange={(e) => setDate(e.target.value)} /></th>
  </tr>
  
  
  
 {round.map((x,i) => { return <>
 <div className='mapped-div'> 
  
  <p  className='same-map-text'> {x.count} </p>
  <div>
 <p className='same-map-text  extra' onClick={() => handleText(i)} > {x.objective} </p>




 {show === i && <>
 
 <hr/>
  <p className='answer-text' key={i}> {x.answer} </p>
  <form className='' onSubmit={handleSubmit}>
<hr/>
<textarea type="text" placeholder='enter text here' onChange={(e) => setObjectiveAnswer(e.target.value)}   /> 

<SendFromForm objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} />
<button onClick={() => setShow('')} >  close </button>

</form>
 </>} 

  
  </div>
 
  <p className='same-map-text'> {x.type} </p>
  <p className='same-map-text'> {x.date} </p>
   </div>
 </>




 })}

    
      </div>
</>}


    </div>
  )
}


// <div key={i}>
{/* <td>{x.count}</td>
<td> <p onClick={() => setHide(hide === true ? false : true)}> {x.objective} </p>

<form style={hide=== true ? {display:'block'}: {display:'none'}} onSubmit={handleSubmit}>

<textarea type="text" placeholder='enter text here' onChange={(e) => setPlaceHolder(e.target.value)}   /> 

<button> click </button>

</form>
<p> {placeHolder} </p>

</td>
<td>{x.type}</td>
<td>{x.date}</td>
<td style={{backgroundColor:color}}><p onClick={() => setColor(color === 'red' ? 'green' : 'red')}> close/ mark as complete </p></td>

</div> */}