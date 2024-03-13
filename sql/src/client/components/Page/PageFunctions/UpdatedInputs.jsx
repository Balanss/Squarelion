import React,{useContext}  from 'react'
import ButtonPress from '../../firebaseData/UpdatedButtonPress'
import { UpdatedPageContext } from "../../context/UpdatedPageContext";

export default function Inputs({dataMonth,setDataMonth,setMonth,month,user}) {


    const  {setPost,setObjective,setDate,setType,qty,page,post,objective,date,level,type,uniqueId,setUniqueId,boosting,setBoosting } = useContext(UpdatedPageContext);

    function handleAdminSubmit(e){
        e.preventDefault();
      }

  return (
    <form onSubmit={handleAdminSubmit}  >


<div className="relative overflow-x-auto mb-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    
   <thead className="text-xs text-gray-700 uppercase text-center bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Unique ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Post Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Post Subject
                </th>
                <th scope="col" className="px-6 py-3">
                    Channel
                </th>
                <th scope="col" className="px-6 py-3">
                    Post Date
                </th>
                <th scope="col" className="px-6 py-3">
                   Post Month
                </th>
                <th scope="col" className="px-6 py-3">
                    Boosting
                </th>
            </tr>
        </thead>
        <tbody>

          
            <tr className="bg-white border-b dark:bg-gray-800 text-center dark:border-gray-700">

  <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input value={uniqueId} type="text" placeholder=' Unique ID' onChange={(e) => setUniqueId(e.target.value)} required className='input- h-[50px] text-black border-2 border-black w-[100px] rounded'/>  
                </th>
                <td className="px-1 py-1">
                <input value={post} type="number" placeholder='Post number' onChange={(e) => setPost(e.target.value)} required className='input-admindb h-[50px] border-2 border-black w-[100px] rounded' />  
                </td>
                <td className="px-1 py-1">
                <input type="text" placeholder='Subject' value={objective} onChange={(e) => setObjective(e.target.value)} required  className='input-admindb h-[50px]  border-2 border-black w-[100px] rounded'/> 
                </td>
                <td className="px-1 py-1">
                <input type=" text" placeholder='Channel' list='suggestions' onChange={(e) => setType(e.target.value)}    className='input-admindb border-2 h-[50px] border-black w-[100px] rounded'/>
                <datalist id="suggestions">
      <option value="FB/IG" />
      <option value="FB/IG/LI" />
        <option value="Facebook" />
        <option value="Instagram" />
        <option value="Mailchimp" />
        <option value="LinkedIn" />
        <option value="Stories" />
        <option value="Pinterest" />
      </datalist>
                </td>
                <td className="px-1 py-1">
                <input value={date} type="number" placeholder='day'  min={1} onChange={(e) => {setDate(e.target.value)}}  required className='input-admindb h-[50px] border-2 border-black w-[100px] rounded'/>
                </td>

                <td className="px-1 py-1 text-center">
                <input type="month" placeholder='month'  value={month} onChange={(e) => {setMonth(e.target.value);setDataMonth(e.target.value)}}  className='input-admindb h-[50px] border-2 border-black w-[100px] rounded' />
                </td>
                <td className="px-1 py-1">
          {level < 9? null : <input type='number' placeholder='boosting'   onChange={(e) => setBoosting(e.target.value)} className='input-admindb  h-[50px] border-2 border-black w-[100px] rounded'/> }
                </td>
            </tr>

        </tbody>
    </table>

{level < 9 ? null :<ButtonPress user={user} uniqueId={uniqueId} boosting={boosting}  qty={qty} objective={objective} type={type} date={date} post={post} page={page} month={month} setObjective={setObjective} className='input-admindb'/> }    
</div>
   </form>
  )
}
