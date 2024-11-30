import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import regimg from '../assets/regimg.svg'
import leaf3 from '../assets/leaf3.svg'
import check from '../assets/check.svg'

function Registration() {
  return (
    <div>
        <Navbar/>
        <div className='m-5 text-3xl text-gogreen font-bold text-center'>Registration</div>
        <div className='w-full md:flex md:justify-center'>
            <div className=' block md:flex justify-center space-y-2 md:space-y-0 md:space-x-2 md:px-20 w-full lg:w-10/12 p-2'>
                <div className='bg-green-800 md:w-3/12 rounded-lg text-white p-3'>
                    <span className='flex justify-center font-bold text-2xl'>Category</span>
                    <div className='text-center font-semibold'>* 10% off from IEI Members</div>
                    <div className='flex justify-center'><img src={regimg} alt="" className='p-4 w-52'/></div>
                </div>
                <div className='border border-gogreen md:w-3/12 rounded-lg p-3 flex flex-col justify-between'>
                    <span className='flex justify-center'><img src={leaf3} alt="" className='pe-2' style={{"width":"30px"}}/><h2 className='text-2xl font-bold'>Academic</h2></span>
                    <span className='flex place-items-start m-3 overflow-auto'><img src={check} alt="" />UG/PG/PhD Scholar/Faculty from India</span>
                    <div><hr className='border border-slate-600 border-dotted'/>
                    <span className='text-2xl font-bold flex justify-start m-3'>₹ 6000</span></div>
                </div>
                <div className='border border-gogreen md:w-3/12 rounded-lg p-3 flex flex-col justify-between'>
                    <span className='flex justify-center'><img src={leaf3} alt="" className='pe-2' style={{"width":"30px"}}/><h2 className='text-2xl font-bold'>Industry</h2></span>
                    <span className='flex place-items-start m-3 overflow-auto'><img src={check} alt="" />Industry Professional from India</span>
                    <div><hr className='border border-slate-600 border-dotted'/>
                    <span className='text-2xl font-bold flex justify-start m-3'>₹ 7500</span></div>
                </div>
                <div className='border border-gogreen md:w-3/12 rounded-lg p-3 flex flex-col justify-between'>
                    <span className='flex justify-center'><img src={leaf3} alt="" className='pe-2' style={{"width":"30px"}}/><h2 className='text-2xl font-bold'>Non-resident</h2></span>
                    <span className='flex place-items-start m-3 overflow-auto'><img src={check} alt="" />Foreign Authors (UG/PG/PhD Scholar/Faculty/Industry)</span>
                    <div><hr className='border border-slate-600 border-dotted'/>
                    <span className='text-2xl font-bold flex justify-start m-3'>$ 200</span></div>
                </div>
            </div>
        </div>
        <div>
            <hr className='border border-black border-dotted my-2 mx-20'/>
            <div><h2 className='text-gogreen text-2xl text-center font-semibold'>Additional Information</h2>
            <p>
                sdaf
            </p>
            </div>
            <hr className='border border-black border-dotted my-2 mx-20'/>
        </div>
        <Footer/>
    </div>
  )
}

export default Registration