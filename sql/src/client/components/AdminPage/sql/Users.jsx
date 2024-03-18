import React,{useEffect,useState} from 'react'
import { db } from '../../../Firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Users({level,users}) {

const [logs, setLogs] = useState([]);

useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "admin"), querySnapshot => {
      const allLogs = querySnapshot.docs.reduce((acc, doc) => {
        const data = doc.data();
        if (data.logs) {
          return [
            ...acc,
            {
              name: data.Name,
              level: data.level,
              id: doc.id,
              WFH: data.WFH,
              pto: data.pto,
              joined: data.dateJoined,
            },
          ];
        } else {
          return acc;
        }
      }, []);

      setLogs(allLogs);
    });

    return () => unsubscribe();
  }, []);


  const updateUserLevel = async (id, level) => {
    const userRef = doc(db, 'admin', id);
  
    await updateDoc(userRef, {
      level: Number(level)
    }, { merge: true });

    toast.success('User level updated');
  };


  return (
    <div className=''>
          <ToastContainer position='top-center' />
          <section className='bg-secondary phones:w-[90vw] phones:m-auto  phones:mt-10 mt-20 p-10  rounded-lg shadow-card2 border-2 border-dark-purple'>
        <div className="flex flex-col items-center justify-center mb-3 ">
          <p className="text-2xl font-bold text-white">
            Squarelion user panel information
          </p>
        </div>
      </section>

      <div className="flex flex-col items-center   justify-center text-white bg-secondary mt-2  p-10 rounded-lg shadow-card2 border-2 border-dark-purple hover:shadow-card ">
    <table className='text-left   '>
        <thead>
            <tr>
                <th className="px-2 py-4 phones:px-1">Name</th>
                <th className="px-2 py-4 phones:px-1">Level</th>
                <th className="px-2 py-4 phones:px-1">WFH</th>
                <th className="px-2 py-4 phones:px-1">PTO</th>
                <th className="px-2 py-4 phones:px-1">Joined</th>
                <th className="px-2 py-4 phones:px-1">Level</th>
            </tr>
        </thead>
        <tbody>
            {logs.map(user => (
                <tr key={user.id} className=''>
                    <td className="px-2 py-4 phones:px-1">{user.name}</td>
                    <td className="px-2 py-4 phones:px-1">{user.level}</td>
                    <td className="px-2 py-4 phones:px-1">{user.WFH}</td>
                    <td className="px-2 py-4 phones:px-1">{user.pto}</td>
                    <td className="px-2 py-4 phones:px-1">{user.joined}</td>
                    <td className="px-2 py-4 phones:px-1">
                        {user.name !== 'SUPERADMIN' && (
                            <select value={user.level}  onChange={e => updateUserLevel(user.id, e.target.value)} className='text-black' >
                                {[...Array(11).keys()].map(i => (
                                    <option key={i} value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        )}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
      </div>

    </div>
  )
}
