import { useState, useEffect } from 'react';
import { collection, getDocs,onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase'; // Assuming you have already initialized your Firebase app and exported the Firestore instance as "db"

function BugFunctions({ setBugShow, level }) {
  useEffect(() => {
    const fetchBugs = async () => {
      const bugsCollectionRef = collection(db, 'bugsReport');
      const unsubscribe = onSnapshot(bugsCollectionRef, (snapshot) => {
        const bugsData = snapshot.docs.map((doc) => doc.data());
        setBugShow(bugsData);
      });
      return () => unsubscribe();
    };

    fetchBugs();
  }, [level]);
}

export default BugFunctions;
