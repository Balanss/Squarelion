import React from 'react'
import ButtonPress from '../../firebaseData/ButtonPress'

export default function Inputs({setPost,setObjective,setDate,setType,setMonth,user,qty,page,post,objective,date,level,type,month,uniqueId,setUniqueId,boosting,setBootsing}) {

    function handleAdminSubmit(e){
        e.preventDefault();
      }

  return (
    <form onSubmit={handleAdminSubmit}  >


<div className="relative overflow-x-auto mb-10">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
{level > 8 &&         <thead className="text-xs text-gray-700 uppercase text-center bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 phones:p-0">
                    Unique ID
                </th>
                <th scope="col" className="px-6 py-3 phones:p-0">
                    Post Number
                </th>
                <th scope="col" className="px-6 py-3 phones:p-0">
                    Post Subject
                </th>
                <th scope="col" className="px-6 py-3 phones:p-0">
                    Channel
                </th>
                <th scope="col" className="px-6 py-3 phones:p-0">
                    Post Date
                </th>
                <th scope="col" className="px-6 py-3 phones:p-0">
                   Post Month
                </th>
                <th scope="col" className="px-6 py-3 phones:p-0">
                    Boosting
                </th>
            </tr>
        </thead>}
        <tbody>

          
            <tr className="bg-white border-b dark:bg-gray-800 text-center dark:border-gray-700">
{level < 9 ? null : <>
  <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input value={uniqueId} type="text" placeholder=' Unique ID' onChange={(e) => setUniqueId(e.target.value)} required className='input- h-[50px] text-black border-2 border-black w-[100px]'/>  
                </th>
                <td className="px-1 py-1 ">
                <input value={post} type="number" placeholder='Post number' onChange={(e) => setPost(e.target.value)} required className='input-admindb  h-[50px] border-2 border-black w-[100px]' />  
                </td>
                <td className="px-1 py-1">
                <input type="text" placeholder='Subject' value={objective} onChange={(e) => setObjective(e.target.value)} required  className='input-admindb h-[50px]  border-2 border-black w-[100px]'/> 
                </td>
                <td className="px-1 py-1">
                <input type=" text" placeholder='Channel' list='suggestions' onChange={(e) => setType(e.target.value)}    className='input-admindb border-2 h-[50px] border-black w-[100px]'/>
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
                <input value={date} type="number" placeholder='day'  onChange={(e) => {setDate(e.target.value)}}  required className='input-admindb h-[50px] border-2 border-black w-[100px]'/>
                </td>
</>}
                <td className="px-1 py-1 text-center">
                <input type="month" placeholder='month' value={month} onChange={(e) => setMonth(e.target.value)}  className='input-admindb h-[50px] border-2 border-black w-[100px]' />
                </td>
                <td className="px-1 py-1">
          {level < 9? null : <input type='text' placeholder='boosting'  value={boosting} onChange={(e) => setBootsing(e.target.value)} className='input-admindb  h-[50px] border-2 border-black w-[100px]'/> }
                </td>
            </tr>

        </tbody>
    </table>

{level < 9 ? null :<ButtonPress user={user} uniqueId={uniqueId} boosting={boosting}  qty={qty} objective={objective} type={type} date={date} post={post} page={page} month={month} setObjective={setObjective} className='input-admindb'/> }    
</div>
   </form>
  )
}
