import { useState } from 'react';
import { collection, addDoc,doc,updateDoc ,setDoc,deleteDoc} from 'firebase/firestore';
import {db} from '../firebase';
import BugFunctions from './BugFunctions';
import SeeFeedback from '../FeedBack/SeeFeedback';

const BugReport = ({user,level}) => {
  const [bugDescription, setBugDescription] = useState('');
  const [bugShow, setBugShow] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [gettingFeedback, setGettingFeedback] = useState([]);





const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const bugRef = collection(db, 'bugs');
        const timestamp = new Date().toISOString();
        const newBug = {
            description: bugDescription,
            timestamp: timestamp,
            SendBy: user,
            status: 'Pending',
            color: 'bg-gray-500',
        };

        await setDoc(doc(bugRef, timestamp), newBug);

        // Clear the input field after submitting
        setBugDescription('');
        setMessage('Bug Submitted');
        setTimeout(() => {
            setMessage('');
        }, 3000);
    } catch (error) {
        console.error('Error submitting bug:', error);
        setMessage('Error submitting bug');
        setTimeout(() => {
            setMessage('');
        }, 3000);
    }
};


const [full, setFull] = useState('');
const openModal = (feedback) => {
    setFull(feedback);
}


  return (
   <>
   {level < 11 && (
 <div className="text-center text-white phones:w-[80vw] w-[40vw] min-h-[100vh] flex flex-col items-center justify-start mb-5 mt-5 gap-2">
 <BugFunctions setBugShow={setBugShow} level={level}/>
    {message && (
        <div className="bg-green-500 text-white px-4 py-2 rounded-md text-xl  font-bold mb-2 w-[300px]">
            {message}
        </div>
    )}
<h1 className="text-2xl font-bold mb-4">Bug Report</h1>
<form onSubmit={handleSubmit}>
 <textarea
   className="w-full h-40 phones:w-4/4 p-2 border text-black border-gray-300 rounded"
   placeholder="Describe the bug..."
   value={bugDescription}
   onChange={(e) => setBugDescription(e.target.value)}
 ></textarea>
 <button
   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
   type="submit"
 >
   Submit Bug
 </button>
</form>
</div>
   )}

{level > 10 && (
 
       <div className="text-center phones:w-[60vw] w-[70vw] min-h-[100vh] flex flex-col items-center justify-start pt-[200px] gap-2">
        <BugFunctions setBugShow={setBugShow} level={level}/>
        <SeeFeedback setGettingFeedback={setGettingFeedback} level={level} />
        <h1 className="text-2xl font-bold mb-4">Bug Report List</h1>
         <table className="w-3/4  border-collapse phones:text-xs phones:p-0">
            <thead >
                <tr className='bg-slate-800 text-white border-[1px]'>
                    <th className="px-4 py-2 phones:p-1">Description</th>
                    <th className="px-4 py-2 phones:p-1">Timestamp</th>
                    <th className="px-4 py-2 phones:p-1">SendBy</th>
                    <th className="px-4 py-2 phones:p-1">Status</th>
                    <th className="px-4 py-2 phones:p-1">Action</th>
                </tr>
            </thead>
            <tbody>
                {bugShow.map((bug,id) => (
                    <tr key={bug.timestamp} className='bg-stone-300 font-semibold'>
                        <td className="px-4 py-2 border phones:p-1">{bug.description.slice(0,10)}</td>
                        <td className="px-4 py-2 border phones:p-1">{bug.timestamp.slice(0, 10)}</td>
                        <td className="px-4 py-2 border phones:p-1">{bug.SendBy}</td>
                        <td className={`px-4 py-2 border phones:px-1 ${bug.color}`}>
      <button onClick={() => setDropdownOpen(!dropdownOpen)} className="dropdown">
        {bug.status}
        {dropdownOpen && (
          <div className="dropdown-content absolute items-center top-0 right-0 gap-2 flex bg-slate-200 px-1 py-1 rounded-xs phones:bottom-0 phones:top-auto">
            <p className='text-2xl font-medium'>Pick a severity</p>
            <a onClick={() => {
              const bugRef = collection(db, 'bugs');
              const colRef = doc(bugRef, bug.timestamp);
              updateDoc(colRef, { color: 'bg-green-500', status: 'Less Severe' }, { merge: true });
              
            }}>Less Severe</a>
            <a onClick={() => {
                const bugRef = collection(db, 'bugs');
               const colRef = doc(bugRef, bug.timestamp);
               updateDoc(colRef, { color: 'bg-yellow-500', status: 'Medium' }, { merge: true });
            }}>Medium</a>
            <a onClick={() => {
                const bugRef = collection(db, 'bugs');
               const colRef = doc(bugRef, bug.timestamp);
               updateDoc(colRef, { color: 'bg-red-500', status: 'High' }, { merge: true });
            }}>Top Priority</a>
          </div>
        )}
      </button>
    </td>
    
                        <td className="px-4 py-2 border  phones:p-1">
                            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => {
                                const bugRef = collection(db, 'bugs');
                             const colRef = doc(bugRef, bug.timestamp);
                             deleteDoc(colRef);
                            }}>
                                Resolve
                            </button>
                        </td> 
                    </tr>
                ))}
            </tbody>
        </table>
         </div>

)}
       


<section className="text-center phones:w-[80vw] w-[70vw] min-h-[100vh] flex flex-col items-center justify-start pt-[200px] gap-2">
<h1 className="text-2xl font-bold mb-4">Feedback</h1>
<table className="w-3/4  border-collapse phones:text-xs">
            <thead >
                <tr className='bg-slate-800 text-white border-[1px] '>
                    <th className="px-4 py-2  ">Description</th>
                    <th className="px-4 py-2   ">Timestamp</th>
                    <th className="px-4 py-2  " >SendBy</th>
                </tr>
            </thead>
            <tbody>
                {gettingFeedback.map((fb,id) => (
                    <tr key={fb.timestamp} className='bg-stone-300 font-semibold phones:text-xs'>
                        <td className="px-4 py-2 border phones:text-[10px] ">
                            {fb.feedback.length > 20 ? (
                                <>
                                    {fb.feedback.slice(0, 20)}...
                                    <button onClick={() => openModal(fb.feedback)}>View Full Text</button>
                                </>
                            ) : (
                                fb.feedback
                            )}
                        </td>
                        <td className="px-4 py-2 border phones:text-[10px]">{fb.timestamp.slice(0, 10)}</td>
                        <td className="px-4 py-2 border phones:text-[10px]">{fb.sendBy}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
                        {full && (
                            <div className="fixed z-10 inset-0 overflow-y-auto">
                                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                    </div>

                                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                                        &#8203;
                                    </span>

                                    <div
                                        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                        role="dialog"
                                        aria-modal="true"
                                        aria-labelledby="modal-headline"
                                    >
                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                                        Feedback
                                                    </h3>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500">{full}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <button
                                                type="button"
                                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => setFull('')}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
    </section>


   </>
  );
};

export default BugReport;
