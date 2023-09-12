import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { auth, fs,db } from '../../Firebase'
import { collection,doc,setDoc,query,where,onSnapshot ,updateDoc, deleteDoc} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import SqlPropInfo from './SqlPropInfo';
import Users from '../User';
import User from '../User';
import { set } from 'date-fns';




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

export default function SqlProperties() {


    const [ Name,setName] = useState('')
    const[Email,setEmail] = useState('')
    const [ammount,setAmmount] = useState('')
    const [domeinName,setDomeinName] = useState('')
    const [expireDate,setExpireDate] = useState('')
    const [startDate,setStartDate] = useState('')
    const [ term,setTerm] = useState('')
    const [ info,setInfo] = useState('')
    const [info2,setInfo2] = useState('')
    const [show,setShow] = useState(false)
    const [ message,setMessage] = useState('')
    const [edit,setEdit] = useState('waitingg')
    const [updated,setUpdated] = useState('waiting')
    const [confirm,setConfirm] = useState(false)
    const [showSecret,setShowSecret] = useState(false)
    const [sendToModal,setSendToModal] = useState('')
    const [sendToModal2,setSendToModal2] = useState('')

    function handleClick(){
        setShow(true)
    }

    function handleSubmit(e){
        e.preventDefault()
        const docRef = collection(db,'sqlProperties')
        const colRef = doc(docRef,Name)
        setDoc(colRef,{Name:Name,Email:Email,ammount:ammount,domeinName:domeinName,expireDate:expireDate,StartDate:startDate,info:info,info2:info2,term:term},{merge:true})
        setMessage('Added')
        
        setTimeout(() => {
            setShow(false)
            setMessage('')
            setName('')
            setEmail('')
            setAmmount('')
            setDomeinName('')
            setExpireDate('')
            setStartDate('')
            setTerm('')
            setInfo('')
            setInfo2('')

        }, 2000);
    }


    const [data,setData] = useState([])

    const getData = async () => {
        try {
          const unsubscribe = fs.collection('sqlProperties')
            .onSnapshot(async (querySnapshot) => {
              const dataArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
              }));
      
              dataArray.sort((a, b) => {
                const idA = parseInt(a.id.split('-')[0]);
                const idB = parseInt(b.id.split('-')[0]);
      
                return idA - idB;
              });
      
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


        const [show2,setShow2] = useState(false)
    
        const [editText,setEditText] = useState('')
        function handleEdit(){
            setShow2(true)
        }

   function handleEditSecret(){
       setShowSecret(true)
   }

   const [level,setLevel] = useState('')
   const [uuid,setUuid] = useState('')
   const [user,setUser] = useState('')


   //for tomorrow add zapier notifications to charlotte and kriss and add good security key and hide to env or db

  return (
    <div className='flex flex-col items-end  m-auto w-[80%] '>
<User  setLevel={setLevel} setUuid={setUuid} setUser={setUser}/>
{level > 9 && <>
    <section>
  <div>
        <h1 className='mt-10 text-5xl mb-10 '>
        SQL Property Details
    </h1>
  </div>

    <div className='text-center'>
        <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-800 hover:border-yellow-500 border-2 text-white font-bold py-2 px-4 rounded'> ADD </button>
        <Modal
            open={show}
            onClose={() => setShow(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <form className='flex flex-col ' onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setName(e.target.value)} />
                        <input type='text' placeholder='Email' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setEmail(e.target.value)} />
                        <input type='text' placeholder='Amount' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setAmmount(e.target.value)} />
                        <input type='text' placeholder='Domein Name' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setDomeinName(e.target.value)} />
                        <input type='text' placeholder='Start Date' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setStartDate(e.target.value)} />
                        <input type='text' placeholder='Term Length' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setTerm(e.target.value)} />
                        <input type='text' placeholder='Expire Date' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setExpireDate(e.target.value)} />
                        <input type='text' placeholder='Info-Login' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setInfo(e.target.value)} />
                        <input type='text' placeholder='Info-Email' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setInfo2(e.target.value)} />
                        <button className='border-2 border-gray-300 rounded-md p-2 mt-5 bg-blue-500 hover:bg-blue-700'>Submit</button>
                      <h2 className='mt-5 text-center'>  {message} </h2>
                    </form>
                </Typography>
            </Box>
        </Modal>
    </div>
