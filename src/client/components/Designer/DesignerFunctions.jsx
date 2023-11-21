import React, {useState,useEffect} from 'react'
import {collection,doc,setDoc,} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, fs,db } from '/src/client/Firebase.jsx'


export default function DesignerFunctions({ setDesignerData }) {
    useEffect(() => {
        const unsubscribe = fs // Assuming 'fs' is Firestore
            .collection('DesignerPage')
            .orderBy('prio', 'desc')
            .onSnapshot((querySnapshot) => {
                const designArray = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setDesignerData(designArray);
            });

        // Cleanup the subscription
        return () => unsubscribe();
    }, []);

    return null;
}
