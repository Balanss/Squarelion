import { useState } from 'react';
import { getFirestore, collection, addDoc,setDoc,doc } from 'firebase/firestore';
import { db } from '../firebase';

const FeedbackPage = ({user}) => {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    

    const handleSubmit = async () => {
        const feedbackCollection = collection(db, 'feedback');

        const timestamp = new Date().toISOString();
        const Feedback ={
                 feedback: feedback,
            timestamp: timestamp,
            sendBy: user,
        }

        await setDoc(doc(feedbackCollection, timestamp), Feedback);

        setFeedback('');
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    const currentDate = new Date();
    const startDate = new Date('2023-12-01');
    const endDate = new Date('2023-12-07');

    if (currentDate < startDate || currentDate > endDate) {

        return  <div className="text-center  text-white w-[40vw] h-[100vh] flex flex-col items-center justify-start pt-10 gap-2">
        <p>Feedback is only available from December 1st to December 7th.</p>
    </div>


    } else{
        return (
            <div className="text-center  text-white phones:w-[80vw] w-[40vw] h-[100vh] flex flex-col items-center justify-start pt-10 gap-2">
              {submitted ? (
                  <p>Feedback submitted.</p>
              ) : (
                  <div>
                      <p className='mb-10 text-lg font-bold'>Please provide feedback on how to increase work productivity and overall performance of Media Pilot:</p>
                      <textarea value={feedback} placeholder='Please provide feedback' onChange={(e) => setFeedback(e.target.value)}    className="w-full h-40 mb-2 p-2 border text-black border-gray-300 rounded" />
                        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                  Submit
                              </button>
                  </div>
              )}
          </div>
          );
    }

    
};

export default FeedbackPage;
