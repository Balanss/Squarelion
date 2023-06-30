import React,{useState,useEffect} from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from './Firebase'
import User from './components/User';

export default function Title({}) {

  const [user,setUser] = useState('')
  const [uuid,setUuid] = useState('')
  const [ level,setLevel] = useState('')

  const [message, setMessage] = useState([]);
        const getMessage = async () => {
            try {
              const unsubscribe = fs
                .collection('group')
                .orderBy('timestamp', 'desc')
                .onSnapshot((querySnapshot) => {
                  const messageArray = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                  }));
          
                  setMessage(messageArray);
                });
          
              return unsubscribe;
            } catch (error) {
              console.error('Error fetching message data:', error);
            }
          };
          
          useEffect(() => {
            const unsubscribe = getMessage();
          
            // Cleanup the subscription
           
          }, []); 

          const sum = message.map(x => x[user]).reduce((accumulator, currentValue) => accumulator + currentValue, null);




    useEffect(() => {
        if (sum === null){
          document.getElementById('myHead').innerHTML = `Squarelion Agency`;
        } else if (sum === 0){
          document.getElementById('myHead').innerHTML = `Squarelion Agency`;
        } else if(sum === 'NaN'){
          document.getElementById('myHead').innerHTML = `Squarelion Agency`;
        }
        
        else {
          document.getElementById('myHead').innerHTML = `Squarelion Agency (${sum})`;
        }
      }, [sum]);


      return <User setUser={setUser} user={user} setUuid={setUuid} setLevel={setLevel} />
   

}
