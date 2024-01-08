import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import { db, auth, fs } from "../../Firebase";
import User from "../User";
import {
  collection,deleteDoc,doc,  addDoc,updateDoc,setDoc,deleteField, arrayUnion,FieldValue} from "firebase/firestore";
import DesignerFunctions from "./DesignerFunctions";
import { getStorage, ref, uploadBytesResumable, getDownloadURL,} from "firebase/storage";
import "../../App.css";
import DesignerHeader from "./DesignerHeader";
import Title from "../../Title";
import { motion } from "framer-motion";
import Loading from "../Loading";
import HandlesViewImage from './HandlesViewImage';
import DesignerModal from "./DesignerModal";
import HandleSend from "./HandleSend";




export default function Designer() {
  const [designerData, setDesignerData] = useState([]);
  const [imageUrl, setImageUrl] = useState([]); // State for the designer data
  const [user, setUser] = useState("");
  const [uuid, setUuid] = useState("");
  const [level, setLevel] = useState("");
  const [image, setImage] = useState(""); // State for the designer data
  const [image1, setImage1] = useState(""); // State for the designer data
  const [image2, setImage2] = useState(""); // State for the designer data
  const [image3, setImage3] = useState(""); // State for the designer data
  const [ exampleImg, setExampleImg] = useState(""); // State for the designer data
  const [ exampleImg1, setExampleImg1] = useState(""); // State for the designer data
  const [ exampleImg2, setExampleImg2] = useState(""); // State for the designer data
  const [ exampleImg3, setExampleImg3] = useState(""); // State for the designer data
const[messageUploading, setMessageUploading] = useState('')
  const [successfully, setSuccessfully] = useState("");
  const [content, setContent] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [files, setFiles] = useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const [message, setMessage] = useState("");
  const [noti, setNoti] = useState();  const [dPost, setDPost] = useState("");
  const [dMonth, setDMonth] = useState("");
  const [dPage, setDPage] = useState("");
const [sureToReset, setSureToReset] = useState(false)
const [designerPostReset, setDesignerPostReset] = useState("")
const [designerMonthReset, setDesignerMonthReset] = useState("")
const [designerPageReset, setDesignerPageReset] = useState("")



  const newDesigner = designerData.filter((designer) => {
    if (level !== 11) {
      return !designer.id.endsWith("Test");
    } else if (level === 11) {
      return true
    }
    return true;
  });


 

  function handleSub(id) {
    newDesigner.map((designer, index) => {
      if (id === index) {
        const file = imageUrl; // This should be a File object
        const storageRef = ref(getStorage(), `products/${file.name}`);

        // Upload the file to the bucket
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setMessageUploading(`Uploading ${progress}%`)
          },
          error => {
            console.error(error);
          },
          async () => {
            // Upload completed successfully, now get the download URL
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

            // Save the download URL to Firestore
            const docRef = collection(db, "DesignerPage");
            const colRef = doc(docRef, designer.post + designer.month + designer.page);

            // Determine the field name based on the file type
            const fieldName = file.type === 'application/pdf' ? 'pdf' : 'designer';

            const updateData = {};
            updateData[fieldName] = downloadURL;

            await updateDoc(colRef, updateData, { merge: true });

            console.log("success");
            setSuccessfully(
              `${fieldName.toUpperCase()} has been uploaded. Click view button to view ${fieldName}!`
            );

            setTimeout(() => {
              setSuccessfully("");
            }, 7000);
          }
        );
      } else {
        return console.log("error");
      }
    });
  }


  function handleRestting(){
setSureToReset(true)

  }
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  setTimeout(() => {
    setIsLoading(false)
  }, 1000);
});


const forHandleViewImage = {
  name,
  user,
  dPost,
  dMonth,
  dPage,
  setSuccessfully,
  setImageUrls,
  setFiles
};

