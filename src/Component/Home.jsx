import React from "react";

function Home() {
  const bgImage = "/flat-lay-photo-office-desk-with-laptop-copy-space-background.jpg";

  return (
    <div
      className="relative w-full h-screen  items-center justify-center bg-no-repeate bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
      
    >

      <div className="flex justify-center space-x-10 font-bold p-8 ">
      <a>Skills </a>
      <a>Project</a>
      <a>Aboute</a>
      <a>More</a>
      <a>Contact</a>
      </div>
      <div className="">
      <h1 className=" py-12 text-center text-2xl font-bold mt-28" >Welcome To My Page </h1>
     
      </div>

    </div>
  );
}

export default Home;

