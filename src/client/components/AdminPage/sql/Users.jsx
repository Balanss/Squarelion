import React,{useEffect,useState,useContext,lazy} from 'react'
import { db } from '../../../Firebase';
import { collection, onSnapshot,query,where ,getDoc} from 'firebase/firestore';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { UserContext } from "../../context/UserContext";


const Pdf = lazy(() => import("./CreatePdf"));


export default function Users({users}) {

const [logs, setLogs] = useState([]);
const [selectedTeam,setSelectedTeam] = useState('');
const {user,level,pto,wfh,uuid} = useContext(UserContext);
const [data, setData] = useState('');
const [ userName, setUserName] = useState('');
const [modalIsOpen, setModalIsOpen] = useState(false);

useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "admin"), querySnapshot => {
      const allLogs = querySnapshot.docs.reduce((acc, doc) => {
        const data = doc.data();
        if (data) {
          return [
            ...acc,
            {
              name: data.Name,
              level: data.level,
              id: doc.id,
              WFH: data.WFH,
              pto: data.pto,
              joined: data.dateJoined,
              team: data.team,
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
      level: Number(level),
    }, { merge: true });
    toast.success('User level updated');
  };

  const updateUserTeam = async (id, team) => {
    const userRef = doc(db, 'admin', id);
    await updateDoc(userRef, {
        team: team
    }, { merge: true });
    toast.success('User assigned updated');
}


useEffect(() => {
  const fetchData = async () => {
    const docRef = doc(db, "Request", userName);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  fetchData();
}, [userName]);



// onMouseLeave={() => {setUserName('')}}
const person = Object.values(data).map(user => user.user);

  return (
    <div className='a'>

          <ToastContainer position='top-center' />
          <section className='bg-secondary phones:w-[90vw] phones:m-auto  phones:mt-10 mt-20 p-10  rounded-lg shadow-card2 border-2 border-dark-purple'>
        <div className="flex flex-col items-center justify-center mb-3 ">
          <p className="text-2xl font-bold text-white">
            User panel information
          </p>
        </div>
      </section>
 
      <div className="phones:grid grid-cols-1 phones:overflow-scroll phones:w-[90vw]  text-white bg-secondary mt-2  p-10 rounded-lg shadow-card2 border-2 border-dark-purple hover:shadow-card ">
    <table className='text-left  '>
        <thead>
            <tr>
                <th className="px-2 py-4 phones:px-1">Name</th>
                <th className="px-2 py-4 phones:px-1">Level</th>
                <th className="px-2 py-4 phones:px-1">WFH</th>
                <th className="px-2 py-4 phones:px-1">PTO</th>
                <th className="px-2 py-4 phones:px-1">Joined</th>
                <th className="px-2 py-4 phones:px-1">Level</th>
                <th className="px-2 py-4 phones:px-1">Assigned</th>
                <th className="px-2 py-4 phones:px-1">PDF</th>
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

            <td className="px-2 py-4 phones:px-1">
            {user.name !== 'SUPERADMIN' && (
            <select value={user.team} onChange={e => { setSelectedTeam(e.target.value); updateUserTeam(user.id, e.target.value)} } className='text-black'>
                  <option value='SQL'>SQL</option>
                  <option value='Niurone'>Niurone</option>
              </select>
              )}
            </td>
            <button onClick={() => {setModalIsOpen(true);setUserName(user.name)}} className='bg-dark-purple text-white p-2 mt-4 rounded-lg'>PDF</button>
        </tr>  
))}

{modalIsOpen && userName === person[0] && < Pdf userName={userName} data={data} setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} />}
        </tbody>
    </table>
      </div>

    </div>
  )
}
