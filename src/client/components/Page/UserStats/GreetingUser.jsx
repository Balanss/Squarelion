import React from "react";
import { useState, useEffect } from "react";
import JoinedDate from "./Joined/JoinedDate";

export default function GreetingUser({ user, level }) {
  const [isOpen, setIsOpen] = useState(false);

  const hour = new Date().getHours();
  let greetingMessage;

  if (hour < 12) {
    greetingMessage = "Good morning";
  } else if (hour < 18) {
    greetingMessage = "Good afternoon";
  } else {
    greetingMessage = "Good evening";
  }

  const date = new Date();


const updateVersion = '4'



  return (
    <div className=" p-5 border w-[75vw] phones:w-[90vw] border-y-[#2c1f42] border-x-[#2f3763] rounded-lg shadow text-left bg-[#111d39]  ">
      <p className="text-xl xl:text-7xl text-white font-bold pb-5">
        {" "}
        {greetingMessage},
        <br />
        <span className="text-green-400  font-bold  text-xl  xl:text-4xl">
          {user}!
        </span>
      </p>
      <p className="text-gray-400  text-xs md:text-lg">
        {date.toString().slice(0, 15)}
      </p>

      <button
        onClick={() => {setIsOpen(!isOpen), localStorage.setItem('showNewUpdates',updateVersion)}} className="text-white mt-2  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" type="button" >
       {localStorage.getItem('showNewUpdates') === updateVersion ? 'No updates' : 'New Updates'}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>



      {isOpen && (
        <div className="z-10  absolute text-black font-semibold bg-white divide-y divide-gray-100 rounded-bl-xl rounded-br-xl rounded-tl-md rounded-tr-md shadow w-44 ">
          <ul className="py-2 text-sm ">
            <li>
              <h1 className="block px-4 py-2 max-h-[400px] overflow-auto">
                Hello {user}! There have been updates to Media Pilot:
                <ul className="list-disc list-inside mt-2">
                  <li>New profile ui screen</li>
                 <li> Content writers new ui screen for 2024 </li> 
                 <li>New Designer ui screen</li> 
                 <li> Added new current task - this will show your assigned task </li> 
                 <li> Content writers new ui screen for 2024 </li> 
                 {level> 9 || user === 'Saskia' ?<li> You can now see the lastest task finished in the last 24 hours </li>  : null}
                 
                </ul>
              </h1>
            </li>
          </ul>
        </div>
      )}

<JoinedDate user={user} level={level} />
    </div>
  );
}
