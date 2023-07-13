import React from 'react'
import {useState,useEffect} from 'react'
import {collection,doc,setDoc,} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, fs,db } from '/src/client/Firebase.jsx'

export default function PartnerLogic({setPartner}) {


   
  const getPartner = async () => {
    try {
      const unsubscribe = fs.collection('partner')
        .onSnapshot((querySnapshot) => {
          const partnerArray = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
  
          partnerArray.sort((a, b) => a.id - b.id); // Sort the array based on the numeric ID
  
          setPartner(partnerArray);
        });
  
      return unsubscribe;
    } catch (error) {
      console.error('Error fetching partner data:', error);
    }
  };
  
  useEffect(() => {
    const unsubscribe = getPartner();
  
    // Cleanup the subscription
   
  }, []);
}
