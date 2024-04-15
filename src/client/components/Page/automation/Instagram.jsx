import React,{useState,useEffect,useContext} from 'react'
import { db } from "../../../Firebase";
import { collection, doc, setDoc,getDoc,onSnapshot,updateDoc } from "firebase/firestore";
import { UpdatedPageContext } from '../../context/UpdatedPageContext';
import { set } from 'date-fns';



export default function Instagram({imageUrl,answer,month,page,post,setSuccess,dbId,forIg,setForIg,setForLi}) {
    const [time, setTime] = useState(false)
    const [ selectedTime, setSelectedTime ] = useState('')
    const [report, setReport] = useState('')
    const [hashtags, setHashtags] = useState('')
   


    const {hashtag, setHashtag} = useContext(UpdatedPageContext)

useEffect(() => {
    const fetchHashtags = async () => {
        const docRef = doc(db, page, month);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setHashtags(docSnap.data()[dbId + month].hashtags);
            setHashtag(docSnap.data()[dbId + month].hashtags);
        } else {
            console.log("No such document!");
        }
    };

    fetchHashtags();
}, []);



    const handleSubmit = async(e) => {
        e.preventDefault();

        const docRef = collection(db, page);
        const colRef = doc(docRef, month);

      await setDoc(colRef, {
        [dbId + month]: {
         hashtags:hashtags
        }
      }, { merge: true });
    }


    const handlePost = async() => {

        //change ig data
        const data = {
          name: page,
          hashtags: hashtags,
          content: answer,
          imageNew: imageUrl,
          id: month,
          field: post,
          // other data you want to send
        };
    
        if (selectedTime !== '') {
          data.time =selectedTime;
        }
    
       try {
    
    
           const response = await fetch(import.meta.env.VITE_IG, {
               method: 'POST',
               mode: 'cors',
               headers: {
                   'Content-Type': 'application/json',
                 },
               body: JSON.stringify(data),
    
           });
           const text = await response.text();
           console.log(text);
            // setReport(`Posting to ${page} Facebook page in progress`);
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
    
            
    
       } catch (error) {
           console.error('Error:', error);
            setSuccess('Error posting to facebook');
    
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
       }
        
      }




      useEffect(() => {
        const docRef = doc(db, page, "Status");

        const unsubscribe = onSnapshot(docRef, (docSnap) => {
          if (!docSnap.exists()) {
            console.log("No such document!");
            return;
          }

          const data = docSnap.data();
          const field = data && data[page + post + month];

          if (!field) {
            console.log("No such field!");
            return;
          }

          setReport(field);
        });

        // Clean up function
        return () => unsubscribe();
      }, [page, post, month]);


  return ( <> 
    <button onClick={() => {setTime(time?false:true); setForIg(forIg?false:true);setForLi(false)}} className='bg-gradient-to-r from-purple-500 to-yellow-500 px-2 mt-2 ml-2 rounded hover:scale-[1.1]'>Post on Instagram</button>

    {forIg && <div className='mt-2 bg-secondary px-4 py-2'>
      <p>Post on Instagram</p>
          <input className='text-black rounded  ' type='datetime-local' onChange={(e) => setSelectedTime(e.target.value)}/>
            <form className='mt-4 flex flex-col ' onSubmit={handleSubmit}>
            <label className='text-white'>Add hashtags</label>
             <textarea className='text-black rounded'  placeholder='Add hashtags'  onChange={(e) => {setHashtags(e.target.value)}}/>
                <button className='mt-4 rounded bg-gradient-to-r from-yellow-500 to-purple-500 hover:cursor-pointer hover:scale-[1.1]'> Add hashtags </button>
            </form>

            <div className='bg-[#f0f8ff] text-black px-2 rounded py-4 mt-4'>
                <h1>Currently you are adding </h1>
                <hr className='mt-2 mb-2' />
                <p> {hashtags}</p>
                <button onClick={() => {setTime(false);}} className='bg-red-600 text-white px-2 mt-4 ml-2 rounded hover:scale-[1.1]'>close</button>
            </div>
          {selectedTime !== '' && <button onClick={() => {handlePost();}} className='bg-green-400 px-2 mt-4 ml-2 rounded hover:scale-[1.1]'>Confirm Post</button>}
          </div>}
  </> )
}
