
import React, { useState } from 'react';
import { useEffect } from 'react';
import { auth, fs ,db} from '../../Firebase';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { set } from 'date-fns';

export default function AssignedTo({ assigned, setAssigned, level ,page,post,month,dbId}) {
    const [selectedUser, setSelectedUser] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            if (level) {
                fs.collection('admin')
                    .get()
                    .then((querySnapshot) => {
                        const names = [];
                        querySnapshot.forEach((doc) => {
                            const userData = doc.data();
                            names.push(userData.Name);
                        });
                        setAssigned(names);
                    })
                    .catch((error) => {
                        console.log('Error getting users:', error);
                    });
            }
        });

        return unsubscribe;
    }, []);

    const handleUserClick = (user) => {
        setSelectedUser(user);
        setShowConfirmation(true);
    };

    const handleYesClick = () => {
        const docRef= collection(db,page )
        const colRef = doc(docRef,month)
        setDoc(colRef,{[  + dbId + month]:{
          AssignedTo:selectedUser,
        }},{merge:true})

        setMessage('Task assigned to ' + selectedUser);

        setTimeout(() => {
            setMessage('');
            setShowConfirmation(false);
        }
        , 2000);
    };

    const handleNoClick = () => {
        setShowConfirmation(false);
    };


    return (
        <div>
            <select onChange={(e) => handleUserClick(e.target.value)}>
                <option value={selectedUser}>Select a user to write text</option>
                {assigned.map((user, index) => (
                    <option key={index} value={user}>
                        {user}
                    </option>
                ))}
            </select>
            {showConfirmation && (
                <div className='flex items-center justify-center gap-4 pt-1 '>
                    <p className='text-white'>Are you sure you want to send to {selectedUser}?</p>
                    <button onClick={handleYesClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Yes</button>
                    <button onClick={handleNoClick} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded '>No</button>               
                </div>
            )}

            {message && (
                <div className='bg-blue-500 text-white text-center mt-2 py-2 px-4 rounded'>
                    <p>{message}</p>
                </div>
            )}
        </div>
    );
}
