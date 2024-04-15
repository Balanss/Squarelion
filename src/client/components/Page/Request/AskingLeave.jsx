import React, { useState ,useContext} from 'react';
import { UserContext } from '../../context/UserContext';
import { updateDoc,doc ,setDoc, increment} from 'firebase/firestore';
import { db } from '../../../Firebase';
import LeaveFunctions from './LeaveFunctions';


const AskingLeave = ({}) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
    const year = new Date().getFullYear();
    const daysInMonth = new Date(year, selectedMonth, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const {user,level,pto,wfh,uuid} = useContext(UserContext);

    const handleClick = (day) => {
        setGetId(day);
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(Number(e.target.value));
    };




    const [getId, setGetId] = useState('');
    const [leaveType, setLeaveType] = useState('');
    const [data, setData] = useState([]);

   async function handleConfirm(){
        const docRef = doc(db, "Request", user);
        const userRef = doc(db,'admin',uuid);

await setDoc(docRef, {
    [`${selectedMonth}/${getId}`]: {
        type: leaveType,
        accepted: 'pending',
        day: getId,
        month: selectedMonth,
        user: user,
        uuid: uuid
    }
}, { merge: true });

await updateDoc(userRef, {
    [leaveType]:increment(-1)
}, { merge: true });

  setTimeout(() => {
    setLeaveType('');
    setGetId('');
  }, 1000);

    }

const matchingUsers = data.flatMap(outerArray => 
  outerArray.filter(innerArray => 
    innerArray.user === user
  )
);


    return (
        <div className='pt-4 px-4 py-4'>
          <LeaveFunctions user={user} monthNumbers={selectedMonth} setData={setData} pto={pto} wfh={wfh} />
          <section className='flex  gap-10'>
              <div className='flex flex-col gap-4'>
              <h1 className='text-2xl text-white font-bold'>{user} Requesting Leave</h1>
              <p className='text-white text-xl'>Please select the month and day you would like to request leave for</p>
             <div className='bg-secondary p-2 w-1/2'>
             <p className='text-white text-2xl'>You have <span className='text-green-500'> {wfh}</span> days left for the month</p>
             
              <p className='text-white text-2xl mt-2'>You have <span className='text-green-500 '>{pto}</span> days left for the year</p>
             </div>
              <p className='text-white w-1/2 '>The WFH policy goes as : You can be granted 3 WFH days in a month with a deduction of 60% of your daily fee. 
              Personel with over 6 months in the company will be deducted 40% of your daily fee  </p>
              <p className='text-white font-bold underline mb-2'>The amount of WFH days reset each month on the 24TH</p>
              </div>
              </section>

         <select value={selectedMonth} onChange={handleMonthChange}>
         {months.map((month, index) => (
        <option key={month} value={index + 1}>
            {month}
        </option>
           ))}
            </select>

            <div className='grid grid-cols-6 mt-2 '>
                {days.map(day => ( <>  
                    <div className='bg-white px-10 py-10 broder-2 border hover:cursor-pointer ' key={day} onClick={() => handleClick(day)}>
                        {day}
                        {matchingUsers.map(item => {
                            
                        if (item && item.month === selectedMonth && item.day === day && item.accepted !== 'denied' && item.user && user === item.user) {
                                return <p key={item.day} className='text-sm bg-green-500 '>{item.type}</p>
                            }
                        })}
                    </div>

                    <p className='fixed'></p>
                    </> ))}
            </div>

  
                
                {getId !== '' && (<>
                <div className='fixed bg-secondary w-1/2 h-screen top-0 right-0 text-white'>
                  <div className='px-4 py-4'>

                     <h1 className='text-2xl mb-5'> Hello  <span className='text-green-300 font-bold'> {user} </span> , <br/> Please select one of the two options </h1>
                    
                      <div className='flex gap-2 mt-2'>
                          <button className='bg-primary px-4 py-2 rounded-lg hover:bg-blue-800' onClick={() => setLeaveType('WFH')}>Work from home</button>
                          <button className='bg-primary px-4 py-2 rounded-lg hover:bg-blue-800' onClick={() => setLeaveType('pto')}>Paid time off</button>
                          </div>

                          { leaveType !== '' && (
                              <div className='mt-4'>
                                  <h2 className='mb-2 text-3xl '> You have selected {leaveType} for {getId} {months[selectedMonth - 1]}</h2>
                                {leaveType === 'WFH' && wfh !== 0 &&  <button className='bg-primary px-4 py-2 rounded-lg hover:bg-blue-800' onClick={handleConfirm}>Confirm</button>}
                                {leaveType === 'pto' && wfh !== 0 &&  <button className='bg-primary px-4 py-2 rounded-lg hover:bg-blue-800' onClick={handleConfirm}>Confirm</button>}
                                <button className='bg-red-500 px-4 py-2 rounded-lg ml-5 hover:bg-red-800' onClick={() => setLeaveType('')}>Cancel</button>
                              </div>
                          )}
                               <button className='bg-red-600 mt-6 px-4 py-2 rounded-lg' onClick={() => setGetId('')}>Close</button>
                               <h2 className='mt-4 text-4xl'> </h2>
                  </div>
            
                </div>
                </>)}



        </div>
    );
};

export default AskingLeave;