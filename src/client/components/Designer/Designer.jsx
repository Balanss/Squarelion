import React, { useState } from "react";
import Nav from "../Nav";
import { db, auth, fs } from "../../Firebase";
import User from "../User";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
  setDoc,
  deleteField,
  getDoc,
} from "firebase/firestore";

import DesignerFunctions from "./DesignerFunctions";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import "../../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DesignerHeader from "./DesignerHeader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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

  const [successfully, setSuccessfully] = useState("");
  const [content, setContent] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [files, setFiles] = useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  function handleSub(id) {
    designerData.map((designer, index) => {
      if (id === index) {
        const storageRef = ref(getStorage(), `products/${imageUrl}`);

        // Upload the file to the bucket
        const uploadTask = uploadBytesResumable(storageRef, imageUrl);
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
            const docRef = collection(db, "DesignerPage");
            const colRef = doc(
              docRef,
              designer.post + designer.month + designer.page
            );

            updateDoc(colRef, { designer: downloadURL }, { merge: true });
            console.log("success");
            setSuccessfully(
              "Image has been uploaded. Click view button to view image!"
            );

            setTimeout(() => {
              setSuccessfully("");
            }, 7000);
          },
          { merge: true }
        );
      } else {
        return console.log("error");
      }
    });
  }

  const [dPost, setDPost] = useState("");
  const [dMonth, setDMonth] = useState("");
  const [dPage, setDPage] = useState("");

  const handleImageChange = async e => {
    const selectedFiles = e.target.files;
    if (!selectedFiles || selectedFiles.length > 4) {
      alert("You can only upload a maximum of 4 images at once.");
      return;
    }

    const uploadPromises = Array.from(selectedFiles).map(file => {
      const storageRef = ref(getStorage(), `products/${name}/${file.name}}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // Update progress if needed
          },
          error => {
            console.error("Upload Error:", error);
            reject(error);
          },
          async () => {
            // Upload completed successfully, now get the download URL
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadURL);
          }
        );
      });
    });

    try {
      const downloadURLs = await Promise.all(uploadPromises);

      const docData = {
        designer: downloadURLs[0],
        designer1: downloadURLs[1] || "",
        designer2: downloadURLs[2] || "",
        designer3: downloadURLs[3] || "",
        DesignedBy: user,
      };

      await setDoc(doc(fs, "DesignerPage", dPost + dMonth + dPage), docData, {
        merge: true,
      });

      setImageUrls(downloadURLs);
      setFiles(selectedFiles);
    } catch (error) {
      console.error("Error updating Firestore:", error);
      // Handle the error appropriately
    }
  };

  //sends towards saskia
  function handleSend(id) {
    designerData.map((designer, index) => {
      if (id === index) {
        console.log("success", designer.post);

        const docRef = collection(db, designer.page);
        const colRef = doc(docRef, designer.post + designer.month);
        setDoc(
          colRef,
          {
            designer: designer.designer,
            designer1: designer.designer1,
            designer2: designer.designer2,
            designer3: designer.designer3,

            hide: true,
            color: "#00eaff",
            status: "Design Done",
            StatusText: "Design Done",
            DesignUploadedBy: user,
          },
          { merge: true }
        );

        const docR = collection(db, "DesignerPage");
        const colR = doc(docR, designer.post + designer.month + designer.page);
        deleteDoc(colR);
        setImageUrl("");
      } else {
        return console.log("error");
      }
    });
  }

  return (
    <>
      <div className=" h-[100vh]  bg-slate-800">
        <Nav />{" "}
        <div className="">
          <User
            user={user}
            setUser={setUser}
            setUuid={setUuid}
            uuid={uuid}
            setLevel={setLevel}
          />

          <section>
            <DesignerHeader />
          </section>

          <div className=" pt-[50px]">
            <div className="flex flex-col items-center">
              <DesignerFunctions setDesignerData={setDesignerData} />

              <section>
                <table className="w-full text-sm text-left text-gray-300 shadow-md shadow-slate-800">
                  <thead className='className="text-xs  uppercase  bg-gray-700 text-gray-200'>
                    <tr>
                      <th className="px-4 py-2">Image</th>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Client</th>
                      <th className="px-4 py-2">Priority</th>
                      <th className="px-4 py-2">Instructions</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {designerData.map((designer, id) =>
                      designer.hide === true ? null : (
                        <tr
                          key={id}
                          className="border-b bg-gray-600 border-gray-700 shadow-md hover:scale-105 shadow-black"
                        >
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
                              designer.prio === "Prio"
                                ? "bg-red-600"
                                : "bg-gray-600"
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
                              }}
                            >
                              {" "}
                              View{" "}
                            </h1>
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
                                className="custom-file-upload cursor-pointer text-white   hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 lg:w-[120px]"
                              >
                                <input
                                  type="file"
                                  accept="image/*"
                                  multiple
                                  onChange={handleImageChange}
                                />
                                Upload Image
                              </label>
                            </form>
                          </td>
                          <td className="border px-4 py-2">
                            <div>
                              {designer.designer === undefined ? null : (
                                <button
                                  onClick={() => {
                                    handleSend(id);
                                  }}
                                  className="bg-slate-800 text-white p-2 rounded-md hover:bg-gray-900 cursor-pointer"
                                >
                                  {" "}
                                  Finish{" "}
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </section>
            </div>

            <div className="fixed bottom-0 bg-slate-200 w-full  ">
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
                {content}
                <section className="flex lg:w-[40vw] flex-wrap  gap-5 justify-center">
                  <img className="w-[300px]" src={image} />
                  <img className="w-[300px]" src={image1} />
                  <img className="w-[300px]" src={image2} />
                  <img className="w-[300px]" src={image3} />
                </section>
              </Typography>
            </Box>
          </Modal>
        </div>{" "}
      </div>
    </>
  );
}
