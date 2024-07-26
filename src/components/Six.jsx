import React from "react";

const Six = () => {
  return (
    <div>
      <section className="relative mt-28 mb-24">
        <div className="text-gray-600 relative">
          <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto md:mr-auto w-full z-10 shadow-lg">
            <a className="text-[22px] font-bold mb-[10px]" href="#">
              Contact
            </a>
            <div className="mb-4">
              <label className="leading-7 text-sm text-gray-600" htmlFor="Name">
                Name <span className="text-[red]">*</span>
              </label>
              <input
                name="Name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label
                className="leading-7 text-sm text-gray-600"
                htmlFor="Email"
              >
                Email <span className="text-[red]">*</span>
              </label>
              <input
                name="Email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="abc@gmail.com"
                type="email"
              />
            </div>
            <div className="mb-4">
              <label
                className="leading-7 text-sm text-gray-600"
                htmlFor="Phone"
              >
                Phone Number <span className="text-[red]">*</span>
              </label>
              <input
                name="Phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="03001234567"
                type="number"
              />
            </div>
            <div className="mb-4">
              <label
                className="leading-7 text-sm text-gray-600"
                htmlFor="Massage"
              >
                Massage <span className="text-[red]">*</span>
              </label>
              <textarea
                name="Massage"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-[#006838] border-0 py-2 px-6 focus:outline-none hover:bg-[#e3e3e3] hover:text-black rounded text-lg">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Six;
