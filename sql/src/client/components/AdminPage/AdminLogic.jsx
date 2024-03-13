import React from "react";
import { useState, useEffect } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { auth, fs, db } from "/src/client/Firebase.jsx";

export default function AdminLogic({ setUserPermit }) {
  const getUserPermit = async () => {
    try {
      const unsubscribe = fs.collection("admin").onSnapshot(querySnapshot => {
        const userPermitArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        userPermitArray.sort((a, b) => a.id - b.id); // Sort the array based on the numeric ID

        setUserPermit(userPermitArray);
      });

      return unsubscribe;
    } catch (error) {
      console.error("Error fetching user permit data:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = getUserPermit();

    // Cleanup the subscription
  }, []);
}
