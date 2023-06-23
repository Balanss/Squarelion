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
<div className='profiletextwait'>
<h2> Hello {user}, Currently you are waiting approval from an admin </h2>
<img src={useLogo} alt="logo"  style={{width:'700px',margin:'0 auto',}}/>
<h3> Sed dapibus tellus at tempor feugiat. Nullam id vehicula lacus.
     Aliquam erat volutpat. Vestibulum fermentum hendrerit odio, 
     non blandit metus ullamcorper vel. Nulla sed magna diam. Vestibulum 
     semper arcu augue, et facilisis leo ornare nec. Maecenas dictum metus vel 
     enim ultrices efficitur. </h3>
</div>
<Footer/>
    </div>
  )
}
