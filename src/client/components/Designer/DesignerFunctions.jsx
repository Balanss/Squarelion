import React, {useState,useEffect} from 'react'
import {collection,doc,setDoc,} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, fs,db } from '/src/client/Firebase.jsx'


export default function DesignerFunctions({setDesignerData}) {

//create const that will snap shot firebase data



const Design = async () => {    
    try {
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
        return unsubscribe;
    } catch (error) {
        console.error('Error fetching designer data:', error);
    }
};

useEffect(() => {
    const unsubscribe = Design();
    // Cleanup the subscription
   
}, []);


            

                    

}
