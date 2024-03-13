import React from 'react'
import {useState,useEffect} from 'react'
import up from '../../images/up.png'
import down from '../../images/down.png'
import { auth, fs,db } from '../../../Firebase'
import { collection,doc,setDoc,query,where,onSnapshot ,updateDoc, deleteDoc} from "firebase/firestore";
import { set } from 'date-fns'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export default function SqlMedia({Name,setName,setEmail,Email,}) {
    

    const [activeTab, setActiveTab] = useState(null);
    const [url1,setUrl1] = useState('')
    const [url2,setUrl2] = useState('')
    const [url3,setUrl3] = useState('')
    const [url4,setUrl4] = useState('')
    const [url5,setUrl5] = useState('')
    const [password,setPassword] = useState('')
    const [email2, setEmail2] = useState('')
    const [password2, setPassword2] = useState('')
    const [email3, setEmail3] = useState('')
    const [password3, setPassword3] = useState('')
    const [email4, setEmail4] = useState('')
    const [password4, setPassword4] = useState('')
    const [email5, setEmail5] = useState('')
    const [password5, setPassword5] = useState('')
    const [info2,setInfo2] = useState('')
    const [info,setInfo] = useState('')
    const Auth = import.meta.env.VITE_PROP_KEY;

    const [handleEdit,setHandleEdit] = useState(false)


  const toggleTab = (index) => {
    if (activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };


  function handleSubmit(e) {
    e.preventDefault();
    //send the form information to firebase

    const docRef = collection(db,'sqlSocialMedia')
    const colRef = doc(docRef,Name)
    const payload = {
        Name:Name,
        facebookUrl:url1,
        facebookEmail:Email,
        facebookPassword:password,
        instagramUrl:url2,
        instagramEmail:email2,
        instagramPassword:password2,
        linkedInUrl:url3,
        linkedInEmail:email3,
        linkedInPassword:password3,

    }
    setDoc(colRef,payload)

    setTimeout(() => {
        setName('')
        setEmail('')
        setUrl1('')
        setUrl2('')
        setUrl3('')
        setUrl4('')
        setUrl5('')
        setPassword('')
        setEmail2('')
        setPassword2('')
        setEmail3('')
        setPassword3('')
        setEmail4('')
        setPassword4('')
        setEmail5('')
        setPassword5('')
      
    },1000)


  }

  //get the data from firebase
    const [data,setData] = useState([])
    const getData = async () => {
        try {
            const unsubscribe = fs.collection('sqlSocialMedia')
            .onSnapshot((querySnapshot) => {
                const dataArray = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(dataArray);
            });
            return unsubscribe;
        }
        catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        const unsubscribe = getData();
    }, []);



  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
    
  };

  const closeModal = () => {
    setModalVisible(false);
    setHandleEdit(false)
    setEditPassword(false)
  };
 
function handleEditBtn(){
    const docRef = collection(db,'sqlSocialMedia')
    const colRef = doc(docRef,Name)
    const payload1 = {
        // Name:Name,
        facebookUrl:url1,
        facebookEmail:Email,
        facebookPassword:password,
        instagramUrl:url2,
        instagramEmail:email2,
        instagramPassword:password2,
        linkedInUrl:url3,
        linkedInEmail:email3,
        linkedInPassword:password3,
    }
    updateDoc(colRef,payload1)
    setHandleEdit(false)
    setName('')
    setEmail('')
    setUrl1('')
    setUrl2('')
    setUrl3('')
    setUrl4('')
    setUrl5('')
    setPassword('')
    setEmail2('')
    setPassword2('')
    setEmail3('')
    setPassword3('')
    setEmail4('')
    setPassword4('')
    setEmail5('')
    setPassword5('')
    closeModal()
}


const [editPassword,setEditPassword] = useState(false)
const [ securityCode,setSecurityCode] = useState(false)
const [enterCode,setEnterCode] = useState('')


