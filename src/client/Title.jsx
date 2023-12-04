import React,{useState,useEffect} from 'react'
import {collection,getDocs,onSnapshot,query,deleteDoc,doc,addDoc,updateDoc,setDoc,deleteField,getDoc} from "firebase/firestore";
import { auth, fs,db } from './Firebase'
import User from './components/User';

export default function Title({}) {

  const [user,setUser] = useState('')
  const [uuid,setUuid] = useState('')
  const [ level,setLevel] = useState('')
  // const [sum,setSum] = useState(null)

  const [message, setMessage] = useState([]);
        const getMessage = async () => {
            try {
              const unsubscribe = fs
                .collection('DesignerPage')
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


      

          const sum = message.filter((x,id) => x.SendTo === user)



          useEffect(() => {
           sum.length > 0 ?  document.title = `Squarelion Agency (${sum.length})` : document.title = `Squarelion Agency`;
          }, [sum]);


        

    

      return <User setUser={setUser} user={user} setUuid={setUuid} setLevel={setLevel} />
   

}
