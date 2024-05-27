import React, { useEffect, useState ,useContext} from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase';
import open from "../../assets/view.png";
import unseen from "../../assets/unseen.png";
import toast,{Toaster} from 'react-hot-toast'
import FileUpload from './FileUpload';
import { UserContext } from '../context/UserContext';
import { doc, deleteDoc, setDoc } from 'firebase/firestore';







export default function ContractsFunction() {
  const [contracts, setContracts] = useState([]);
  const [filter, setFilter] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const [ description, setDescription] = useState('');
  const [nameOfCompany, setNameOfCompany] = useState('')
  const[docu,setDocu] = useState('')
  const [pdf, setPdf] = useState('')
  const [finalDoc, setFinalDoc] = useState('')
const [startDate, setStartDate] = useState('')
const [endDate, setEndDate] = useState('')
const[liveDescription, setLiveDescription] = useState('')
const [status, setStatus] = useState('')

  
const {user} = useContext(UserContext);


  useEffect(() => {

    const fetchData = () => {
        const query = collection(db, "contracts");

        const unsubscribe = onSnapshot(query, (querySnapshot) => {
            const newData = querySnapshot.docs.map(doc => {
                const data = doc.data();
                const values = Object.values(data);
                return values // This will return the value of the first property. Adjust the index if needed.
            });
            setContracts(newData);
        });

        // Clean up function
        return () => unsubscribe();
    };

    fetchData();

  }, []);

 
    const handleDiscription = async () => {
        const docRef = doc(db, "contracts", nameOfCompany);
         setDoc(docRef,{[`${nameOfCompany} / ${startDate}/ ${endDate}`]:{
            description: description
        }},{merge: true});

        toast.success("Description Updated")

    }


    const handlePending = async () => {
        const docRef = doc(db, "contracts", nameOfCompany);
         setDoc(docRef,{[`${nameOfCompany} / ${startDate}/ ${endDate}`]:{
            status: "Pending",
            color: "orange"
        }},{merge: true});
        toast.success("Contract Status Updated")
    }

    const handleApproved = async() => {
        const docRef = doc(db, "contracts", nameOfCompany);
         setDoc(docRef,{[`${nameOfCompany} / ${startDate}/ ${endDate}`]:{
            status: "Approved",
            color: "green"
        }},{merge: true});
        toast.success("Contract Status Updated")
    }

    const handleRejected = async() => {
        const docRef = doc(db, "contracts", nameOfCompany);
         setDoc(docRef,{[`${nameOfCompany} / ${startDate}/ ${endDate}`]:{
            status: "Rejected",
            color: "red"
        }},{merge: true});
        toast.success("Contract Status Updated")
    }

    const handleCompleted = async() => {
        const docRef = doc(db, "contracts", nameOfCompany);
         setDoc(docRef,{[`${nameOfCompany} / ${startDate}/ ${endDate}`]:{
            status: "Completed",
            color: "gray"
        }},{merge: true});
        toast.success("Contract Status Updated")
    }

    const handleSigned = async() => {
        const docRef = doc(db, "contracts", nameOfCompany);
         setDoc(docRef,{[`${nameOfCompany} / ${startDate}/ ${endDate}`]:{
            status: "Signed",
            color: "green"
        }},{merge: true});
        toast.success("Contract Status Updated")
    }


   const handleDelete = async() => {
    const docRef = firestoreDoc(db, "contracts", nameOfCompany);
    await deleteDoc(docRef);
    toast.success("Contract Deleted")
    setTimeout(() => {
    setIsOpen(false);
   }, 500);

   }



useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setIsOpen(false);
        }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
}, []); 


