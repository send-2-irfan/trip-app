import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

function TopBar() {
  return (
    <div>
      <div>
        <BsChatSquareDots />
        <h1>WEEKAWAY</h1>
      </div>
      <div>
        <div>
          <AiOutlineClockCircle />
          <h1>9:00 AM - 5:00 PM</h1>
        </div>
        <div>
          <AiFillPhone />
          <h1>+254 705-444-1234</h1>
        </div>
        <button>Get a free Quote</button>
      </div>
    </div>
  );
}

export default TopBar;
