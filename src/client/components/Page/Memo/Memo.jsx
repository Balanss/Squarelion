import React,{useState, useEffect} from 'react'
import {collection,deleteDoc,doc,setDoc} from "firebase/firestore";
import { auth, fs,db } from '../../../Firebase'

export default function Memo(round) {

const [val,setVal] = useState('')
const [ text,setText] = useState('')
const [memo,setMemo] = useState([])

function handleSubmit(e){
    const docRef = collection(db,localStorage.getItem('partner'))
    const colRef=doc(docRef,text);
    setDoc(colRef,{'comment':val} ,{merge:true});
    e.preventDefault()
    setVal('')
    setText('')

    
}



const getMemo = async () => {

    try {
      const unsubscribe = fs.collection(localStorage.getItem('partner')) // Change 'page' to 'memo'
        .onSnapshot(async (querySnapshot) => {
          const roundArray = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
    
          setMemo(roundArray);
        });
  
      return unsubscribe;
    } 
    catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    const unsubscribe = getMemo();
   
  }, []); // Change 'page' to 'memo'
  
const a = (memo.filter(memo => memo.comment > ''))


const [isHovered, setIsHovered] = useState(false);

const handleHover = () => {
  setIsHovered(!isHovered);
};


function handleDelete(item,id){
  const docRef = collection(db,localStorage.getItem('partner'))
  const colRef=doc(docRef,item.id);
  deleteDoc(colRef);
}


  return (
    <>
          <div
        className="fixed bottom-0 right-[45vw] p-4 bg-blue-500 text-white cursor-pointer transition-opacity"
        onClick={handleHover}
        
      >
       Create Memo
      </div>
    
  
  
{isHovered && (
    <div className='fixed bottom-0 right-10  p-4 text-white z-50 w-full inset-0 '>
<div className=' left-0 top-0 bg-slate-700 text-black w-[100vw] h-[100vh] absolute z-60 opacity-75  '> </div>

<form  onSubmit={handleSubmit} className='relative bg-slate-700'>
  <div class="mb-6">

  </div>
  <div className="mb-6 pt-4 text-center">
    <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='ADD TOPIC'className='text-black' />
  </div>
    <div className="text-center my-10 h-5 ">
    <input type='text' value={val} onChange={(e) => setVal(e.target.value)} placeholder='ADD MEMO' className='text-black'/>
  </div>
  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
  md:flex md:justify-center md:m-auto">Submit</button>
</form>
    
    
    <div className='mt-10 h-[50vh] overflow-scroll overflow-x-hidden'>
    {a.map((item,id) => (
          <ol className=" border-l relative ml-5  bg-slate-800 w-4/5 flex items-center justify-start lg:w-2/5 " key={item.id}>                  
    <li className="mb-10 p-2 ml-6">            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" onClick={() => { handleDelete(item,id)}}>
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 className="flex py-2  items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white break-all"> {item.id} </h3>
       
        <p className="mb-4 text-base font-normal break-all text-gray-500 dark:text-gray-400">{item.comment}</p>
 
    </li>

</ol> 
          ))}





    </div>
    <button onClick={() => setIsHovered(false)} className="relative ml-6 mt-3 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
     Close
  </span>
</button>
 
    
     
    </div>
)}

</> )
}
