/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import User from "./User";
import { auth, fs, db } from "/src/client/Firebase.jsx";
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import AdminLogic from "./AdminPage/AdminLogic";
import { ar } from "date-fns/locale";
import { set } from "date-fns";

export default function Nav() {
  const [user, setUser] = useState(0);
  const [level, setLevel] = useState("");
  const [uuid, setUuid] = useState("");
  const [userOkay, setUserOkay] = useState("");
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
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

  const [round, setRound] = useState([]);

  const getRound = async () => {
    try {
      const unsubscribe = fs.collection("admin").onSnapshot(querySnapshot => {
        const roundArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        roundArray.sort((a, b) => {
          // Extract the numeric part from the IDs
          const idA = parseInt(a.id.split("-")[0]);
          const idB = parseInt(b.id.split("-")[0]);

          return idA - idB; // Sort the array based on the numeric IDs
        });

        setRound(roundArray);
      });

      return unsubscribe;
    } catch (error) {
      null;
    }
  };

  useEffect(() => {
    getRound();
    // Cleanup the subscription
  }, []);

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
  const alert = userPermit.filter(x => x.request >= "Awaiting Request");
  const alertNumber = alert.length > 0 ? alert.length : 0;

  const array = [
    { id: `/user/${user}`, title: user },
    { id: "/admindashboard", title: "Admin" },
    { id: "logout", title: "Logout" },
  ];

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
              return level < 10 && x.id === "/admindashboard" ? null : (
                <span
                  key={i}
                  className=" cursor-pointer mr-5 relative mt-2 mb-2 md:px-5 md:py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                  onClick={() => {
                    if (x.id === "logout") {
                      auth.signOut().then(() => {
                        navigate("/");
                        localStorage.clear();
                        setUser(0);
                        setLevel(0);
                        setUuid(null);
                      });
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
            {/* <button type="button" className="w-[80px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">   <Link to ='/signup' className=''> Signup </Link></button> */}
          </div>
        </>
      )}
    </>
  );
}
