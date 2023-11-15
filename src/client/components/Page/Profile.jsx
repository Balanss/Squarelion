/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { fs, auth, db } from "../../../firebase";
import User from "../User";
import { useParams } from "react-router-dom";
import WaitingForAdmin from "./WaitingForAdmin";
import Title from "../../Title";
import Loading from "../Loading";
import Cal from "./Calendar/Cal";
import Panel from "./Panel/Panel";
import Version from "../../Version/Version";
import Schedule from "./Calendar/Schedule";
import UserStats from "./UserStats/UserStats";
import GreetingUser from "./UserStats/GreetingUser";

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [uuid, setUuid] = useState("");
  const [isAccepted, setIsAccepted] = useState("");
  const [level, setLevel] = useState("waiting");
  const [pan, setPan] = useState(false);
  const [clicked, setClicked] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  const [showPfp, setShowWPfp] = useState("start");

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
          <div className="min-h-[100vh] bg-slate-900">
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

      <div className=" flex flex-col sm:flex-row whole-div">
        {pan === true && isMobile === true && level > 6 && (
          <>
            <Panel
              level={level}
              user={user}
              pan={pan}
              setPan={setPan}
              clicked={clicked}
              setClicked={setClicked}
            />{" "}
          </>
        )}

        <div className="bg-slate-700 w-[100vw] flex flex-row flex-wrap">
          {isMobile === false && level > 6 && (
            <>
              <Panel level={level} user={user} pan={pan} setPan={setPan} />{" "}
            </>
          )}

          {level > 6 ? (
            <>
              {" "}
              <div className="flex flex-col items-center w-[78vw]  overflow-hidden">
                {showPfp === "start" && (
                  <>
                    <UserStats user={user} level={level} />
                    <Cal user={user} level={level} />
                    <Schedule user={user} level={level} uuid={uuid} />
                  </>
                )}
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
