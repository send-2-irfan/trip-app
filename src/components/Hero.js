import React from "react";

function Hero() {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1676638392418-80aad7c87b96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full text-white md:-[50%] max-w-[600px] h-full p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h1 className="font-bold text-4xl italic">With WEEKAWAY</h1>
          <p>
            Ea occaecat magna exercitation velit elit sit excepteur. Nisi eu
            adipisicing enim ad ad commodo. Lorem ullamco commodo proident
            reprehenderit officia ipsum qui exercitation proident laborum quis
            duis reprehenderit. Minim anim qui mollit velit commodo voluptate
            mollit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
