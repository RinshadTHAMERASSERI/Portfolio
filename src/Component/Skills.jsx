import React from 'react';
import { FaCss3Alt, FaJs, FaReact,FaNodeJs,FaHtml5,} from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiBootstrap, SiExpress } from 'react-icons/si';
function Skills() {
  return (
    <div className="flex flex-col items-center p-4 grid scroll-behavior: smooth  scroll-smooth" id='Skills'>
        <div className="text-4xl font-bold mb-4 text-center">
    <h2 className=' mt-28'>My Skills</h2>
    </div >
    <div className="grid grid-cols-5 gap-10  text-1xl ml-12 items-center text-center  mt-28 justify-items-center  ">
        <div className='w-40  h-40 place-content-center  justify-items-center shadow-md hover:bg-sky-50'>
          <FaHtml5  size={75}className="text-orange-500   hover:animate-spin  " />
          <h1>HTML</h1>
          </div>
        <div className='w-40  h-40 place-content-center  justify-items-center shadow-md hover:bg-sky-50 '>
          <FaCss3Alt size={75}className="text-blue-500  hover:animate-spin " />
          <h2>CSS</h2>
          </div>
        <div className='w-40  h-40 place-content-center  justify-items-center shadow-md hover:bg-sky-50  '> 
          <FaJs size={75}className="text-yellow-500  hover:animate-spin" />
          <h2>JAVASCRIPT</h2>
          </div>
        <div className='w-40  h-40 place-content-center  justify-items-center shadow-md hover:bg-sky-50'> 
          <FaNodeJs size={75}className="text-green-500  hover:animate-spin" />
          <h2>Node.js</h2>
          </div>
        <div className='w-40  h-40 place-content-center  justify-items-center shadow-md hover:bg-sky-50'>
           <FaReact size={75}className="text-blue-400 hover:animate-spin" />
           <h2>React</h2>
           </div>
        <div  className='w-40  h-40 place-content-center  justify-items-center shadow-md hover:bg-sky-50'> 
          <SiMongodb size={75}className="text-green-600  hover:animate-spin" title="MongoDB " />
          <h1>MongoDB</h1>
          </div>
        <div className='w-40  h-40 place-content-center  justify-items-center shadow-md hover:bg-sky-50'>
          <SiTailwindcss  size={75}className="text-blue-500  hover:animate-spin" title="Tailwind CSS" />
          <h2>Tailwind</h2>
          </div>
        <div className='w-40  h-40 place-content-center  justify-items-center shadow-md hover:bg-sky-50'>
          <SiBootstrap size={75}className="text-purple-600  hover:animate-spin" title="Bootstrap" />
          <h2>Bootstrap</h2>
          </div>
        <div className='w-40  h-40 place-content-center  justify-items-center shadow-md hover:bg-sky-50'> 
          <SiExpress size={75}className="text-gray-700  hover:animate-spin " title="Express.js" />
          <h2>Express.js</h2>
          </div>
   
    </div>

  </div>
  )
}

export default Skills
