/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import React, { lazy, Suspense } from 'react';
// import './App.css'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Loading from './components/Loading';






const Signup = lazy(() => import('./components/Signup'));
const Admin = lazy(() => import('./components/AdminPage/Admin'));
const Login = lazy(() => import('./components/Login'));
const Home = lazy(() => import('./components/Home/Home'));
const Recruitment = lazy(() => import('./components/Recruitment/recruitment'));
const PartnerProgram = lazy(() => import('./components/PartnerProgram/PartnerProgram'));
const Page = lazy(() => import('./components/Page/Page'));
const Profile = lazy(() => import('./components/Page/Profile'));
const Survey = lazy(() => import('./components/Page/Survey'));
const Designer = lazy(() => import('./components/Designer/Designer'));
const Prop = lazy(() => import('./components/AdminPage/SqlProperties'));


function App() {

  


  return (
    <>
   
 <HashRouter>
 <Suspense fallback={<div> <Loading/></div>}>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/admindashboard" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/partnerprogram" element={<PartnerProgram />} /> */}
          <Route path="/profile/:id" element={<Page />} />
          <Route path="/user/:id" element={<Profile />} />
          <Route path="/user/survey/:id" element={<Survey  />} />
          <Route path="/designer" element={<Designer  />} />
          <Route path="/sqlProp" element={<Prop  />} />
        </Routes>
      </Suspense>
 </HashRouter>


    </>
  )
}

export default App


