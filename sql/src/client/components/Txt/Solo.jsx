import React,{useEffect,useState,useContext} from "react";
import pdf from '../../assets/pdf.png'
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { toast,ToastContainer } from "react-toastify";
import { UserContext } from "../context/UserContext";

import "react-toastify/dist/ReactToastify.css";

function Solo({
  createPdf,
  isChecked,
  setIsChecked,
  orderPost,
  date,
  uniqueId,
  type,
  month,
  page,
  imageUrl,
  boosting,
  post,
  subject,
  image1Url,
  image2Url,
  image3Url,
  preset,

}) {

 
  const [link, setLink] = useState('');

  const {level,email,user} = useContext(UserContext);

  useEffect(() => {
    const docRef = doc(db, page, "Link");

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data && data[page+subject]) {
          const url = (data[page+subject]);
          setLink(url['URL']);
         
        } else {
          console.log("No such field!");
          
          setLink('')
        }
      } else {
        console.log("No such document!");
      }
    });

    // Clean up function
    return () => unsubscribe();
  }, [page, post, month,]); // Add dependencies here if they can change over time


  

  const handleDownload = async() => {
    const currentDate = new Date();

    // Get the current day, month, and year
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
    const currentYear = currentDate.getFullYear();
    const postDate = `${currentYear}-${currentMonth}-${currentDay}`;
    const data = {
      postID: uniqueId,
      channel: type,
      month: `${month}-${date}`,
      name: page,
      postDate: postDate,
      images: imageUrl,
      image1: image1Url,
      image2: image2Url,
      image3: image3Url,
      boosting: boosting,
      subject: subject,
      post: orderPost,
      payload: createPdf,
      preset: preset,
      UserEmail: email,
      userName: user,

    }

    try {
     
      const response = await fetch(import.meta.env.VITE_SOLO_DOC, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data),

    });
    const text = await response.text();
    console.log(text);
    toast.success('PDF is being uploaded to Google Drive and send to your email');
      // Additional code to execute after sending data to Zapier, if needed
    } catch (error) {
      console.log(error);
      toast.error('Error uploading PDF to Google Drive');
    }

    setTimeout(() => {
      setIsChecked(false);
    }, 1000);

  
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <ToastContainer />
    {!isChecked && <h1>Click to allow upload PDF </h1>}

    {isChecked ?  <img src={pdf} alt="pdf" className="w-20 h-20 m-auto mt-2 hover:scale-[1.1]" title="Click to upload pdf" onClick={handleDownload} /> : null}
    {link !== ''&& <div className="className='rounded mt-2 underline cursor-pointer hover:scale-[1.1] bg-slate-900 px-4 py-1 text-sm"><a  className="rounded " target="_blank" rel="noopener noreferrer"  href={link}> Go to docs </a></div>}
    </div>
  );
}

export default Solo;
