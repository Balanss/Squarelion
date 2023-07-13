import React from 'react'
import {useState,useEffect} from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/Firebase.jsx'
import User from '../User';
import AdminLogic from './AdminLogic';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import mad from '../Images/mad.png'
import angry from '../Images/angry.png'
import poker from '../Images/poker-face.png'
import smile from '../Images/smile.png'
import star from '../Images/star.png'



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
            open:false,
          },{merge:true})
      


    }


    const [surveys, setSurveys] = useState([]);
    const [ val,setVal] = useState('waiting')
    const [ date,setDate] = useState('')

    useEffect(() => {
      const fetchSurveys = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'survey'+val));
          const surveyData = [];
          querySnapshot.forEach((doc) => {
            const dataWithId = { id: doc.id, ...doc.data() };
            surveyData.push(dataWithId);
          });
          setSurveys(surveyData);
        } catch (error) {
          console.error('Error retrieving surveys:', error);
        }
      };
    
      fetchSurveys();
    }, [val]);


    const[rating,setRating] = useState('');
    const[rating1,setRating1] = useState('');
    const[rating2,setRating2] = useState('');
    const[rating3,setRating3] = useState('');
    const[rating4,setRating4] = useState('');



    const [show, setShow] = useState('bus');
    const handleNext = () => {
      const currentSurveyIndex = surveys.findIndex((survey) => survey.id === show);
      const nextSurveyIndex = (currentSurveyIndex + 1) % surveys.length;
      setShow(surveys[nextSurveyIndex].id);
    };

    function handleSendToDB(index){
      surveys.map((x,i) =>{
        const score = (rating - - rating1 - - rating2 - - rating3 - - rating4)
        if(i === index){
          const  docRef = collection(db, 'survey'+user)
          const colRef = doc(docRef,x.id);
         
          setDoc(colRef,  {
         ratingAdmin: rating,
         rating1Admin: rating1,
         rating2Admin: rating2,
         rating3Admin: rating3,
         rating4Admin: rating4,
         scoreAdmin:  score,
      
            },{merge:true})
        }
      })
      }


      const scores = surveys
      .map(survey => survey.scoreAdmin)
      .filter(score => typeof score === 'number');
    
    const sum = scores.reduce((accumulator, score) => accumulator + score, 0);
    


    const userScores = surveys.map(survey => survey.score)
.filter(score => typeof score === 'number');    

const userSum = userScores.reduce((accumulator, score) => accumulator + score, 0);


const [showRealsurv, setShowRealsurv] = useState(false);
const [showTablediv, setShowTablediv] = useState(false);



const handleRealsurvClick = () => {
  setShowRealsurv(true);
  setShowTablediv(false);
};

