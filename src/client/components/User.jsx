import React from 'react'
import {useState, useEffect,useMemo} from 'react'
import { auth, fs } from '../Firebase'

export default function User({user,setUser,setUuid,setLevel,level}) {
 

    function GetUserUid() {
        const [uid, setUid] = useState(null);
        useEffect(() => {
          auth.onAuthStateChanged((user) => {
            if (user) {
              setUid(user.uid);
              setUuid(user.uid)
            }
          });
        }, []);
        return uid;
      }

      
    
      const uid = GetUserUid(); // ignore errror
      // getting current user function
      
      

       function GetCurrentUser(){
      
          useEffect(()=>{
              auth.onAuthStateChanged(user=>{
                  if(user){ 
                    fs.collection('admin').doc(user.uid).get().then(snapshot => {
                      setUser(snapshot.data().Name);
                      localStorage.setItem('user',snapshot.data().Name)
                      setLevel(snapshot.data().level);
                      
                    })
                  }
                  else{
                      setUser(null);
                  }
              })
          },[user])
          return user;
      }
      
      const admin = GetCurrentUser();
     

     

    
}
