import React,{useState,useEffect} from 'react'
import Nav from '../Nav'
import User from '../User'
import Footer from '../Home/Footer'
import './Survey.css'
import mad from '../Images/mad.png'
import angry from '../Images/angry.png'
import poker from '../Images/poker-face.png'
import smile from '../Images/smile.png'
import star from '../Images/star.png'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from '/src/Firebase.jsx'








export default function Survey() {

  const [user,setUser] = useState('')
const [ level,setLevel] = useState('')
const [uuid,setUuid] = useState('')
const [surveys, setSurveys] = useState([]);

useEffect(() => {
  const fetchSurveys = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'surveySuperADMIN'));
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
}, []);




const [show, setShow] = useState('bus');
const[rating,setRating] = useState('');
const[rating1,setRating1] = useState('');
const[rating2,setRating2] = useState('');
const[rating3,setRating3] = useState('');
const[rating4,setRating4] = useState('');




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
   rating: rating,
   rating1: rating1,
   rating2: rating2,
   rating3: rating3,
   rating4: rating4,
   score: score,

      },{merge:true})
  }
})
}






  return (
   <>
    <User setUser={setUser} user={user} level={level} setLevel={setLevel} setUuid={setUuid} uuid={uuid}/>
  
    <div className='survey-div'>

      
<div className='survey-paper'>

<h1 style={{color:'black'}}> Squarelion Agency Survey </h1>
      {surveys.map((survey, index) => (
        <div key={index}>
          {show === survey.id && (
            <h2 style={{color:'black',maginBottom:'60px'}} onClick={() => setShow(survey.id)}>Topic: {survey.id}</h2>
          )}
      {show === survey.id && <>
       

<div className={survey.question0 > '' ?'questions-tap':''}>
    {survey.question0 > '' && <> 
        <p style={{color:'black'}}>Question 1: {survey.question0}</p>
          <div className='emoji-rating'>
          <img src={mad} style={{width:'30px'}} onClick={() =>setRating(1)}/>
          <img src={angry} style={{width:'30px'}}  onClick={() =>setRating(2)}/>
          <img src={poker} style={{width:'30px'}}  onClick={() =>setRating(3)}/>
          <img src={smile} style={{width:'30px'}} onClick={() =>setRating(4)}/>
          <img src={star} style={{width:'30px'}} onClick={() =>setRating(5)}/>
          
          </div>
         </>}
</div>
      

<div className={survey.question1 > '' ?'questions-tap':''}>
    {survey.question1 > '' && <>   <p style={{color:'black'}}>Question 2: {survey.question1}</p>
          <div className='emoji-rating'>
          <img src={mad} style={{width:'30px'}} onClick={() =>setRating1(1)}/>
          <img src={angry} style={{width:'30px'}}  onClick={() =>setRating1(2)}/>
          <img src={poker} style={{width:'30px'}}  onClick={() =>setRating1(3)}/>
          <img src={smile} style={{width:'30px'}} onClick={() =>setRating1(4)}/>
          <img src={star} style={{width:'30px'}} onClick={() =>setRating1(5)}/>
          
          </div> </>}

</div>

     <div className={survey.question2 > '' ?'questions-tap':''}>
         {survey.question2 > '' && <>  <p style={{color:'black'}}>Question 3: {survey.question2}</p>
          <div className='emoji-rating'>
          <img src={mad} style={{width:'30px'}} onClick={() =>setRating2(1)}/>
          <img src={angry} style={{width:'30px'}}  onClick={() =>setRating2(2)}/>
          <img src={poker} style={{width:'30px'}}  onClick={() =>setRating2(3)}/>
          <img src={smile} style={{width:'30px'}} onClick={() =>setRating2(4)}/>
          <img src={star} style={{width:'30px'}} onClick={() =>setRating2(5)}/>
          
          </div> </>}

     </div>


<div className={survey.question3 > '' ?'questions-tap':''}>
{survey.question3 > '' && <>  <p style={{color:'black'}}>Question 4: {survey.question3}</p>
          <div className='emoji-rating'>
          <img src={mad} style={{width:'30px'}} onClick={() =>setRating3(1)}/>
          <img src={angry} style={{width:'30px'}}  onClick={() =>setRating3(2)}/>
          <img src={poker} style={{width:'30px'}}  onClick={() =>setRating3(3)}/>
          <img src={smile} style={{width:'30px'}} onClick={() =>setRating3(4)}/>
          <img src={star} style={{width:'30px'}} onClick={() =>setRating3(5)}/>
          
          </div> </>}
</div>

<div className={survey.question4 > '' ?'questions-tap':''}>
{survey.question4 > '' && <> 
               
               <p style={{color:'black'}}>Question 5: {survey.question4}</p>
                <div className='emoji-rating'>
                <img src={mad} style={{width:'30px'}} onClick={() =>setRating4(1)}/>
                <img src={angry} style={{width:'30px'}}  onClick={() =>setRating4(2)}/>
                <img src={poker} style={{width:'30px'}}  onClick={() =>setRating4(3)}/>
                <img src={smile} style={{width:'30px'}} onClick={() =>setRating4(4)}/>
                <img src={star} style={{width:'30px'}} onClick={() =>setRating4(5)}/>
                
                </div>
               </>}
</div>
 
       
         
        
         
   
      </>}
      {show === survey.id && (
            <button className='next-btn' onClick={() => {
              handleNext(), 
             handleSendToDB(index)
            
            }}>Next</button>
          )}
        </div>
      ))}


</div>








 
    </div>
  
   
   
   
   </>
  )
}


