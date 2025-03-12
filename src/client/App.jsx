/* eslint-disable no-unused-vars */
import { useState, useEffect ,Component, useLayoutEffect,useContext} from "react";
import React, { lazy, Suspense } from "react";
// import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";


import ErrorBoundary from "./components/ErrorBoundary/Error";
import UserProvider from './components/context/UserContext'; // replace with the path to your UserProvider
import  UpdatedPageProvider  from './components/context/UpdatedPageContext'; // adjust the path as needed
import ContractPage from "./components/contracts/ContractPage";
import Loading from "./components/loading/Loading";
import ScheduleProvider from "./components/context/ScheduleContext";






const Login = lazy(() => import("../client/components/auth/Login"));
const Home = lazy(() => import("./components/Home/Home"));


// const Page = lazy(() => import("./components/Page/Page"));
// const UpdatedPage = lazy(() => import("./components/Page/UpdatedPage"));
const Profile = lazy(() => import("./components/Page/Profile"));
const PageLoader = lazy(() => import ('./components/Page/SwitchingFromLegacyToNew'))

const Designer = lazy(() => import("./components/Designer/Designer"));
const Prop = lazy(() => import("./components/AdminPage/SqlProperties"));


function App() {


  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLocal(position.coords.latitude.toString());
  //   });
  //   //needs to be === current date
  //   if (uuid) {
  //     const entryDate = localStorage.getItem("entryDate");
  //     const currentDate = new Date().toLocaleDateString();
  //     if (entryDate === currentDate && local === import.meta.env.VITE_LATI_COD) {
  //       console.log("Already visited today in office");
  //     } else if (local === import.meta.env.VITE_LATI_COD || local === import.meta.env.VITE_LATI_COD2 || local === import.meta.env.VITE_LATI_COD3 || 
  //       local === import.meta.env.VITE_LATI_COD4 || import.meta.env.VITE_LATI_COD5) {
  //       console.log("at the office login");
  //       const currentTime = new Date().toLocaleString();
  //       localStorage.setItem("entryDate", currentDate);
  //       localStorage.setItem("entryTime", currentTime);

  //       const docRef = collection(db,'admin')
  //       const colRef = doc(docRef,uuid)

  //       // Update the document in Firebase map with the current date and time
  //       updateDoc(colRef,{LoggedIn:new Date().toLocaleString(),
  //         logs:arrayUnion(new Date().toLocaleString())},{merge:true})
  //     } else {
  //       console.log("Not in office");
  // console.log(local)
  //     }
  //   }
  // }, [uuid, user, local]);



  return (
    <>
    <UserProvider>
      <UpdatedPageProvider>
        <ScheduleProvider>
      <HashRouter>
        <ErrorBoundary>
       
        <Suspense
          fallback={
            <div>
              {" "}
              <Loading />
            </div>
          }
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/profile/:id" element={<Page />} />
            <Route path="/profile/:id" element={<UpdatedPage />} /> */}
            <Route path="/profile/:id" element={<PageLoader />} />
            <Route path="/profile/contracts" element={<ContractPage />} />
            <Route path="/user/:id" element={<Profile />} />
            <Route path="/designer" element={<Designer />} />
            <Route path="/sqlProp" element={<Prop />} />
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </HashRouter>
      </ScheduleProvider>
      </UpdatedPageProvider>
      </UserProvider>
    </>
  );
}

export default App;
