/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import {
  updateDoc,
  collection,
  doc,
  setDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../Firebase";

export default function ButtonPress({
  objective,
  type,
  date,
  post,
  page,
  month,
  setObjective,
  qty,
  user,
  uniqueId,
  boosting,
}) {
  const [timer, setTimer] = useState("waiting");
  // const [parsedDate,setParsedDate] = useState(new Date(month))
  const [monthInWords, setMonthInWords] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const parsedDate = new Date(month);
    const adjustedMonth = parsedDate.getMonth() + 1;
    // Set the adjusted month in words
    setMonthInWords(
      format(new Date(parsedDate.getFullYear(), adjustedMonth), "MMMM ")
    );
  }, [month, monthInWords]);

  async function handleData() {
    // Format the month as a string of words
    if (objective && type && date !== "") {
      const docRef = collection(db, page);
      const colRef = doc(docRef, month);
      await setDoc(
        colRef,
        {
          [post + month]: {
            date: date,
            unid: uniqueId,
            answer: "",
            designer: "",
            designer1: "",
            designer2: "",
            designer3: "",
            type: type,
            objective: objective,
            count: post,
            order: post - 1,
            status: "pending",
            color: "orange",
            statusText: "pending",
            month: month,
            user: user,
            client: page,
            content: objective,
            channel: type,
            monthInWords: monthInWords,
            boosting: boosting === "" ? 0 : boosting,
            priority: "No",
            dbId: post,
          },
        },
        { merge: true }
      );

      setSuccess("Post Content Added");

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } else {
      alert("Please fill in all the fields before submitting the form.");
    }
  }

  return (
    <>
      <div className="rounded-md  mt-5 mb-5 text-center" role="group"></div>
    </>
  );
}
