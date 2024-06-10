import React,{useState,useEffect} from 'react'
import Footer from '../Home/Footer'
import useLogo from '../images/useLogo.png'
import Nav from '../navbar/Nav'
import User from '../users/User'

export default function WaitingForAdmin() {
const [user,setUser] = useState('')
const [level,setLevel] = useState('')

  return (
    <div className='emptyhomepage'>
<User setUser={setUser} setLevel={setLevel} />
<div style={{backgroundColor:'ghostwhite'}}>
    <Nav/>
</div>
<div className='profiletextwait mt-10 float-right w-[90vw]'>
<h2 className='text-center mb-10 text-2xl font-bold text-white'> Hello {user}, Currently you are waiting approval from an admin </h2>
<img src={useLogo} alt="logo"  style={{margin:'0 auto',}} className='sql-logo'/>

</div>

    </div>
  )
}