return (
<div className='w'>
    <Toaster />
    <h1 className='text-2xl font-bold mb-4'>Contracts</h1>
    <input
    type="text"
    placeholder="Search contract By Name"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className='mb-4 text-black'
    />
    <ul className='flex flex-col gap-y-4'>
        {contracts.filter(contract => contract[0].companyName.toLowerCase().includes(filter.toLowerCase())).map((contract, index) => (
        <li key={index} className='grid grid-cols-2 grid-rows-4  md:grid-cols-4 md:grid-rows-2  lg:grid-cols-8 lg:grid-rows-1  gap-x-4 border p-1 items-center rounded-lg bg-gray-100 text-black text-sm' >
            <p className=''>Type: {contract[0].contractType}</p>
            <p className='text-black'>Company Name: {contract[0].companyName}</p>
            <p className=''> ContractName: {contract[0].contractName}</p>
            <p className=''>Start Date: {contract[0].startDate}</p>
            <p className=''>End Date: {contract[0].endDate}</p>
            <p className=''>Writer: {contract[0].writer}</p>
            <p  className={`bg-${contract[0].color}-700 px-2 py-1 rounded-lg text-white`}>Status: {contract[0].status}</p>
            <img src={isOpen && index === id ? unseen : open} alt="open" className="size-12 cursor-pointer" onClick={() => {setIsOpen(!isOpen),
                setId(index),
                setNameOfCompany(contract[0].companyName),
                setStartDate(contract[0].startDate),
                setEndDate(contract[0].endDate),
                setLiveDescription(contract[0].description),
                setDocu(contract[0].doc),
                setPdf(contract[0].pdf),
                setFinalDoc(contract[0].finalDoc),
                setStatus(contract[0].status)
                
            }} />
            <br />
        </li>
        ))}
    </ul>

    {isOpen && <>
    
    <div className='fixed top-0 left-0 desktopX:w-3/4 h-screen overflow-y-auto overflow-x-hidden py-4  bg-secondary bg-opacity-90 flex flex-col  gap-4 justify-top items-center'>
       <div className='flex flex-wrap px-2 flex-row gap-4'>
{(status !== 'Approved' || user === 'SUPERADMIN' || user === 'Charlotte') && <>
        <button className='bg-orange-700 px-2 py-2 rounded-lg text-white' onClick={handlePending}>Pending</button>
        <button className='bg-red-700 px-2 py-2 rounded-lg text-white' onClick={handleRejected}>Rejected</button>
        <button className='bg-gray-700 px-2 py-2 rounded-lg text-white'onClick={handleCompleted}>Completed</button>
        <button className='bg-green-700 px-2 py-2 rounded-lg text-white' onClick={handleApproved}>Approved</button>
        <button className='bg-green-700 px-2 py-2 rounded-lg text-white' onClick={handleSigned}>Signed</button>
        <button className='bg-blue-700 px-2 py-2 rounded-lg text-white' onClick={handleDelete}>Delete</button>
</>}

     
       </div>


        <div className='flex w-[95vw] items-center flex-col gap-4 mt-2'>
            <h1 className='text-2xl font-bold mb-4'>Contract Details</h1>     
            <section className='bg-white text-black p-4 rounded-lg '>
            <h2 > Company name: {nameOfCompany} </h2>
                  <h2 > {liveDescription} </h2>
            </section>
            <textarea className='w-96 h-96 bg-gray-100 p-4 rounded-lg text-black' placeholder='Enter The Description Of The Contract Here' onChange={(e) => setDescription(e.target.value)} value={description} />
            {(status === 'Approved' ||  user === 'SUPERADMIN' || user === 'Charlotte') && <button className='bg-orange-700 px-2 py-2 rounded-lg text-white' onClick={handleDiscription}>Submit</button> }
            
        </div>

        <div className='flex flex-row gap-4 mt-2 items-start'>
            <h1 className='text-2xl font-bold mb-4'>Documents</h1>
            {docu === '' ? null:<a href={docu} target="_blank" rel="noreferrer" className='bg-blue-700 px-2 py-2 rounded-lg text-white'  >Doc</a>}
            {pdf === '' ? null:<a href={pdf} target="_blank" rel="noreferrer" className='bg-blue-700 px-2 py-2 rounded-lg text-white'>PDF</a>}
            {finalDoc === '' ? null : <a href={ finalDoc} target="_blank" rel="noreferrer" className='bg-blue-700 px-2 py-2 rounded-lg text-white'>Signed PDF</a>}
           

        </div>
            <hr  className='bg-white w-96'/>
        {(status === 'Approved' || user === 'SUPERADMIN' || user === 'Charlotte') 
        && <FileUpload nameOfCompany={nameOfCompany} endDate={endDate} startDate={startDate} />}

    </div>
 
    </>}
</div>
  );
}