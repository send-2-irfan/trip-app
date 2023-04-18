import React from "react";

function Booking() {
  return (
    <div id="deals" className="max-w-[1140px] m-auto p-4 w-full">
      <form className="lg:flex lg:justify-between items-center w-full">
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select className="cursor-pointer lg:w-[300] md:w-full border rounded-md p-2">
            <option value="0">Choose...</option>
            <option value="1">Mountain View Balochistan</option>
            <option value="2">Taiwan</option>
            <option value="3">Pakistan</option>
            <option value="4">Dubai</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-In</label>
            <input
              type="date"
              name="check-in"
              className="border rounded-md p-2 "
            />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-Out</label>
            <input
              type="date"
              name="check-out"
              className="border rounded-md p-2 "
            />
          </div>
        </div>
        <div className="flex flex-col w-full my-2 p-2">
          <label>Search</label>
          <button className="w-full">Rate & Availabilties</button>
        </div>
      </form>
    </div>
  );
}

export default Booking;
