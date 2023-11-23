import React from 'react'
import {useState, useEffect,useMemo} from 'react'
import { auth, fs } from '../../../Firebase'

export default function User({ roles,setRoles }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                fs.collection('admin')
                    .where('role', '!=', null)
                    .get()
                    .then((querySnapshot) => {
                        const usersData = [];
                        querySnapshot.forEach((doc) => {
                            const userData = doc.data();
                            usersData.push(userData);
                        });
                        setRoles(usersData);
                    })
                    .catch((error) => {
                        console.log('Error getting users:', error);
                    });
            } else {
                // Handle user not authenticated
            }
        });

        return unsubscribe;
    }, []);



}