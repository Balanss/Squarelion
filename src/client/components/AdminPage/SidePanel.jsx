import React, { useState } from "react";
import usersPic from "../images/new-arrival.png";
import IN from "../images/in.png";
import homeBtn from "../images/home-button.png";
import client from "../images/client.png";

import sqlProps from "../images/sqlProp.jpg";
import userPfp from "../images/user.png";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "/src/client/Firebase.jsx";

export default function SidePanel({ level, user, switching, setSwitching }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/");
      window.location.reload();
    });
  };

  function handleGoPfP() {
    localStorage.setItem("user", user);
    setTimeout(() => {
      navigate(`/user/${user}`);
    }, 1000);
  }

  const [hiding, setHiding] = useState(true);

  const formattedUser = user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();

  return (
    <aside
      id="cta-button-sidebar"
      className="fixed top-0 left-0 z-[10000] w-1/5 xl:w-[15%] h-screen transition-transform -translate-x-full  sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/"
              className="transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group"
            >
              <img
                src={homeBtn}
                className="w-6 md:w-[20px] lg:w-[30px] flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
              />
              <span className="md:text-xs lg:text-md ml-3 text-white rounded-lg dark:text-white">
                Home
              </span>
            </Link>
          </li>
          <li>
            <span
              className="transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 rounded-lg dark:text-white dark:hover:bg-gray-700 group"
              onClick={() => setSwitching("Client")}
            >
              <img className="w-6 md:w-[30px] lg:-[40px]" src={client} />
              <span className="md:text-xs lg:text-md flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white">
                Clients
              </span>
            </span>
          </li>
          {level > 9 ? (
            <li>
              <span
                className="transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group"
                onClick={() => {
                  setSwitching("Users"),
                    setHiding(false),
                    setTimeout(() => setHiding(true), 1000);
                }}
              >
                <img src={usersPic} className="w-6 md:w-[30px] lg:-[40px]" />
                <span className="md:text-xs lg:text-md flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white">
                  Users
                </span>
              </span>
            </li>
          ) : null}
          {level > 9 ? (
            <li className="transform transition-transform ease-in hover:scale-105 cursor-pointer">
              <span
                onClick={() => setSwitching("")}
                className="flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group"
              >
                <img src={sqlProps} className="w-6 md:w-[30px]" />
                <Link
                  to="/sqlProp"
                  className="md:text-xs lg:text-md  flex-1 ml-3 whitespace-nowrap text-white rounded-lg dark:text-white"
                >
                  Sql Properties
                </Link>
              </span>
            </li>
          ) : null}
          <li>
            <span
              onClick={handleGoPfP}
              className="transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group"
            >
              <img src={userPfp} className="w-6 md:w-[30px] lg:-[40px]" />
              <span className="md:text-xs lg:text-md flex-1 ml-3 whitespace-nowrap">
                {formattedUser}
              </span>
            </span>
          </li>
          <li>
            <span
              className="transform transition-transform ease-in hover:scale-105 cursor-pointer flex items-center p-2 text-white rounded-lg dark:text-white dark:hover:bg-gray-700 group"
              onClick={handleLogout}
            >
              <img
                src={IN}
                className="w-6 md:w-[30px] flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
              />
              <span className="flex-1 ml-3 md:text-xs lg:text-md  whitespace-nowrap ">Sign Out</span>
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
