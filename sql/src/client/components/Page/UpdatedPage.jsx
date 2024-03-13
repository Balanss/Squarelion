import React, { Suspense, lazy,useContext,useState, useEffect,useRef } from "react";
import Nav from "../Nav";
import { fs, db } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, updateDoc, setDoc, addDoc, FieldValue, deleteField, increment } from "firebase/firestore";
import SendFromForm from "../firebaseData/UpdatedSendFromForm";
import Links from "./Links";
import Solo from "../Txt/Solo";
import TxtAll from "../Txt/TxtAll";
import Title from "../../Title";
import "react-quill/dist/quill.snow.css";
import Inputs from "./PageFunctions/UpdatedInputs";
import Loading from "../Loading";
import Memo from "./Memo/Memo";
import "/src/client/index.css";
import Version from "../../Version/Version";
import PageModal from "./PageModal";
import GettingRound from "./GettingRound/GettingRound";
import {AnimatePresence, motion} from "framer-motion"
import AssignedTo from "./AssignedTo";
import { container, item } from "../motion/Motion";
import open from "../../assets/view.png";
import unseen from "../../assets/unseen.png";
import trash from "../../assets/trash.png";
import prio from "../../assets/prio.png";
import np from "../../assets/np.png";
import '../../App.css'
import grab from "../../assets/grab.png";
import { UserContext } from "../context/UserContext";
import { UpdatedPageContext } from "../context/UpdatedPageContext";
import { DragDropContext,Draggable,Droppable } from 'react-beautiful-dnd';
import Facebook from "./automation/Facebook";



const ModalContent = lazy(() => import("./Modal/UpdatedModalContent"));
const Bot = lazy(() => import("./Bot/Bot"));
const ReactQuill = lazy(() => import("react-quill"));
const ModalForEddting = lazy(() => import("./Modal/ModalForEddting"));








