import React from 'react'
import { collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../Firebase';
import { useEffect , useContext} from 'react';
import { UserContext } from '../../context/UserContext';

export default function ResetWFH() {

    const {uuid} = useContext(UserContext);

    useEffect(() => {
        const currentMonth = new Date().getMonth() + 1; // JavaScript months are 0-based
        const storedMonth = localStorage.getItem('month');
    
        if (storedMonth !== currentMonth.toString()) {
          localStorage.setItem('month', currentMonth.toString());
    
          const dcRef = collection(db, 'admin');
          const clRef = doc(dcRef, uuid);
          updateDoc(clRef, {
            WFH: 3
          });
        } else {
          console.log('current month is the same as the stored month');
        }
      }, []);

}
