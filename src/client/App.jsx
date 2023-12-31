/* eslint-disable no-unused-vars */
import { useState, useEffect ,Component, useLayoutEffect} from "react";
import React, { lazy, Suspense } from "react";
// import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import { auth, fs, db } from "./Firebase";
import { collection, doc, updateDoc,setDoc,arrayUnion,getDoc } from "firebase/firestore";
import User from "./components/User";
import ErrorBoundary from "./components/ErrorBoundary/Error";



const Admin = lazy(() => import("./components/AdminPage/Admin"));
const Login = lazy(() => import("./components/Login"));
const Home = lazy(() => import("./components/Home/Home"));


// const Page = lazy(() => import("./components/Page/Page"));
// const UpdatedPage = lazy(() => import("./components/Page/UpdatedPage"));
const Profile = lazy(() => import("./components/Page/Profile"));
const PageLoader = lazy(() => import ('./components/Page/SwitchingFromLegacyToNew'))

const Designer = lazy(() => import("./components/Designer/Designer"));
const Prop = lazy(() => import("./components/AdminPage/SqlProperties"));


function App() {
  const [user, setUser] = useState(0);
  const [level, setLevel] = useState("");
  const [uuid, setUuid] = useState("");
  const [ local, setLocal] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocal(position.coords.latitude.toString());
    });
    //needs to be === current date
    if (uuid) {
      const entryDate = localStorage.getItem("entryDate");
      const currentDate = new Date().toLocaleDateString();
      if (entryDate === currentDate && local === import.meta.env.VITE_LATI_COD) {
        console.log("Already visited today in office");
      } else if (local === import.meta.env.VITE_LATI_COD || local === import.meta.env.VITE_LATI_COD2 || local === import.meta.env.VITE_LATI_COD3 || 
        local === import.meta.env.VITE_LATI_COD4) {
        console.log("at the office login");
        const currentTime = new Date().toLocaleString();
        localStorage.setItem("entryDate", currentDate);
        localStorage.setItem("entryTime", currentTime);

        const docRef = collection(db,'admin')
        const colRef = doc(docRef,uuid)

        // Update the document in Firebase map with the current date and time
        updateDoc(colRef,{LoggedIn:new Date().toLocaleString(),
          logs:arrayUnion(new Date().toLocaleString())},{merge:true})
      } else {
        console.log("Not in office");
  console.log(local)
      }
    }
  }, [uuid, user, local]);



  return (
    <>
      <HashRouter>
        <ErrorBoundary>
       
        <Suspense
          fallback={
            <div>
              {" "}
              <Loading />
              <User
        setUser={setUser}
        user={user}
        level={level}
        setLevel={setLevel}
        setUuid={setUuid}
        uuid={uuid}
      />
            </div>
          }
        >
          <Routes>
            <Route path="/admindashboard" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/profile/:id" element={<Page />} />
            <Route path="/profile/:id" element={<UpdatedPage />} /> */}
            <Route path="/profile/:id" element={<PageLoader />} />
            <Route path="/user/:id" element={<Profile />} />

            <Route path="/designer" element={<Designer />} />
            <Route path="/sqlProp" element={<Prop />} />
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </HashRouter>
    </>
  );
}

export default App;
