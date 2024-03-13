/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore} from "@firebase/firestore";
import { Timestamp } from 'firebase/firestore';
import {GoogleAuthProvider,signInWithPopup} from "firebase/auth";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_SOME_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOM,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket:  import.meta.env.VITE_FB_STORAGE_B,
  messagingSenderId: import.meta.env.VITE_FB_,
  appId: import.meta.env.VITE_FB_APP_ID,
  measurementId: import.meta.env.VITE_MEAS_ID
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const analytics = getAnalytics(app);



const auth = firebase.auth();
const fs = firebase.firestore()
const db = getFirestore(app)
const timestamp = firebase.firestore()
const provider = new GoogleAuthProvider()
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth,fs,db,timestamp,provider,googleAuthProvider}


export const signInWithGoogle = () => {
  signInWithPopup(auth,provider)
  .then((result => {
    fs.collection('admin').doc(credentials.user.uid).set({
      Name:result.user.displayName,
      Email:result.user.email,
       accepted:'no',
       level:0,
       noti:0,
     
    })
  })
  .catch((error) => {
    console.log(error)
  }
  ))
}