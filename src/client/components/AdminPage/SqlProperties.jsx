import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { auth, fs,db } from '../../Firebase'
import { collection,doc,setDoc,query,where,onSnapshot ,updateDoc} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";




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
    const [url,setUrl] = useState('')
    const [ammount,setAmmount] = useState('')
    const [domeinName,setDomeinName] = useState('')
    const [expireDate,setExpireDate] = useState('')
    const [renewDate,setRenewDate] = useState('')
    const [ info,setInfo] = useState('')
    const [show,setShow] = useState(false)
    const [ message,setMessage] = useState('')
    const [edit,setEdit] = useState('waitingg')
    const [updated,setUpdated] = useState('waiting')

    function handleClick(){
        setShow(true)
    }

    function handleSubmit(e){
        e.preventDefault()
        const docRef = collection(db,'sqlProperties')
        const colRef = doc(docRef,Name)
        setDoc(colRef,{Name:Name,Email:Email,ammount:ammount,domeinName:domeinName,expireDate:expireDate,renewDate:renewDate,info:info},{merge:true})
        setMessage('Added')
        
        setTimeout(() => {
            setShow(false)
            setMessage('')
            setName('')
            setEmail('')
            setAmmount('')
            setDomeinName('')
            setExpireDate('')
            setRenewDate('')
            setInfo('')

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
        function handleEdit(){
            setShow2(true)
        }

   
//for the update button change bg color with tailwind


  return (
    <div className='flex flex-col items-end ml-[20px] '>

<section>
    <div className='mt-10 text-5xl '>
        SQL Properties
    </div>
    <div>
        <button onClick={handleClick}> ADD </button>
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
                        <input type='text' placeholder='Expire Date' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setExpireDate(e.target.value)} />
                        <input type='text' placeholder='Renew Date' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setRenewDate(e.target.value)} />
                        <input type='text' placeholder='Info' className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setInfo(e.target.value)} />
                        <button className='border-2 border-gray-300 rounded-md p-2 mt-5 bg-blue-500 hover:bg-blue-700'>Submit</button>
                      <h2>  {message} </h2>
                    </form>
                </Typography>
            </Box>
        </Modal>
    </div>
</section>

<section className='mt-10 flex gap-4'>
  
{data.map((x,id) => (
    <div key={id} className='border-2 border-gray-300 bg-slate-500 rounded-md p-2 mt-5 min-w-[300px] max-w-[400px] overflow-scroll'>
        <h2 className='mt-2 mb-2 text-2xl'>
           Name: {x.Name}
        </h2>
        <h2 className='mt-2 mb-2 text-2xl'>
          Email:  {x.Email}
        </h2>
        <h2 className='mt-2 mb-2 text-2xl'>
          Amount:  {x.ammount}
        </h2>
        <a className='mt-2 mb-2 cursor-pointer text-2xl'  href={`https://${x.domeinName}`}>
           Domein: {x.domeinName}
        </a>
        <h2 className='mt-2 mb-2 text-2xl'>
           Expiry Date: {x.expireDate}
        </h2>
        <h2 className='mt-2 mb-2 text-2xl'>
          Renew Date:  {x.renewDate}
        </h2>
        <h2 className='mt-2 mb-2 text-2xl'>
          Login-Details:  {x.info}
        </h2>

        <button onClick={() => {handleEdit(id)}} >EDIT</button>

       <Modal
            open={show2}
            onClose={() => setShow2(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <form className='flex flex-col '>
                        <input type='text' placeholder={x.Email}   className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setUpdated(e.target.value)} onClick={() => setEdit('Email')} />
                        <input type='text'  placeholder={x.ammount} className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setUpdated(e.target.value)} onClick={() => setEdit('ammount')} />
                        <input type='text'  placeholder={x.domeinName} className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setUpdated(e.target.value)}  onClick={() => setEdit('domeinName')} />
                        <input type='text'  placeholder={x.expireDate} className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setUpdated(e.target.value)}  onClick={() => setEdit('expireDate')} />
                        <input type='text'  placeholder={x.renewDate} className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setUpdated(e.target.value)}  onClick={() => setEdit('renewDate')} />
                        <input type='text'  placeholder={x.info} className='border-2 border-gray-300 rounded-md p-2 mt-5' onChange={(e) => setUpdated(e.target.value)} onClick={() => setEdit('info')} />
                        <button className='border-2 border-gray-300 rounded-md p-2 mt-5 bg-blue-500 hover:bg-blue-700 ' 
                        onClick={()=> {
                            const docRef = collection(db,'sqlProperties')
                            const colRef = doc(docRef,x.Name)

                            updateDoc(colRef,{[edit]:updated})

                            setMessage('Updated')
                            setTimeout(() => {
                                setShow2(false)
                                setMessage('')
                                setName('')
                                setEmail('')
                                setAmmount('')
                                setDomeinName('')
                                setExpireDate('')
                                setRenewDate('')
                                setInfo('')
                                setEdit('')
                                setUpdated('')
                            }, 2000);
                        }}> Update</button>
                    </form>
                </Typography>
            </Box>
        </Modal>
        </div>
))}

    </section>

    </div>
  )
}
