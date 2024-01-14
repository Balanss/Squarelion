/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import User from "../User";
import { useParams } from "react-router-dom";
import WaitingForAdmin from "./WaitingForAdmin";
import Title from "../../Title";
import Loading from "../Loading";
import Cal from "./Calendar/Cal";
import Panel from "./Panel/Panel";
import Version from "../../Version/Version";
import { lazy, Suspense } from "react";
import BugReport from "../../Bugs/BugReport";
import FeedBack from "../../FeedBack/FeedBack";
import SignoutInfo from "../AdminPage/LogsInfo/SignoutInfo";
import { motion,AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import HamburgerButton from "./Hamburger/HamburgerButton";



// Lazy import the Schedule component
// const Schedule = lazy(() => import("./Calendar/Schedule"));
const UserStats = lazy(() => import("./UserStats/UserStats"));

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [uuid, setUuid] = useState("");
  const [isAccepted, setIsAccepted] = useState("");
  const [level, setLevel] = useState("waiting");
  const [pan, setPan] = useState(false);
  const [clicked, setClicked] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPfp, setShowPfp] = useState("dashboard");
  const [dateJoined, setDateJoined] = useState("");



  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);



  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    handleResize(); // Call the function initially to set the initial state

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  useEffect(() => {
    if (pan) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [pan]);


  const motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5 },
  };
  

  

  return (
    <>
      <Title />
      <Version />
      <User setUser={setUser} user={user} setDateJoined={setDateJoined} dateJoined={dateJoined} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel} />

      {level === 0 && <div className="min-h-[100vh] bg-slate-900"><WaitingForAdmin /></div>}

             <HamburgerButton pan={pan} setPan={setPan} />

      <div className="phones:fixed phones:z-40 phones:top-3 phones:right-3 phones:block hidden">
                <SignoutInfo/>
              </div>


      <div className="  min-h-[100vh] flex flex-col sm:flex-row whole-div  ">


         {/* mobile side panel */}
        {pan === true && isMobile === true && level > 6 && (
          <>
            <Panel
              level={level}
              user={user}
              pan={pan}
              setPan={setPan}
              clicked={clicked}
              setClicked={setClicked}
              setShowPfp={setShowPfp}
            />
          </>
        )}



        <div className="bg-[#0f172a] w-[100vw] phones:justify-center flex flex-row flex-wrap">
          {/* for desktop */}
          {isMobile === false && level > 6 && (
            <>
              <Panel
                level={level}
                user={user}
                setShowPfp={setShowPfp}
                pan={pan}
                setPan={setPan}
              />
            </>
          )}

          {level > 6 ? (
            <>
              {" "}
              <div className="flex flex-col items-center w-[78vw] bg-primary phones:w-full overflow-hidden ">
              {showPfp === "dashboard" && (
  <motion.div {...motionProps} className="inline-flex flex-col items-end">
      <UserStats user={user} level={level} />
       {/*  <Schedule user={user} level={level} uuid={uuid} />  add this to admin panel*/}
  </motion.div>
)}

                {showPfp === "Bugs" && <BugReport user={user} level={level} />}


                {showPfp === "Calendar" && 
                  <motion.div {...motionProps}  className="inline-flex flex-col mt-10 items-end ">
                  <Cal user={user} level={level} uuid={uuid} />
              </motion.div>
                }

              </div>{" "}
            </>
          ) : null}
        </div>
      </div>

      {loading === false && (
        <>
          <Loading />
        </>
      )}
    </>
  );
}
