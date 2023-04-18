import React from "react";

function Galary() {
  return (
    <div className="max-w-[1140px] m-auto px-4 py-16 w-full">
      <h1 className="text-center text-gray-700 p-4">Galary</h1>
      <div className="grid sm:grid-col-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1565435494338-cbcac704e308?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default Galary;
