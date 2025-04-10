import React from "react";
import Skills from "./skills";

function Home() {
  const bgImage = "/flat-lay-photo-office-desk-with-laptop-copy-space-background.jpg";

  return (
    <div
      className="relative w-full h-screen  items-center justify-center bg-no-repeate bg-center bg-cover scroll-smooth"
      style={{ backgroundImage: `url(${bgImage})` }}
      
    >

      <div className="flex justify-center space-x-10 font-bold p-8   text-gray-500 ">
      <a href="#Skills" className=" hover:text-green-900 overflow-auto h-48">Skills </a>
      <a href="#Project" className="hover:text-green-900">Project</a>
      <a  href='#About' className="hover:text-green-900">Aboute</a>
      <a href="#Contact" className="hover:text-green-900">Contact</a>
      </div>
      <div>
      <h1 className="  text-center text-5xl font-bold mt-8 pt-1 " > Rinshad TM </h1>
      <h2 className=" text-center font-bold hover:animate-bounce">Web Devoloper & Designer </h2>
      </div>

    </div>
  );
}

export default Home;

