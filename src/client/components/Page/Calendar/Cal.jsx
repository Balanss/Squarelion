import React, { useState, useEffect } from "react";
import DateSchedule from "./DateSchedule";

const LoadingDiv = () => {
  return (
    <div className="w-[95vw] md:w-[50vw]  h-[400px] h-min-[400px] cal:w-[30vw] cal:h-[50vh] m-auto flex items-center justify-center  border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
        loading...
      </div>
    </div>
  );
};

const CalendarWithNotes = ({ user, level }) => {
  const [fromDate, setFromDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [btnTitle, setBtnTitle] = useState("Submit");

  const sendToZapier = async payload => {
    const zapierURL = import.meta.env.VITE_ZAP_SEND_CAL; // SQL TO ZAP TO GOOGLE Calendar
    try {
      const response = await fetch(zapierURL, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(payload),
      });
      const resp = await response.json();
      console.log(resp);
    } catch (e) {
      console.log(e);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const leadData = {
      from: fromDate,
      user: user,
      description: description,
      title: title,
    };

    try {
      await sendToZapier(leadData);
      // Additional code to execute after sending data to Zapier, if needed
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      setFromDate("");
      setDescription("");
      setTitle("");
    }, 1500);

    setBtnTitle("Submitted.. Page after you refresh");

    setTimeout(() => {
      // This code will run after 2 seconds
      setBtnTitle("Submit");
    }, 3000); // 2000 milliseconds = 2 seconds
  }
  const [calLoading, setCalLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCalLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="p-5 phones:p-0 phones:m-0 mb-10 text-lg font-semibold text-left text-white lg:w-[75vw] m-auto bg-gray-800  animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in" >
      <section className="phones:p-5 phones:text-center">
      <p className="mt-1 text-2xl font-semibold  text-gray-500 dark:text-gray-400">
      Calendar
        </p>
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          {" "}
          
          Add events to the Squarelion Calendar
        </p>
      </section>
        <hr />
        <section className="flex justify-center gap-5 pb-20  p-5 wrap sm:w-[75vw] flex-col text-black   laptopL:w-full laptopL:flex-row  ">
          <div className={`${calLoading === false ? "hidden" : "false"}`}>
            <LoadingDiv />
          </div>

          <div
            className={`${
              calLoading === false ? "block" : "hidden"
            } bg-slate-700 rounded-md`}
          >
            <DateSchedule user={user} />
          </div>
        </section>
      </div>
    </>
  );
};

export default CalendarWithNotes;
