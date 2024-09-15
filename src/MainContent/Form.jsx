import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

function Form() {
  const [number, setNumber] = useState("");

  return (
    <div className="flex justify-center items-center my-20 ">
      <div className="w-full md:w-11/12 h-full bg-[#f1f4f7] flex flex-col  justify-center items-center px-8  pt-8 pb-12 md:rounded-xl gap-6 ">
        <div className=" flex flex-col justify-center items-center gap-3 p-3">
          <h1 className=" font-semibold text-3xl md:text-5xl text-[#2d3135]">
            Ready to hire 10X faster?
          </h1>
          <p className="text-md font-semibold md:text-xl text-[#899197]">
            We’d love to connect
          </p>
          <div className="border-b w-full md:w-9/12 h-px border-b-[#899197]"></div>
        </div>
        <form className="flex flex-col justify-center items-center gap-4 w-96 md:w-4/12">
          <div className="flex justify-between gap-4">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-[#d1d4d7] rounded placeholder:text-xs placeholder:text-gray-500 py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="First Name"
            />
            <input
              className="appearance-none block  w-full bg-white text-gray-700 border border-[#d1d4d7] rounded placeholder:text-xs placeholder:text-gray-500 py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <PhoneInput
            country={number}
            placeholder="Enter your contact number "
            inputStyle={{ height: "56px", width: "21.5rem" }}
            className=""
            onChange={(phone) => {
              setNumber(phone);
            }}
          />
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-[#d1d4d7] rounded placeholder:text-xs placeholder:text-gray-500 py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="email"
            placeholder="Email"
          />
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-[#d1d4d7] rounded placeholder:text-xs placeholder:text-gray-500 py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Company Name"
          />
          <button
            type="submit"
            className="flex justify-center items-center bg-[#297bca]  text-white font-bold  border border-[#297bca] w-92 my-4 md:my-0 h-14 w-full  rounded text-sm"
          >
            Book Demo
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
