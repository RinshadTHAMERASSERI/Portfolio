import React from 'react';
import { FaCss3Alt, FaJs, FaReact,FaNodeJs,FaHtml5,} from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiBootstrap, SiExpress } from 'react-icons/si';
function Skills() {
  return (
    <div className="flex flex-col items-center p-4 grid" id='Skills'>
        <div className="text-2xl font-bold mb-4 text-center">
    <h2 className=' mt-28' >My Skills</h2>
    </div>
    <div size={75}className="grid grid-cols-5 gap-10 text-1xl ml-12 items-centerc text-center  mt-28 justify-items-center ">
        <div><FaHtml5  size={75}className="text-orange-500 shadow-md hover:animate-ping  " /><h1>HTML</h1></div>
        <div><FaCss3Alt size={75}className="text-blue-500 shadow-md  hover:animate-spin" /><h2>CSS</h2></div>
        <div> <FaJs size={75}className="text-yellow-500 shadow-md hover:animate-bounce" /><h2>JAVASCRIPT</h2></div>
        <div> <FaNodeJs size={75}className="text-green-500 shadow-md hover:animate-spin" /><h2>Node.js</h2></div>
        <div> <FaReact size={75}className="text-blue-400 shadow-md hover:animate-spin" /><h2>React</h2></div>
        <div > <SiMongodb size={75}className="text-green-600 shadow-md hover:animate-spin" title="MongoDB " /><h1>MongoDB</h1></div>
        <div><SiTailwindcss  size={75}className="text-blue-500 shadow-md hover:animate-bounce" title="Tailwind CSS" /><h2>Tailwind</h2></div>
        <div><SiBootstrap size={75}className="text-purple-600 shadow-md hover:animate-spin" title="Bootstrap" /><h2>Botstrap</h2></div>
        <div> <SiExpress size={75}className="text-gray-700 shadow-md hover:animate-bounce " title="Express.js" /><h2>Express.js</h2></div>
   
    </div>

  </div>
  )
}

export default Skills
