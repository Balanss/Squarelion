import React,{useState,useEffect} from 'react'
import { auth, fs,db } from '../../Firebase'

import SqlMedia from './SqlProp/SqlMedia';
import SqlDomein from './SqlProp/SqlDomein';
import SqlHosting from './SqlProp/SqlHosting';
import Version from '../../Version/Version'
import User from '../users/User';
import Nav from '../navbar/Nav';




export default function SqlProperties({}) {


    const [ Name,setName] = useState('')
    const[Email,setEmail] = useState('')
    const [view,setView] = useState('')
    const [show2,setShow2] = useState(false)
    const [level,setLevel] = useState('')
    const [uuid,setUuid] = useState('')
    const [user,setUser] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)
  




    const [data,setData] = useState([])

    const getData = async () => {
        try {
          const unsubscribe = fs.collection('sqlProperties')
            .onSnapshot(async (querySnapshot) => {
              const dataArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
              }));
      
              dataArray.sort((a, b) => {
                const idA = parseInt(a.id.split('-')[0]);
                const idB = parseInt(b.id.split('-')[0]);
      
                return idA - idB;
              });
      
              setData(dataArray);
            });
      
          return unsubscribe;
        } 
        catch (error) {
          console.error(error);
        }
      };
        
        
        useEffect(() => {
          const unsubscribe = getData();
        }, []);



        const sendToZapier = async (payload) => {
          const zapierURL = import.meta.env.VITE_MAIL_AUTH;
          try {
            const response = await fetch(zapierURL, {
              method: 'POST',
              mode: 'cors',
              body: JSON.stringify(payload),
            });
            const resp = await response.json();
            console.log(resp);
          } catch (e) {
            console.log(e);
          }
        };

useEffect(() => {
  setTimeout(() => {
    setIsLoading(true)
  }
  , 5000);
}
, []);

        useEffect(() => {
        if (isLoading === true && uuid && level > 9){
      console.log('success')
        } 
        if (isLoading === true && uuid && level < 10){
          const leadData = {
            user: user === ''? "unkown user" : user,
            Logged: `${user === ""? "unkown user":user} Logged in to the Admin Page at ${new Date().toLocaleString()}`
          };
        
          const sendLeadData = async () => {
            try {
              await sendToZapier(leadData);
              // Additional code to execute after sending data to Zapier, if needed
            } catch (error) {
              console.log(error);
            }
          };
        
          sendLeadData(); // Call the async function
        }
         if ( isLoading === true && !uuid){

          const leadData = {
            user: user === ''? "unkown user" : user,
            Logged: `${user === ""? "unkown user":user} Logged in to the Admin Page at ${new Date().toLocaleString()}`
          };
        
          const sendLeadData = async () => {
            try {
              await sendToZapier(leadData);
              // Additional code to execute after sending data to Zapier, if needed
            } catch (error) {
              console.log(error);
            }
          };
        
          sendLeadData(); // Call the async function

        }
        }, [isLoading]);
       

      return(
            <>
            
            <div className='bg-slate-600 w-full h-screen'>
              <Version/>
            <User level={level}  setLevel={setLevel} setUuid={setUuid} setUser={setUser}/>
                <div className='bg-slate-800'>
                <Nav/>
                </div>

        

<section className=''>
<div className=" rounded-md shadow-sm text-center mt-10 mb-5" role="group">
  <button onClick={() =>setView('Social Media')}  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Social Media
  </button>
 <button onClick={() =>setView('Domain')} className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Domain
    </button>
    <button onClick={() =>setView('Hosting Information')} className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Hosting Information
    </button>
</div>
</section>

<div>
    {view !== 'Social Media'? null : <SqlMedia setName={setName} Name={Name} Email={Email} setEmail={setEmail}/>}
    {view !== 'Domain'? null : <SqlDomein setName={setName} Name={Name} Email={Email} setEmail={setEmail}/>}
    {view !== 'Hosting Information'? null : <SqlHosting setName={setName} Name={Name} Email={Email} setEmail={setEmail}/>}
</div>


                </div>

           </>


      )
    
       
}


