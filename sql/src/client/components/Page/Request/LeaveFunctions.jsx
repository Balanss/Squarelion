import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { getDocs, collection,onSnapshot } from 'firebase/firestore';

export default function LeaveFunctions({user, monthNumbers,setData,pto,wfh}) {
   


    useEffect(() => {
        const fetchData = () => {
            const query = collection(db, "Request");

            const unsubscribe = onSnapshot(query, (querySnapshot) => {
                const newData = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    const values = Object.values(data);
                    return values[0]; // This will return the value of the first property. Adjust the index if needed.
                });
                setData(newData);
            });

            // Clean up function
            return () => unsubscribe();
        };

        fetchData();
    }, [user, monthNumbers]);

}