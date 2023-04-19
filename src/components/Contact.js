import React from "react";

function Contact() {
  return (
    <div className="max-w-[1140px] w-full m-auto p-4 py-16" id="contact">
      <h2 className="text-center text-gray-700 ">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">We're Standing by!</p>
      <div>
        <img
          src="https://images.unsplash.com/photo-1500531279542-fc8490c8ea4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
          alt="/"
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
        />
        <form>
          <div className="grid grid-col-2">
            <input type="text" className="border m-2 p-2" placeholder="First" />
            <input type="text" className="border m-2 p-2" placeholder="Last" />
            <input
              type="Email"
              className="border m-2 p-2"
              placeholder="Email"
            />
            <input type="tel" className="border m-2 p-2" placeholder="Phone" />
            <textarea
              cols="30"
              rows="10"
              className="border col-span-2 p-2 m-2 "
            ></textarea>
            <button className="col-span-2 m-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