const handleTabledivClick = () => {
  setShowRealsurv(false);
  setShowTablediv(true);
};




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
     <button style={{marginRight:'15px'}} onClick={() => {handleSendToDB()}}>Save Survey</button> 
     <button onClick={() => {
  const docRef = collection(db, 'survey'+toUser)
  const colRef = doc(docRef,'open');


  setDoc(colRef,  {
    open:true,
  },{merge:true})


     }}> Make Survey Live</button>
     </div>
 
   
    </div>


  



      {showRealsurv && (
        <div className='survey-creator realsurv'>
        <h3> LIVE SURVEY </h3>
        <input type='text' placeholder='ENTER MATCHED NAME OF EMPLOYEE' onChange={(e) => setVal(e.target.value)}/>
        {surveys.map((survey, index) => (
          <div key={index}>
            {show === survey.id && survey.id !== 'open' && (
              <h2 style={{ color: 'black', maginBottom: '60px' }} onClick={() => setShow(survey.id)}>Topic: {survey.id}  {`${index + 1} / ${surveys.length}`} </h2>
            )}
            {show === survey.id && survey.id !== 'open' && (
              <>
                <div className={survey.question0 > '' ? 'questions-tap' : ''}>
                  {survey.question0 > '' && <>
                    <p style={{ color: 'black' }}>Question 1: {survey.question0}</p>
                    <div className='emoji-rating'>
                     <input type='number' placeholder='ENTER 1 - 5' onChange={(e) => setRating(e.target.value)} />
                    </div>
                  </>}
                </div>
                <div className={survey.question1 > '' ? 'questions-tap' : ''}>
                  {survey.question1 > '' && <>
                    <p style={{ color: 'black' }}>Question 2: {survey.question1}</p>
                    <div className='emoji-rating'>
                    <input type='number' placeholder='ENTER 1 - 5' onChange={(e) => setRating1(e.target.value)} />
                    </div>
                  </>}
                </div>
                <div className={survey.question2 > '' ? 'questions-tap' : ''}>
                  {survey.question2 > '' && <>
                    <p style={{ color: 'black' }}>Question 3: {survey.question2}</p>
                    <div className='emoji-rating'>
                    <input type='number' placeholder='ENTER 1 - 5' onChange={(e) => setRating2(e.target.value)} />
                    </div>
                  </>}
                </div>
                <div className={survey.question3 > '' ? 'questions-tap' : ''}>
                  {survey.question3 > '' && <>
                    <p style={{ color: 'black' }}>Question 4: {survey.question3}</p>
                    <div className='emoji-rating'>
                    <input type='number' placeholder='ENTER 1 - 5' onChange={(e) => setRating3(e.target.value)} />
                    </div>
                  </>}
                </div>
                <div className={survey.question4 > '' ? 'questions-tap' : ''}>
                  {survey.question4 > '' && <>
                    <p style={{ color: 'black' }}>Question 5: {survey.question4}</p>
                    <div className='emoji-rating'>
                    <input type='number' placeholder='ENTER 1 - 5' onChange={(e) => setRating4(e.target.value)} />
                    </div>
                  </>}
                </div>
              </>
            )}
        
            {show === survey.id && (
              <>
                {survey.id === 'open' ? <p style={{ color: 'black' }}>Thank you for finishing Squarelion Survey, {user}!</p> : null}
                {survey.id !== 'open' && (
                  <button
                    className="next-btn"
                    onClick={() => {
                      handleNext();
                      handleSendToDB(index);
                    }}
                  >
                    Next
                  </button>
                )}
              </>
            )}
          </div>
        ))}
        
        

        
        
        </div>
      )}


{showTablediv && (

<div className='tablediv'>

<TableContainer component={Paper}>
<input type='text' placeholder='Enter Username' onChange={(e) => setVal(e.target.value)}/>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{val} </TableCell>
            <TableCell align="right">QUESTION</TableCell>
            <TableCell align="right">QUESTION</TableCell>
            <TableCell align="right">QUESTION2</TableCell>
            <TableCell align="right">QUESTION3</TableCell>
            <TableCell align="right">QUESTION4</TableCell>
            <TableCell align="right">MY RATING</TableCell>
            <TableCell align="right">USER Rating</TableCell>
            <TableCell align="right">Total SCORE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {surveys.map((x, id) => {
  if (x.id !== 'open') {
    return (
      <TableRow
        key={x.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {x.id}
        </TableCell>
        <TableCell align="right">{x.question0}</TableCell>
        <TableCell align="right"> {x.question1} </TableCell>
        <TableCell align="right">{x.question2}</TableCell>
        <TableCell align="right">{x.question3}</TableCell>
        <TableCell align="right">{x.question4}</TableCell>
        <TableCell align="right">{x.scoreAdmin}</TableCell>
        <TableCell align="right">{x.rating}</TableCell>
        <TableCell align="right">{x.score - - x.scoreAdmin}</TableCell>
      </TableRow>
    );
  } else {
    return null; // Skip rendering for x.id === 'open'
  }
})}

        </TableBody>
      </Table>
    </TableContainer>

</div>
      )}







    </div>

<div style={{marginBottom:'20px'}}>
  
<button onClick={handleRealsurvClick} style={{marginRight:'15px'}}>{val === 'waiting'?'ENTER MATCHED EMPLOYEE NAME ': `TAKE SURVEY OF ${val}`}</button>
      <button onClick={handleTabledivClick}>SHOW SCORE IN TABLE FORMAT</button>
</div>


    </>
  )

  
}






 