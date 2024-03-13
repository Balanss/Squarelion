import React, { useState, useEffect } from "react";
import { auth, fs, db } from "../../../Firebase";


export default function GettingRound({ round, setRound, rounded, setRounded, page, month, showRound, viewer, setPage,level }) {
  const getRound = async() => {
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
                        designer: item.designer,
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
    } catch (error) {
      console.log("loading");
    }
  };

  useEffect(() => {
    const unsubscribe = getRound();
  
  }, [page, showRound, viewer, month, level]);

}
