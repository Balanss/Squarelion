/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect,useContext } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db } from "/src/client/Firebase.jsx";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../Nav";
import Loading from "../Loading";
import PartnerLogic from "./PartnerLogic";
import SidePanel from "./SidePanel";
import Version from "../../Version/Version";
import LogInfo from "./LogsInfo/LogInfo";
import { UserContext } from "../context/UserContext";






export default function Admin() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [partner, setPartner] = useState([]);

  const {level,user,uuid} = useContext(UserContext);

  const sendToZapier = async payload => {
    const zapierURL = import.meta.env.VITE_A_M_P;
    try {
      const response = await fetch(zapierURL, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(payload),
      });
      const resp = await response.json();
      console.log(resp);
    } catch (e) {
      console.log(e);
    }
  };

  function handleSub(e) {
    e.preventDefault();
    const storageRef = ref(getStorage(), `products/${"partners"}/${image}`);

    // Upload the file to the bucket
    const uploadTask = uploadBytesResumable(storageRef, image);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      error => {
        console.error(error);
      },
      //here
      async () => {
        // Upload completed successfully, now get the download URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        // Save the download URL to Firestore

        const docRef = collection(db, "partner");
        const colRef = doc(docRef, name);

        setDoc(
          colRef,
          { imageUrl: downloadURL, name: name, status: 0 },
          { merge: true }
        );

        const leadData = {
          name: name,
        };

        setImage("");
        name("");

        try {
          await sendToZapier(leadData);
          // Additional code to execute after sending data to Zapier, if needed
        } catch (error) {
          console.log(error);
        }
      }
    );
  }

  const handleImageChange = e => {
    const file = e.target.files[0];
    setImage(file);
  };

  const middleIndex = Math.ceil(partner.length / 2.5);

  const leftColumnElements = partner.slice(0, middleIndex);
  const rightColumnElements = partner.slice(middleIndex);

  function handleGoLeft(index) {
    leftColumnElements.map((x, i) => {
      if (i === index) {
        localStorage.setItem("partner", x.name);
        localStorage.setItem("image", x.imageUrl);
        localStorage.setItem("preset", x.Preset || "No preset available");
        setTimeout(() => {
          navigate(`/profile/${x.name}`);
        }, 1000);
      }
    });
  }

  function handleGoRight(index) {
    rightColumnElements.map((x, i) => {
      if (i === index) {
        localStorage.setItem("partner", x.name);
        localStorage.setItem("image", x.imageUrl);
        localStorage.setItem("preset", x.Preset || "No preset available");
        setTimeout(() => {
          navigate(`/profile/${x.name}`);
        }, 1000);
      }
    });
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (level < 8) {
        navigate("/");
      }
      if (level > 8) {
        clearTimeout(timeoutId);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [level, navigate]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const [switching, setSwitching] = useState("Client");

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };

    handleResize(); // Call the function initially to set the initial state

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImgLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const [imgLoading2, setImgLoading2] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setImgLoading2(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Version />
      <PartnerLogic partner={partner} setPartner={setPartner} />
      <div
        className="bg-slate-400 min-h-screen flex flex-col items-center justify-between"
        style={{ color: "white" }}
      >
        {uuid !== "" && level > 9 && isLoading === false && (
          <>
            <div>
              <div>
                <div className="">{isMobile && level > 8 ? <Nav /> : null}</div>
                <SidePanel
                  level={level}
                  user={user}
                  switching={switching}
                  setSwitching={setSwitching}
                />
                {switching === "Client" && (
                  <div className="p-4 md:w-4/5 md:ml-[20%]">
                    {/* //gets client data from firebase and image anlong with adding client */}
                    <div className="">
                      <div className="flex items-center justify-center p-2 mb-4 rounded bg-gray-50 dark:bg-gray-800 border-2 border-slate-900/50">
                        <div className=" gap-5 text-center text-2l text-gray-400 dark:text-gray-500 flex flex-col  justify-around">
                          {level > 9 && (
                            <>
                              <h1 className="text-xl font-semibold text-white">
                                Add a new client and image to the Squarelion
                                database
                              </h1>
                              <form
                                onSubmit={handleSub}
                                className=" flex flex-col items-center"
                              >
                                <input
                                  type="text"
                                  placeholder="ENTER CLIENT NAME "
                                  onChange={e => setName(e.target.value)}
                                  className="w-[160px]"
                                />
                                <input
                                  type="file"
                                  className="w-[100px] !bg-green-500"
                                  onChange={handleImageChange}
                                />
                                <br />
                                <button className="border-2 border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200">
                                  Add Client
                                </button>
                              </form>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="table-split lg:flex gap-10 lg:flex-row bg-slate-900 p-5 animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out">
                        <section className="absolute lg:w-[200px]">
                          <p className="text-white mb-2 font-bold text-md">
                            List of Squarelion Clients
                          </p>
                          <hr className="bg-white" />
                        </section>

                        {imgLoading ? (
                          <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                              loading...
                            </div>
                          </div>
                        ) : (
                          <div className="relative  m-auto  mt-10 w-full lg:w-[400px] ">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                  <th scope="col" className="px-6 py-3">
                                    Name
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                    Icon
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {leftColumnElements.map((x, index) => (
                                  <tr key={index}>
                                    <td className="px-6 py-4">
                                      <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"></div>
                                        <span>{x.name}</span>
                                      </div>
                                    </td>
                                    <td className="px-6 py-4">
                                      <div className="text-gray-500 dark:text-gray-400 cursor-pointer hover:scale-110">
                                        <button
                                          onClick={() => {
                                            handleGoLeft(index);
                                          }}
                                          disabled={
                                            level !== 11 && x.name === "Test"
                                              ? true
                                              : false
                                          }
                                          className={
                                            level !== 11 && x.name === "Test"
                                              ? "opacity-20"
                                              : "opacity-100 "
                                          }
                                        >
                                          <div className="flex items-center justify-center  rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                            {imgLoading2 === false ? null : (
                                              <div className="px-3  py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                                                loading...
                                              </div>
                                            )}
                                            <img
                                              src={x.imageUrl}
                                              className={`xs:w-[50px] md:w-[50px] lg:w-[50px] ${
                                                imgLoading2
                                                  ? "hidden opacity-0"
                                                  : "visible transition-opacity duration-1000 ease-in opacity-100 animate-fade animate-once animate-duration-[2000ms] animate-ease-in-out  "
                                              }`}
                                            />
                                          </div>
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                        {/* here ends left side of table */}

                        {/* here beginds right side of table */}
                        {imgLoading ? (
                          <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                              loading...
                            </div>
                          </div>
                        ) : (
                          <div className="relative  m-auto  mt-10 w-full lg:w-[400px]">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                  <th scope="col" className="px-6 py-3">
                                    Name
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                    Icon
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {rightColumnElements.map((x, index) => (
                                  <tr key={index}>
                                    <td className="px-6 py-4">
                                      <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"></div>
                                        <span>{x.name}</span>
                                      </div>
                                    </td>
                                    <td className="px-6 py-4">
                                      <div className="text-gray-500 dark:text-gray-400 cursor-pointer hover:scale-110">
                                        <button
                                          onClick={() => {
                                            handleGoRight(index);
                                          }}
                                          disabled={
                                            level !== 11 && x.name === "Test"
                                              ? true
                                              : false
                                          }
                                          className={
                                            level !== 11 && x.name === "Test"
                                              ? "opacity-20"
                                              : "opacity-100 "
                                          }
                                        >
                                          <div className=" items-center justify-center  rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                            {imgLoading2 === false ? null : (
                                              <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                                                loading...
                                              </div>
                                            )}
                                            <img
                                              src={x.imageUrl}
                                              className={`xs:w-[50px] md:w-[50px] lg:w-[50px] ${
                                                imgLoading2
                                                  ? "hidden"
                                                  : "visible animate-fade animate-once animate-duration-[2000ms] animate-ease-in-out"
                                              }`}
                                            />
                                          </div>
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {switching === "Users" && <LogInfo />}
              </div>
            </div>
          </>
        )}
      </div>

      {isLoading === true && (
        <>
          <Loading />
        </>
      )}
    </>
  );
}
