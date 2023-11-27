import React, { useState, useEffect } from 'react';
import { db } from '../../../Firebase';
import { collection, getDocs,doc,updateDoc,onSnapshot} from 'firebase/firestore';
import { set } from 'date-fns';
import User from '../../User';

export default function LogInfo() {
    const [logs, setLogs] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedUserLogs, setSelectedUserLogs] = useState([]);
    const [selectedUserLogsOut, setSelectedUserLogsOut] = useState([]);
    const[value,setValue] = useState('')
    const [user,setUser] = useState('')
    const [uuid,setUuid] = useState('')
    const [ isAccepted,setIsAccepted] = useState('')
    const [ level,setLevel] = useState('waiting')

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'admin'), (querySnapshot) => {
            const allLogs = querySnapshot.docs.reduce((acc, doc) => {
                const data = doc.data();
                if (data.logs) {
                    return [...acc, { name: data.Name, logs: data.logs, level: data.level, logsOut: data.logsOut, id: doc.id }];
                } else {
                    return acc;
                }
            }, []);

            setLogs(allLogs);
        });

        return () => unsubscribe();
    }, []);

   

    const handleUserChange = (event) => {
        setSelectedUser(event.target.value);
        const userLogs = logs.find((user) => user.name === event.target.value);
     
        setSelectedUserLogs(userLogs ? userLogs.logs : []);
        setSelectedUserLogsOut(userLogs ? userLogs.logsOut : []);
    };

    

    const getLatestLog = (userLogs) => {
        if (userLogs && userLogs.length > 0) {
            return userLogs[userLogs.length - 1];
        } else {
            return '';
        }
    }

    const getLatestLogOut = (userLogsOut) => {
        if (userLogsOut && userLogsOut.length > 0) {
            return userLogsOut[userLogsOut.length - 1];
        } else {
            return '';
        }
    }



    const MAX_LOGS = 10;

    const [numLogsToShow, setNumLogsToShow] = useState(MAX_LOGS);

    const handleShowMoreClick = () => {
        setNumLogsToShow(numLogsToShow + MAX_LOGS);
    };

    const handleShowLessClick = () => {
        setNumLogsToShow(MAX_LOGS);
    };


  


    return (
        <div className='bg-slate-900 p-4 mt-4 animate-fade animate-once animate-duration-[2000ms] animate-ease-in-out' >
            <User setUser={setUser} user={user} setUuid={setUuid} setIsAccepted={setIsAccepted} level={level} setLevel={setLevel} />
<section>
    <div className='flex flex-col items-center justify-center mb-3'>
        <p className='text-2xl font-bold text-white'>Squarelion user panel information</p>
    </div>
</section>

            <div className='flex flex-col items-center justify-center'>
        <label htmlFor="user-select">Select a user:</label>
        <select id="user-select" value={selectedUser === ''? 'Select user':selectedUser} onChange={handleUserChange}>
            <option value="" className='text-black'>--Select a user--</option>
            {logs.map((user) => (
                <option className='text-black' key={user.name} value={user.name}>
                    {user.name}
                </option>
            ))}
        </select>
        </div>
        <table className='w-full mt-5 text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr className=''>
                    <th className="px-6 py-3">User</th>
                    <th className="px-6 py-3">Level</th>
                    <th className="px-6 py-3">Latest Login Time</th>
                    <th className="px-6 py-3">Latest Logout Time</th>
                    <th scope="col" className="px-6 py-3">
                    User Level
                </th>

                </tr>
            </thead>
            <tbody className='bg-white divide-y dark:divide-gray-700 dark:bg-gray-800'>
                {logs.map((user,i) => {
              
                    return (
                        <tr key={user.name} className=''>
                            <td className="px-6 py-4">{user.name}</td>
                            <td className="px-6 py-4">{user.level}</td>
                            <td className="px-6 py-4">{getLatestLog(user.logs)}</td>
                            <td className="px-6 py-4">{getLatestLogOut(user.logsOut)}</td>
                            <td className="px-6 py-4">
                                <input
                                    className='text-black'
                                    placeholder='EDIT USER'
                                  
                                    onChange={(e) => setValue(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            // Call the function to handle the submission
                                            const docRef = collection(db,'admin')
                                            const colRef=doc(docRef,user.id );
                                            const numericValue = parseInt(value);
                                            updateDoc(colRef,{level:  numericValue}, {merge: true});
                                            setValue('');
                                            alert(`${user.name} has been updated to ${value}`)
                                        
                                        }
                                    }}
                                />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
  
    {selectedUserLogs.length > 0 && (
        <div className='flex gap-5 animate-fade animate-once animate-duration-[2200ms] animate-ease-in-out'>
        <ol className='relative border-l border-gray-200 dark:border-gray-700 mt-5'>
            <h2 className='ml-2'>{selectedUser}'s logged In</h2>
            <ul className='flex flex-col-reverse'>
                {selectedUserLogs.slice(0, numLogsToShow).map((log, index) => (
                    <li className="mb-10 ml-4" key={index}>
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{log}</time>
                    </li>
                ))}
            </ul>
            {selectedUserLogs.length > 10  && (
                <div className='flex justify-center mt-4 ml-2'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2' onClick={handleShowMoreClick}>Show More</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleShowLessClick}>Show Less</button>
                </div>
            )}


        </ol>

        {selectedUserLogsOut && selectedUserLogsOut.length > 0 && (
            <ol className='relative border-l border-gray-200 dark:border-gray-700 mt-5'>
                <h2 className='ml-2'>{selectedUser}'s Clocked Out</h2>
                <ul className='flex flex-col-reverse'>
                    {selectedUserLogsOut.slice(0, numLogsToShow).map((log, index) => (
                        <li className="mb-10 ml-4" key={index}>
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{log}</time>
                        </li>
                    ))}
                </ul>
                {selectedUserLogsOut.length > 10 && (
                    <div className='flex justify-center mt-4 ml-2'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2' onClick={handleShowMoreClick}>Show More</button>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleShowLessClick}>Show Less</button>
                    </div>
                )}
            </ol>
        )}

        </div>
    )} 
    </div>
    );
}