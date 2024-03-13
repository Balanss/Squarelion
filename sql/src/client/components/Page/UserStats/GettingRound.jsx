import React from 'react'
import { useState, useEffect } from "react";
import { fs } from "../../../Firebase";

export default function GettingRound({setRound,user}) {

    const getRound = async () => {
        try {
          const unsubscribe = fs
            .collection("partner")
            .onSnapshot(async querySnapshot => {
              const roundArray = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
              }));
    
              setRound(roundArray.map(doc => doc.name));
            });
    
          return unsubscribe;
        } catch (error) {
          console.log("loading");
        }
      };
    
      useEffect(() => {
        getRound();
      }, [user]);

}
