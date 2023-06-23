/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Page from './components/Page/Page'
import Drop from './components/Drop'
import Signup from './components/Signup'
import Login from './components/Login'
import Admin from './components/AdminPage/Admin'
import Home from './components/Home/Home'
import Recruitment from './components/Recruitment/recruitment'
import PartnerProgram from './components/PartnerProgram/PartnerProgram'
import Profile from './components/Page/Profile'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <HashRouter>
<Routes>

{/* <Route path='/' element={<Home/>}></Route> */}
<Route path='/signup' element={<Signup/>}></Route>
{/* <Route path='/main' element={<Drop/>}></Route> */}
<Route path='/admindashboard' element={<Admin/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/' element={<Home/>}></Route>
<Route path='/recruitment' element={<Recruitment/>}></Route>
<Route path='/partnerprogram' element={<PartnerProgram/>}></Route>

<Route path="/profile/:id" element={<Page/>}> </Route>
<Route path="/user/:id" element={<Profile/>}> </Route>


</Routes>


 </HashRouter>


    </>
  )
}

export default App


