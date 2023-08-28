import React,{useState,useEffect} from 'react'
import User from '../User'
import Nav from '../Nav'
import Footer from '../Home/Footer'
import useLogo from '../images/useLogo.png'

export default function WaitingForAdmin() {
const [user,setUser] = useState('')
const [level,setLevel] = useState('')

  return (
    <div className='emptyhomepage'>
<User setUser={setUser} setLevel={setLevel} />
<div style={{backgroundColor:'ghostwhite'}}>
    <Nav/>
</div>
<div className='profiletextwait mt-10'>
<h2 className='text-center mb-10 text-2xl'> Hello {user}, Currently you are waiting approval from an admin </h2>
<img src={useLogo} alt="logo"  style={{margin:'0 auto',}} className='sql-logo'/>

</div>

    </div>
  )
}
