/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "../Nav";
import { useState, useEffect } from "react";
import { auth, fs, db } from "../../Firebase";
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
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import WaitingForAdmin from "./WaitingForAdmin";
import Title from "../../Title";
import ProfileFunctions from "./profileFunctions/ProfileFunctions";
import Loading from "../Loading";

import Cal from "./Calendar/Cal";

import Panel from "./Panel/Panel";
import Docs from "./Docs";
import Version from "../../Version/Version";

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [uuid, setUuid] = useState("");
  const [isAccepted, setIsAccepted] = useState("");
  const [level, setLevel] = useState("waiting");
  const [sendTo, setSendTo] = useState("");
  const [text, setText] = useState("");
  const [privateChat, setPrivateChat] = useState("waiting");

  const [work, setWork] = useState([]);

  const getWork = async () => {
    try {
      const unsubscribe = fs.collection("admin").onSnapshot(querySnapshot => {
        const workArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        workArray.sort((a, b) => a.id - b.id); // Sort the array based on the numeric ID

        setWork(workArray);
      });

      return unsubscribe;
    } catch (error) {
      console.error("Error fetching work data:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = getWork();

    // Cleanup the subscription
  }, []);

  const [message, setMessage] = useState([]);
  const [designerChat, setDesignerChat] = useState([]);
  const [chat, setChat] = useState("");
  const [trueChat, setTrueChat] = useState();
  const [hideList, setHideList] = useState(false);
  const [displayTo, setDisplayTo] = useState("");
  const [pan, setPan] = useState(false);

  const allUid = work.map(x => x.Name);
  const handleDeleted = id => {
    const docRef = collection(db, privateChat);
    const colRef = doc(docRef, id);
    deleteDoc(colRef)
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch(error => {
        console.error("Error removing document:", error);
      });
  };

  function handleNoti(id) {
    const docRef = collection(db, "group");
    const colRef = doc(docRef, id);
    updateDoc(colRef, { [user]: 0 }, { merge: true });
  }

  const handleDelete = id => {
    const docRef = doc(db, "group", id);
    const fieldToUpdate = { new: "Read" };

    updateDoc(docRef, fieldToUpdate)
      .then(() => {
        console.log("Field successfully updated");
      })
      .catch(error => {
        null;
      });
  };

  const [loading, setLoading] = useState(false);
  const [imp, setImp] = useState(false);
  const [showImportant, setShowImportant] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  const sum = message
    .map(x => x[user])
    .reduce((accumulator, currentValue) => accumulator + currentValue, null);

  const [showWfh, setShowWfh] = useState("start");

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

  return (
    <>
      <ProfileFunctions
        privateChat={privateChat}
        setChat={setChat}
        setDesignerChat={setDesignerChat}
        setMessage={setMessage}
      />
      <Title />
      <Version />
      <User
        setUser={setUser}
        user={user}
        setUuid={setUuid}
        setIsAccepted={setIsAccepted}
        level={level}
        setLevel={setLevel}
      />

      {level === 0 && (
        <>
          <div className="min-h-[100vh] bg-slate-600">
            <WaitingForAdmin />
          </div>
        </>
      )}

      <button
        onClick={() => setPan(pan === true ? false : true)}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <div className="flex flex-col sm:flex-row   bg-slate-500">
        {pan === true && isMobile === true && level > 7 && (
          <>
            <Panel
              level={level}
              showWfh={showWfh}
              setShowWfh={setShowWfh}
              user={user}
              hideList={hideList}
              setHideList={setHideList}
              sum={sum}
              work={work}
              setSendTo={setSendTo}
              setDisplayTo={setDisplayTo}
              setPrivateChat={setPrivateChat}
              setTrueChat={setTrueChat}
              pan={pan}
              setPan={setPan}
            />{" "}
          </>
        )}

        {isMobile === false && level > 7 && (
          <>
            <Panel
              level={level}
              showWfh={showWfh}
              setShowWfh={setShowWfh}
              user={user}
              hideList={hideList}
              setHideList={setHideList}
              sum={sum}
              work={work}
              setSendTo={setSendTo}
              setDisplayTo={setDisplayTo}
              setPrivateChat={setPrivateChat}
              setTrueChat={setTrueChat}
              pan={pan}
              setPan={setPan}
            />{" "}
          </>
        )}

        {level > 7 ? (
          <>
            {" "}
            <div className="w-full sm:w-4/5 lg:w-full md:absolute right-0 bg-slate-500   ">
              {showWfh === "start" && (
                <div className="lg:w-5/5 xl:w-[1100px] lg:min-h-[100vh] xl:m-auto flex flex-col items-center bg-slate-500  ">
                  <Cal user={user} />
                  {/* <ShowDate/> */}
                </div>
              )}

              {showWfh === "Docs" && (
                <>
                  <Docs />
                </>
              )}

              {/* {showWfh === 'survey' && <>

<Survey/>
</>} */}
            </div>{" "}
          </>
        ) : null}
      </div>

      {loading === false && (
        <>
          <Loading />
        </>
      )}
    </>
  );
}
