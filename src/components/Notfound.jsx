import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import image_404 from '../assets/image_404.jpeg'
import { useNavigate } from 'react-router-dom'

function Notfound() {
    const navigate = useNavigate();
    const [timee,setTimee] = useState(5);

    setTimeout(()=>{
        if(timee<=1){
            navigate("/");
            return;
        }
        else{
            setTimee(timee-1);
        }
    },1000)
  return (
    <div className='h-screen flex flex-col justify-between'>
        <Navbar/>
        <div className='w-full md:w-2/5 lg:w-4/12 self-center'><img src={image_404} alt="" className='w-full'/></div>
        <div className='bg-gogreen2 m-4 p-5 rounded'>
            <h1 className='text-2xl font-bold text-white text-center'>You are Lost!</h1>
            <p className='text-white text-center'>The page you are looking for does not exist</p>
            <div className='text-center text-white'>Redirecting to Home Page in {timee}</div>
        </div>
        <div className='w-full'><Footer/></div>
    </div>
  )
}

export default Notfound