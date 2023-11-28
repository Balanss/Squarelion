import React, { Suspense, lazy } from "react";
import Nav from "../Nav";
import { useState, useEffect } from "react";
import { db, fs } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import User from "../User";
import {
  collection,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import SendFromForm from "../firebaseData/SendFromForm";
import { useParams } from "react-router-dom";
import Links from "./Links";
import WaitingDesigner from "../firebaseData/WaitingDesigner";
import WaitingApproval from "../firebaseData/WaitingApproval";
import WaitingApproved from "../firebaseData/WaitingApproved";

import Solo from "../Txt/Solo";
import TxtAll from "../Txt/TxtAll";
import Title from "../../Title";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Inputs from "./PageFunctions/Inputs";
import Loading from "../Loading";
import Memo from "./Memo/Memo";
import "/src/client/index.css";
import Version from "../../Version/Version";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Bot from "./Bot/Bot";


const ModalContent = lazy(() => import("./Modal/ModalContent"));

const modules = {
  toolbar: {
    handlers: {
      // Prevent the default behavior of adding a new paragraph on enter key
      // and instead insert a line break
      handleEnter: function () {
        return true;
      },
    },
  },
};

const styleNew = {
  position: "absolute",
  top: "50%",
  bottom: "0",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "transparent",
  p: 4,
 
};

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

export default function Page({month, setMonth}) {
  const { id } = useParams();
  const [hide, setHide] = useState(false);
  const [color, setColor] = useState("orange");
  const [user, setUser] = useState("");
  const [uuid, setUuid] = useState("");
  const [level, setLevel] = useState("");
  const [isAccepted, setIsAccepted] = useState("");
  const [show, setShow] = useState("");
  const [page, setPage] = useState("");
  const [deletion, setDeletion] = useState("");
  const [round, setRound] = useState([]);
  const navigate = useNavigate();

  //------------------------------------------ under lifts state to button for firebase
  const [objective, setObjective] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [post, setPost] = useState("");
 
  const [objectiveAnswer, setObjectiveAnswer] = useState("");
  const [typeAnswer, setTypeAnswer] = useState("");
  const [subject, setSubject] = useState("");
  const [editDetails, setEditDetails] = useState("");
  const [forPost, setForPost] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image1Url, setImage1Url] = useState("");
  const [image2Url, setImage2Url] = useState("");
  const [image3Url, setImage3Url] = useState("");
  const [preset, setPreset] = useState("");

  const [boosting, setBoosting] = useState("");
  const [title, setTitle] = useState("");

  const [showRound, setShowRound] = useState();
  //

  //------------ pdf creation
  const [createPdf, setCreatePdf] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [orderPost, setOrderPost] = useState("");
  const [whatDoUWant, setWhatDoUWant] = useState("Open");

  function handleSubmit(e) {
    e.preventDefault();
    setHide(false);
  }

  const [viewer, setViewer] = useState("all");

  const getRound = async () => {
    setPage(localStorage.getItem("partner"));
    try {
      const unsubscribe = fs
        .collection(page)
        .where("month", "==", month)
        .onSnapshot(async querySnapshot => {
          const roundArray = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          roundArray.sort((a, b) => a.order - b.order);
          const filteredRoundArray = roundArray.filter(
            round => round.month === month
          );
          const halfLength = Math.ceil(filteredRoundArray.length / 2);
          const firstSlice = filteredRoundArray.slice(0, halfLength);
          const secondSlice = filteredRoundArray.slice(halfLength);

          if (viewer === "10") {
            setRound(firstSlice);
          } else if (viewer === "20") {
            setRound(secondSlice);
          } else if (viewer === "all") {
            setRound(filteredRoundArray);
          }
        });

      return unsubscribe;
    } catch (error) {
      console.log("loading");
    }
  };

  useEffect(() => {
    const unsubscribe = getRound();
  }, [page, showRound, viewer, month]);

  const [pri, setPri] = useState("");

  function handleText(i) {
    if (show !== "") {
      round.map((x, index) => {
        if (i === index) {
          setShow("");
          setTypeAnswer("");
          setDeletion("");
          setStatusBar("");
          setPri("");
        }
      });
    } else {
      round.map((x, index) => {
        if (i === index) {
          setShow(i);
          setTypeAnswer(x.count);
          setDeletion(x.count);
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
        }
      });
    }
  }



  const sendToZapier = async payload => {
    const zapierURL = import.meta.env.VITE_ZAP_DELETE;
    try {
      const response = await fetch(zapierURL, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(payload),
      });
      const resp = await response.json();
    } catch (e) {
      console.log(e);
    }
  };

  function handleDelete(i) {
    round.map((x, index) => {
      if (index === i) {
        const docRef = collection(db, localStorage.getItem("partner"));
        const colRef = doc(docRef, x.id);
        deleteDoc(colRef);

        const dcRef = collection(db, "DesignerPage");
        const clRef = doc(dcRef, x.id + x.client);
        deleteDoc(clRef);

        const leadData = {
          answer: x.answer,
          uniqueId: x.unid,
          date: x.date,
          id: x.id,
          objective: x.objective,
          client: page,
        };

        try {
          sendToZapier(leadData);
          // Additional code to execute after sending data to Zapier, if needed
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  const [img, setImage] = useState("");
  useEffect(() => {
    setImage(localStorage.getItem("image"));
   
  }, [img]);


  useEffect(() => {
    let str = localStorage.getItem("preset");
    if (str === undefined) {
      str = "No preset available";
    } else {
      str = str.replace(/  /g, '\n');
    }
    setPreset(str);
  }, []);



  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (level === 0 && uuid > "") {
      setIsLoading(true);
      navigate("/");
    }
  }, [level]);

  const [statusBar, setStatusBar] = useState("");

  const [openModalBar, setOpenModalBar] = React.useState(false);
  const handleOpenModalBar = () => setOpenModalBar(true);
  const handleCloseBar = () => setOpenModalBar(false);

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
      const colRef = doc(docRef, post + month);
      updateDoc(colRef, { [title]: editDetails }, { merge: true });
    }

    handleCloseBar();
  }

  const handleDragEnd = result => {
    if (!result.destination) return;
    const items = Array.from(round);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setRound(items);
    items.forEach((item, index) => {
      fs.collection(page)
        .doc(item.id)
        .update({ order: index }, { merge: true });
    });
  };

  const [showCount, setShowCount] = useState("10");

  return (
    <>
      <div
        className="client-page min-h-[100vh] bg-slate-600 overflow-auto "
        style={{ color: "white" }}
      >
        <User user={user} setUser={setUser} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel}/>
        <Version />
        <Title />
        <div className="border-b-2 border-yellow-500 pt-2 bg-slate-800">
          {" "}
          <Nav />{" "}
        </div>

        <div
          className={`absolute inset-0 ${isVisible ? "block" : "hidden"}`} style={{ zIndex, backgroundColor: "white" }} >
          <Loading />
        </div>

        {level > 7 && uuid !== null && (
          <>
            {level === 8 && (
              <>
                <div className="admin-links-only-designer text-center mt-10 cursor-pointer ">
                  {" "}
                  <Links />
                  <img
                    src={img}
                    className="client-pic p-4 rounded-lg flex items-center m-auto w-40" style={{  backgroundColor: "white",  marginBottom: "40px",  marginTop: "20px", }}
                  />{" "}
                </div>
              </>
            )}

            {level > 8 && (
              <>
                <div className="flex flex-row justify-around items-center bg-slate-300 ">
                  <div className="bg-slate-700 p-4 rounded-lg cursor-pointer">
                    <Links />{" "}
                  </div>
                  {/* <Demo round={round} page={page}/> */}
                  <img
                    src={img}
                    className="w-20"
                    style={{  backgroundColor: "white",  marginBottom: "20px",  marginTop: "20px",}}
                  />
                  <div style={{ zIndex: 1 }}>
                    <TxtAll className="txt" createPdf={createPdf} subject={subject} round={round} post={post} page={page} uniqueId={uniqueId} boosting={boosting} month={month} date={date} type={type} imageUrl={imageUrl} isChecked={isChecked} />
                    <Memo page={page} round={round} />
                  </div>
                </div>
              </>
            )}

            <div className="content-div bg-slate-600 pb-10 ">
              <Inputs user={user} boosting={boosting} setBootsing={setBoosting} setUniqueId={setUniqueId} uniqueId={uniqueId} level={level} setObjectiveAnswer={setObjectiveAnswer} setTypeAnswer={setTypeAnswer} type={type} setPost={setPost} month={month} setMonth={setMonth} setObjective={setObjective} setType={setType} setDate={setDate} objective={objective} post={post} page={page} date={date} />

              <section className="mb-5">
                <button
                  onClick={() => setViewer("all")}
                  className="bg-sky-500 text-white px-3 py-2 rounded-md ml-3" >View All</button>

                <button
                  onClick={() => {setViewer("10");}}  className="bg-sky-500 text-white px-3 py-2 rounded-md ml-3">First Half{" "} </button>
                <button onClick={() => {setViewer("20");}} className="bg-sky-500 text-white px-3 py-2 rounded-md ml-3"> {" "} Second Half{" "}</button>
              </section>

              <Suspense fallback={<div>Loading...</div>}>
                <DragDropContext onDragEnd={handleDragEnd}>
                  <table className="m-auto w-full text-center animate-fade animate-duration-[500ms] animate-ease-in">
                    <thead className="phones:text-[12px]">
                      <tr className="bg-slate-800">
                        <th scope="col" className="px-6 py-3 phones:p-0">Status </th>
                        <th scope="col" className="px-6 py-3 phones:p-1">Unique Id</th>
                        <th scope="col" className="px-6 py-3 phones:p-1">Post</th>
                        <th scope="col" className="px-6 py-3 phones:p-0"> Subject </th>
                        <th scope="col" className="px-6 py-3 phones:p-0">Channel </th>
                        <th scope="col" className="px-6 py-3 phones:p-0">Day </th>
                        <th scope="col" className="px-6 py-3 phones:p-2">Prio </th>
                        <th scope="col" className="px-6 py-3 phones:p-2">View </th>
                      </tr>
                    </thead>
                    <Droppable droppableId="table">
                      {provided => (
                        <tbody
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {round.map(
                            (x, i) =>
                              x.month === month && (
                                <Draggable
                                  draggableId={x.order.toString()}
                                  index={i}
                                >
                                  {provided => (
                                    <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}  className=" border-b bg-gray-700 border-gray-800" >
                                      <td className="text-black text-center rounded-sm font-medium phones:text-xs" style={{ backgroundColor: x.color }}>
                                        {x.status}
                                      </td>

                                      <td className="px-6 phones:p-1 phones:text-[10px] cursor-pointer whitespace-nowrap text-sm font-medium text-gray-400" onClick={() =>
                                         { setForPost(x.unid); if (level > 8) handleOpenModalBar(); setPost(x.count);
                                          setTitle("unid"); }}>{x.unid}</td>

<td className="px-6 phones:text-[10px] phones:p-2 cursor-pointer whitespace-nowrap text-sm text-gray-400" 
onMouseEnter={() => setShowCount(x.count)} 
onMouseLeave={() => setShowCount("")}>{x.order - -1}
<p>{showCount && showCount === x.count ? <>ID:{showCount}</> : null}
</p>
</td>


                                      <td className="px-6 phones:text-[10px] phones:p-2 cursor-pointer whitespace-nowrap text-sm text-gray-400" onClick={() =>
                                         { setForPost(x.objective); if (level > 8) handleOpenModalBar(); 
                                         setPost(x.count); setTitle("objective"); }}>
                                          {x.objective.length > 50 ? x.objective.slice(0, 50) + "..." : x.objective}
                                          </td>


                                      <td className="px-6 phones:p-0 phones:text-[10px] cursor-pointer whitespace-nowrap text-sm text-gray-400" onClick={() => 
                                        { setForPost(x.type); if (level > 8) handleOpenModalBar();
                                        setPost(x.count); setTitle("type"); }}>{x.type}</td>

                                      <td className="px-6 phones:p-0 phones:text-[10px] cursor-pointer whitespace-nowrap text-sm text-gray-400" onClick={() =>
                                         { setForPost(x.date); 
                                         if (level > 8) handleOpenModalBar(); setPost(x.count);
                                          setTitle("date"); }}>{month}-{x.date} </td>

                                      <td className={`px-6 phones:p-0 phones:text-[10px] ${ x.priority === "Prio"  ? "bg-red-600 text-white " : "text-gray-400" }`} >
                                     <button onClick={() => 
                                      { if (level > 8) { 
                                        const docRef = collection(db, page);
                                      const colRef = doc(docRef, x.count + x.month);
                                       updateDoc(colRef, { priority: x.priority === "Prio" ? "No" : "Prio" },
                                        { merge: true }); } }}>{x.priority}</button>
                                      </td>

                                      <td className="px-6 phones:p-1 phones:text-[10px] whitespace-nowrap text-sm text-gray-400">
                                        <button  className="x-button lg:mr-3 mt-2 mb-4 hover:scale-105 p-[1px]  transition-transform transform-gpu hover:text-white hover:bg-red-500  " onClick={() => handleText(i)} >
                                     {statusBar===i? "close" : "open"}
                                        </button>
                                      </td>

                                      <Modal  open={show === i}  onClose={() => handleText(i)}  aria-labelledby="modal-modal-title"  aria-describedby="modal-modal-description"  className="overflow-auto main-modal" >
                                        <Box
                                          sx={styleNew}
                                          className="lg:!top-[40%] "
                                        >
                                          <Typography
                                            id="modal-modal-title"
                                            variant="h6"
                                            component="h2"
                                            style={{ textAlign: "center" }}
                                            className="flex flex-col gap-5 first-typo"
                                          >
                                            {show === i && level > 7 && (
                                              <>
                                                <div className="flex flex-col-reverse xl:flex-row animate-fade animate-duration-[200ms] animate-ease-in">
                                                  <div className="lg:w-[800px] m-auto border-2 border-black bg-slate-700">
                                                    <div className="holds-written-content">
                                                      
                                                      <div className="text-black flex">
                                                        <WaitingDesigner pri={pri} date={date} objectiveAnswer={objectiveAnswer} typeAnswer={typeAnswer} img={img} month={month} color={color} page={page} post={post} boosting={boosting} uniqueId={uniqueId} user={user} type={type} subject={subject} />
                                                        <WaitingApproval objectiveAnswer={objectiveAnswer} objective={objective} typeAnswer={typeAnswer} month={month} color={color} page={page} setShow={setShow} />
                                                        {level > 8 ? (
                                                          <WaitingApproved objectiveAnswer={objectiveAnswer} type={type} boosting={boosting} date={date} post={post} objective={objective} uniqueId={uniqueId} subject={subject} user={user} typeAnswer={typeAnswer} month={month} color={color} page={page} />
                                                        ) : null}
                                                      </div>

                                                      <ModalContent level={level} page={page} round={round} type={type} show={show} />
                                                      {!x.answer ? null : (<h6 className="text-left m-auto mt-[50px] text-md laptop:text-sm p-8 bg-white lg:w-3/4" key={i} onClick={() => setObjectiveAnswer(x.answer)} style={{ color: "black" }} dangerouslySetInnerHTML={{ __html: x.answer }} />)}

                                                      <div className="flex flex-col items-center justify-evenly border-b-2 border-black">
                                                        <section className="text-center mt-20">
                                                          <button onClick={() => setWhatDoUWant(whatDoUWant === "Close" ? "Open" : "Close")} className="cursor-pointer lg:mt-2 text-white bg-sky-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Open Text Editor</button>
                                                        </section>

                                                        {level > 7 &&
                                                          whatDoUWant ==="Open" && (
                                                            <>
                                                              <div className={`${whatDoUWant === "Open" ? "above-div-send w-full flex flex-col items-center lg:flex lg:items-center lg:justify-center lg:bg-slate-500 p-4 rounded-sm mt-10 mb-5 lg:flex-row lg:gap-10" : null}`}>
                                                                <SendFromForm user={user} uniqueId={uniqueId} orderPost={orderPost} post={post}
                                                                 type={type} objectiveAnswer={objectiveAnswer} subject={subject} typeAnswer={typeAnswer}
                                                                 month={month} color={color} page={page} level={level} setObjectiveAnswer={setObjectiveAnswer} />
                                                                 {level > 9 ? (<button onClick={() => { handleDelete(i), setShow(""), setStatusBar(""); }} className=" text-white bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Delete</button>) : null}
                                                                </div>

                                                              {level > 8 && (

                                                                <form
                                                                  className="flex phones:flex-col" 
                                                                  onSubmit={handleSubmit}>
                                                                   <div className="flex flex-col">
                                                                   <textarea value={preset} onChange={e => setPreset(e.target.value)}  className="w-[300px] h-[300px] phones:w-full"/>
                                                        
                                                                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {navigator.clipboard.writeText(preset);}}> Copy </button>
</div>
                                                                  <ReactQuill
                                                                    value={  objectiveAnswer } onChange={ handleEditorChange}
                                                                    modules={modules}
                                                                    style={{ color:"black",backgroundColor:"white",}}
                                                                    placeholder="Text here..."
                                                                    className="max-w-[90vw]  lg:max-w-[500px] overflow-scroll"
                                                                  />

                                                                  
                                                                </form>

                                                                
                                                              )}
                                                            </>
                                                          )}
                                                        {level > 8 ? (
                                                          <div className="flex items-baseline">
                                                            
                                                            <input type="checkbox" readOnly checked={isChecked}
                                                             onClick={() => { setIsChecked(prevChecked => !prevChecked), setImageUrl(x.designer), setImage1Url(x.designer1), setImage2Url(x.designer2), setImage3Url(x.designer3), setBoosting(x.boosting), setCreatePdf(x.answer); }} className="mr-2 cursor-pointer" />
                                                            <Solo createPdf={createPdf} orderPost={orderPost} image1Url={image1Url}
                                                             image2Url={image2Url} image3Url={image3Url} setIsChecked={setIsChecked} 
                                                             subject={subject} round={round} post={post} page={page} uniqueId={uniqueId} 
                                                             boosting={boosting} month={month} date={date} type={type} imageUrl={imageUrl} 
                                                             isChecked={isChecked} />
                                                          
                                                          </div>

                                                        ) : null}

                                                        {level > 8 ? (
                                                          <h1 className="text-2xl mb-5 text-white"> Boosting : {x.boosting}</h1>
                                                        ) : null}
                                                      </div>
                                                    </div>
                                                  </div>

                                                  {level > 8 ? (<div className=" lg:w-[800px] xl:w-[400px]">
                                                     <Bot setObjectiveAnswer={setObjectiveAnswer} subject={subject} user={user} /></div>) 
                                                     : null}
                                                </div>
                                              </>
                                            )}
                                          </Typography>
                                        </Box>
                                      </Modal>
                                    </tr>
                                  )}
                                </Draggable>
                              )
                          )}
                          {provided.placeholder}
                        </tbody>
                      )}
                    </Droppable>
                  </table>
                </DragDropContext>
              </Suspense>

              <Modal
                open={openModalBar} onClose={handleCloseBar} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"  className="max-w-[80vw] max-h-[80vw]  " >
                <Box sx={styleBar} className="lg:!top-[50%] 0">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    style={{ textAlign: "center" }}
                    className="flex flex-col gap-5"
                  >
                    <p className="cursor-pointer"> Edit {title} : {forPost} </p>
                    <input type="text"  className="border-2 border-black  " placeholder={`Editing ${forPost}`} onChange={e => setEditDetails(e.target.value)}/>
                    <button  className="bg-blue-700 text-white px-3 py-2 rounded-md ml-3" onClick={() => { handleEditted(); }}>
                      {" "}
                      Submit{" "}
                    </button>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </>
        )}
      </div>
    </>
  );
}
