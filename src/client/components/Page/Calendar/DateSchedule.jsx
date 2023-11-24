import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  collection,
  doc,
  setDoc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { Alert } from "flowbite-react";
import { set } from "date-fns";

export default function Calendar({ user }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [time, setTime] = useState('');
  const [scheduleData, setScheduleData] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [timer, setTimer] = useState('');

  const handleTimeChange = event => {
    setTime(event.target.value);
  };

  const handleSubmit = () => {
    if (time && title > "") {
      const docRef = collection(db, "schedule");
      const colRef = doc(docRef, title);
      setDoc(
        colRef,
        { selectedDate: time ,timer:timer , Title: title, user: user },
        { merge: true }
      );
      setMessage("Event added successfully");
      setTimeout(() => {
        setMessage("");
        setTime("");
        setTitle("");
        setTimer('');
      }, 2000);
    } else {
      setMessage("Please fill out all fields");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }

 
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "schedule"), snapshot => {
      const data = [];
      snapshot.forEach(doc => {
        data.push(doc.data());
      });
      // Sort the data array by closest date to latest
      data.sort((a, b) => new Date(a.selectedDate) - new Date(b.selectedDate));
      setScheduleData(data);
    });
    return unsubscribe;
  }, []);

  const handleDelete = async id => {
    const docRef = collection(db, "schedule");
    const colRef = doc(docRef, id);
    deleteDoc(colRef);
  };

  const colors = [
    "bg-green-800",
    "bg-blue-800",
    "bg-blue-900",
    "bg-green-900",
    "bg-indigo-900",
    "bg-purple-900",
    "bg-yellow-900",
    "bg-pink-800",
    "bg-teal-800",
    "bg-cyan-800",
    "bg-lime-800",
    "bg-orange-800",
  ];

  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row-reverse lg:w-[75vw] p-10 justify-between bg-slate-800 shadow-lg ">
      <div className="">
        <DatePicker selected={selectedDate} inline className="myDatePicker " />

        <div className="bg-slate-900 text-white p-5 rounded-md  ">
          <h2>Select a date and time</h2>

          <input
            type="date"
            onChange={handleTimeChange}
            className="text-black "
            value={time}
          />
          <input type="number" className="text-black" placeholder="ADD Time" onChange={(e) => {setTimer(e.target.value)}} value={timer} />
          <input
            type="text"
            placeholder="Title"
            className="text-black mr-1 w-[200px]"
            onChange={e => setTitle(e.target.value)}
            maxLength={50}
            value={title}
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            onClick={handleSubmit}
          >
            Submit
          </button>

          {message && (
            <div
              className={`p-2 rounded-md text-md mt-2 flex  ${
                message === "Event added successfully"
                  ? "bg-green-500 text-white"
                  : "text-white bg-red-800"
              }`}
            >
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>

      <div className="inline-flex flex-col gap-5 lg:w-[40vw]   p-4 max-h-[400px] lg:max-h-[800px] overflow-y-auto">
        <section className="flex justify-between">
          <h2 className="text-white">Upcoming Events</h2>
        </section>
        {scheduleData.map((x, id) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          const currentDate = new Date();
          const selectedDate = new Date(x.selectedDate) + 1;
          const isPastDate = selectedDate < currentDate;

          if (isPastDate) {
            return null; // Skip rendering for past events
          }

          return (
            <React.Fragment key={id}>
              <div
                className={`text-white text-xs ${randomColor} p-2 mt-2 rounded-md inline-flex flex-col max-w-[200px] lg:max-w-[500px] break-words `}
              >
                <h1 className="font-bold mb-2 flex justify-between">
                  {x.user}{" "}
                  <span
                    className="cursor-pointer hover:text-red-700 "
                    onClick={() => {
                      const docRef = collection(db, "schedule");
                      const colRef = doc(docRef, x.Title);
                      deleteDoc(colRef);
                    }}
                  >
                    {" "}
                    X{" "}
                  </span>{" "}
                </h1>
                <p onClick={() => handleDelete(id)}>
                  {x.selectedDate.replace("T", " ")}
                  <span className="ml-1"> @ {x.timer}  </span>
                  <span className="ml-1"> | {x.Title}  </span>
                </p>
              </div>
              <hr className="opacity-25" />
            </React.Fragment>
          );
        })}



      </div>
    </section>
  );
}
