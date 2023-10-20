/* eslint-disable no-unused-vars */
import Nav from '../Nav'
import React,{useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
import { auth, fs,db } from '/src/client/Firebase.jsx'
import useLogo from '../images/useLogo.png'
import rocket from '../images/rocket.jpg'
import User from '../User'
import Footer from './Footer'
import axios from 'axios'
import Loading from '../Loading'
import Title from '../../Title'
import fast from '../images/fast.jpg'
import ai from '../images/Ai-home.jpg'
import automation from '../images/automation-home.jpg'




export default function Home() {





    const [user,setUser] = useState('')
    const [ level,setLevel] = useState('')
    const [uuid,setUuid] = useState('')

    

    // useEffect(() => {
    //   // Send user data to the server whenever it changes
    //   axios.post('http://localhost:5173/', { user })
    //     .then(response => {
    //       console.log(response.data); // Log the response from the server if needed
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }, [user]);
    



const [isVisible, setIsVisible] = useState(true);
const [zIndex, setZIndex] = useState(0);

useEffect(() => {
  // Set the highest z-index value when the component is mounted
  setZIndex(9999);

  // After 500ms, set the visibility to false (display none)
  const timeout = setTimeout(() => {
    setIsVisible(false);
  }, 800);

  // Clean up the timeout when the component is unmounted
  return () => clearTimeout(timeout);
}, []);


  return (
      <>
        <div className='bg-gray-100'>
          <Nav />
        </div>

        <div className="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900">
          <div className='flex flex-col items-center justify-center py-10'>
            <h1 className='text-white text-center text-3xl font-bold mb-5'>
              Welcome to Squarelion Agency
             
            </h1>
         
            <div className='flex flex-col md:flex-row items-center justify-center'>
              <div className='md:w-1/2 flex flex-col ml-10 '>
                <h1 className='text-left  text-white text-3xl font-bold mb-2  flex gap-2'> Marketing the faster way!  <img src={rocket}  className='w-[50px] rounded-full'/> </h1>
                <p className='text-white text-left'>
                  Media Pilot is a social media automation tool that helps you
                  manage your social media accounts with ease. With Media Pilot,
                  you can schedule posts, track analytics, and engage with your
                  audience all in one place.
                </p>
              </div>
              <div className='md:w-1/2'>
                <img src={useLogo} alt='logo' className='w-64 mx-auto' />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-100'>
          <div className='container mx-auto py-10'>
            <h2 className='text-3xl font-bold text-center mb-10'>
              How we are changing social media marketing ?
            </h2>
            <div className='flex flex-col md:flex-row items-start justify-center'>
              <div className='md:w-1/3'>
                <img src={fast} alt='image1' className='mb-5   w-[200px] h-[200px] m-auto rounded-full' />
                <p className='text-center'>
                  With Media Pilot, you can create content to all your social
                  media accounts at once, saving you time and effort.
                </p>
              </div>
              <div className='md:w-1/3'>
                <img src={ai} alt='image2' className='mb-5  m-auto  w-[200px] h-[200px] rounded-full' />
                <p className='text-center'>
                  Media Pilot uses artificial intelligence to help you create
                  engaging content that will get more likes, comments, and
                  shares.
                </p>
              </div>
              <div className='md:w-1/3'>
                <img src={automation} alt='image3' className='mb-5 m-auto  w-[200px] h-[200px] rounded-full' />
                <p className='text-center'>
                 Media Pilot Automation helps you save time by automating your
                  social media posts and channels, so you can focus on what matters most.

                </p>
              </div>
            </div>
            <div className='text-center mt-10'>
              <button className='bg-blue-950 text-white py-2 px-4 rounded'>
                Learn More WIP
              </button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100  '>
          <div className='container mx-auto py-10 flex flex-col'>
            <h2 className='text-3xl font-bold text-center mb-10'>
              Contact Us
            </h2>
            <div className='flex flex-col md:flex-col items-center gap-3 justify-center '>
              <div className=' m-auto'>
                <p className='text-center'>
                  Have a question or need help? Contact us and we'll get back to
                  you as soon as possible.
                </p>
              </div>
              
              <div className=' m-auto'>
          <section className="text-gray-600 body-font relative">
            <label  className="leading-7  text-black">
              Email : kris@shaananportfolio.com 
            </label>
            </section>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900">
     <div className='container mx-auto py-10'>
        <h2 className='text-3xl text-white font-bold text-center mb-10'>
          Media pilot is still in internal testing phase many features are subject to change 

        </h2>
        </div>
        </div>

        <Footer />

   
  </>  )
}
