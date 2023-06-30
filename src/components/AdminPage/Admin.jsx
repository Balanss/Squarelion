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



const [switching,setSwitching] = useState(false)

  return (

    <> 
<PartnerLogic partner={partner} setPartner={setPartner}/>
<div className='signup-main' style={{color:'white'}}>
<User  setUser={setUser} user={user} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel}/>

{uuid !== ''  && level > 8 && isLoading === false  && <>
      
      
      <div style={{backgroundColor:'#194375',minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
<div style={{backgroundColor:'white'}}> <Nav/> </div>

<div className='admin-page-btn-switch' style={{marginTop:'30px'}}><h1 className='switching' onClick={() => setSwitching(switching === false ? true : false)}> {switching === false ? 'Switch to Users' : 'Switch to Partners' } </h1> </div>

{switching === false && <>
  < div className='style-admin-page'>
  <form onSubmit={handleSub} className='form-admindb'> 

<input type="text" placeholder='ENTER PARTNER' onChange={(e) => setName(e.target.value)} className='input-admindb' />
<label>
          Image:
          <input type="file" onChange={handleImageChange} />
        </label>
<button className='add-partner'> Add Partner </button>

</form>

<div className='partner-links'>
  
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {partner.map((partner ,index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <img  className='partner-image' src={partner.imageUrl} key={index} onClick={() => { handleGo(index)}} style={{cursor:'pointer',backgroundColor:'white'}}  />
          </Grid>
        ))}
      </Grid>
    </Box>

   </div>
</div>


</>
}


{switching === true && <Edit/>}



   <Footer/>
    </div>
      
 

      </>} 

  {isLoading === true &&  <>
 <Loading/>
      </>}

</div>
   


    
      </> )
}
