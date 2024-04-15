import React, { useState, useEffect } from "react";
import { auth, fs, db } from "../../../Firebase";

export default function GettingRound({ round, setRound, rounded, setRounded, page, month, showRound, viewer, setPage, level }) {
  const getRound = () => {
    setPage(localStorage.getItem("partner"));
    let unsubscribe = () => {}; // Initialize unsubscribe to a no-op function
    try {
      unsubscribe = fs.collection(page)
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
                        month: item.month,
                        order: item.order + 1,
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
                        designer1: item.designer1,
                        designer2: item.designer2,
                        designer3: item.designer3,
                        dbId: item.dbId,
                       
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

      return unsubscribe;
    } catch (error) {
      console.log("loading");
      return unsubscribe; // Ensure unsubscribe is always returned
    }
  };

  useEffect(() => {
    const unsubscribe = getRound();

    return () => {
      unsubscribe(); // Call the unsubscribe function when component unmounts
    };
  }, [page, showRound, viewer, month, level]);
}
