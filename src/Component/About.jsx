import React from 'react'

function About() {
  return (
    <div  id='About'>
     <div  >
        
        <h1 className=' mt-28 text-4xl font-bold mb-4 text-center'>About Me</h1>
        <div className=' flex flex-col md:flex-row items-start gap-6 p-6mt-28  '>
        <div className=' inset-shadow-sm inset-shadow-indigo-500  '>
        <img src="public/WhatsApp Image 2025-01-02 at 00.49.43_ea9bdcea.jpg" alt="" className='mx-auto w-[350px] h-[350px] square-full ml-20' />
        </div>
        <div className='pl-10   text-1xl' >
         
           <p>I am a passionate and detail-oriented MERN stack developer, eager to kickstart my career in web<br /> development. 
With a solid foundation in MongoDB, Express.js, React.js, and Node.js, I possess a <br /> strong understanding of both 
 front-end and back-end development.My experience includes building  <br />dynamic and responsive web applications, creating RESTful APIs, and implementing robust database <br />solutions.
 </p>
 <h2>Here are some of my key skills:</h2>
            
             <ul  className="list-disc list-inside text-lg">
                <li>proficiency in java Script,HTML,and CSS</li>
                <li>Experience With React.js for Building Intractive User InterFaces</li>
                <li> knowlwdge of Node.js and Expres for server-side logic</li>
                <li> Familarity with MongoDB for Data Base Management</li>
             </ul>
             <br />
             <p>
             "I am enthusiastic about learning new technologies, solving complex problems, and collaborating in a <br />team environment. My goal is to grow as a professional while contributing to innovative and impactful projects."


           <br /><br />
            let's connect ! i'm exited to explore modern web technolgies together.  

        </p>
        </div>
        </div>
     </div>
    </div>
  )
}

export default About
