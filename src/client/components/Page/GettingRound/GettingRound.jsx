import React, { useState, useEffect } from "react";
import { auth, fs, db } from "../../../Firebase";
import {
  collection,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  addDoc,
  FieldValue,
  deleteField,
} from "firebase/firestore";

export default function GettingRound({ round, setRound, rounded, setRounded, page, month, showRound, viewer, setPage }) {
  const getRound = () => {
    setPage(localStorage.getItem("partner"));
    try {
      fs.collection(page)
        .doc(month)
        .onSnapshot(doc => {
          if (doc.exists) {
            const data = doc.data();
            setRounded([data]);
            setRound(
              Object.keys(data)
                .map(key => {
                  const item = data[key];
                  return item.user
                    ? {
                        level: item.level,
                        month: item.month,
                        order: item.order,
                        objective: item.objective,
                        boosting: item.boosting,
                        channel: item.channel,
                        client: item.client,
                        color: item.color,
                        content: item.content,
                        count: item.count,
                        date: item.date,
                        monthInWords: item.monthInWords,
                        status: item.status,
                        statusText: item.statusText,
                        type: item.type,
                        unid: item.unid,
                        user: item.user,
                        answer: item.answer,
                        designer: item.designer,
                        priority: item.priority,
                      }
                    : null;
                })
                .filter(item => item !== null)
                .sort((a, b) => a.order - b.order) // Sort by order in ascending order
            );
          } else {
            console.log("No such document!");
          }
        });
    } catch (error) {
      console.log("loading");
    }
  };

  useEffect(() => {
    getRound();
  }, [page, showRound, viewer, month]);
}
