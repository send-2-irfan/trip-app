import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

function TopBar() {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <BsChatSquareDots
          size={30}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle
            size={20}
            className="mr-2 text-[var(--primary-dark)]"
          />
          <h1 className="text-sm text-gray-700">9:00 AM - 5:00 PM</h1>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone className="mr-2 text-[var(--primary-dark)]" />
          <h1 className="text-sm text-gray-700">+254 705-444-1234</h1>
        </div>
        <button>Get a free Quote</button>
      </div>
    </div>
  );
}

export default TopBar;
