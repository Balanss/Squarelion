import React, { useState } from "react";
import { useEffect } from "react";
import { auth, fs, db } from "../../Firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

export default function AssignedTo({
  assigned,
  setAssigned,
  level,
  page,
  post,
  month,
  dbId,
}) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (level) {
        fs.collection("admin")
          .get()
          .then((querySnapshot) => {
            const names = [];
            querySnapshot.forEach((doc) => {
              const userData = doc.data();
              names.push(userData.Name);
            });
            setAssigned(names);
          })
          .catch((error) => {
            console.log("Error getting users:", error);
          });
      }
    });

    return unsubscribe;
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowConfirmation(true);
  };

  const handleYesClick = () => {
    const docRef = collection(db, page);
    const colRef = doc(docRef, month);
    setDoc(
      colRef,
      {
        [+dbId + month]: {
          AssignedTo: selectedUser,
        },
      },
      { merge: true }
    );

    setMessage("Task assigned to " + selectedUser);

    setTimeout(() => {
      setMessage("");
      setShowConfirmation(false);
    }, 2000);
  };

  const handleNoClick = () => {
    setShowConfirmation(false);
  };

  return null;
}