const handleSecurityCode = () => {
  if (enterCode === Auth) {
    setSecurityCode(true);
  }
};

  return (
    <div className="w-full max-w-md mx-auto">
   <section>


   <div>
      {/* Modal toggle button */}
      <button
        onClick={openModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-10" type="button">
Add Client Social Media Info 
      </button>

      {/* Main modal */}
      {modalVisible && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center  ">
          <div
            className="absolute w-full h-full bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div
            className="relative bg-white rounded-lg shadow dark:bg-gray-700 lg:w-[50vw] flex items-center justify-center p-10 flex-col"
            style={{ zIndex: 1 }}
          >

      <form onSubmit={handleSubmit} className='flex flex-col w-[300px] mb-10'>
        <label className='text-center text-xl'>Social Media </label>
        <input type='text' value={Name} placeholder='Name' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setName(e.target.value)} />
        <input type='text' placeholder='Facebook url' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setUrl1(e.target.value)} />
        <input type='text' placeholder='Email Facebook' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setEmail(e.target.value)} />
      {!handleEdit ? <input type='text' placeholder='Password Facebook' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setPassword(e.target.value)} />: null}

        <input type='text' placeholder='Instagram url' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setUrl2(e.target.value)} />
        <input type='text' placeholder='Email Instagram' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setEmail2(e.target.value)} />
     {!handleEdit ? <input type='text' placeholder='Password Instagram' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setPassword2(e.target.value)} />: null}

        <input type='text' placeholder='Url LinkIn' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setUrl3(e.target.value)} />
        <input type='text' placeholder='Email LinkedIn' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setEmail3(e.target.value)} />
      {!handleEdit ? <input type='text' placeholder='Password LinkedIn' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setPassword3(e.target.value)} />: null}

        {/* <input type='text' placeholder='Url 4' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setUrl4(e.target.value)} />
        <input type='text' placeholder='Email 4' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setEmail4(e.target.value)} />
        <input type='text' placeholder='Password 4' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setPassword4(e.target.value)} />

        <input type='text' placeholder='Url 5' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setUrl5(e.target.value)} />
        <input type='text' placeholder='Email 5' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setEmail5(e.target.value)} />
        <input type='text' placeholder='Password 5' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setPassword5(e.target.value)} /> */}

     {!handleEdit ? <button type='submit' className='border-2 border-gray-300 rounded-md p-2 mt-5 text-white bg-blue-600 hover:bg-blue-700 '>Submit</button>: null}
        </form>
{handleEdit ? <button onClick={handleEditBtn} className='border-2 border-gray-300 rounded-md p-2 mt-5 text-white bg-green-600 hover:bg-green-700 '>Edit</button>: null}

          </div>
        </div>
      )}
    </div>



   {data.map((tab, index) => (
        <div key={index} className="mb-4">
          <div
            className={`${
              activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } p-2 cursor-pointer flex justify-between items-center`}
            onClick={() => toggleTab(index)}
          >
            <div>{tab.Name}</div>
            <div>
              {activeTab === index ? (
                <img src={up} alt='up' className='w-5 h-5'/>
              ) : (
                <img src={down} alt='down' className='w-5 h-5'/>
              )}
            </div>
          </div>
          {activeTab === index && (
            <div className="bg-white p-4 border border-gray-300">
   
               <p> URL Facebook - {tab.facebookUrl}</p> 
                <p> Email Facebook - {tab.facebookEmail}</p>
                <p onClick={()=> {
                 setEditPassword(true)
                 setInfo2(tab.facebookPassword)
                 setInfo('facebookPassword')
                }} className='cursor-pointer bg-slate-200 hover:bg-slate-400'> Password Facebook -  *******</p>
                <br />
                <hr />
                <p> URL Instagram - {tab.instagramUrl}</p>
                <p> Email Instagram - {tab.instagramEmail}</p>
                <p onClick={()=>{
                  setEditPassword(true)
                  setInfo2(tab.instagramPassword)
                  setInfo('instagramPassword')
                }} className='cursor-pointer bg-slate-200 hover:bg-slate-400'> Password Instagram - ******* </p>
                <br />
                <hr />
                <p> URL LinkedIn - {tab.linkedInUrl}</p>
                <p> Email LinkedIn - {tab.linkedInEmail}</p>
                <p onClick={()=>{
                  setEditPassword(true)
                  setInfo2(tab.linkedInPassword)
                  setInfo('linkedInPassword')
                }} className='cursor-pointer bg-slate-200 hover:bg-slate-400'> Password LinkedIn - ********</p>
                
                <button className='border-2 border-gray-300 rounded-md p-2 mt-5 text-white bg-red-600 hover:bg-red-700 '
                onClick={() => {
                    const docRef = collection(db,'sqlSocialMedia')
                    const colRef = doc(docRef,tab.Name)
                    deleteDoc(colRef)
                }}
                > Delete</button>

                <button className='border-2 border-gray-300 rounded-md p-2 mt-5 text-white bg-green-600 hover:bg-green-700 '
                onClick={() => {
                    setHandleEdit(true)
                    setName(tab.Name)
                    setEmail(tab.facebookEmail)
                    setUrl1(tab.facebookUrl)
                    setUrl2(tab.instagramUrl)
                    setUrl3(tab.linkedInUrl)
                    setPassword(tab.facebookPassword)
                    setEmail2(tab.instagramEmail)
                    setPassword2(tab.instagramPassword)
                    setEmail3(tab.linkedInEmail)
                    setPassword3(tab.linkedInPassword)
                    openModal()
                }
                }
                > Edit</button>

{editPassword && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center  ">
          <div
            className="absolute w-full h-full bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div
            className="relative bg-white rounded-lg shadow dark:bg-gray-700 lg:w-[50vw] flex items-center justify-center p-10 flex-col"
            style={{ zIndex: 1 }}
          >
<form>
 {securityCode? null : <h1> Please Enter Code </h1>}
 {securityCode? null: <input type='text' placeholder='Security Code' className='border-2 border-gray-300 rounded-md p-2 mt-5'  onBlur={handleSecurityCode} onChange={(e) => setEnterCode(e.target.value)}/>}
 
  {!securityCode? null : <h1> {info2} </h1> } 
{!securityCode? null : <input type='text' placeholder='New Password' className='border-2 border-gray-300 rounded-md p-2 mt-5' value={info2} onChange={(e) => setInfo2(e.target.value)}/>}
<br />
{!securityCode? null : <button onClick={() => {
   const docRef = collection(db,'sqlSocialMedia')
   const colRef = doc(docRef,tab.Name)
    const payload1 = {  
        [info]:info2,
    }
    updateDoc(colRef,payload1)
    setEditPassword(false)
}} className='border-2 border-gray-300 rounded-md p-2 mt-5 text-white bg-green-600 hover:bg-green-700 '>Edit</button>}

</form>


          </div>
        </div>
      )}
                
            </div>
          )}
        </div>
      ))}
   </section>
    </div>
  );
    
}
