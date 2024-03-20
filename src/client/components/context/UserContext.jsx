import React, { useState, useEffect, createContext,useMemo } from 'react';
import { auth, fs } from '../../Firebase';





export const UserContext = createContext(null);

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [uuid, setUuid] = useState(null);
    const [level, setLevel] = useState(null);
    const [pto, setPto] = useState(null);
    const[wfh , setWfh] = useState(null);
    const [role, setRole] = useState(null);
    const [email, setEmail] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                setUuid(firebaseUser.uid);
                const docRef = fs.collection('admin').doc(firebaseUser.uid);

                const unsubscribeSnapshot = docRef.onSnapshot((snapshot) => {
                    const userData = snapshot.data();
                    setUser(userData.Name);
                    setLevel(userData.level);
                    setPto(userData.pto);
                    setWfh(userData.WFH);
                    setRole(userData.role);
                    setEmail(userData.Email);
                    localStorage.setItem('user', userData.Name);
                });

                return () => {
                    unsubscribeSnapshot();
                };
            } else {
                setUser(null);
                setLevel(null);
                console.log('no user');
            }
        });

        return unsubscribe;
    }, []);

    const value = useMemo(() => ({ user, uuid, level ,pto,wfh,email}), [user, uuid, level,pto,wfh,email]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}