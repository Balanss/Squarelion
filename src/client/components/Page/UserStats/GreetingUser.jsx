import React from "react";
import { useState, useEffect } from "react";

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

const updateVersion = '2'

  return (
    <div className="max-w-sm p-5 md:w-[250px] lg:w-[200px] xl:w-[280px]  border border-gray-600 rounded-lg shadow text-left bg-gray-800 hover:bg-gray-700  ">
      <p className="text-xs xl:text-[md]  text-white font-bold">
        {" "}
        {greetingMessage}
        <span className="text-blue-400 ml-2 font-bold text-md text-xs xl:text-[md]">
          {user}!
        </span>
      </p>
      <p className="text-gray-400  text-xs xl:text-[md]">
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
                  <li>Designers can now send messages for feedback</li>
                  <li>Designers can now upload a single pdf per post</li>
                  <li>Content writers can now delete designer post</li>
                </ul>
              </h1>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