const animationProps = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, delay: 0.3 },
};


  return (
    <>
{isLoading && <>

<Loading/>

</>}

      <div className=" min-h-[100vh] pb-10 bg-primary">
        <Nav />{" "}
      
        <div className="">
          <User
            user={user}
            setUser={setUser}
            setUuid={setUuid}
            uuid={uuid}
            setLevel={setLevel}
          />
          <Title />

          <section>
            <DesignerHeader level={level} />
          </section>

          <div className=" pt-[50px]">
            <div className="flex flex-col items-center">
              <DesignerFunctions setDesignerData={setDesignerData} designerData={designerData} user={user}  setNoti={setNoti}/>

            
              {!isLoading && (<motion.section {...animationProps}>
                <table className="w-full text-sm text-left text-gray-300 shadow-md shadow-slate-800">
                  <thead className='className="text-xs  uppercase  bg-gray-700 text-gray-200'>
                    <tr className="text-center">
                      <th className="p-[1px]"></th>
                      <th className="px-4 py-2">Image</th>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Client</th>
                      <th className="px-4 py-2">Priority</th>
                      <th className="px-4 py-2">Instructions</th>
                      <th className="px-4 py-2">Actions</th>
                     {level > 8 && <th className="px-4 py-2">Assigned</th>}
                      <th className="px-4 py-2">Send</th>
                      <th className="px-4 py-2">Reset</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>


                    
                    {newDesigner.map((designer, id) =>
                      (designer.SendTo === user || level > 9 || user === 'Saskia') && designer.hide !== true ? (
                        <tr
                          key={id}
                          className="border-b bg-gray-600 border-gray-700 shadow-md  shadow-black"
                        >

                          <td className={`${designer.New ? 'border-l-[5px] border-blue-700  animate-pulse animate-thrice animate-duration-[3000ms] animate-ease-out ' : ''} `}></td>

                          <td className="border px-4 py-2"><img src={designer.img} className="w-[50px] h-[50px] rounded-md mr-4" /></td>
                          
                          <td className="border px-4 py-2">{designer.newDate}</td>

                          <td className="border px-4 py-2">{designer.page}</td>

                          <td className={`border px-4 py-2 ${designer.prio === "Prio" ? "bg-red-600" : "bg-gray-600"}`}>{designer.prio}</td>
                          <td className="border px-4 py-2">
                            <h1 className="cursor-pointer text-black bg-white text-md border-black border-2 p-2 hover:scale-110 transition-transform" onClick={() => { handleOpenModal(), setImage(designer.designer),
                               setImage1(designer.designer1), setImage2(designer.designer2), setImage3(designer.designer3),
                                setContent(designer.subject); setExampleImg(designer.img1); setExampleImg1(designer.img2); 
                                setExampleImg2(designer.img3); setExampleImg3(designer.img4); setDPost(designer.post);
                                 setDMonth(designer.month); setDPage(designer.page); }}> View </h1>

                            {designer.pdf === undefined || designer.pdf === "" ? null : (
                              <h1 className="cursor-pointer text-black bg-white text-md border-black border-2 p-2 hover:scale-110 transition-transform" onClick={() => { window.open(designer.pdf); }}> View Pdf </h1>
                            )}
                          </td>
                          <td className="border px-4 py-2">
                            <form onSubmit={() => { handleSub(id); }} className="designer-upload  mr-5 ml-4">
                              <motion.label
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                onClick={() => {
                                  setDPost(designer.post);
                                  setDMonth(designer.month);
                                  setDPage(designer.page);
                                }}
                                className="custom-file-upload cursor-pointer text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 lg:w-[120px]"
                              >
                            <HandlesViewImage {...forHandleViewImage} />
                              </motion.label>
                            </form>
                          </td>
{level > 8 && <td className="border px-4 py-2 font-bold">
  {designer.SendTo}
</td>
}
                          <td className="border px-4 py-2">
                            <div>
                              {designer.designer !== undefined || designer.pdf !== undefined ?  (
                                <HandleSend 
                                 newDesigner={newDesigner}  id={id} db={db} collection={collection} doc={doc} 
                                 setDoc={setDoc} user={user} setImageUrl={setImageUrl} /> 
                              ) :null }
                            </div>
                          </td>
                             <td className="border px-4 py-2">
                         {designer.designer !== undefined || designer.pdf !== undefined ? (
                        
                           <button
                             onClick={() =>{  handleRestting(id),setDesignerPostReset(designer.post),
                               setDesignerMonthReset(designer.month),setDesignerPageReset(designer.page) }}
                             className="bg-red-700 text-white p-2 rounded-md hover:bg-red-800 cursor-pointer relative z-[2]"
                           >
                             {" "}
                             Reset{" "}
                           </button>

                       
                         ) : null}
                           </td>

                        
                        </tr>
                      ) : null
                    )}

                     {sureToReset && (
                            <>
                              <div className='fixed top-0 z-[1000] left-0 w-full h-full bg-slate-400/20 gap-4  flex justify-center items-center'>
                                <div className="flex gap-3 flex-col bg-white p-5 rounded-md">
                                <p className='text-black font-semibold text-xl'>Are you sure you want to reset this?</p>
                                <button onClick={() => {
                                  
                                  const docRef = collection(db, "DesignerPage");
                                  const colRef = doc(
                                    docRef,
                                    designerPostReset + designerMonthReset + designerPageReset
                                  );
                                  updateDoc(colRef, {
                                    designer: deleteField(),
                                    designer1: deleteField(),
                                    designer2: deleteField(),
                                    designer3: deleteField(),
                                    pdf: deleteField()
                                  }, { merge: true });
                                  setTimeout(() => {
                                    setSureToReset(false);
                                  }, 500);
                                }} className="bg-red-700 text-white p-2 rounded-md hover:bg-red-800 cursor-pointer">Yes</button>
                                <button onClick={() => setSureToReset(false)} className="bg-green-700 text-white p-2 rounded-md hover:bg-green-800 cursor-pointer">No</button>
                                </div>
                               
                              </div>
                            </>
                          )}
                  </tbody>
                </table>
                </motion.section>)}
            
            </div>

            <div className="fixed bottom-0 bg-slate-200 w-full  ">
              <h2 className="text-xl ml-4">{messageUploading}</h2>
              <h2 className="text-xl ml-4">{successfully}</h2>
            </div>
          </div>


        <DesignerModal openModal={openModal} handleClose={handleClose} image={image} image1={image1} image2={image2} image3={image3} content={content} user={user} message={message} setMessage={setMessage} dPost={dPost} dMonth={dMonth} dPage={dPage} setContent={setContent} arrayUnion={arrayUnion} exampleImg={exampleImg} exampleImg1={exampleImg1} exampleImg2={exampleImg2} exampleImg3={exampleImg3} />
        
        </div>{" "}
      </div>
    </>
  );
}
