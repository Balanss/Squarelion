import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { getDocs, collection } from 'firebase/firestore';

export default function LeaveFunctions({user, monthNumbers,setData}) {
   
 const [ids, setIds] = useState([])

    const getIds = async () => {
        const querySnapshot = await getDocs(collection(db, "Request"));
        const ids = querySnapshot.docs.map(doc => doc.id);
        return ids;
      };

   

    useEffect(() => {
        const fetchData = async () => {

            const querySnapshot = await getDocs(collection(db, "Request"));
            const ids = querySnapshot.docs.map(doc => doc.id);

            const newData = [];
            const docRef = doc(db, 'Request', `${ids}`);
            const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    newData.push(docSnap.data());
                }
            
            setData(newData);
        };

        fetchData();
    }, [user, monthNumbers]);



}