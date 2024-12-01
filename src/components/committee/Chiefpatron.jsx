import React from 'react'

function Chiefpatron() {
  return (
    <div>
        <h3 className='text-center text-lg text-gogreen font-semibold underline decoration-4 decoration-gogreen'>Chief Patron</h3>
        <div className='p-3 block md:flex justify-center space-y-3 md:space-y-0 md:space-x-44'>
            <div className='bg-gogreen4 text-white p-3 rounded-md md:w-72 shadow-md shadow-slate-800'>
                <div className='flex justify-center'><img src="https://nie.ac.in/wp-content/uploads/2022/06/rnp-principal.jpeg" alt="" className='rounded-full p-4 w-36 md:w-52'/></div>
                <div className='text-center font-bold text-lg'>Dr. Rohini Nagapadma</div>
                <div className='text-center'>Principal,<br/>The National Institute of Engineering (NIE), Mysuru</div>
            </div>
            <div className='bg-gogreen4 text-white p-3 rounded-md md:w-72 shadow-md shadow-slate-800'>
                <div className='flex justify-center'><img src="https://nie.ac.in/wp-content/uploads/2019/02/MS-Ganesh-prasad-1-e1588775330143.jpg" alt="" className='rounded-full p-4 w-36 md:w-52'/></div>
                <div className='text-center font-bold text-lg'>Dr. M S Ganesh Prasad</div>
                <div className='text-center'>Vice Principal,<br/>The National Institute of Engineering (NIE), Mysuru</div>
            </div>
        </div>
    </div>
  )
}

export default Chiefpatron