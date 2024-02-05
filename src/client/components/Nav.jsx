/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import User from "./User";
import { auth, fs, db } from "/src/client/Firebase.jsx";
import { useNavigate } from "react-router-dom";
import AdminLogic from "./AdminPage/AdminLogic";
import { motion } from 'framer-motion'
import {fadeIn} from '../utils/Motion'


export default function Nav() {
  const [user, setUser] = useState(0);
  const [level, setLevel] = useState("");
  const [uuid, setUuid] = useState("");
  const [userOkay, setUserOkay] = useState("");
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setUserOkay(localStorage.getItem("user"));
  }, [userOkay]);


  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Call the function initially to set the initial state

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  const [userPermit, setUserPermit] = useState([]); //

  const array = [
    { id: `/user/${user}`, title: user },
    { id: "logout", title: "Logout" },
  ];

  if (level > 9) {
    array.push({ id: "/admin", title: "Admin" });
  }

 const handleLogout = () => {
  auth.signOut().then(() => {
    navigate("/");
    localStorage.clear();
    setUser(0);
    setLevel(0);
    setUuid(null);
  });
}

  return (
    <>
      <AdminLogic setUserPermit={setUserPermit} />

      <User
        setUser={setUser}
        user={user}
        level={level}
        setLevel={setLevel}
        setUuid={setUuid}
        uuid={uuid}
      />

      {uuid && level > 2 && (
        <>
          <div className="flex font-mono items-center justify-center sm:w-[400px] mt-2 sm:items-center sm:m-auto sm:justify-around ">
            {array.map((x, i) => {

const animationProps = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay: i * 0.3 },
};

              return (
                <motion.div key={i} {...animationProps} className="motion-div mt-5">

              
                <span  className=" cursor-pointer mr-5 relative mt-2 mb-2 md:px-5 md:py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                  onClick={() => {
                    if (x.id === "logout") {
                      handleLogout();
                    }
                    if (x.id === "/admindashboard") {
                      navigate("/admindashboard");
                    }
                    if (x.id === `/user/${user}`) {
                      navigate(`/user/${user}`);
                    }
                  }}
                >
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-yellow-600 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-yellow-600 group-hover:w-full ease"></span>
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-sky-900 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                    <button className=" text-center text-sm cursor-pointer  p-1  m-auto ">
                      {x.title.charAt(0).toUpperCase() + x.title.slice(1).toLowerCase()}
                    </button>
                  </span>
                </span>
                </motion.div>
              );
            })}
          </div>
        </>
      )}

      {!uuid && (
        <>
          <div className="flex font-mono items-center justify-center sm:w-[300px]  sm:items-center sm:m-auto sm:justify-around ">
            <button
              type="button"
              className="w-[80px] text-white bg-gradient-to-r mt-2 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              {" "}
              <Link to="/login" className="mr-10 mt-4">
                {" "}
                Login{" "}
              </Link>
            </button>
            <button type="button" className="w-[80px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">   <Link to ='/signup' className=''> Signup </Link></button>
          </div>
        </>
      )}
    </>
  );
}
