import React,{useContext} from 'react'
import { UserContext } from '../../context/UserContext';

export default function LeaveTitle({updatedPto,updatedWfh}) {

const {pto,wfh,user} = useContext(UserContext);


console.log(updatedWfh);

  return (
    <div className='bg-secondary p-10 rounded-lg  shadow-card2 border-tertiary border-2 hover-border-dark-purple'>
         <h2 className="text-white mb-2 phones:text-lg  text-2xl font-semibold">Hello {user} </h2>
         <h2 className="text-white mb-2 phones:text-lg  text-2xl font-semibold">Work from home : {updatedWfh} days left for the month</h2>
         <h2 className="text-white mb-2 phones:text-lg  text-2xl font-semibold">Paid time off : {updatedPto} days left for the year</h2>
    </div>
  )
}
