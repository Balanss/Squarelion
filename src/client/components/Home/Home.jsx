/* eslint-disable no-unused-vars */
import Nav from "../Nav";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, fs, db } from "/src/client/Firebase.jsx";
import useLogo from "../images/useLogo.png";
import rocket from "../images/rocket.jpg";
import User from "../User";
import Footer from "./Footer";
import axios from "axios";
import Loading from "../Loading";
import Title from "../../Title";
import fast from "../images/fast.jpg";
import ai from "../images/Ai-home.jpg";
import automation from "../images/automation-home.jpg";

export default function Home() {
  const [user, setUser] = useState("");
  const [level, setLevel] = useState("");
  const [uuid, setUuid] = useState("");

  // useEffect(() => {
  //   // Send user data to the server whenever it changes
  //   axios.post('http://localhost:5173/', { user })
  //     .then(response => {
  //       console.log(response.data); // Log the response from the server if needed
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, [user]);

  const [isVisible, setIsVisible] = useState(true);
  const [zIndex, setZIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    // Set the highest z-index value when the component is mounted
    setZIndex(9999);

    // After 500ms, set the visibility to false (display none)
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    // Clean up the timeout when the component is unmounted
    return () => clearTimeout(timeout);
  }, []);

  const [imageUrl, setImageUrl] = useState(
    "https://source.unsplash.com/random/1600x900/?marketing"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(true);
      setImageUrl(
        `https://source.unsplash.com/random/1600x900/?technology&t=${Date.now()}`
      );
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={`${!isVisible ? "hidden" : "absolute w-full z-[100]"}`}>
        <Loading />
      </div>
      <div className="relative h-screen">
        <div className="absolute z-50 top-2 inset-0 opacity-100">
          <Nav
            user={user}
            level={level}
            uuid={uuid}
            setUser={setUser}
            setLevel={setLevel}
            setUuid={setUuid}
          />
        </div>
        <img
          className={`object-cover w-full h-full transition-opacity duration-1000 ${
            fadeIn ? "opacity-75" : "opacity-0"
          }`}
          src={imageUrl}
          alt="Header Background"
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <img className="w-[400px] h-[200px]" src={useLogo} alt="Logo" />
          <h1 className="text-5xl text-white font-bold mb-4">
            Welcome to Squarelion Media Pilot
          </h1>
          <p className="text-2xl text-white mb-4">
            An innovative and rapid marketing solution. Kindly be aware that
            Media Pilot is currently undergoing internal development.
          </p>
          <div className="flex justify-center gap-10">
            <span className="flex flex-col ">
              <img
                className="w-[90px] h-[90px] mr-4 rounded-full"
                src={rocket}
                alt="Logo 1"
              />
              <p className="text-2xl mt-2 text-white mb-4">Fast</p>
            </span>

            <span className="flex flex-col ">
              <img
                className="w-[90px] h-[90px] mr-4 rounded-full"
                src={fast}
                alt="Logo 2"
              />
              <p className="text-2xl mt-2 text-white mb-4">Efficient</p>
            </span>

            <span className="flex flex-col ">
              <img
                className="w-[90px] h-[90px] rounded-full"
                src={ai}
                alt="Logo 3"
              />
              <p className="text-2xl mt-2 text-white mb-4">Automation</p>
            </span>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
