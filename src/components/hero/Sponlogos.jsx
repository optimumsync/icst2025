import React from 'react'
import ioe_logo from '../../assets/ioe_logo.svg'
import nie_logo from '../../assets/nie_logo.svg'
import fd_logo from '../../assets/fd_logo.svg'

function Sponlogos() {
  return (
    <div className='flex justify-between m-4 md:px-4'>
        <img src={nie_logo} alt="nie_logo" className='w-auto h-12 md:h-16'/>
        <img src={fd_logo} alt="fd_logo"   className='w-auto h-12 md:h-16'/>
        <img src={ioe_logo} alt="ioe_logo" className='w-auto h-12 md:h-16'/>
    </div>
  )
}

export default Sponlogos