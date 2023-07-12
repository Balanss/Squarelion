/* eslint-disable no-unused-vars */
import React from 'react'
import {useState,useEffect} from 'react'
import {collection,doc,setDoc,} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, fs,db } from '/src/Firebase.jsx'
import { useNavigate} from 'react-router-dom';
import User from '../User';
import Nav from '../Nav';
import Loading from '../Loading';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Footer from '../Home/Footer';
import Edit from './Edit';
import PartnerLogic from './PartnerLogic';
import usersPic from '../images/new-arrival.png';
import client from '../images/client.png';
import survey from '../images/survey.png';
import AdminSurvey from './AdminSurvey';
import rightArrow from '../images/arrow-right.png';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Admin() {

    const [ name,setName] = useState('')
    const [user,setUser] = useState('')
    const [uuid,setUuid] = useState('')
    const [ isAccepted,setIsAccepted] = useState('')
    const [ level,setLevel] = useState('waiting')
    const navigate = useNavigate()
    const [image, setImage] = useState();
    const [partner, setPartner] = useState([]);


function handleSub(e){
    e.preventDefault()

const docRef = collection(db,'partner')
const colRef = doc(docRef,name)

setDoc(colRef,{name:name},{merge:true})


const storageRef = ref(getStorage(), `products/${'partners'}/${image.name}`);

// Upload the file to the bucket
const uploadTask = uploadBytesResumable(storageRef, image);


// Listen for state changes, errors, and completion of the upload.
uploadTask.on(
  "state_changed",
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    
  },
  (error) => {
    console.error(error);
  },
  //here
  async () => {
    // Upload completed successfully, now get the download URL
    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

   // Save the download URL to Firestore


    const docRef =  collection(db,'partner');
    const colRef =  doc(docRef,name); 


    setDoc(colRef,  {imageUrl: downloadURL,
      name:name ,
      status:0,
    

    },{merge:true})

  },{merge:true}
);

}


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file )

  };

  function handleGo(index){

    partner.map((x,i) => { 
        if (i === index){

            localStorage.setItem('partner',x.name)
            localStorage.setItem('image',x.imageUrl)
            

            setTimeout(() =>{
                navigate(`/profile/${x.name}`)
            },2000)
           
        }
    })
  }







  useEffect(() => {
    const timeoutId = setTimeout(() => {
         if ( level < 8) {
 navigate('/')
    } if (level > 8){
      clearTimeout(timeoutId);
    }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [level, navigate]);
  

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);



const [switching,setSwitching] = useState('Client')
const [isHovered, setIsHovered] = useState(false);
const [hiding,setHiding] = useState(true);

const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};

  return (

    <> 
<PartnerLogic partner={partner} setPartner={setPartner}/>
<div className='signup-main' style={{color:'white'}}>
<User  setUser={setUser} user={user} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel}/>

{uuid !== ''  && level > 8 && isLoading === false  && <>
      
      
      <div >
<div style={{backgroundColor:'white'}}> <Nav/> </div>

{level > 9 && <>
  <div className='admin-page-btn-switch' style={hiding === false ? {display:'none'} : {display:'block'}}>
<img className='clientimg' src={client} onClick={( ) => setSwitching('Client')}/>  
  <img src={usersPic} className='clientimg' onClick={( ) => {setSwitching('Users'),
  setHiding(false),setTimeout(() => setHiding(true),1000)
}}/>
{level === 11 ?  <img src={survey} className='clientimg' onClick={( ) => setSwitching('Survey')}/> : null}
  
 
  </div>
</>}

<div className='exper'>
  <h1 className='admin-panel-text'> Admin Panel - {switching} Handler </h1>
</div>

{switching ==='Client' && <>


  < div className='style-admin-page'>


<div className='partner-links'>
  
{level > 9 && <>
  <form onSubmit={handleSub} className='form-admindb'> 

<input type="text" placeholder='ENTER CLIENT NAME' onChange={(e) => setName(e.target.value)} className='input-admindb' />
          <input type="file" onChange={handleImageChange} />
<button className='add-partner'> Add Client </button>
<img src={rightArrow} style={{width:'60px'}} />

</form>
 </>}

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {partner.map((partner ,index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
        {level === 11?     <img  className='partner-image' src={partner.imageUrl} key={index} onClick={() => { handleGo(index)}} style={{cursor:'pointer',backgroundColor:'white'}}  /> : null }
          {level !== 11 && partner.name !== 'Test'?    <img  className='partner-image' src={partner.imageUrl} key={index} onClick={() => { handleGo(index)}} style={{cursor:'pointer',backgroundColor:'white'}}  /> : null}
          </Grid>
        ))}
      </Grid>
    </Box>

   </div>
</div>


</>
}





{switching === 'Users' && <Edit/>}



{switching === 'Survey'  && level === 11 && <AdminSurvey/>}



   <Footer/>
    </div>
      
 

      </>} 

  {isLoading === true &&  <>
 <Loading/>
      </>}

</div>
   


    
      </> )
}
