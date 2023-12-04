import React, { useState } from "react";
import Nav from "../Nav";
import { db, auth, fs } from "../../Firebase";
import User from "../User";
import {
  collection,deleteDoc,doc,  addDoc,updateDoc,setDoc,deleteField, arrayUnion,FieldValue} from "firebase/firestore";
import DesignerFunctions from "./DesignerFunctions";
import { getStorage, ref, uploadBytesResumable, getDownloadURL,} from "firebase/storage";
import "../../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DesignerHeader from "./DesignerHeader";
import Title from "../../Title";


const style = {
  position: "absolute", bottom: "0", top: "35%", left: "60%", transform: "translate(-50%, -50%)", bgcolor: "background.paper", border: "2px solid #000", boxShadow: 24, p: 4, overflow: "scroll",
};

export default function Designer() {
  const [designerData, setDesignerData] = useState([]);
  const [imageUrl, setImageUrl] = useState(""); // State for the designer data
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
  const [roles,setRoles] = useState([])
  const [noti, setNoti] = useState();


  const newDesigner = designerData.filter((designer) => {
    if (level !== 11) {
      return !designer.id.endsWith("Test");
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

  const [dPost, setDPost] = useState("");
  const [dMonth, setDMonth] = useState("");
  const [dPage, setDPage] = useState("");
  const [requestDelete, setRequestDelete] = useState(false);
  const [images,setImages]= useState([])



  const handleImageChange = async e => {
    const selectedFiles = e.target.files;
    if (!selectedFiles || selectedFiles.length > 4) {
      alert("You can only upload a maximum of 4 files at once.");
      return;
    }

    const uploadPromises = Array.from(selectedFiles).map(file => {
      const storageRef = ref(getStorage(), `products/${name}/${file.name}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setSuccessfully(`Uploading ${progress}%`)
          },
          error => {
            console.error("Upload Error:", error);
            reject(error);
          },
          async () => {
            // Upload completed successfully, now get the download URL
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve({ url: downloadURL, type: file.type });
          }
        );
      });
    });

    try {
      const files = await Promise.all(uploadPromises);

      
      const pdfs = files.filter(file => file.type === 'application/pdf').map(file => file.url);

       const newImages = files.filter(file => file.type.startsWith('image/')).map(file => file.url);
      setImages(prevImages => [...prevImages, ...newImages]);

     

      const imageData = {
        designer: images[0] || "",
        designer1: images[1] || "",
        designer2: images[2] || "",
        designer3: images[3] || "",
      };

      const pdfData = {
        pdf: pdfs[0] || "",
      };

      if (images[0]) {
        const docData = {
          ...imageData,
          DesignedUploadedBy: user,
        };
        await setDoc(doc(fs, "DesignerPage", dPost + dMonth + dPage), docData, {
          merge: true,
        });
      } else if (pdfs[0]) {
        const docData = {
          ...pdfData,
          DesignedUploadedBy: user,
        };
        await setDoc(doc(fs, "DesignerPage", dPost + dMonth + dPage), docData, {
          merge: true,
        });
      }

      setImageUrls(images);
      setFiles(selectedFiles);
      setSuccessfully(
      
        "Files have been uploaded. Click view button to view them!"
      );

      setTimeout(() => {
        setSuccessfully("");
      }, 7000);
    } catch (error) {
      console.error("Error updating Firestore:", error);
      // Handle the error appropriately
    }
  };

 



const [sureToReset, setSureToReset] = useState(false)
const [designerPostReset, setDesignerPostReset] = useState("")
const [designerMonthReset, setDesignerMonthReset] = useState("")
const [designerPageReset, setDesignerPageReset] = useState("")

  function handleRestting(){
setSureToReset(true)
setImages('')
  }

  //sends towards saskia
  function handleSend(id) {
    newDesigner.map((designer, index) => {
      if (id === index) {
        console.log("success", designer.post);

        if (designer.month.includes("2023")) {
          const docRef = collection(db, designer.page);
          const colRef = doc(docRef, designer.post + designer.month);
          setDoc(
            colRef,
            {
              designer: designer.designer,
              designer1: designer.designer1,
              designer2: designer.designer2,
              designer3: designer.designer3,
              pdf: designer.pdf || "",
              hide: true,
              color: "#00eaff",
              status: "Design Done",
              StatusText: "Design Done",
              DesignUploadedBy: user,
            },
            { merge: true }
          );
        } else {
          const docRef = collection(db, designer.page);
          const colRef = doc(docRef, designer.month);
          setDoc(
            colRef,
            {
             [designer.post + designer.month]: {
              designer: designer.designer,
              designer1: designer.designer1,
              designer2: designer.designer2,
              designer3: designer.designer3,
              pdf: designer.pdf || "",
              hide: true,
              color: "#00eaff",
              status: "Design Done",
              StatusText: "Design Done",
              DesignUploadedBy: user,
             }
            },
            { merge: true }
          );
        }

        const docR = collection(db, "DesignerPage");
        const colR = doc(docR, designer.post + designer.month + designer.page);
        deleteDoc(colR);
        setImageUrl("");
        setImages([])
      } else {
        return console.log("error");
      }
    });
  }



  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    const docRef = collection(db, "DesignerPage");
    const colRef = doc(docRef, dPost + dMonth + dPage);
    updateDoc(colRef, {
      subject: arrayUnion(message +" - "+ user),
      New: false,
    });


    const docR = collection(db, dPage);
    const colR = doc(docR, dPost + dMonth);
    setDoc(
      colR,
      {
        color: "#FF4500",
        status: "Feedback ",
        StatusText: "Feedback",
   
      },
      { merge: true }
    );
    
   
    setContent(prevContent => [...prevContent, message +" - "+ user]);

    setTimeout(() => {
      setMessage("");
    },2000)

    
  }





  return (
    <>
      <div className=" min-h-[100vh] pb-10 bg-slate-800">
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

            
                <section>
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
                          <td className="border px-4 py-2">
                            <img
                              src={designer.img}
                              className="w-[50px] h-[50px] rounded-md mr-4"
                            />
                          </td>
                          
                          <td className="border px-4 py-2">
                            {designer.date}-{designer.month}
                          </td>
                          <td className="border px-4 py-2">{designer.page}</td>
                          <td
                            className={`border px-4 py-2 ${
                              designer.prio === "Prio" ? "bg-red-600" : "bg-gray-600"
                            }`}
                          >
                            {designer.prio}
                          </td>
                          <td className="border px-4 py-2">
                            <h1
                              className="cursor-pointer text-black  bg-white text-md border-black border-2 p-2  hover:scale-110 transition-transform "
                              onClick={() => {
                                handleOpenModal(),
                                  setImage(designer.designer),
                                  setImage1(designer.designer1),
                                  setImage2(designer.designer2),
                                  setImage3(designer.designer3),
                                  setContent(designer.subject);
                                  setExampleImg(designer.img1);
                                  setExampleImg1(designer.img2);
                                  setExampleImg2(designer.img3);
                                  setExampleImg3(designer.img4);
                                  setDPost(designer.post);
                                  setDMonth(designer.month);
                                  setDPage(designer.page);
                              }}
                            >
                              {" "}
                              View{" "}
                            </h1>

                            {designer.pdf === undefined || designer.pdf === "" ? null : (
                              <h1
                                className="cursor-pointer text-black  bg-white text-md border-black border-2 p-2  hover:scale-110 transition-transform "
                                onClick={() => {
                                  window.open(designer.pdf);
                                }}
                              >
                                {" "}
                                View Pdf
                              </h1>
                            )}
                          </td>
                          <td className="border px-4 py-2">
                            <form
                              onSubmit={() => {
                                handleSub(id);
                              }}
                              className="designer-upload  mr-5 ml-4"
                            >
                              <label
                                onClick={() => {
                                  setDPost(designer.post);
                                  setDMonth(designer.month);
                                  setDPage(designer.page);
                                }}
                                className="custom-file-upload cursor-pointer text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 lg:w-[120px]"
                              >
                                <input type="file" accept="image/*" multiple onChange={handleImageChange} /> Upload
                              </label>
                            </form>
                          </td>
{level > 8 && <td className="border px-4 py-2 font-bold">
  {designer.SendTo}
</td>
}
                          <td className="border px-4 py-2">
                            <div>
                              {designer.designer !== undefined || designer.pdf !== undefined ?  (
                                <button
                                  onClick={() => {
                                    handleSend(id);
                                  }}
                                  className="bg-slate-800 text-white p-2 rounded-md hover:bg-gray-900 cursor-pointer"
                                >
                                  {" "}
                                  Finish{" "}
                                </button>
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
                                  setImages([])
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
                </section>
            
            </div>

            <div className="fixed bottom-0 bg-slate-200 w-full  ">
              <h2 className="text-xl ml-4">{messageUploading}</h2>
              <h2 className="text-xl ml-4">{successfully}</h2>
            </div>
          </div>


          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="max-w-[80vw] max-h-[80vw]  "
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ textAlign: "center" }}
              >
              
<div>
  <button className='bg-red-700 text-white p-2 rounded-md hover:bg-red-800  mb-5 cursor-pointer' onClick={handleClose}>Close</button>
  
</div>

                <section className="flex lg:w-[90vw] flex-row items-center flex-wrap content-center  gap-5 justify-center"> 
                  {images.map((image, index) => (
      <img className="w-[300px]" key={index} src={image} alt={`Image ${index + 1}`} />
    ))}

                  <hr className="w-full border-2 border-black" />
<div>
  {content.map((message, index) => (
    <div key={index}>
     <p className="w-[80%] m-auto whitespace-pre-wrap"> {message}</p>
      <br />
    </div>
  ))}

<div>
 <form onSubmit={handleSubmitMessage}>
  <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message here" className='border-2 border-black p-2 rounded-md'/>
  <button className='bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800  ml-1 cursor-pointer'>Send</button>
 </form>
</div>

<div className="flex flex-row items-center mt-3">

                    <img className="w-[200px]" src={exampleImg} />
                    <img className="w-[200px]" src={exampleImg1} />
                    <img className="w-[200px]" src={exampleImg2} />
                    <img className="w-[200px]" src={exampleImg3} />
</div>
</div>


  

                </section>
              </Typography>
            </Box>
          </Modal>
        
        </div>{" "}
      </div>
    </>
  );
}