</section>




<div className="relative overflow-x-auto m-auto ml-[7%] mt-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                     Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Contact Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Domein 
                </th>
                <th scope="col" className="px-6 py-3">
                    Start Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Term Length
                </th>
                <th scope="col" className="px-6 py-3">
                    Expiry Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Info
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3 " >  
                  Delete
                </th>

            </tr>
        </thead>
        <tbody>
     {data.map((x,id) => (
      <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
          {x.Name}
      </th>
      <td className="text-[16px] cursor-pointer  hover:bg-blue-700 " onClick={() => {
      setEdit(x.Name), setEditText('Email'), handleEdit()
      }} >
          {x.Email}
      </td>
      <td className="px-6 py-4 cursor-pointer  hover:bg-blue-700 " onClick={() => {
      setEdit(x.Name),setEditText('domeinName'), handleEdit()
      }}>
         <a href={`https://${x.domeinName}`} target='_blank' rel="noreferrer"> Link </a>
      </td>
      <td className="text-[16px] cursor-pointer  hover:bg-blue-700 " onClick={() => {
      setEdit(x.Name), setEditText('term'), handleEdit()
      }}>
          {x.term}
      </td>
      <td className="text-[16px] cursor-pointer  hover:bg-blue-700 " onClick={() => {
      setEdit(x.Name), setEditText('StartDate'), handleEdit()
      }}>
          {x.StartDate}
      </td>
      <td className="text-[16px] cursor-pointer  hover:bg-blue-700 " onClick={() => {
      setEdit(x.Name), setEditText('expireDate'), handleEdit()
      }}>
          {x.expireDate}
      </td>

      <td className="text-[16px] cursor-pointer  hover:bg-blue-700 " onClick={() => {
      setEdit(x.Name),setEditText('info'), setSendToModal(x.info),setSendToModal2(x.info2), handleEditSecret()
      }}>
        Enter KEY
      </td>
      <td className="px-6 py-4 cursor-pointer  hover:bg-blue-700 " onClick={() => {
      setEdit(x.Name), setEditText('ammount'), handleEdit()
      }}>
          {x.ammount}
      </td>
    <td>
        <button className='border-2 text-white border-gray-300 rounded-md p-2  bg-red-500 hover:bg-red-700 ' onClick={() => {
            const docRef = collection(db,'sqlProperties')
            const colRef = doc(docRef,x.Name)
            deleteDoc(colRef)
            setMessage('Deleted')
            setTimeout(() => {
                setMessage('')
            }, 2000);
        }}> Delete</button>
    </td>
      
 <SqlPropInfo setShowSecret={setShowSecret} setUpdated={setUpdated} updated={updated} sendToModal={sendToModal} sendToModal2={sendToModal2}
  showSecret={showSecret} edit={edit} editText={editText} setMessage={setMessage} setEdit={setEdit} confirm={confirm} setConfirm={setConfirm} message={message}/>

{/* 
this modal views all other topics but info */}
 <Modal
     open={show2}
     onClose={() => setShow2(false)}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
 >
     <Box sx={style}>
         <Typography id="modal-modal-title" variant="h6" component="h2">
             <form className='flex flex-col ' onSubmit={(e) => e.preventDefault()}>
                <input type='text' placeholder={editText} className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setUpdated(e.target.value)} />
                 <button className='border-2 border-gray-300 rounded-md p-2 mt-5 bg-blue-500 hover:bg-blue-700 ' 
                 onClick={()=> {
                     const docRef = collection(db,'sqlProperties')
                     const colRef = doc(docRef,edit)
                     updateDoc(colRef,{[editText]:updated})
                     setMessage('Updated')
                     setTimeout(() => {
                         setShow2(false)
                         setMessage('')
                         setEdit('')
                         setUpdated('')
                     }, 2000);
                 }}> Update</button>
             </form>
             <br/>
             {message}
         </Typography>
     </Box>
 </Modal>


      </tr>
      ))}     
        </tbody>
    </table>
</div>
</>}


    </div>
  )
}


