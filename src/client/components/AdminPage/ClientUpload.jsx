/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect,useContext } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db } from "/src/client/Firebase.jsx";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../Nav";
import Loading from "../Loading";
import PartnerLogic from "./PartnerLogic";
import Version from "../../Version/Version";
import { UserContext } from "../context/UserContext";



export default function ClientUpload() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [preset, setPreset] = useState("");
  const [partner, setPartner] = useState([]);
  const {level,user,uuid} = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);





  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (level < 8) {
        navigate("/");
      }
      if (level > 8) {
        setIsLoading(false);
        clearTimeout(timeoutId);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [level, navigate]);


  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };

    handleResize(); // Call the function initially to set the initial state

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener on component unmount
    };
  }, []);


  function handleSub(e) {
    e.preventDefault();
    const storageRef = ref(getStorage(), `products/${"partners"}/${image}`);

    // Upload the file to the bucket
    const uploadTask = uploadBytesResumable(storageRef, image);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      error => {
        console.error(error);
      },
      //here
      async () => {
        // Upload completed successfully, now get the download URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        // Save the download URL to Firestore

        const docRef = collection(db, "partner");
        const colRef = doc(docRef, name);

        setDoc(
          colRef,
          { imageUrl: downloadURL, name: name, status: 0, preset: preset},
          { merge: true }
        );

        const leadData = {
          name: name,
        };

        setImage("");
        name("");

        try {
          await sendToZapier(leadData);
          // Additional code to execute after sending data to Zapier, if needed
        } catch (error) {
          console.log(error);
        }
      }
    );
  }

  const handleImageChange = e => {
    const file = e.target.files[0];
    setImage(file);
  };


  return(
    <div className="flex gap-3 phones:flex-col">
          <Version />
          <PartnerLogic partner={partner} setPartner={setPartner} />   

          <div className="flex flex-col items-center justify-start shadow-card hover:shadow-card2 border-2 border-slate-900 rounded-lg mt-10 bg-secondary text-white p-10">
            <form className="flex flex-col items-start justify-start mb-10"  onSubmit={handleSub}>
              <label className="mb-2">Create a new client to the SQL database</label>
              <input type="text" className="mb-2 p-2 text-white" placeholder="Enter Client Name"  onChange={(e) => setName(e.target.value)}/>
              <textarea className="mb-2 p-2 text-white" placeholder="Enter Client Preset" onChange={(e) => setPreset(e.target.value)} />
              <label className="w-[200px] p-2 rounded !bg-green-500 cursor-pointer"><input type="file"    onChange={handleImageChange}/> Upload Client Image </label>
              <button className="border-2 border-green-600 rounded-lg px-3 py-2 text-green-100 cursor-pointer hover:bg-green-600 hover:text-green-200 mt-5">  Add Client  </button>
            </form>
           </div>

    <div className="overflow-y-auto max-h-[500px] h-[500px] mt-10 p-10 bg-secondary shadow-card hover:shadow-card2 border-2 border-slate-900 rounded-lg">
      <h2 className="text-white mb-4 font-bold text-lg">List of Squarelion clients</h2>
      <table className="table-auto text-white">
        <tbody className="pt-2">
          {partner.map((partner) => (
            <tr key={partner.id}>
              <td className="border px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="hover:underline ">
                    {partner.name}
                  </span>
                </div>
              </td>
              <td className="border px-4 py-2">  <img src={partner.imageUrl} alt={partner.name}  className="w-10 h-10 rounded-full"/> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </div>
  )

  

}