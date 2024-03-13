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
const [domeinName,setDomeinName] = useState('')
const [expireDate,setExpireDate] = useState('')
const [startDate,setStartDate] = useState('')
const [ term,setTerm] = useState('')
const [ info,setInfo] = useState('')
const [info2,setInfo2] = useState('')
const [payment,setPayment] = useState('')
const [extension,setExtension] = useState('')

    const [handleEdit,setHandleEdit] = useState(false)
const Auth = import.meta.env.VITE_PROP_KEY;


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
    const docRef = collection(db,'sqlDomein')
    const colRef = doc(docRef,domeinName)
    const payload = {
        domeinName:domeinName,
        expireDate:expireDate,
        startDate:startDate,
        term:term,
        info:info,
        info2:info2,
        payment:payment,
        extension:extension,

    }
    setDoc(colRef,payload)
    setTimeout(() => {
        setDomeinName('')
        setExpireDate('')
        setStartDate('')
        setTerm('')
        setInfo('')
        setInfo2('')
        setPayment('')
        setExtension('')
       
    }, 1000);
  }

  //get the data from firebase
    const [data,setData] = useState([])
    const getData = async () => {
        try {
            const unsubscribe = fs.collection('sqlDomein')
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
    const docRef = collection(db,'sqlDomein')
    const colRef = doc(docRef,domeinName)
    const payload1 = {
        domeinName:domeinName,
        expireDate:expireDate,
        startDate:startDate,
        term:term,
        info:info,
        info2:info2,
        payment:payment,
        extension:extension,

        

    }
    updateDoc(colRef,payload1)
    setHandleEdit(false)
    setDomeinName('')
    setExpireDate('')
    setStartDate('')
    setTerm('')
    setInfo('')
    setInfo2('')
    setPayment('')
    setExtension('')
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
Add Client Domein Info 
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
        <label className='text-center text-xl'>Domein Information </label>
        <input type='text' placeholder='Domein Name' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setDomeinName(e.target.value)}/>
        <input type='text' placeholder='Expire Date' className='border-2 border-gray-300 rounded-md p-2 mt-5' value={expireDate} onChange={(e) => setExpireDate(e.target.value)}/>
        <input type='text' placeholder='Start Date' className='border-2 border-gray-300 rounded-md p-2 mt-5' value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
        <input type='text' placeholder='Term' className='border-2 border-gray-300 rounded-md p-2 mt-5' value={term} onChange={(e) => setTerm(e.target.value)}/>
        <input type='text' placeholder='Email' className='border-2 border-gray-300 rounded-md p-2 mt-5' value={info} onChange={(e) => setInfo(e.target.value)}/>
        <input type='text' placeholder='Password' className='border-2 border-gray-300 rounded-md p-2 mt-5' value={info2} onChange={(e) => setInfo2(e.target.value)}/>
        <input type='text' placeholder='Payment' className='border-2 border-gray-300 rounded-md p-2 mt-5' value={payment} onChange={(e) => setPayment(e.target.value)}/>
        <input type='text' placeholder='Extension' className='border-2 border-gray-300 rounded-md p-2 mt-5' value={extension} onChange={(e) => setExtension(e.target.value)}/>
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
            <div>{tab.domeinName}</div>
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
   
            <p> Domein Name : {tab.domeinName} </p>
            <p> Expire Date : {tab.expireDate} </p>
            <p> Start Date {tab.startDate} </p>
            <p> Term : {tab.term} </p>
            <p> Email : {tab.info} </p>
            <p onClick={() => {
             setEditPassword(true)
            }}className='cursor-pointer bg-slate-200 hover:bg-slate-400' > Password :  ****** </p>
            <p> Payment Info : {tab.payment} </p>
            <p> Extension :  {tab.extension} </p>


                <button className='border-2 border-gray-300 rounded-md p-2 mt-5 text-white bg-red-600 hover:bg-red-700 '
                onClick={() => {
                    const docRef = collection(db,'sqlDomein')
                    const colRef = doc(docRef,tab.domeinName)
                    deleteDoc(colRef)
                }}
                > Delete</button>

                <button className='border-2 border-gray-300 rounded-md p-2 mt-5 text-white bg-green-600 hover:bg-green-700 '
                onClick={() => {
                    setHandleEdit(true)
                    setDomeinName(tab.domeinName)
                    setExpireDate(tab.expireDate)
                    setStartDate(tab.startDate)
                    setTerm(tab.term)
                    setInfo(tab.info)
                    setInfo2(tab.info2)
                    setPayment(tab.payment)
                    setExtension(tab.extension)

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
 
  {!securityCode? null : <h1> {tab.info2} </h1> } 
{!securityCode? null : <input type='text' placeholder='New Password' className='border-2 border-gray-300 rounded-md p-2 mt-5' value={info2} onChange={(e) => setInfo2(e.target.value)}/>}
<br />
{!securityCode? null : <button onClick={() => {
   const docRef = collection(db,'sqlDomein')
   const colRef = doc(docRef,tab.domeinName)
    const payload1 = {  
        info2:info2,
    }
    updateDoc(colRef,payload1)
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
