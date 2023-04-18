import React from "react";
import { BsChatSquareDots } from "react-icons/bs";

function Footer() {
  return (
    <div className="max-w-[1140px] w-full m-auto border-t-4 py-8">
      <div className="flex items-center justify-center m-auto">
        <BsChatSquareDots
          size={30}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
      </div>
    </div>
  );
}

export default Footer;
