import React, { useContext } from 'react'
import { useState } from 'react'
import { updateDoc ,collection,doc,setDoc, arrayUnion} from 'firebase/firestore';
import { db } from '../../Firebase';
import { UserContext } from '../context/UserContext';

import toast,{Toaster} from 'react-hot-toast'


export default function ContractInputs() {

   const [unID, setUnID] = useState(0)
const [contractName, setContractName] = useState('')
const [nameOfCompany, setNameOfCompany] = useState('')
const [contractType, setContractType] = useState('')
const [startDate, setStartDate] = useState('')
const [endDate, setEndDate] = useState('')
const [writer, setWriter] = useState('')

const {user }= useContext(UserContext)


    async function handleSubmit(e){
        e.preventDefault()

        if (unID !== 0 && contractName !== '' && nameOfCompany !== '' && contractType !== '' && startDate !== '' && endDate !== '') {
            const docRef = doc(db, "contracts", nameOfCompany);
            await setDoc(docRef,{[`${nameOfCompany} / ${startDate}/ ${endDate}`]:{
                contractName: contractName,
                companyName: nameOfCompany,
                contractType: contractType,
                startDate: startDate,
                endDate: endDate,
                writer: user,
                status: "Pending",
                color: "orange"
            }},{merge: true});
            toast.success("Contract Submitted")
            setUnID(0)
            setContractName('')
            setNameOfCompany('')
            setContractType('')
            setStartDate('')
            setEndDate('')
        } else {
            toast.error("Please fill in all fields")
        }
    }

  return (
    <form onSubmit={handleSubmit}>
      <Toaster/>
       <div className="bg-slate-700 flex gap-4 justify-center items-center p-4 cursor-pointer flex-wrap m-auto">
  <div className="flex flex-col mb-4">
    <label className="mb-2">Unique ID</label>
    <input type="text" value={unID} onChange={(e) => setUnID(e.target.value)} className="p-2 border rounded text-black"/>
  </div>
  <div className="flex flex-col mb-4">
    <label className="mb-2">Contract Name</label>
    <input type="text" value={contractName} onChange={(e) => setContractName(e.target.value)} className="p-2 border rounded text-black"/>
  </div>
  <div className="flex flex-col mb-4">
    <label className="mb-2">Company Name</label>
    <input type="text" value={nameOfCompany} onChange={(e) => setNameOfCompany(e.target.value)} className="p-2 border rounded text-black"/>
  </div>
  <div className="flex flex-col mb-4">
    <label className="mb-2">Contract Type</label>
    <input type="text" value={contractType} onChange={(e) => setContractType(e.target.value)} className="p-2 border rounded text-black"/>
  </div>
  <div className="flex flex-col mb-4">
    <label className="mb-2">Start Date</label>
    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="p-2 border rounded text-black"/>
  </div>
  <div className="flex flex-col mb-4">
    <label className="mb-2">End Date</label>
    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="p-2 border rounded text-black"/>
  </div>
  <div className="flex flex-col mb-4">
    <label className="mb-2">Writer</label>
    <h2 className="p-2 border rounded text-white font-bold">{user}</h2>
  </div>
  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
</div>
    </form>
  )
}
