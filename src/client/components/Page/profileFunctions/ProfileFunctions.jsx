import React from 'react'
import {useState,useEffect} from 'react'
import {collection,doc,setDoc,} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, fs,db } from '/src/client/Firebase.jsx'

export default function ProfileFunctions({privateChat,setChat,setDesignerChat,setMessage}) {

    const getChatData = async () => {
        try {
          const chatDocRef = fs.collection('chat').doc(privateChat);
      
          chatDocRef.onSnapshot((chatDocSnapshot) => {
            if (chatDocSnapshot.exists) {
              const chatData = chatDocSnapshot.data();
      
              // Sort the chat messages based on time in descending order
              const sortedChat = Object.entries(chatData)
                .filter(([key]) => key !== 'timestamp') // Exclude the 'timestamp' field from sorting
                .sort((a, b) => new Date(b[0]) - new Date(a[0])) // Sort by date in descending order
                .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}); // Convert back to object
      
              setChat(sortedChat);
            } else {
              console.log('privateChat document does not exist');
              setChat(''); // Reset the chat data if the document doesn't exist
            }
          });
        } catch (error) {
          console.error('Error fetching chat data:', error);
        }
      };
      
      useEffect(() => {
        getChatData();
      }, [privateChat]); // Re-fetch chat data whenever privateChat changes
///// ABOVE HANDLE PRIVATE CHAT ^^^^




const getDesignerChat = async () => { 
    try {
      const unsubscribe = fs // Assuming 'fs' is Firestore
        .collection('designer')
        .orderBy('timestamp', 'desc')
        .onSnapshot((querySnapshot) => {
          const chatArray = querySnapshot.docs.map((doc) => ({ 
            id: doc.id,
            ...doc.data()
          }));
  
          setDesignerChat(chatArray); 
        });
  
      return unsubscribe;
    } catch (error) {
      console.error('Error fetching designer chat data:', error); 
    }
  };
  
  useEffect(() => {
    const unsubscribe = getDesignerChat(); 
  
    // Cleanup the subscription
  
  }, []);
  ///// ABOVE HANDLES CHAT TO DESIGNER ^^^


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




}
