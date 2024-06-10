import React from 'react'
import{useState,useEffect} from 'react'
 import UpdatedPage from './UpdatedPage';
import Page from './legacy/Page';


export default function SwitchingFromLegacyToNew() {

    const [month, setMonth] = useState(''); // Format: YYYY-MM

    useEffect(() => {
        const currentDate = new Date();
        const currentMonth = currentDate.toISOString().slice(0, 7); // Format: YYYY-MM
        setMonth(currentMonth);
        
    }, []);

    return (
        <div>
            {month.includes('2024') ? <UpdatedPage month={month} setMonth={setMonth} /> : <Page month={month} setMonth={setMonth} />}
        </div>
    )
}