export default function UpdatedPage({ month, setMonth }) {

  const {user,uuid,level} = useContext(UserContext);

  const { objective, setObjective, uniqueId,
     setUniqueId, type, setType, date, setDate,
      post, setPost, objectiveAnswer, setObjectiveAnswer,
       typeAnswer, setTypeAnswer, subject, setSubject, editDetails, 
       setEditDetails, forPost, setForPost, imageUrl, setImageUrl, image1Url,
        setImage1Url, image2Url, setImage2Url, image3Url, setImage3Url, preset,
         setPreset, viewer, setViewer, pri, setPri, boosting, setBoosting, title, 
         setTitle, assigned, setAssigned, dbId, setDbId,color,setColor,show,setShow,
         round,setRound,rounded,setRounded,page,setPage,answer,setAnswer } = useContext(UpdatedPageContext);

         
 
  const [hide, setHide] = useState(false);

  // const [deletion, setDeletion] = useState("");

  const navigate = useNavigate();
 

  //------------------------------------------ under lifts state to button for firebase

  const [ dataMonth, setDataMonth ] = useState(month)
  const [showRound, setShowRound] = useState();
  //

  //------------ pdf creation
  const [createPdf, setCreatePdf] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [orderPost, setOrderPost] = useState("");
  const [whatDoUWant, setWhatDoUWant] = useState("Open");
  const [statusBar, setStatusBar] = useState("");
  const [checkDelete, setCheckDelete] = useState(false);

 

  const [openModalBar, setOpenModalBar] = React.useState(false);
  const handleOpenModalBar = () => setOpenModalBar(true);
  const handleCloseBar = () => setOpenModalBar(false);

  function handleSubmit(e) {
    e.preventDefault();
    setHide(false);
  }

  function handleText(index) {
    if (show !== "") {
      round.map((x, i) => {
        if (i === index) {
          setShow("");
          setTypeAnswer("");
          // setDeletion("");
          setStatusBar("");
          setPri("");
          setSubject("");
          setPost("");
          setUniqueId("");
          setDate("");
          setObjectiveAnswer("");
          setType("");
          setBoosting("");
          setOrderPost("");
          setDbId("")
          setImageUrl("");
          setImage1Url("");
          setImage2Url("");
          setImage3Url("");

        }
      });
    } else {
      round.map((x, i) => {
        if (i === index) {
          setShow(i);
          setTypeAnswer(x.count);
          // setDeletion(x.count);
          setStatusBar(i);
          setSubject(x.objective);
          setPost(x.count);
          setUniqueId(x.unid);
          setDate(x.date);
          setObjectiveAnswer(x.answer);
          setType(x.type);
          setBoosting(x.boosting);
          setPri(x.priority);
          setOrderPost(x.order);
          setDbId(x.dbId)
          setImageUrl(x.designer);
          setImage1Url(x.designer1);
          setImage2Url(x.designer2);
          setImage3Url(x.designer3);
        }
      });
    }
  }


  
 


  //deletes from desiger page 
  function handleDelete(index) {
    round.map((x, i) => {
      if (index === i) {

        setCheckDelete(false);
        const docRef = collection(db, localStorage.getItem("partner"));
        const colRef = doc(docRef, x.month);

        updateDoc(colRef, { [x.dbId + x.month]: deleteField() });

        const dcRef = collection(db, "DesignerPage");
        const clRef = doc(dcRef, x.id + x.client);
        deleteDoc(clRef);

        setShow("");
        setStatusBar("");
      }
    });
  }

  

  const [img, setImage] = useState("");
  useEffect(() => {
    setImage(localStorage.getItem("image"));
  }, [img]); // sets the image for the current client

  useEffect(() => {
    let str = localStorage.getItem("preset");
    if (str === undefined) {
      str = "No preset available";
    } else {
      str = str.replace(/  /g, "\n");
    }
    setPreset(str);
  }, []); // sets the preset text for the client changes when u swap clients

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (level === 0 && uuid > "") {
      setIsLoading(true);
      navigate("/");
    }
  }, [level]);// loading screen

 

  const handleEditorChange = value => {
    setObjectiveAnswer(`${value}`);
  };

  const [isVisible, setIsVisible] = useState(true);
  const [zIndex, setZIndex] = useState(0);

  useEffect(() => {
    // Set the highest z-index value when the component is mounted
    setZIndex(9999);

    // After 500ms, set the visibility to false (display none)
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 900);

    // Clean up the timeout when the component is unmounted
    return () => clearTimeout(timeout);
  }, []);



  const [showCount, setShowCount] = useState("10");

  const forTxtAll = { createPdf, subject, round, post, page, uniqueId, boosting, month, date, type, imageUrl, isChecked,dbId };
  const forInput = { setDataMonth,dataMonth, month, setMonth,user }
  const forPageModal = { answer, post,imageUrl, objective, typeAnswer, month, color, page, setShow, pri, date, objectiveAnswer, img, boosting, uniqueId, user, type, subject, level ,dbId };
  const forSendFromForm = {user, uniqueId, orderPost, post, type, objectiveAnswer, subject, typeAnswer, month, color, page, level, setObjectiveAnswer ,dbId}
  const forEditModal = {openModalBar, handleCloseBar,  title, forPost, setEditDetails, editDetails, page, month, post, uniqueId, objective, type, boosting, date, viewer, level}
  const forSolo = {createPdf,preset, orderPost, image1Url, image2Url, image3Url, setIsChecked, subject, round, post, page, uniqueId, boosting, month, date, type, imageUrl, isChecked,dbId}
 


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShow("")
        setStatusBar("");
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);



