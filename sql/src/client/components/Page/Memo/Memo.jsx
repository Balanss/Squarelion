import React,{useState, useEffect} from 'react'
import {collection,deleteDoc,doc,setDoc,updateDoc} from "firebase/firestore";
import { fs,db } from '../../../Firebase'
import editPic from '/src/client/components/images/edit.png';
import bin from '/src/client/components/images/bin-2.png'

export default function Memo(round) {

const [val,setVal] = useState('')
const [ text,setText] = useState('')
const [memo,setMemo] = useState([])
const [edit,setEdit] = useState('')
const[comment,setComment] = useState('')
const [showEdit,setShowEdit] = useState(false)
const [ showEditComment,setShowEditComment] = useState(false)

function handleSubmit(e){
    const docRef = collection(db,localStorage.getItem('partner'))
    const colRef=doc(docRef,text);
    setDoc(colRef,{'comment':val,'title':val} ,{merge:true});
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

function handleEdit(item,id){
  setShowEdit(showEdit === true ? false : true );
}

function handleEditComment(item,id){
  setShowEditComment(showEditComment === true ? false : true );
}



  return (
    <>
 <div className=" w-[150px] h-[50px] ml-5 p-4  bg-blue-500 text-white cursor-pointer transition-opacity fixed bottom-0 items-center flex z-50" onClick={handleHover} > Create Memo</div>
    
  
  
{isHovered && (
    <div className='fixed bottom-0 right-10  p-4 text-white z-50 w-full inset-0 '>
<div className=' left-0 top-0 bg-slate-700 text-black w-[100vw] h-[100vh] absolute z-60 opacity-75  '> </div>

<form  onSubmit={handleSubmit} className='relative bg-slate-700'>
  <div className="mb-6">

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
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 cursor-pointer" onClick={() => { handleDelete(item,id)}}>
         <img src={bin}/>
        </span>
        <h3 className="flex py-2  items-center mb-1 text-lg font-semibold text-white dark:text-white break-all"> {item.title} <img  className='ml-3 w-[20px]  rounded-md cursor-pointer' onClick={() => { handleEdit(item,id)}}  src={editPic} /> </h3>
{showEdit && ( <div>
  <input type='text' onChange={(e) => setEdit(e.target.value)} placeholder='EDIT MEMO TITLE' className='text-black mr-4' />
  <button className='bg-blue-700 text-white px-3 py-2 rounded-md'
  onClick={() => {
      const docRef = collection(db,localStorage.getItem('partner'))
      const colRef=doc(docRef,item.id);
     updateDoc(colRef,{title:edit} ,{merge:true});
  }}>Submit</button>
</div>
  
)}
       
        <p className="mb-4 text-base font-normal break-all text-gray-200 dark:text-gray-200">{item.comment}  <img  className='ml-3 w-[20px]  rounded-md cursor-pointer' onClick={() => { handleEditComment(item,id)}}  src={editPic} /> </p>
        {showEditComment && ( <div>
  <input type='text' onChange={(e) => setComment(e.target.value)} placeholder='EDIT MEMO COMMENT' className='text-black mr-4' />
  <button className='bg-blue-700 text-white px-3 py-2 rounded-md'
  onClick={() => {
      const docRef = collection(db,localStorage.getItem('partner'))
      const colRef=doc(docRef,item.id);
     updateDoc(colRef,{comment:comment} ,{merge:true});
  }}>Submit</button>
</div>
  
)}
 
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
