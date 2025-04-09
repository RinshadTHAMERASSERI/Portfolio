import React from 'react'
import { SiStarbucks,SiKtm,SiFlipkart } from "react-icons/si";


function Projects() {
  return (
   <div id='Project'>
    <p className='text-center mt-12 font-bold text-4xl'>Projects</p>
    <div className='grid grid-cols-3 gap-3 flex text-center text-bold mt-12'>
        <div>
          <div className='bg-white p-7 rounded-2xl shadow-xl flex flex-col items-center  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
          < SiFlipkart className='text-yellow-400 w-20 h-20 '/>
          <h1 className='font-bold'>Commerce Website</h1>
          </div>
          </div>
        <div className=''>
          <div className='bg-white p-7 rounded-2xl shadow-xl flex flex-col items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110' >
        <SiStarbucks className="text-green-700 w-20 h-20" />
        <h1 className='font-bold'>StarBucks</h1>
        </div>
        </div>
        
        <div>
          <div className='bg-white p-5 rounded-2xl shadow-xl flex flex-col items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
            <SiKtm className=' text-orange-600 w-24 h-24'/>
            <h1 className='font-bold'>KTM</h1>
          </div>
        </div>
    </div>
   </div>
  )
}

export default Projects
