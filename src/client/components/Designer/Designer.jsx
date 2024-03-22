import React, { useEffect, useState,useContext } from "react";
import Nav from "../Nav";
import { db, auth, fs } from "../../Firebase";
import { collection,deleteDoc,doc,  addDoc,updateDoc,setDoc,deleteField, arrayUnion,FieldValue} from "firebase/firestore";
import DesignerFunctions from "./DesignerFunctions";
import "../../App.css";
import DesignerHeader from "./DesignerHeader";
import Title from "../../Title";
import Loading from "../Loading";
import HandlesViewImage from './HandlesViewImage';
import DesignerModal from "./DesignerModal";
import HandleSend from "./HandleSend";
import { UserContext } from "../context/UserContext";
import view from "../../assets/view.png";
import hide from "../../assets/unseen.png";
import reset from "../../assets/reset.png";
import { motion,AnimatePresence } from "framer-motion";

import DesignerReset from "./DesignerReset";





export default function Designer() {
  const { user, uuid, level } = React.useContext(UserContext);
  const [show,setShow] = useState(false)
  const [designerData, setDesignerData] = useState([]);
  const [imageUrl, setImageUrl] = useState([]); // State for the designer data
  const [image, setImage] = useState([]); // State for the designer data
  const [image1, setImage1] = useState([]); // State for the designer data
  const [image2, setImage2] = useState([]); // State for the designer data
  const [image3, setImage3] = useState([]); // State for the designer data
  const [ exampleImg, setExampleImg] = useState(""); // State for the designer data
  const [ exampleImg1, setExampleImg1] = useState(""); // State for the designer data
  const [ exampleImg2, setExampleImg2] = useState(""); // State for the designer data
  const [ exampleImg3, setExampleImg3] = useState(""); // State for the designer data
const[messageUploading, setMessageUploading] = useState('')
  const [successfully, setSuccessfully] = useState("");
  const [content, setContent] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [files, setFiles] = useState([]);
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


const [hiddenRows, setHiddenRows] = useState(JSON.parse(localStorage.getItem('hiddenRows')) || []);




useEffect(() => {
  localStorage.setItem('hiddenRows', JSON.stringify(hiddenRows));
}, [hiddenRows]);


const handleClick = (designer) => {
    setImage(designer.files && designer.files[0] ? designer.files[0] : 'nothing');
    setImage1(designer.files && designer.files[1] ? designer.files[1] : 'nothing');
    setImage2(designer.files && designer.files[2] ? designer.files[2] : 'nothing');
    setImage3(designer.files && designer.files[3] ? designer.files[3] : 'nothing');
   setContent(designer.subject);
    setExampleImg(designer.img1);
     setExampleImg1(designer.img2); 
   setExampleImg2(designer.img3);
    setExampleImg3(designer.img4); 
    setDPost(designer.post);
    setDMonth(designer.month);
     setDPage(designer.page); 
     setShow(true);
}

const handleMouseEnter = (designer) => {
  setImage(designer.files && designer.files[0] ? designer.files[0] : 'nothing');
  setImage1(designer.files && designer.files[1] ? designer.files[1] : 'nothing');
  setImage2(designer.files && designer.files[2] ? designer.files[2] : 'nothing');
  setImage3(designer.files && designer.files[3] ? designer.files[3] : 'nothing');
 setContent(designer.subject);
  setExampleImg(designer.img1);
   setExampleImg1(designer.img2); 
 setExampleImg2(designer.img3);
  setExampleImg3(designer.img4); 
  setDPost(designer.post);
  setDMonth(designer.month);
   setDPage(designer.page); 
}




  return (
    <>
{isLoading && <>

<Loading/>

</>}

      <div className=" min-h-[100vh]  pb-10 bg-primary laptop:overflow-x-hidden">
        <Nav />
        <div className="">
          <Title />
   <section className="">
            <DesignerHeader level={level} />
          </section>

          <div className=" pt-[75px] phones:w-screen phones:p-2  phones:overflow-auto  w-fit m-auto p-10  flex flex-col">
            <h1 className="text-white text-2xl font-bold tracking-wide"> {user} </h1>
            <hr className=" mt-2" />
            <div className="flex flex-col items-start  laptop:overflow-x-hidden">
              <DesignerFunctions setDesignerData={setDesignerData} designerData={designerData} user={user}  setNoti={setNoti}/>
      <div className="mb-5">
    {hiddenRows.length > 0 && <button onClick={() => setHiddenRows([])} className="bg-blue-700 mt-2 text-white p-2 rounded-md hover:bg-blue-800 cursor-pointer relative z-[2]">Show {hiddenRows.length} hidden rows</button>}
      </div>
            
              {!isLoading && (<motion.section {...animationProps}>
                <table className="w-full text-sm text-left text-gray-300 shadow-md shadow-slate-800">
                  <thead className='text-xs  uppercase  bg-gray-700 text-gray-200'>
                    <tr className="text-center !text-xs">
                      <th className="p-[1px]"> </th>
                      <th className="px-4 py-2">Image</th>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Client</th>
                      <th className="laptop:px-4 laptop:py-2 px-2">Priority</th>
                      <th className="px py-2">View</th>
                      <th className="px-4 py-2">Upload</th>
                      <th className="px-4 py-2">Send</th>
                      <th className="px-4 py-2">Reset</th>   
                      <th className="px-4 py-2">Hide</th>
                      {level > 8 && <th className="px-4 py-2">Assigned</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {newDesigner.map((designer, id) =>
                      (designer.SendTo === user || level > 9 || user === 'Saskia') && designer.hide !== true ? (
                        <tr  key={id} className={`border-b bg-gray-600 border-gray-700 shadow-md shadow-black ${hiddenRows.includes(id) ? 'hidden' : ''}`}>
                          <td className={`${designer.New ? 'border-l-[5px] border-blue-700  animate-pulse animate-thrice animate-duration-[3000ms] animate-ease-out ' : ''} `}></td>

                          <td className="border  px-2 py-1"><img src={designer.img} className="w-[50px]  h-[50px] m-auto rounded-md " /></td>
                          
                          <td className="border px-2 py-2">{designer.newDate}</td>

                          <td className="border px-4 py-2">{designer.page}</td>

                          <td className={`border text-center laptop:px-4 laptop:py-2 ${designer.prio === "Prio" ? "bg-red-600" : "bg-gray-600"}`}>{designer.prio}</td>
                          <td className="border laptop:px-4 laptop:py-2">
                            <img src={view} className="w-8 h-8 cursor-pointer hover:scale-[1.1]"   onClick={() => { handleClick(designer) }} title="View content" />
                          </td>
                          {/* //this uploads and allows to view the images */}
                          <td className="border px-4 py-2" onMouseEnter={ () => handleMouseEnter(designer)}>
                            <HandlesViewImage {...forHandleViewImage} />
                          </td>

                        
                           <td className={`border px-4 py-2  ${designer.files && designer.files[0]? 'opacity-100':'opacity-20'}`}>
                            {/* //this sends the images to the database and removes the task */}
                                <HandleSend  newDesigner={newDesigner}  id={id} db={db} collection={collection} doc={doc}  setDoc={setDoc} user={user} setImageUrl={setImageUrl} /> 
                          </td>
                          
    
                         
                             <td className="border px-4 py-2">
                         {designer.files&& designer.files[0] && (
                            <img src={reset} onClick={() =>{  handleRestting(id),setDesignerPostReset(designer.post),
                              setDesignerMonthReset(designer.month),setDesignerPageReset(designer.page) }} className="w-8 h-8 cursor-pointer hover:scale-[1.1]" title="Reset" />
                        )}
                           </td>
                           <td className="border px-4 py-2">
                            <img src={hide} className="w-8 h-8 cursor-pointer hover:scale-[1.1]"  onClick={() => setHiddenRows([...hiddenRows, id])} title="Hide" />
                          </td>

                          {level > 8 && <td className="border px-4 py-2 text-xs">
                           {designer.SendTo}
                          </td>
                            }
                     
                        </tr>
                      ) : null
                    )}
                   
                       {sureToReset && (
                    <DesignerReset sureToReset={sureToReset}
                     setSureToReset={setSureToReset}
                      designerPostReset={designerPostReset}
                       designerMonthReset={designerMonthReset}
                        designerPageReset={designerPageReset} setFiles={setFiles} />
                       )}
                  </tbody>
                </table>
                </motion.section>)}
            
            </div>

            <div className="fixed bottom-0 left-0 bg-slate-200 w-full  ">
              <h2 className="text-xl ml-4">{messageUploading}</h2>
              <h2 className="text-xl ml-4">{successfully}</h2>
            </div>
          </div>
<AnimatePresence>
 
   {show &&
    <motion.div  initial={{ x:-2000 }} animate={{ opacity: 1,x:0 }} exit={{x:-2000}} transition={{ duration: 0.5 }}  className='fixed top-0 left-0 bg-secondary p-10 text-white overflow-y-auto h-full overflow-x-hidden w-screen laptop:w-[60vw] flex flex-col items-start justify-start border-r-2'> 
        <DesignerModal setImage={setImage}
        setImage1={setImage1}
        setImage2={setImage2}
        setImage3={setImage3}
          setShow={setShow} name={name} image={image} image1={image1} image2={image2} image3={image3} content={content} user={user} message={message} setMessage={setMessage} dPost={dPost} dMonth={dMonth} dPage={dPage} setContent={setContent} arrayUnion={arrayUnion} exampleImg={exampleImg} exampleImg1={exampleImg1} exampleImg2={exampleImg2} exampleImg3={exampleImg3} />
      </motion.div>   
         } 
 


</AnimatePresence>
        </div>{" "}
      </div>
    </>
  );
}
