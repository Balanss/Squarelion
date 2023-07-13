import React from 'react'
import {useState,useEffect} from 'react'
import {collection,doc,setDoc,} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, fs,db } from '/src/Firebase.jsx'

export default function TimeOffLogic({setWfh}) {


    const getWFH = async () => {
        try {
          const unsubscribe = fs.collection('notInOffice')
            .onSnapshot((querySnapshot) => {
              const wfhArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
              }));
      
              wfhArray.sort((a, b) => a.id - b.id); // Sort the array based on the numeric ID
      
              setWfh(wfhArray);
            });
      
          return unsubscribe;
        } catch (error) {
          console.error('Error fetching WFH data:', error);
        }
      };
      
      useEffect(() => {
        const unsubscribe = getWFH();
      
        // Cleanup the subscription
      
      }, []);
      
 
}

