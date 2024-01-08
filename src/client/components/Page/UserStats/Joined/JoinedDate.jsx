
    import React from 'react'
import {useState, useEffect,useMemo} from 'react'
import { auth, fs } from '../../../../Firebase'


export default function JoinedDate() {

    const [dateJoined, setDateJoined] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        fs.collection('admin').doc(firebaseUser.uid).get().then(snapshot => {
          const userData = snapshot.data();
          setDateJoined(userData.dateJoined);
        });
      } else {
        setUser(null);
        setLevel(null);
      }
    });

    return unsubscribe;
  }, []);



  return (
    <div className='lg:float-right pt-6'>
     <header className="text-white phones:text-md text-lg font-bold">
        <p>Account created on: {dateJoined}</p>
     </header>
    </div>
  )

}





