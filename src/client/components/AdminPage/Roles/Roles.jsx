import React from 'react'
import {useState, useEffect,useMemo} from 'react'
import { auth, fs } from '../../../Firebase'

export default function User({ roles,setRoles,user,level }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            if (firebaseUser && level !== 11) {
                fs.collection('admin')
                    .where('role', '==', 'Designer')
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
            } else if (firebaseUser && level === 11) {
                fs.collection('admin')
                .where('level', '==', 11)
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
            }
        });

        return unsubscribe;
    }, []);



}