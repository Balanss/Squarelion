import React from 'react'
import { Modal, Box, Typography } from "@mui/material";
import { collection, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../../../Firebase';

export default function ModalForEddting({openModalBar,handleCloseBar,title,forPost,
    setEditDetails,editDetails,page,month,post,uniqueId,objective,type,boosting
    ,date,viewer,level}) {

      const styleBar = {
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      };


    function handleEditted(i) {
        if (title === "count") {
          const docRef = collection(db, page);
          const colRef = doc(docRef, editDetails + month);
    
          setDoc(
            colRef,
            {
              client: page,
              color: "orange",
              count: editDetails,
              date: date,
              month: month,
              objective: objective,
              priority: "No",
              status: "pending",
              type: type,
              unid: uniqueId,
              boosting: boosting,
            },
            { merge: true }
          );
    
          const docR = collection(db, page);
          const colR = doc(docR, post + month);
          deleteDoc(colR);
        } else {
          const docRef = collection(db, page);
          const colRef = doc(docRef, month);
          const key = `${post + month}.${title}`;
          updateDoc(colRef, { [key]: editDetails }, { merge: true });
        }
    
        handleCloseBar();
      }



  return (
    <Modal
    open={openModalBar}
    onClose={handleCloseBar}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    className="max-w-[80vw] max-h-[80vw]  "
  >
    <Box sx={styleBar} className="lg:!top-[50%] 0">
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        style={{ textAlign: "center" }}
        className="flex flex-col gap-5"
      >
        <p className="cursor-pointer">
          {" "}
          Edit {title} : {forPost}{" "}
        </p>
        <input
          type="text"
          className="border-2 border-black  "
          placeholder={`Editing ${forPost}`}
          onChange={e => setEditDetails(e.target.value)}
        />
        <button
          className="bg-blue-700 text-white px-3 py-2 rounded-md ml-3"
          onClick={() => {
            handleEditted();
          }}
        >
          {" "}
          Submit{" "}
        </button>
      </Typography>
    </Box>
  </Modal>
  )
}