const handleOnDragEnd = async (result) => {
  if (!result.destination) return;
  const items = Array.from(round);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem);


  await Promise.all(
    items.map((item, index) => {
      return fs
      .collection(page)
      .doc(month)
        .update(
          { [`${item.count + item.month}.order`]: index },
          { merge: true }
        );
    })
  );
};



  return ( 
    <> 
    {level > 6 && uuid !== null && (<> 
      <div className="client-page h-screen overflow-auto bg-primary" style={{ color: "white" }} >
        <Version />
        <Title />
        <GettingRound round={round} dataMonth={dataMonth} level={level} setRound={setRound} rounded={rounded} setRounded={setRounded} page={page} month={month} showRound={showRound} viewer={viewer} setPage={setPage} />
        <div className=" pt-4 mb-[25px] bg-primary">  <Nav /></div>
        <div className={`absolute inset-0 ${isVisible ? "block" : "hidden"}`} style={{ zIndex, backgroundColor: "white" }}><Loading /></div>
                <div className="flex flex-row justify-around items-center bg-slate-300 border-t-2 border-yellow-500 ">
                  <div className="bg-slate-700 p-4 rounded-lg cursor-pointer">
                    <Links />{" "}
                  </div>
          
                  <img src={img} className="w-20" style={{ backgroundColor: "white", marginBottom: "20px", marginTop: "20px" }} />
                  <div style={{ zIndex: 1 }}>
                    {level >= 8 && <TxtAll {...forTxtAll} />}
                    {level >= 10 && <Memo page={page} round={round} />}
                  </div>
                </div>

            <div className="content-div  pb-10 " >
              <Inputs {...forInput} />
              <Suspense fallback={<div>Loading...</div>}>
               <div className="phones:overflow-y-auto ">
            
               </div>         
              </Suspense>
             <ModalForEddting {...forEditModal} />


        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="char">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                    {round.map((item, index) => {
                  return ( <div key={index}> 
                   { item.month === month && (
                    <Draggable key={index} index={index} draggableId={`${item.order}`}>
                      {(provided) => (
                         <section  className=""  {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} >
                         <motion.div variants={container} className="border-[1px] border-y-[#2c1f42] bg-secondary  grid grid-cols-6 phones:gap-y-10 laptop:grid-cols-9 items-center text-left py-1 rounded laptop:w-[80vw] m-auto">
                           <p className="text-black text-center rounded-sm font-medium text-xs flex-grow py-1 ml-1" style={{ backgroundColor: item.color }} >{item.status}</p>
                           <p className="px-6 phones:p-1 phones:text-[10px] cursor-pointer whitespace-nowrap text-sm font-medium text-gray-400 flex-grow" onClick={() => { setForPost(item.unid); if (level > 8) { handleOpenModalBar(); setPost(item.count); setTitle("unid"); } }}> {item.unid}</p>
                           <div className="px-6 phones:p-1 phones:text-[10px] cursor-pointer whitespace-nowrap text-sm text-gray-400 flex-grow" onMouseEnter={() => setShowCount(item.count)} onMouseLeave={() => setShowCount("")}> {item.order}
                             <p>{showCount && showCount === item.count ? <>ID:{showCount}</> : null}</p>
                           </div>
                           <p className="px-6 phones:p-1 phones:text-[10px] cursor-pointer whitespace-nowrap text-sm text-gray-400 flex-grow" onClick={() => { setForPost(item.objective); handleOpenModalBar(); setPost(item.count); setTitle("objective"); }}>
                             {item.objective.length > 11 ? item.objective.slice(0, 10) + "..." : item.objective}
                           </p>
                           <p className="px-6 phones:p-1 phones:text-[10px] cursor-pointer whitespace-nowrap text-sm text-gray-400 flex-grow" onClick={() => { setForPost(item.type); handleOpenModalBar(); setPost(item.count); setTitle("type"); }}>
                             {item.type}
                           </p>
                           <p className="px-6 phones:p-1 phones:text-[10px] cursor-pointer whitespace-nowrap text-sm text-gray-400 flex-grow" onClick={() => { setForPost(item.date); if (level > 8) { handleOpenModalBar(); setPost(item.count); setTitle("date"); } }}>{month}-{item.date}</p>
                           <p className={`px-6 phones:p-1 phones:text-[10px] ${item.priority === "Prio" ? " text-white " : "text-gray-400"} flex-grow`}>
                             <img src={item.priority === "Prio" ? prio : np} className="w-10 h-10 m-auto hover:scale-[1.1] cursor-pointer" title={item.priority === "Prio" ? "Priority" : "Not Priority"} onClick={() => { const docRef = collection(db, page); const colRef = doc(docRef, item.month); setDoc(colRef, { [item.count + item.month]: { priority: item.priority === "Prio" ? "No" : "Prio" } }, { merge: true }) }} />
                           </p>
                         {level > 7  &&   <p className="px-6  phones:p-1 phones:text-[10px] whitespace-nowrap text-sm text-gray-400 flex-grow">
                             <img src={statusBar === index ? unseen : open} className="w-10 h-10 m-auto hover:scale-[1.1] cursor-pointer" onClick={() => handleText(index)} />
                           </p>}
                          <div className="reorder-handle"  >
                          <img src={grab} alt="" className="cursor-grab hover:scale-[1.1] phones:hidden" draggable='false'/>
                          </div>
                         </motion.div>
                         </section>
                        
                      )}
                      
                     </Draggable>
                       )}
                      {provided.placeholder}

                     
                    <div className={`${show !== index ? 'null' : 'left-0 top-0 z-[100] fixed overflow-y-scroll overflow-x-hidden no-scrollbar h-screen rounded bg-black bg-opacity-50'}`}> 
                    <AnimatePresence>    
                    {show === index && level > 7 && (
                      <>
                     
                            {level < 9 && show === index ? <h1 className="text-white text-2xl text-center"> CONTENT HAS ALREADY BEEN APPROVED OR POSTED </h1> :   <motion.div className="flex z-[10] flex-col-reverse items-start xl:flex-row fixed top-0 h-screen overflow-y-scroll overflow-x-hidden no-scrollbar " initial={{ x:-2000 }} animate={{ opacity: 1,x:0 }} exit={{x:-2000}} transition={{ duration: 0.5,type:'spring' }} >
                           
                           <div className="lg:w-[900px] phones:w-[100dvw] m-auto2 border-white border-2 p-4 bg-[#171717]">
           {/* below is for the 3 finish state buttons ( waiting,apporved,designer) */}
                  <PageModal {...forPageModal}/>
     
                          <div className="holds-written-content">

            {/* Below handles the images for the modal */}
            <ModalContent level={level} page={page} round={round} type={type} show={show} month={month} post={post} />
           {item.answer && 
             <>
               <h6 className="text-left text-black m-auto rounded mt-[50px] text-md laptop:text-sm p-8 bg-white lg:w-3/4 break-words" key={index} onClick={() => setObjectiveAnswer(item.answer)}>
                 {item.answer.replace(/<\/?[^>]+(>|$)/g, "").split('\n').map((line, i) => 
                   <React.Fragment key={i}>
                     {line}
                     <br />
                   </React.Fragment>
                 )}
               </h6>
               <AssignedTo dbId={dbId} user={user} typeAnswer={typeAnswer} post={post} month={month} level={level} page={page} assigned={assigned} setAssigned={setAssigned} />
             </>
           }
              <h1 className="text-xl mt-5 text-center text-white"> Boosting : ${item.boosting}</h1>

            <div className="flex items-baseline justify-center">
               <input type="checkbox" readOnly checked={isChecked} 
               onClick={() => { setIsChecked(prevChecked => !prevChecked), setImageUrl(item.designer), setImage1Url(item.designer1),
                setImage2Url(item.designer2), setImage3Url(item.designer3), setBoosting(item.boosting), setCreatePdf(item.answer); }} className="mr-2 cursor-pointer" />
               <Solo {...forSolo} />
             </div>

         <div className="flex  flex-col items-center justify-evenly ">
             <>
               <div className={`${whatDoUWant === "Open" ? "above-div-send phones:flex-row phones:gap-x-3 w-full flex flex-col items-center lg:flex lg:items-center lg:justify-center lg: bg-[#212121] p-4 rounded mt-2 mb-5 lg:flex-row lg:gap-10" : null}`}>

                 {level >= 9 ? 
                 <> 
                   <div className="flex flex-col items-center justify-center">
                   <img src={trash} onClick={() => { if (checkDelete) handleDelete(index); else alert("Please check the box to delete"); }} className="hover:scale-[1.1] cursor-pointer" title="Delete Post"/> 
                   <input type="checkbox" onChange={(e) => setCheckDelete(e.target.checked)} />

                     </div>
                  </> : null}
               </div>  
                 
               <div className="flex flex-row">

               <form className="flex phones:w-[100vw] phones:flex-col " onSubmit={handleSubmit}>
                   <div className="flex flex-col">
                     <textarea value={preset} onChange={e => setPreset(e.target.value)} className="w-[280px]  h-[300px] phones:w-full text-black rounded" />
                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { navigator.clipboard.writeText(preset); }}> Copy </button>
                   </div>

                   <textarea value={objectiveAnswer} placeholder="Create content here..." onChange={e => setObjectiveAnswer(e.target.value)} className="w-[280px] h-[300px] phones:w-full text-black rounded" />
                 </form> 

                   <div className="mt-4">
                    
                 <SendFromForm {...forSendFromForm} />
                 </div>


                </div>             

             </>

         </div>

                                </div>
                                       </div>

{/*                                    
       <Suspense fallback={<div>Loading...</div>}>
         <div className=" lg:w-[800px] xl:w-[400px] lg:relative lg:bottom-1 ">
           <Bot setObjectiveAnswer={setObjectiveAnswer} subject={subject} user={user} />
         </div>
       </Suspense> */}
   

                                     </motion.div>}
                                 
                                </>
                              )} 
                           </AnimatePresence>    
                    </div>
                      
                 </div>  )
      
              }
              )} 
              </div>        
            )}
        
      
         </Droppable>
        </DragDropContext>
     

            </div>
          
        
      </div>
      </>  )}
  
  </>);
}


