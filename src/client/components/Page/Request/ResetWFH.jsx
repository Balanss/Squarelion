import React from 'react'
import { collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../Firebase';
import { useEffect , useContext} from 'react';
import { UserContext } from '../../context/UserContext';

export default function ResetWFH() {

    const {uuid} = useContext(UserContext);

   useEffect(() => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  if (currentDay === 24) {
    const dcRef = collection(db, 'admin');
    const clRef = doc(dcRef, uuid);
    updateDoc(clRef, {
      WFH: 3
    },{ merge: true });
  } else {
    console.log('Today is not the 24th of the month');
  }
}, []);

}
