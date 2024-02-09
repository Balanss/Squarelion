import React, { useState, useEffect, createContext,useMemo } from 'react';
import { auth, fs } from '../../Firebase';
import { set } from 'date-fns';

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [uuid, setUuid] = useState(null);
    const [level, setLevel] = useState(null);
    const [pto, setPto] = useState(null);
    const[wfh , setWfh] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                setUuid(firebaseUser.uid);
                const localUser = localStorage.getItem('user');
                fs.collection('admin').doc(firebaseUser.uid).get().then(snapshot => {
                    const userData = snapshot.data();
                    setUser(userData.Name);
                    setLevel(userData.level);
                    setPto(userData.pto);
                    setWfh(userData.WFH);
                    setRole(userData.role)
                    localStorage.setItem('user', userData.Name);
                });
            } else {
                setUser(null);
                setLevel(null);
                console.log('no user')
            }
        });

        return unsubscribe;
    }, [user, uuid, level, pto, wfh]);

    const value = useMemo(() => ({ user, uuid, level ,pto,wfh}), [user, uuid, level,pto,wfh]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}