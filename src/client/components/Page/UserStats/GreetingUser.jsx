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

  const updateVersion = "5";

  return (
    <div className=" phones:mb-4 p-5 border w-[75vw] phones:w-[90vw] border-y-[#2c1f42] phones:m-auto border-x-[#2f3763] rounded-lg shadow text-left bg-[#111d39]  ">
      <JoinedDate user={user} level={level} />
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
    </div>
  );
}
