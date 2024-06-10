import React from 'react'
import {useState, useEffect,useMemo} from 'react'
import { auth, fs } from '../../Firebase'

export default function User({setUser,setUuid,setLevel}) {

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUuid(firebaseUser.uid);
        const localUser = localStorage.getItem('user');
        fs.collection('admin').doc(firebaseUser.uid).get().then(snapshot => {
          const userData = snapshot.data();
          setUser(userData.Name);
          setLevel(userData.level);
          
          localStorage.setItem('user', userData.Name);
        });
      } else {
        setUser(null);
        setLevel(null);
      }
    });

    return unsubscribe;
  }, []);
}