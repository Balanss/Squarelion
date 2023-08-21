import React,{useState} from 'react'
import ButtonPress from '../../firebaseData/ButtonPress'

export default function Inputs({setPost,setObjective,setDate,setType,setMonth,user,qty,page,post,objective,date,level,type,month,uniqueId,setUniqueId,boosting,setBootsing}) {

  const [ sure,setSure]= useState('')

    function handleAdminSubmit(e){
        e.preventDefault();
      }


      const handleClick = () => {
        setOpen(open === true? false : true);
      };


      const [open, setOpen] = React.useState(false);



  return (
    <form onSubmit={handleAdminSubmit} className=" flex flex-col justify-between items-center h-[500px] bg-slate-600 pt-[20px] text-black
    md:flex-row md:h-[300px] laptop:h-[350px] md:justify-evenly md:flex-wrap
    lg:w-[90vw] lg:m-auto lg:border-2 lg:border-black lg:border-dashed lg:mt-2 lg:mb-2
    xl:w-[1200px] xl:m-auto xl:justify-evenly xl:mt-2 xl:mb-2
    " >

    {level > 8 ? <>
   <input value={uniqueId} type="text" placeholder='Post number ID' onChange={(e) => setUniqueId(e.target.value)} required className='input-admindb  border-2 border-black'/>  
      <input value={post} type="number" placeholder='Post number' onChange={(e) => setPost(e.target.value)} required className='input-admindb  border-2 border-black'/>  
      <input type="text" placeholder='Subject' value={objective} onChange={(e) => setObjective(e.target.value)} required  className='input-admindb  border-2 border-black'/> 
    <input type=" text" placeholder='Type in Channel' list='suggestions' onChange={(e) => setType(e.target.value)}    className='input-admindb border-2 border-black'/>
    <input value={date} type="number" placeholder='day'  onChange={(e) => {setDate(e.target.value)}}  required className='input-admindb  border-2 border-black'/> 
    <input type="month" placeholder='month' value={month} onChange={(e) => setMonth(e.target.value)}  className='input-admindb  border-2 border-black' /> 
    <input type='text' placeholder='boosting'  value={boosting} onChange={(e) => setBootsing(e.target.value)} /> 
    <ButtonPress user={user} uniqueId={uniqueId} boosting={boosting}  qty={qty} objective={objective} type={type} date={date} post={post} page={page} month={month} setObjective={setObjective} className='input-admindb'/> 
    <datalist id="suggestions">
        <option value="Facebook" />
        <option value="Instagram" />
        <option value="Mailchimp" />
        <option value="LinkedIn" />
        <option value="Stories" />
      </datalist>
  
    </>:
    
    <input type="month" placeholder='month' value={month} onChange={(e) => setMonth(e.target.value)}  className='input-admindb designer-month' /> } 
  
   </form>
  )
}
