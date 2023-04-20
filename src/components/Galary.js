import React from "react";

function Galary() {
  return (
    <div className="max-w-[1140px] m-auto px-4 py-16 w-full" id="galary">
      <h1 className="text-center text-gray-700 p-4">Galary</h1>
      <div className="grid sm:grid-col-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1509619159938-4efea8aa33c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          />
        </div>

        <div>
          <img
            className="w-full h-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1675802755792-a7cfd346b5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1504716325983-cb91edab7e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1542397284385-6010376c5337?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1593351415075-3bac9f45c877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1675802755792-a7cfd346b5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default Galary;
