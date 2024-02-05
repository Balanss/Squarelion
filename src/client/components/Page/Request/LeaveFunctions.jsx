import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

export default function LeaveFunctions({user, monthNumbers,setData}) {
   
 

    useEffect(() => {
        const fetchData = async () => {

            const newData = [];
            const docRef = doc(db, 'Request', `${user}`);
            const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    newData.push(docSnap.data());
                }
            
            setData(newData);
        };

        fetchData();
    }, [user, monthNumbers]);



}