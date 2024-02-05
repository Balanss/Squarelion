import React from 'react'
import { Modal, Box, Typography } from "@mui/material";
import HandleSubmitButton from './HandleSubmitButton';


const style = {
    position: "absolute", bottom: "0", top: "35%", left: "60%",
     transform: "translate(-50%, -50%)", bgcolor: "background.paper", border: "2px solid #000",
      boxShadow: 24, p: 4, overflow: "scroll", 
  };

export default function DesignerModal({
    openModal,
    handleClose,
    image,
    image1,
    image2,
    image3,
    content,
    user,
    message,
    setMessage,
    dPost,
    dMonth,
    dPage,
    setContent,
    arrayUnion,
    exampleImg,
    exampleImg1,
    exampleImg2,
    exampleImg3
}) {

    const handleSubmitButtonProps = {
        user,
        message,
        setMessage,
        dPost,
        dMonth,
        dPage,
        setContent,
        arrayUnion
      };



    return (
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
            <img className="w-[300px]" src={image} />
              <img className="w-[300px]" src={image1} />
              <img className="w-[300px]" src={image2} />
              <img className="w-[300px]" src={image3} />  
              <hr className="w-full border-2 border-black" />
<div>
{content.map((message, index) => (
<div key={index} className='text-left '>
 <p className="w-[80%] m-auto whitespace-pre-wrap "> {message}</p>
  <br />
</div>
))}

<HandleSubmitButton {...handleSubmitButtonProps} />
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
    )
}
